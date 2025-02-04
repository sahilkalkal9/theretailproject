import { useState } from "react";
import "./orders.scss";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "./invoice.scss"
import { useUserContext } from "../../UserContext";

function Orders() {


    const [printing, setPrinting] = useState(false)

    const { orderData, userData } = useUserContext()


    const [orderInvoice, setOrderInvoice] = useState({
        orderId: "",
        deliveryDt: "",
        username: "",
        address: "",
        prodName: "",
        qty: 0,
        price: 0
    })




    const createPDF = async (o) => {


        await setOrderInvoice({
            orderId: o.orderId,
            deliveryDt: o.deliveredAt,
            username: userData.name,
            address: userData.address,
            prodName: o.name,
            qty: o.quantity,
            price: o.price
        })





        await setPrinting(true)
        const invoiceElement = document.querySelector("#invoice");

        if (!invoiceElement) {
            console.error("Invoice element not found!");
            return;
        }

        // Capture invoice at a higher resolution
        const canvas = await html2canvas(invoiceElement, {
            scale: 3, // Increase scale for better resolution
            useCORS: true, // Ensure cross-origin images are handled
        });

        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("portrait", "mm", "a4");

        // Calculate dimensions to fit A4
        const imgWidth = 210; // A4 width in mm
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight, undefined, "FAST");

        // Save as invoice.pdf
        pdf.save("invoice.pdf");
        await setPrinting(false)
        await setOrderInvoice({
            orderId: "",
            deliveryDt: "",
            username: "",
            address: "",
            prodName: "",
            qty: 0,
            price: 0
        })

    };



    return (
        <div className="OrdersNew">
            <p className="checkout-h">Orders</p>


            <div className="orders-box-new">

                {
                    orderData && orderData.map((o) => (
                        o.type == "Processing"
                            ? <div className="order-new">
                                <div className="order-box-card">
                                    <div className="order-left-new">
                                        <img className="oimg" src={require("./bed.png")} alt="" />

                                    </div>
                                    <div className="order-right">
                                        <div className="order-right-upper">
                                            <p className="oname">
                                                {o.name}
                                            </p>
                                            <p className="oqty">
                                                Qty. : {o.quantity}
                                            </p>
                                            <p className="oqty">
                                                Price :  ₹ {o.price}
                                            </p>
                                            <p className="oqty">
                                                Ordered on {o.orderedAt.toDate().toLocaleDateString()}
                                            </p>
                                            <p className="oqty">
                                                {o.status}
                                            </p>
                                        </div>

                                        <div className="order-right-lower">
                                            <div className="order-right-current">
                                                <button className="track-new">
                                                    Track
                                                </button>
                                                <button className="cancel-new">
                                                    Cancel
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            :
                            o.type == "Processed"
                                ? <div className="order-new">
                                    <div className="order-box-card">
                                        <div className="order-left-new">
                                            <img className="oimg" src={require("./bed.png")} alt="" />

                                        </div>
                                        <div className="order-right">
                                            <div className="order-right-upper">
                                                <p className="oname">
                                                    {o.name}
                                                </p>
                                                <p className="oqty">
                                                    Qty. {o.quantity}
                                                </p>
                                                <p className="oqty">
                                                    Price :  ₹ {o.price}
                                                </p>
                                                <p className="oqty">
                                                    Ordered on {o.orderedAt.toDate().toLocaleDateString()}
                                                </p>
                                                <p className="oqty">
                                                    Delivered on {o.deliveredAt.toDate().toLocaleDateString()}
                                                </p>
                                            </div>

                                            <div className="order-right-lower">
                                                <div className="order-right-delivered">
                                                    <button className="down-invoice" onClick={() => { createPDF(o) }}>
                                                        Invoice
                                                    </button>

                                                    <div className="order-delivered-opt">
                                                        <p className="odt">
                                                            Get Support
                                                        </p>
                                                        <p className="odt">
                                                            Review product
                                                        </p>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                : null
                    ))
                }




            </div>


            {
                printing ?
                    <div className="Invoice">

                        <div id="invoice" className="invoice-box">
                            <div className="invoice-upper">
                                <div className="invoice-upper-left">
                                    <p className="invoice-head">INVOICE</p>
                                    <div className="in-box">
                                        <p className="in-text">Order ID :</p>
                                        <p className="in-text">{orderInvoice.orderId}</p>
                                    </div>

                                    <div className="in-box">
                                        <p className="in-text">Date :</p>
                                        <p className="in-text">{orderInvoice.deliveryDt?.toDate().toLocaleDateString()}</p>
                                    </div>
                                </div>
                                <div className="invoice-upper-right">
                                    <div className="in-logo-box">
                                        <img src={require("./pawb.png")} alt="" className="in-logo" />
                                        <p className="in-text">The ReTail Project</p>
                                        <p className="in-text">Udaipur, India</p>
                                        <p className="in-text">GSTIN : 08ANNPC2902R3ZL</p>
                                    </div>
                                </div>
                            </div>



                            <div className="payable-box">
                                <div className="payable-to">
                                    <p className="payable-to-text">
                                        PAYABLE TO
                                    </p>
                                    <p className="normal-text">
                                        {orderInvoice.username}
                                    </p>
                                    <p className="normal-text">
                                        {orderInvoice.address}
                                    </p>
                                </div>
                                {/* <div className="payable-to">
                <p className="payable-to-text">
                    BILL FROM
                </p>
                <p className="normal-text">
                    The ReTail Project
                </p>
                <p className="normal-text">
                    Udaipur, India
                </p>
            </div> */}
                            </div>

                            <div className="payable-box idbox">
                                <div className="payable-to">
                                    <p className="payable-to-text">
                                        ITEM
                                    </p>
                                    <p className="normal-text iname">
                                        {orderInvoice.prodName}
                                    </p>

                                    <div className="payment-mode">
                                        <p className="payable-to-text">
                                            Payment Method
                                        </p>
                                        <p className="normal-text">
                                            Online
                                        </p>
                                    </div>

                                </div>
                                <div className="payable-to tboxmain ">
                                    <div className="qty-sec">
                                        <div className="qty">
                                            <p className="payable-to-text">
                                                QTY
                                            </p>
                                            <p className="normal-text">
                                                {orderInvoice.qty}
                                            </p>
                                        </div>
                                        <div className="qty">
                                            <p className="payable-to-text">
                                                PRICE
                                            </p>
                                            <p className="normal-text">
                                                ₹ {orderInvoice.price}
                                            </p>
                                        </div>
                                        <div className="qty">
                                            <p className="payable-to-text">
                                                TOTAL
                                            </p>
                                            <p className="normal-text">
                                                ₹ {orderInvoice.price * orderInvoice.qty}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="total-sec">
                                        <div className="tbox">
                                            <p className="normal-text">
                                                Sub Total
                                            </p>
                                            <p className="normal-text">
                                                ₹ {orderInvoice.price}
                                            </p>
                                        </div>
                                        <div className="tbox">
                                            <p className="normal-text">
                                                Shipping
                                            </p>
                                            <p className="normal-text">
                                                ₹ 80
                                            </p>
                                        </div>
                                        <div className="tbox">
                                            <p className="normal-text">
                                                Grand Total
                                            </p>
                                            <p className="normal-text">
                                                ₹ {orderInvoice.price * orderInvoice.qty + 80}
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </div>


                            <div className="payable-box thanks-sec">
                                <div className="socialsi">
                                    <div className="sociali">
                                        <img src={require("./phone-call.png")} alt="" className="siimg" />
                                        <p className="sub-text">
                                            +91 9664149148
                                        </p>
                                    </div>
                                    <div className="sociali">
                                        <img src={require("./email.png")} alt="" className="siimg" />
                                        <p className="sub-text">
                                            contact@theretailproject.in
                                        </p>
                                    </div>
                                    <div className="sociali">
                                        <img src={require("./gps.png")} alt="" className="siimg" />
                                        <p className="sub-text">
                                            Udaipur, India
                                        </p>
                                    </div>
                                    <div className="sociali">
                                        <img src={require("./web.png")} alt="" className="siimg" />
                                        <p className="sub-text">
                                            retailproject.in
                                        </p>
                                    </div>
                                </div>
                                <div className="thanks">
                                    <p className="sub-text">
                                        Dear {orderInvoice.username},
                                        <br />
                                        Thank you for shopping with us! We hope your pet loves their new item
                                        <br />
                                        <b>Enjoy 25% off on the order of upcycled products with code UPCYCLE25

                                        </b>
                                    </p>
                                </div>
                            </div>


                        </div>
                    </div>
                    : null
            }


        </div>
    )
}

export default Orders;