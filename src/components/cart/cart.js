import "../../App.scss"
import Nav from "../nav/nav"
import heart from "./heart.png"
import cartttt from "./shopping-bag.png"
import dogf from "./dog-food.png"
import products from "./products.json"
import qmin from "./minus.png"
import qplus from "./add.png"
import { useState, useEffect } from "react"
import { auth, firestore, firebase } from "../../firebase"
import { useCollectionData } from "react-firebase-hooks/firestore"
import { useNavigate } from "react-router-dom"

function Cart() {
    const [selectedProducts, setSelectedProducts] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const navigate = useNavigate()

    const cartRef = firestore.collection("users").doc(auth.currentUser?.uid).collection("cart")
    const [cart] = useCollectionData(cartRef)

    useEffect(() => {
        setTotalPrice(calculateTotalPrice())
    }, [selectedProducts])

    const handleCheckboxChange = (product) => {
        setSelectedProducts((prevSelectedProducts) => {
            if (prevSelectedProducts.some(p => p.oid === product.oid)) {
                return prevSelectedProducts.filter(p => p.oid !== product.oid)
            } else {
                return [...prevSelectedProducts, product]
            }
        })
    }

    console.log(selectedProducts)

    const reduceCart = (e, c) => {
        e.preventDefault()

        const cartRefQ = firestore.collection("users").doc(auth.currentUser?.uid).collection('cart').where('oid', '==', c.oid)

        cartRefQ.get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const newQuantity = c.quantity - 1
                doc.ref.update({
                    quantity: firebase.firestore.FieldValue.increment(-1)
                })

                if (selectedProducts.some(p => p.oid === c.oid)) {
                    setSelectedProducts((prevSelectedProducts) =>
                        prevSelectedProducts.map(p =>
                            p.oid === c.oid ? { ...p, quantity: newQuantity } : p
                        )
                    )
                }
            })
        }).catch((error) => {
            console.error("Error updating document: ", error)
        })
    }

    const increaseCart = (e, c) => {
        e.preventDefault()

        const cartRefQ = firestore.collection("users").doc(auth.currentUser?.uid).collection('cart').where('oid', '==', c.oid)

        cartRefQ.get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const newQuantity = c.quantity + 1
                doc.ref.update({
                    quantity: firebase.firestore.FieldValue.increment(1)
                })

                if (selectedProducts.some(p => p.oid === c.oid)) {
                    setSelectedProducts((prevSelectedProducts) =>
                        prevSelectedProducts.map(p =>
                            p.oid === c.oid ? { ...p, quantity: newQuantity } : p
                        )
                    )
                }
            })
        }).catch((error) => {
            console.error("Error updating document: ", error)
        })
    }

    const calculateTotalPrice = () => {
        return selectedProducts.reduce((acc, product) => acc + (product.price * product.quantity), 0)
    }

    const deleteProd = (c) => {
        if (selectedProducts.some(p => p.oid === c.oid)) {
            firestore.collection("users").doc(auth.currentUser?.uid).collection("cart").doc(c.oid).delete()
            setSelectedProducts((prevSelectedProducts) =>
                prevSelectedProducts.filter((p) => p.oid !== c.oid)
            )
            console.log("both deleted")
        } else {
            firestore.collection("users").doc(auth.currentUser?.uid).collection("cart").doc(c.oid).delete()
            console.log("deleted")
        }
    }

    const proceedToCheckout = () => {
        const checkoutRef = firestore.collection("users").doc(auth.currentUser?.uid).collection("checkout")
        selectedProducts.forEach(product => {
            checkoutRef.doc(product.oid).set(product)
        })
        navigate("/checkout")
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

            {
                auth.currentUser ?
                    <div className="cart-lower">
                        <div className="cart-products">
                            {
                                cart && cart.length === 0
                                    ? <p>cart is empty</p>
                                    : (
                                        cart && cart.map((c) => (
                                            <div className="cart-product" key={c.oid}>
                                                <div className="cart-product-zero">
                                                    <input
                                                        type="checkbox"
                                                        className="cart-checkbox"
                                                        onChange={() => handleCheckboxChange(c)}
                                                        checked={selectedProducts.some(p => p.oid === c.oid)}
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
                                                            <p className="delQ">
                                                                Share
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    )
                            }
                        </div>
                        {
                            cart && cart.length === 0
                                ? null
                                : (
                                    <div className="cart-checkout">
                                        <div className="cart-checkout-box">
                                            <p className="shipText">*Shipping charges will be added on checkout*</p>
                                            <p className="cart-checkout-text scarttext">
                                                {selectedProducts.length} items selected
                                            </p>
                                            <div className="total-box">
                                                <p className="total-text">
                                                    Total :
                                                </p>
                                                <p className="total-price">
                                                    ₹ {totalPrice}
                                                </p>
                                            </div>

                                        </div>
                                        {
                                            selectedProducts.length > 0 ? <button className="ptc" onClick={proceedToCheckout} >Proceed to checkout</button> : null
                                        }
                                    </div>
                                )
                        }
                    </div>
                    : <div className="cart-lower">
                        <p>Please login or register to add items to cart</p>
                    </div>
            }
        </div>
    )
}

export default Cart
