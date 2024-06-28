import "../../App.scss"
import Nav from "../nav/nav"
import heart from "./heart.png"
import cartttt from "./shopping-bag.png"
import dogf from "./dog-food.png"
import products from "./products.json"
import qmin from "./minus.png"
import qplus from "./add.png"
import { useState } from "react"
import { auth, firestore, firebase } from "../../firebase"
import { useCollectionData } from "react-firebase-hooks/firestore"

function Cart() {
    var tprice = Number(0)
    const [selectedProducts, setSelectedProducts] = useState([])

    const cartRef = firestore.collection("users").doc(auth.currentUser?.uid).collection("cart")
    const [cart] = useCollectionData(cartRef)

    const handleCheckboxChange = (product) => {
        setSelectedProducts((prevSelectedProducts) => {
            if (prevSelectedProducts.includes(product)) {
                return prevSelectedProducts.filter(p => p.oid !== product.oid)
            } else {
                return [...prevSelectedProducts, product]
            }
        })
    }

    const reduceCart = (e, c) => {
        e.preventDefault();

        const cartRefQ = firestore.collection("users").doc(auth.currentUser?.uid).collection('cart').where('oid', '==', c.oid);

        cartRefQ.get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const newQuantity = c.quantity - 1;
                doc.ref.update({
                    quantity: firebase.firestore.FieldValue.increment(-1)
                });

                if (selectedProducts.find(p => p.oid === c.oid)) {
                    setSelectedProducts((prevSelectedProducts) =>
                        prevSelectedProducts.map(p =>
                            p.oid === c.oid ? { ...p, quantity: newQuantity } : p
                        )
                    );
                }
            });
        }).catch((error) => {
            console.error("Error updating document: ", error);
        });
    }

    const increaseCart = (e, c) => {
        e.preventDefault();

        const cartRefQ = firestore.collection("users").doc(auth.currentUser?.uid).collection('cart').where('oid', '==', c.oid);

        cartRefQ.get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const newQuantity = c.quantity + 1;
                doc.ref.update({
                    quantity: firebase.firestore.FieldValue.increment(1)
                });

                if (selectedProducts.find(p => p.oid === c.oid)) {
                    setSelectedProducts((prevSelectedProducts) =>
                        prevSelectedProducts.map(p =>
                            p.oid === c.oid ? { ...p, quantity: newQuantity } : p
                        )
                    );
                }
            });
        }).catch((error) => {
            console.error("Error updating document: ", error);
        });
    }


    // console.log(selectedProducts)

    const calculateTotalPrice = () => {
        return selectedProducts.reduce((acc, product) => acc + (product.price * product.quantity), 0);

    }

    const deleteProd = (c) => {
        if (selectedProducts.find(p => p.oid == c.oid)) {
            firestore.collection("users").doc(auth.currentUser?.uid).collection("cart").doc(c.oid).delete()
            setSelectedProducts((prevSelectedProducts) =>
                prevSelectedProducts.filter((p) => p.oid !== c.oid)
            );
            console.log("both deleted")
            calculateTotalPrice()
            console.log(selectedProducts)
        }
        else {
            firestore.collection("users").doc(auth.currentUser?.uid).collection("cart").doc(c.oid).delete()
            console.log("deleted")
            calculateTotalPrice()
        }
    }

    return (
        <div className="Home">
            <div className="home-upper-main">
                <div className="home-upper">
                    <div className="page-head-box">
                        <p className="page-head">Cart</p>
                        <p className="page-path">home/cart</p>
                    </div>
                </div>
            </div>

            <div className="cart-lower ">
                <div className="cart-products">
                    {
                        cart && cart.map((c) => (
                            <div className="cart-product" key={c.oid}>
                                <div className="cart-product-zero">
                                    <input
                                        type="checkbox"
                                        className="cart-checkbox"
                                        onChange={() => handleCheckboxChange(c)}

                                    />
                                </div>
                                <div className="cart-product-left">
                                    <img className="cart-product-img" src={require(`../shop/${c.image}`)} alt={c.name} />
                                </div>
                                <div className="cart-product-right">
                                    <div className="cart-product-right-one">
                                        <p className="cart-product-name">
                                            {c.name}
                                        </p>
                                        <p className="cart-product-price">
                                            {c.price}
                                        </p>
                                    </div>

                                    <div className="cart-product-right-one">
                                        <div className="quantity-box">
                                            <img onClick={(e) => { reduceCart(e, c) }} className={c.quantity === 1 ? "qminus qdis" : "qminus"} src={qmin} alt="Decrease quantity" />
                                            <div className="qnum-box">
                                                <p className="qnum">
                                                    {c.quantity}
                                                </p>
                                            </div>
                                            <img onClick={(e) => { increaseCart(e, c) }} className="qminus" src={qplus} alt="Increase quantity" />
                                        </div>
                                        <div className="options-box">
                                            <p onClick={() => { deleteProd(c) }} className="option">
                                                Delete
                                            </p>
                                            <p className="option">
                                                Share
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="cart-checkout">
                    <div className="cart-checkout-box">
                        <p className="cart-checkout-text scarttext">
                            {selectedProducts.length} items selected
                        </p>
                        <div className="total-box">
                            <p className="total-text">
                                Total :
                            </p>
                            <p className="total-price">
                                ₹ {calculateTotalPrice()}
                            </p>
                        </div>
                    </div>
                    {
                        selectedProducts != 0 ? <button className="ptc">Proceed to checkout</button> : null
                    }
                </div>
            </div>
        </div>
    )
}

export default Cart
