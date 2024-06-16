import "../../App.scss"
import Nav from "../nav/nav"
import heart from "./heart.png"
import cartttt from "./shopping-bag.png"
import dogf from "./dog-food.png"
import products from "./products.json"
import qmin from "./minus.png"
import qplus from "./add.png"
import { useState } from "react"

function Cart() {

    const [qnum, setQNum] = useState(0)

    const reduceCart = (e) => {
        e.preventDefault();

        setQNum(qnum - 1)

    }


    const increaseCart = (e) => {
        e.preventDefault();

        setQNum(qnum + 1)

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
                    <div className="cart-product">
                        <div className="cart-product-zero">
                            <input type="checkbox" className="cart-checkbox" />
                        </div>
                        <div className="cart-product-left">
                            <img className="cart-product-img" src={dogf} />
                        </div>
                        <div className="cart-product-right">
                            <div className="cart-product-right-one">
                                <p className="cart-product-name">
                                    Calcium bones for small and adult dogs most efficient and smart etcc Calcium bones for small and adult dogs most efficient and smart etcc Calcium bones for small and adult dogs most efficient and smart etcc
                                </p>
                                <p className="cart-product-price">
                                    ₹ 500
                                </p>
                            </div>

                            <div className="cart-product-right-one">
                                <div className="quantity-box">
                                    <img onClick={reduceCart} className={qnum == 0 ? "qminus qdis" : "qminus"} src={qmin} />
                                    <div className="qnum-box">
                                        <p className="qnum">
                                            {qnum}
                                        </p>
                                    </div>
                                    <img onClick={increaseCart} className="qminus" src={qplus} />
                                </div>
                                <div className="options-box">
                                    <p className="option">
                                        Delete
                                    </p>
                                    <p className="option">
                                        Add to wishlist
                                    </p>
                                    <p className="option">
                                        Share
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="cart-product">
                        <div className="cart-product-zero">
                            <input type="checkbox" className="cart-checkbox" />
                        </div>
                        <div className="cart-product-left">
                            <img className="cart-product-img" src={dogf} />
                        </div>
                        <div className="cart-product-right">
                            <div className="cart-product-right-one">
                                <p className="cart-product-name">
                                    Calcium bones for small and adult dogs most efficient and smart etcc Calcium bones for small and adult dogs most efficient and smart etcc Calcium bones for small and adult dogs most efficient and smart etcc
                                </p>
                                <p className="cart-product-price">
                                    ₹ 500
                                </p>
                            </div>

                            <div className="cart-product-right-one">
                                <div className="quantity-box">
                                    <img onClick={reduceCart} className={qnum == 0 ? "qminus qdis" : "qminus"} src={qmin} />
                                    <div className="qnum-box">
                                        <p className="qnum">
                                            {qnum}
                                        </p>
                                    </div>
                                    <img onClick={increaseCart} className="qminus" src={qplus} />
                                </div>
                                <div className="options-box">
                                    <p className="option">
                                        Delete
                                    </p>
                                    <p className="option">
                                        Add to wishlist
                                    </p>
                                    <p className="option">
                                        Share
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="cart-product">
                        <div className="cart-product-zero">
                            <input type="checkbox" className="cart-checkbox" />
                        </div>
                        <div className="cart-product-left">
                            <img className="cart-product-img" src={dogf} />
                        </div>
                        <div className="cart-product-right">
                            <div className="cart-product-right-one">
                                <p className="cart-product-name">
                                    Calcium bones for small and adult dogs most efficient and smart etcc Calcium bones for small and adult dogs most efficient and smart etcc Calcium bones for small and adult dogs most efficient and smart etcc
                                </p>
                                <p className="cart-product-price">
                                    ₹ 500
                                </p>
                            </div>

                            <div className="cart-product-right-one">
                                <div className="quantity-box">
                                    <img onClick={reduceCart} className={qnum == 0 ? "qminus qdis" : "qminus"} src={qmin} />
                                    <div className="qnum-box">
                                        <p className="qnum">
                                            {qnum}
                                        </p>
                                    </div>
                                    <img onClick={increaseCart} className="qminus" src={qplus} />
                                </div>
                                <div className="options-box">
                                    <p className="option">
                                        Delete
                                    </p>
                                    <p className="option">
                                        Add to wishlist
                                    </p>
                                    <p className="option">
                                        Share
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="cart-product">
                        <div className="cart-product-zero">
                            <input type="checkbox" className="cart-checkbox" />
                        </div>
                        <div className="cart-product-left">
                            <img className="cart-product-img" src={dogf} />
                        </div>
                        <div className="cart-product-right">
                            <div className="cart-product-right-one">
                                <p className="cart-product-name">
                                    Calcium bones for small and adult dogs most efficient and smart etcc Calcium bones for small and adult dogs most efficient and smart etcc Calcium bones for small and adult dogs most efficient and smart etcc
                                </p>
                                <p className="cart-product-price">
                                    ₹ 500
                                </p>
                            </div>

                            <div className="cart-product-right-one">
                                <div className="quantity-box">
                                    <img onClick={reduceCart} className={qnum == 0 ? "qminus qdis" : "qminus"} src={qmin} />
                                    <div className="qnum-box">
                                        <p className="qnum">
                                            {qnum}
                                        </p>
                                    </div>
                                    <img onClick={increaseCart} className="qminus" src={qplus} />
                                </div>
                                <div className="options-box">
                                    <p className="option">
                                        Delete
                                    </p>
                                    <p className="option">
                                        Add to wishlist
                                    </p>
                                    <p className="option">
                                        Share
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>


                </div>
                <div className="cart-checkout">
                    <div classNamecart-checkout-box>
                        <p className="cart-checkut-text scarttext">
                            3 items selected
                        </p>
                        <div className="total-box">
                            <p className="total-text">
                                Total :
                            </p>
                            <p className="total-price">
                                ₹ 200000
                            </p>
                        </div>
                    </div>
                    <button className="ptc" >Proceed to checkout</button>
                </div>
            </div>




        </div>
    )
}

export default Cart