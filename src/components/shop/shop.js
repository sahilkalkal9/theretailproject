import "../../App.scss"
import Nav from "../nav/nav"
import heart from "./heart.png"
import cartttt from "./shopping-bag.png"
import dogf from "./dog-food.png"
import products from "./products.json"
import { auth, firestore } from "../../firebase"
import { useState } from "react"

function Shop() {

    const [notification, setNotification] = useState({
        content: "",
        type: "success"
    })

    const addToCart = async (x) => {
        const oid = firestore.collection("users").doc(auth.currentUser?.uid).collection("cart").doc().id

        if (auth.currentUser) {
            await firestore.collection("users").doc(auth.currentUser?.uid).collection("cart").doc(oid).set({
                oid: oid,
                productId: x.id,
                name: x.name,
                price: x.price,
                quantity: 1,
                image: x.image
            }).then(async () => {
                await setNotification({ content: "Added to cart", type: "success" })
                document.getElementById("notBox").style.marginTop = "1cm"
                setTimeout(() => {
                    document.getElementById("notBox").style.marginTop = "-2cm"
                }, 2000)
            }).catch(async (error) => {
                await setNotification({ content: "Failed to add", type: "failure" })
                document.getElementById("notBox").style.marginTop = "1cm"
                setTimeout(() => {
                    document.getElementById("notBox").style.marginTop = "-2cm"
                }, 2000)
            })
        }
        else {
            await setNotification({ content: "Please login or register first", type: "failure" })
            document.getElementById("notBox").style.marginTop = "1cm"
            setTimeout(() => {
                document.getElementById("notBox").style.marginTop = "-2cm"
            }, 2000)
        }
    }


    return (
        <>
            <div id="notBox" className={notification.type == "success" ? "notification" : "notification error"} >
                <p>{notification.content}</p>
            </div>

            <div className="Home">
                <div className="home-upper-main">

                    <div className="home-upper">
                        <div className="page-head-box">
                            <p className="page-head">Shop</p>
                            <p className="page-path">home/shop</p>
                        </div>
                    </div>
                </div>


                <div className="home-lower">
                    <div className="products">


                        {
                            products.map((p) => (
                                <div className="product-new">
                                    <div className={`product-upper-new ${p.class}`} >
                                        <img className="product-image" src={require(`./${p.image}`)} alt="Product Image" />
                                        <div className="cart-like-box">
                                            <img className="heart" src={heart} />
                                            <img className="heart" onClick={() => { addToCart(p) }} src={cartttt} />
                                        </div>
                                    </div>
                                    <div className="product-lower-new">
                                        <p className="product-caption-new">
                                            {p.name}
                                        </p>
                                        <div className="price-cart">
                                            <p className="price-new">₹ {p.price}</p>

                                        </div>

                                    </div>
                                </div>
                            ))
                        }



                    </div>
                </div>




            </div>
        </>
    )
}

export default Shop