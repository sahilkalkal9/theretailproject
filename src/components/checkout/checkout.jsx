import { useCollectionData } from "react-firebase-hooks/firestore";
import "../../App.scss";
import { auth, firestore } from "../../firebase";
import firebase from "firebase/compat/app";
import qmin from "./minus.png";
import qplus from "./add.png";
import { useEffect, useState } from "react";

function Checkout({ userData, setUserData }) {
    const checoutRef = firestore.collection("users").doc(auth.currentUser?.uid).collection("checkout");
    const [checkout] = useCollectionData(checoutRef);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        setTotalPrice(calculateTotalPrice());
    }, [checkout]);

    const reduceCart = (e, c) => {
        e.preventDefault();

        const cartRefQ = firestore.collection("users").doc(auth.currentUser?.uid).collection('checkout').where('oid', '==', c.oid);

        cartRefQ.get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const newQuantity = c.quantity - 1;
                doc.ref.update({
                    quantity: firebase.firestore.FieldValue.increment(-1)
                });
            });
        }).catch((error) => {
            console.error("Error updating document: ", error);
        });
    };

    const increaseCart = (e, c) => {
        e.preventDefault();

        const cartRefQ = firestore.collection("users").doc(auth.currentUser?.uid).collection('checkout').where('oid', '==', c.oid);

        cartRefQ.get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const newQuantity = c.quantity + 1;
                doc.ref.update({
                    quantity: firebase.firestore.FieldValue.increment(1)
                });
            });
        }).catch((error) => {
            console.error("Error updating document: ", error);
        });
    };

    const deleteProd = (c) => {
        firestore.collection("users").doc(auth.currentUser?.uid).collection("checkout").doc(c.oid).delete();
    };

    const [orderplaced, setorderplaced] = useState(false);

    const calculateTotalPrice = () => {
        return checkout && checkout.reduce((acc, product) => acc + (product.price * product.quantity), 0);
    };

    const handlePayment = async (e) => {
        e.preventDefault();

        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => {
            const options = {
                key: 'rzp_test_weoJG7e0Pl1Evf', // Replace with your Razorpay Key ID
                amount: (totalPrice + 80) * 100, // amount in paisa
                currency: 'INR',
                name: 'The ReTail Project',
                description: 'Final amount',
                prefill: {
                    email: userData.email,
                    contact: userData.phone
                },
                handler: async function (response) {
                    await checkout && checkout.forEach(async (c) => {
                        const orderId = firestore.collection("users").doc(auth.currentUser?.uid).collection("orders").doc().id;
                        const orderData = {
                            orderId: orderId,
                            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                            deliveryDate: '12 July', // Adjust this as needed

                            paymentId: response.razorpay_payment_id // Add payment ID
                        };

                        // Merge c object into orderData
                        Object.entries(c).forEach(([key, value]) => {
                            orderData[key] = value;
                        });

                        await firestore.collection("users").doc(auth.currentUser?.uid).collection("orders").doc(orderId).set(orderData);
                        await firestore.collection("admin").doc(orderId).set({
                            ...orderData,
                            phone: userData.phone
                        });

                        const checkoutDocRef = firestore.collection("users").doc(auth.currentUser?.uid).collection("checkout").doc(c.oid).delete();

                    });
                    setorderplaced(true);
                }
            };

            const rzp = new window.Razorpay(options);
            rzp.open();
        };
    };

    return (
        <div className="Checkout">
            {
                checkout == 0 ?
                    <p>No item to checout</p>
                    : (
                        orderplaced === false
                            ? <div className="checkout-box">
                                <p className="headC">Checkout</p>
                                <div className="checkout-dets">
                                    <div className="checkout-left">
                                        <div className="checkoutdet">
                                            <div className="checkoutdethead">
                                                <p className="cheadtext">
                                                    Delivery & Contact Details
                                                </p>
                                                <div className="cdetbox">
                                                    <p className="cdetboxtext">
                                                        for {userData.petname}<br />
                                                        by {userData.username}<br />
                                                        {userData.phone}<br />
                                                        {userData.address}
                                                    </p>

                                                    <p className="editT">Edit</p>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="checkoutdet">
                                            <div className="checkoutdethead">
                                                <p className="cheadtext">
                                                    Review Items
                                                </p>
                                                <div className="cdetboxs">

                                                    <p className="arrdatetext">
                                                        Arriving on 10 July
                                                    </p>

                                                    {
                                                        checkout && checkout.map((c) => (
                                                            <div className="cart-product" key={c.oid}>

                                                                <div className="cart-product-left">
                                                                    <img className="cart-product-img" src={require(`../shop/${c.image}`)} alt={c.name} />
                                                                </div>
                                                                <div className="cart-product-right">
                                                                    <div className="cart-product-right-one">
                                                                        <p className="cart-product-name">
                                                                            {c.name}
                                                                        </p>
                                                                        <p className="cart-product-price">
                                                                            ₹ {c.price}
                                                                        </p>
                                                                    </div>

                                                                    <div className="cart-product-right-two">
                                                                        <div className="quantity-box">
                                                                            <img onClick={(e) => { reduceCart(e, c) }} className={c.quantity === 1 ? "qminus qdis" : "qminus"} src={qmin} />
                                                                            <p className="qnum">{c.quantity}</p>
                                                                            <img onClick={(e) => { increaseCart(e, c) }} className="qminus" src={qplus} />
                                                                        </div>
                                                                        <div className="cart-buttons">
                                                                            <p onClick={() => { deleteProd(c) }} className="delQ">
                                                                                Delete
                                                                            </p>

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))
                                                    }
                                                </div>

                                            </div>
                                        </div>
                                        <div className="checkoutdet">
                                            <div className="checkoutdethead">
                                                <p className="cheadtext">
                                                    Order Summary
                                                </p>
                                                <div className="osbox">
                                                    <div className="osdiv">
                                                        <p className="ostext">
                                                            Items:
                                                        </p>
                                                        <p className="ostext">
                                                            ₹ {totalPrice}
                                                        </p>
                                                    </div>
                                                    <div className="osdiv">
                                                        <p className="ostext">
                                                            Delivery:
                                                        </p>
                                                        <p className="ostext">
                                                            ₹ 80
                                                        </p>
                                                    </div>
                                                    <div className="osdiv">
                                                        <p className="ostext">
                                                            Total:
                                                        </p>
                                                        <p className="ostext">
                                                            ₹ {totalPrice + 80}
                                                        </p>
                                                    </div>
                                                </div>
                                                <button onClick={handlePayment} className="ptc cbp">Proceed to pay ₹ {totalPrice + 80}</button>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="checkout-right">

                                    </div>
                                </div>
                            </div>
                            :
                            <div className="checkout-box">
                                <p className="headC">Order Placed</p>
                                <div className="order-placed-box">
                                    <p>
                                        Thank you very much for shopping with us.

                                    </p>

                                    <p>
                                        Arriving on 12 July
                                    </p>
                                </div>

                                <button className="ptc cbp">View orders</button>
                            </div>
                    )
            }
        </div>
    );
}

export default Checkout;
