import { useCollectionData } from "react-firebase-hooks/firestore"
import "../../App.scss"
import { auth, firestore } from "../../firebase"

function Orders() {


    const ordersRef = firestore.collection("users").doc(auth.currentUser?.uid).collection("orders").orderBy("timestamp")
    const [orders] = useCollectionData(ordersRef)



    return (
        <div className="Checkout">
            <div className="orders-box">

                <p className="headC">
                    Orders
                </p>

                <div className="orders-lower">
                    {
                        orders && orders == 0
                            ? <p className="noorder">
                                No orders currently
                            </p>
                            : (
                                orders && orders.map((o) => (
                                    <div className="order">
                                        <div className="order-left">
                                            <img className="oImg" src={require(`../shop/${o.image}`)} />
                                        </div>
                                        <div className="order-right">
                                            <p className="order-name">
                                                {o.name}
                                            </p>
                                            <p className="order-text">
                                                Quantity : {o.quantity}
                                            </p>
                                            <p className="order-text">
                                                ₹ {o.price}
                                            </p>
                                            <p className="order-text">
                                                Ordered on {new Date(o.timestamp.toDate()).toLocaleDateString()}
                                            </p>

                                            <p className="order-arriving">
                                                Arriving on {o.deliveryDate}
                                            </p>

                                        </div>
                                    </div>
                                ))
                            )
                    }
                </div>

            </div>
        </div>
    )
}

export default Orders