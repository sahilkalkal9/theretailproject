import "../../App.scss"
import Nav from "../nav/nav"
import heart from "./heart.png"
import cartttt from "./shopping-bag.png"
import dogf from "./dog-food.png"
import products from "./products.json"
import { auth, firestore } from "../../firebase"
import { useState } from "react"
import { useCollectionData } from "react-firebase-hooks/firestore"
import firebase from "firebase/compat/app"

function Shop() {


    // const cartRef = firestore.collection("users").doc(auth.currentUser?.uid).collection("cart")
    // const [cart] = useCollectionData(cartRef)


    const [notification, setNotification] = useState({
        content: "",
        type: "success"
    })

    // const addToCart = async (x) => {
    //     const oid = firestore.collection("users").doc(auth.currentUser?.uid).collection("cart").doc().id;
    //     console.log("clicked");

    //     if (auth.currentUser) {
    //         let productExists = false;

    //         cart && cart.forEach(async (c) => {
    //             if (c.productId === x.id) {
    //                 productExists = true;
    //                 await firestore.collection("users").doc(auth.currentUser?.uid).collection("cart").doc(c.oid).set({
    //                     quantity: firebase.firestore.FieldValue.increment(1)
    //                 }, { merge: "true" })
    //                     .then(async () => {
    //                         console.log("clicked");
    //                         await setNotification({ content: "Added to cart", type: "success" });
    //                         document.getElementById("notBox").style.marginTop = "1cm";
    //                         setTimeout(() => {
    //                             document.getElementById("notBox").style.marginTop = "-2cm";
    //                         }, 2000);
    //                     })
    //                     .catch(async (error) => {
    //                         await setNotification({ content: "Failed to add", type: "failure" });
    //                         document.getElementById("notBox").style.marginTop = "1cm";
    //                         setTimeout(() => {
    //                             document.getElementById("notBox").style.marginTop = "-2cm";
    //                         }, 2000);
    //                     });
    //             }
    //         });

    //         if (!productExists) {
    //             await firestore.collection("users").doc(auth.currentUser?.uid).collection("cart").doc(oid).set({
    //                 oid: oid,
    //                 productId: x.id,
    //                 name: x.name,
    //                 price: x.price,
    //                 quantity: 1,
    //                 image: x.image
    //             })
    //                 .then(async () => {
    //                     console.log("clicked");
    //                     await setNotification({ content: "Added to cart", type: "success" });
    //                     document.getElementById("notBox").style.marginTop = "1cm";
    //                     setTimeout(() => {
    //                         document.getElementById("notBox").style.marginTop = "-2cm";
    //                     }, 2000);
    //                 })
    //                 .catch(async (error) => {
    //                     await setNotification({ content: "Failed to add", type: "failure" });
    //                     document.getElementById("notBox").style.marginTop = "1cm";
    //                     setTimeout(() => {
    //                         document.getElementById("notBox").style.marginTop = "-2cm";
    //                     }, 2000);
    //                 });
    //         }
    //     } else {
    //         await setNotification({ content: "Please login or register first", type: "failure" });
    //         document.getElementById("notBox").style.marginTop = "1cm";
    //         setTimeout(() => {
    //             document.getElementById("notBox").style.marginTop = "-2cm";
    //         }, 2000);
    //     }
    // };



    return (
        <>
            <div id="notBox" className={notification.type == "success" ? "notification" : "notification error"} >
                <p>{notification.content}</p>
            </div>

            <div className="Home">
                {/* <div className="home-upper-main">

                    <div className="home-upper">
                        <div className="page-head-box">
                            <p className="page-head">Shop</p>
                            <p className="page-path">home/shop</p>
                        </div>
                    </div>
                </div> */}


                <div className="home-lower">
                    <div className="shop-cats">
                        {
                            products.map((p) => (
                                <div className="shop-cat">
                                    <img className="cat-img" src={require(`./${p.image}`)} />
                                    <p className="cat-name" >{p.name}</p>
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