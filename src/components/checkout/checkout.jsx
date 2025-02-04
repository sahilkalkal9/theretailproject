import { useState } from "react";
import { auth, firestore, firebase } from "../../firebase";
import { useUserContext } from "../../UserContext";
import "./checkout.scss";


const CheckoutP = () => {
    const { userData, doingWork, setDoingWork, cartData, setCartData } = useUserContext();

    const updatedata = (e) => {
        const { name, value } = e.target;
        firestore.collection("users").doc(auth.currentUser?.uid).update(
            {
                [name]: value,
            },
            { merge: true }
        );
    };

    const [tip, setTip] = useState(0);
    const [ctip, setCtip] = useState(""); // Make sure it's an empty string initially
    const [calculatedTip, setCalculatedTip] = useState(0);

    const calculateTip = async () => {
        setDoingWork(true);

        let finalTip = 0;

        if ((tip === 10 || tip === 20 || tip === 30) && (!ctip || Number(ctip) === 0)) {
            finalTip = (tip / 100) * userData.checkoutAmt;
        } else if (tip === 0 && Number(ctip) > 0) {
            finalTip = Number(ctip);
        } else {
            finalTip = 0;
        }

        setCalculatedTip(finalTip);
        setDoingWork(false);
    };

    const setCustomTip = (e) => {
        const value = e.target.value;
        setCtip(value);
        setTip(0); // Ensure predefined tip selection is removed when custom tip is entered
    };


    const [printing, setPrinting] = useState(false)


    const handlePayment = async (e, bprice, name, cdesc) => {
        e.preventDefault();

        console.log(name)



        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => {
            const options = {
                key: 'rzp_live_oGKXj8EVJEdpCQ', // Replace with your Razorpay Key ID
                amount: Number(bprice) * 100, // amount in paisa
                currency: 'INR',
                name: 'Chemictionary',
                description: String(name),
                prefill: {
                    email: auth.currentUser.email,
                    contact: auth.currentUser.phoneNumber
                },
                notes: {

                    course_name: name,
                    course_description: cdesc
                },
                handler: async function (response) {
                    alert("Payment done!!")





                },
                modal: {
                    ondismiss: function () {
                        console.log('Payment modal closed');
                    }
                }
            };

            const rzp = new window.Razorpay(options);
            rzp.open();
        };
    };

    const proceedToPay = async () => {
        if (cartData) {
            console.log("Starting proceedToPay");

            cartData && cartData.map(async (cd) => {
                const orderId = firestore.collection("users").doc(auth.currentUser?.uid).collection("orders").doc().id;
                console.log("Generated orderId:", orderId);


                return (
                    firestore.collection("users").doc(auth.currentUser?.uid).collection("orders").doc(orderId).set({
                        "orderId": orderId,
                        "paymentId": "XYZ",
                        "itemId": cd.itemId,
                        "name": cd.name,
                        "price": cd.price,
                        "quantity": cd.quantity,
                        "thumbnail": cd.thumbnail,
                        "link": cd.link,
                        "status": "Processing",
                        "orderedAt": firebase.firestore.Timestamp.now()
                    })
                        .then(() => {
                            console.log("Order added for item:", cd.itemId)
                            if (userData.checkoutAmt > 0) {
                                firestore.collection("users").doc(auth.currentUser?.uid).update({
                                    checkoutAmt: 0
                                }, { merge: true });
                            }
                            firestore.collection("users").doc(auth.currentUser?.uid).collection("cart").doc(cd.docId).delete();
                            console.log("Cart item deleted for item:", cd.itemId)

                        })
                )



            })







        }
    };

    


    return (
        <div className="CheckoutNew">
            <p className="checkout-h">Checkout</p>
            {
                userData.checkoutAmt > 0
                    ? <div className="checkout-container">
                        <div className="checkout-box">
                            <form action="" className="personal-dets">
                                <p className="check-head">Shipping Details</p>
                                <input
                                    type="text"
                                    className="check-input"
                                    value={userData.name}
                                    name="name"
                                    onChange={updatedata}
                                    placeholder="Name"
                                    required
                                />
                                <input
                                    type="email"
                                    className="check-input"
                                    name="email"
                                    value={userData.email}
                                    onChange={updatedata}
                                    placeholder="E-mail address"
                                    required
                                />
                                <input
                                    type="number"
                                    className="check-input"
                                    name="phone"
                                    value={userData.phone}
                                    onChange={updatedata}
                                    placeholder="Phone number"
                                    required
                                />
                                <input
                                    type="text"
                                    className="check-input"
                                    name="address"
                                    value={userData.address}
                                    onChange={updatedata}
                                    placeholder="Full Address"
                                    required
                                />
                                <input
                                    type="number"
                                    className="check-input"
                                    name="pincode"
                                    value={userData.pincode}
                                    onChange={updatedata}
                                    placeholder="Pincode"
                                    required
                                />
                            </form>

                            <div className="personal-dets">
                                <p className="check-head">Add tip</p>
                                <div className="tip-box">
                                    {[0, 10, 20, 30].map((tipValue) => (
                                        <p
                                            key={tipValue}
                                            className={tip === tipValue ? "tip-per active-tip" : "tip-per"}
                                            onClick={() => {
                                                setTip(tipValue);
                                                setCtip(""); // Reset custom tip when selecting predefined tip
                                            }}
                                        >
                                            {tipValue}%
                                        </p>
                                    ))}
                                </div>
                                <input
                                    className="tip-input"
                                    value={ctip}
                                    onChange={setCustomTip}
                                    type="number"
                                    placeholder="Custom tip (₹)"
                                />
                                <button className="add-tip" onClick={calculateTip} disabled={doingWork}>
                                    Add tip
                                </button>
                            </div>
                        </div>
                        <div className="checkout-box">
                            <div className="personal-dets">
                                <p className="check-head">Payment Info</p>
                                <div className="payment-info">
                                    <div className="payi">
                                        <p className="payiname">Items</p>
                                        <p className="payival">₹ {userData.checkoutAmt}</p>
                                    </div>
                                    <div className="payi">
                                        <p className="payiname">Delivery charges</p>
                                        <p className="payival">₹ 80</p>
                                    </div>
                                    <div className="payi">
                                        <p className="payiname">Tip</p>
                                        <p className="payival">₹ {calculatedTip}</p>
                                    </div>
                                    <div className="payi">
                                        <p className="payiname">Total</p>
                                        <p className="payival">₹ {userData.checkoutAmt + 80 + calculatedTip}</p>
                                    </div>
                                    <button className="pay-button" disabled={doingWork} onClick={proceedToPay}>
                                        Proceed to Pay
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    : <p>Add items in cart to checkout</p>
            }

           
        </div>
    );
};

export default CheckoutP;
