import { useCollectionData } from "react-firebase-hooks/firestore"
import "../../App.scss"
import { auth, firestore, firebase } from "../../firebase"
import products from "./products.json"
import { Link } from "react-router-dom"
import { useState } from "react"

function Shop() {

    const [notification, setNotification] = useState({
        content: "",
        type: "success"
    })
    const cartRef = firestore.collection("users").doc(auth.currentUser?.uid).collection("cart")
    const [cart] = useCollectionData(cartRef)

    const addToCart = async (x) => {
        const oid = firestore.collection("users").doc(auth.currentUser?.uid).collection("cart").doc().id;
        console.log("clicked");

        if (auth.currentUser) {
            let productExists = false;

            cart && cart.forEach(async (c) => {
                if (c.productId === x.id) {
                    productExists = true;
                    await firestore.collection("users").doc(auth.currentUser?.uid).collection("cart").doc(c.oid).set({
                        quantity: firebase.firestore.FieldValue.increment(1)
                    }, { merge: "true" })
                        .then(async () => {
                            console.log("clicked");
                            await setNotification({ content: "Added to cart", type: "success" });
                            document.getElementById("notBox").style.marginTop = "1cm";
                            setTimeout(() => {
                                document.getElementById("notBox").style.marginTop = "-2cm";
                            }, 2000);
                        })
                        .catch(async (error) => {
                            await setNotification({ content: "Failed to add", type: "failure" });
                            document.getElementById("notBox").style.marginTop = "1cm";
                            setTimeout(() => {
                                document.getElementById("notBox").style.marginTop = "-2cm";
                            }, 2000);
                        });
                }
            });

            if (!productExists) {
                await firestore.collection("users").doc(auth.currentUser?.uid).collection("cart").doc(oid).set({
                    oid: oid,
                    productId: x.id,
                    name: x.name,
                    price: x.price,
                    quantity: 1,
                    image: x.image
                })
                    .then(async () => {
                        console.log("clicked");
                        await setNotification({ content: "Added to cart", type: "success" });
                        document.getElementById("notBox").style.marginTop = "1cm";
                        setTimeout(() => {
                            document.getElementById("notBox").style.marginTop = "-2cm";
                        }, 2000);
                    })
                    .catch(async (error) => {
                        await setNotification({ content: "Failed to add", type: "failure" });
                        document.getElementById("notBox").style.marginTop = "1cm";
                        setTimeout(() => {
                            document.getElementById("notBox").style.marginTop = "-2cm";
                        }, 2000);
                    });
            }
        } else {
            await setNotification({ content: "Please login or register first", type: "failure" });
            document.getElementById("notBox").style.marginTop = "1cm";
            setTimeout(() => {
                document.getElementById("notBox").style.marginTop = "-2cm";
            }, 2000);
        }
    };







    return (
        <>


            <div className="Home">
                {/* <div className="home-upper-main">

                    <div className="home-upper">
                        <div className="page-head-box">
                            <p className="page-head">Shop</p>
                            <p className="page-path">home/shop</p>
                        </div>
                    </div>
                </div> */}


                <div className="home-lower shop-lower">
                    <p className="shop-cat-head">
                        Categories
                    </p>
                    <div className="shop-cats">
                        {
                            products.map((p) => (
                                <Link to={p.link} >
                                    <div className="shop-cat">
                                        <img className="cat-img" src={require(`./${p.image}`)} />
                                        <p className="cat-name" >{p.name}</p>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                </div>




            </div>
        </>
    )
}

export default Shop