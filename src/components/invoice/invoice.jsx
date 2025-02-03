import "./invoice.scss";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function Invoice() {
    const createPDF = async () => {
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
    };

    return (
        <div className="Invoice">
            <button onClick={createPDF}>Print</button>
            <br />
            <br />
            <div id="invoice" className="invoice-box">
                <div className="invoice-upper">
                    <div className="invoice-upper-left">
                        <p className="invoice-head">INVOICE</p>
                        <div className="in-box">
                            <p className="in-text">Order ID :</p>
                            <p className="in-text">XXXXXXXXXX</p>
                        </div>

                        <div className="in-box">
                            <p className="in-text">Date :</p>
                            <p className="in-text">02 Feb 2025</p>
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
                <div className="invoice-lower">

                    <div>
                        <div className="payable-box">
                            <div className="payable-to">
                                <p className="payable-to-text">
                                    PAYABLE TO
                                </p>
                                <p className="normal-text">
                                    Mr. Sahil Kalkal
                                </p>
                                <p className="normal-text">
                                    G - 79, Kunwar Singh Nagar, Nangloi, New Delhi - 110041
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
                                    Honey Bee Crochet Toy
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
                                            4
                                        </p>
                                    </div>
                                    <div className="qty">
                                        <p className="payable-to-text">
                                            PRICE
                                        </p>
                                        <p className="normal-text">
                                            ₹ 250
                                        </p>
                                    </div>
                                    <div className="qty">
                                        <p className="payable-to-text">
                                            TOTAL
                                        </p>
                                        <p className="normal-text">
                                            ₹ 1000
                                        </p>
                                    </div>
                                </div>
                                <div className="total-sec">
                                    <div className="tbox">
                                        <p className="normal-text">
                                            Sub Total
                                        </p>
                                        <p className="normal-text">
                                            ₹ 1000
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
                                            ₹ 1080
                                        </p>
                                    </div>
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
                                Dear Sahil Kalkal,
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
        </div>
    );
}

export default Invoice;
