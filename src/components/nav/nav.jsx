import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { auth, firestore } from "../../firebase";
import logo from "./pawb.png";
import fullLogo from "./full-logo.jpg";
import ccart from "./shopping-bag.png";
import user from "./user.png";
import simg from "./sig.png"
import close from "./close.png";
import "./nav.scss";
import dots from "./dots.png"
import profile from "./person.png"
import enroll from "./page.png"
import invoices from "./dollar-sign.png"
import support from "./support.png"
import exiti from "./exit.png"
import menuk from "./menuk.png"

import shopimg from "./shop.png"
import faq from "./faq.png"
import aboutimg from "./about.png"
import pawimg from "./paw.png"
import recimg from "./recycle.png"
import "./cart.scss"

function Nav() {
    const location = useLocation();
    const [currentUser, setCurrentUser] = useState(null);
    // const [nitems, setnitems] = useState(0);

    const navigate = useNavigate()

    // Set up cart reference only if user is authenticated
    // const cartRef = auth.currentUser
    //     ? firestore.collection("users").doc(auth.currentUser.uid).collection("cart")
    //     : null;

    // Using the cartRef only if it's defined
    // const [cart] = useCollectionData(cartRef, { idField: 'id' });

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setCurrentUser(user);
        });
        return () => unsubscribe();
    }, []);

    // useEffect(() => {
    //     if (cart && Array.isArray(cart)) {
    //         setnitems(cart.length);
    //     }
    // }, [cart]);

    const overlayRef = useRef(null);

    useEffect(() => {
        // Function to handle click events
        const handleClickOutside = (event) => {
            if (overlayRef.current && !overlayRef.current.contains(event.target)) {
                closeNav(); // Call the closeNav function if clicked outside
            }
        };

        // Add event listener to detect outside clicks
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            // Cleanup the event listener on unmount
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const isActive = (path) => location.pathname === path;

    const closeNav = () => {
        document.getElementById("overlayNav").style.width = "0cm"
    }

    const openNav = () => {
        document.getElementById("overlayNav").style.width = "7cm"
    }

    const closeCart = () => {
        document.getElementById("cartNew").style.width = "0cm"
    }

    const openCart = () => {
        document.getElementById("cartNew").style.width = "12cm"
    }


    return (

        <>
            <div ref={overlayRef} id="overlayNav" className="overlay-nav">
                <div className="overlay-box">
                    <div className="close-div">
                        {/* <img className="close-img" src={cross} onClick={closeNav} /> */}
                    </div>
                    <div className="account-dets-menu">

                        <Link to="/">
                            <div onClick={closeNav} className={isActive("/") ? "account-dets-menu-item activeM" : "account-dets-menu-item"} >
                                <img className="acc-dets-img" src={aboutimg} />
                                <p className="acc-dets-text">
                                    Home
                                </p>
                            </div>
                        </Link>

                        <Link to="/about-us">
                            <div onClick={closeNav} className={isActive("/about-us") ? "account-dets-menu-item activeM" : "account-dets-menu-item"} >
                                <img className="acc-dets-img" src={aboutimg} />
                                <p className="acc-dets-text">
                                    About Us
                                </p>
                            </div>
                        </Link>
                        <Link to="/how-to-recycle">
                            <div onClick={closeNav} className={isActive("/how-to-recycle") ? "account-dets-menu-item activeM" : "account-dets-menu-item"} >
                                <img className="acc-dets-img" src={recimg} />
                                <p className="acc-dets-text">
                                    How to Upcycle
                                </p>
                            </div>
                        </Link>

                        <Link to="/shop">
                            <div onClick={closeNav} className={isActive("/shop") ? "account-dets-menu-item activeM" : "account-dets-menu-item"} >
                                <img className="acc-dets-img" src={shopimg} />
                                <p className="acc-dets-text">
                                    Shop
                                </p>
                            </div>
                        </Link>
                        {
                            auth.currentUser ?
                                <Link to="/profile">
                                    <div onClick={closeNav} className={isActive("/profile") ? "account-dets-menu-item activeM hidemi" : "account-dets-menu-item hidemi"} >
                                        <img className="acc-dets-img" src={profile} />
                                        <p className="acc-dets-text">
                                            My Profile
                                        </p>
                                    </div>
                                </Link>
                                : null
                        }
                        {/* {
                            auth.currentUser
                                ?
                                <Link to="/pet-profile">
                                    <div onClick={closeNav} className={isActive("/pet-profile") ? "account-dets-menu-item activeM " : "account-dets-menu-item "}>
                                        <img className="acc-dets-img" src={pawimg} />
                                        <p className="acc-dets-text">
                                            Pet Profile
                                        </p>
                                    </div>
                                </Link>
                                : null
                        } */}
                        {
                            auth.currentUser
                                ?
                                <Link to="/orders">
                                    <div onClick={closeNav} className={isActive("/orders") ? "account-dets-menu-item activeM " : "account-dets-menu-item "}>
                                        <img className="acc-dets-img" src={enroll} />
                                        <p className="acc-dets-text">
                                            My Orders
                                        </p>
                                    </div>
                                </Link>
                                : null
                        }
                        {
                            auth.currentUser
                                ?
                                <Link to="/cart">
                                    <div onClick={closeNav} className={isActive("/cart") ? "account-dets-menu-item activeM hidemi" : "account-dets-menu-item hidemi"}>
                                        <img className="acc-dets-img" src={ccart} />
                                        <p className="acc-dets-text">
                                            Cart
                                        </p>
                                    </div>
                                </Link>
                                : null
                        }

                        <Link to="/faq">
                            <div onClick={closeNav} className={isActive("/faq") ? "account-dets-menu-item activeM" : "account-dets-menu-item"} >
                                <img className="acc-dets-img" src={faq} />
                                <p className="acc-dets-text">
                                    FAQs
                                </p>
                            </div>
                        </Link>
                        <Link to='/contact'>
                            <div onClick={closeNav} className={isActive("/contact") ? "account-dets-menu-item activeM" : "account-dets-menu-item"}>
                                <img className="acc-dets-img" src={support} />
                                <p className="acc-dets-text">
                                    Contact Us
                                </p>
                            </div>
                        </Link>
                        {
                            auth.currentUser
                                ?
                                <div onClick={() => { auth.signOut(); closeNav(); navigate("/signin") }} className="account-dets-menu-item">
                                    <img className="acc-dets-img" src={exiti} />
                                    <p className="acc-dets-text">
                                        Sign Out
                                    </p>
                                </div>
                                : null
                        }

                        {
                            auth.currentUser
                                ? (
                                    null
                                )
                                : (
                                    <div className="login-buttons-overlay">
                                        {/* <Link to='/signup' >
                                            <p onClick={closeNav} className="menu-item login-button"> Sign Up </p>
                                        </Link> */}
                                        <Link to='/signin' >
                                            <p onClick={closeNav} className="menu-item login-button"> Sign In </p>
                                        </Link>
                                    </div>
                                )
                        }

                        <div onClick={() => { closeNav() }} className="account-dets-menu-item">
                            {/* <img className="acc-dets-img" src={cross} /> */}
                            <p className="acc-dets-text">
                                Close
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            <div id="cartNew" className="Cart-new">
                <div className="cart-box-new">
                    <div className="cart-head-new">
                        <div className="cart-head-left-new">
                            <p className="cart-total-text">
                                Total Item (12)
                            </p>
                        </div>
                        <div className="cart-head-right">
                            <p onClick={closeCart} className="closeCart">
                                Close
                            </p>
                        </div>
                    </div>
                    <div className="cart-prods-list">
                        <div className="cart-prod-new">
                            <div className="cart-prod-new-left">
                                <img className="cart-prod-new-img" src={require("./product.png")} />
                            </div>
                            <div className="cart-prod-new-right">
                                <p className="cart-prod-new-name">
                                    Existing Product Name
                                </p>
                                <p className="cart-prod-new-price">
                                    ₹300.00
                                </p>

                                <div className="cart-new-quantity-box">
                                    <p className="cart-minus-new">
                                        -
                                    </p>
                                    <p className="cart-quantity-new">
                                        10
                                    </p>
                                    <p className="cart-plus-new">
                                        +
                                    </p>

                                </div>

                                <p className="cart-del-new">
                                    Delete
                                </p>
                            </div>
                        </div>
                        <div className="cart-prod-new">
                            <div className="cart-prod-new-left">
                                <img className="cart-prod-new-img" src={require("./product.png")} />
                            </div>
                            <div className="cart-prod-new-right">
                                <p className="cart-prod-new-name">
                                    Existing Product Name
                                </p>
                                <p className="cart-prod-new-price">
                                    ₹300.00
                                </p>

                                <div className="cart-new-quantity-box">
                                    <p className="cart-minus-new">
                                        -
                                    </p>
                                    <p className="cart-quantity-new">
                                        10
                                    </p>
                                    <p className="cart-plus-new">
                                        +
                                    </p>

                                </div>

                                <p className="cart-del-new">
                                    Delete
                                </p>
                            </div>
                        </div>
                        <div className="cart-prod-new">
                            <div className="cart-prod-new-left">
                                <img className="cart-prod-new-img" src={require("./product.png")} />
                            </div>
                            <div className="cart-prod-new-right">
                                <p className="cart-prod-new-name">
                                    Existing Product Name
                                </p>
                                <p className="cart-prod-new-price">
                                    ₹300.00
                                </p>

                                <div className="cart-new-quantity-box">
                                    <p className="cart-minus-new">
                                        -
                                    </p>
                                    <p className="cart-quantity-new">
                                        10
                                    </p>
                                    <p className="cart-plus-new">
                                        +
                                    </p>

                                </div>

                                <p className="cart-del-new">
                                    Delete
                                </p>
                            </div>
                        </div>
                        <div className="cart-prod-new">
                            <div className="cart-prod-new-left">
                                <img className="cart-prod-new-img" src={require("./product.png")} />
                            </div>
                            <div className="cart-prod-new-right">
                                <p className="cart-prod-new-name">
                                    Existing Product Name
                                </p>
                                <p className="cart-prod-new-price">
                                    ₹300.00
                                </p>

                                <div className="cart-new-quantity-box">
                                    <p className="cart-minus-new">
                                        -
                                    </p>
                                    <p className="cart-quantity-new">
                                        10
                                    </p>
                                    <p className="cart-plus-new">
                                        +
                                    </p>

                                </div>

                                <p className="cart-del-new">
                                    Delete
                                </p>
                            </div>
                        </div>
                        <div className="cart-prod-new">
                            <div className="cart-prod-new-left">
                                <img className="cart-prod-new-img" src={require("./product.png")} />
                            </div>
                            <div className="cart-prod-new-right">
                                <p className="cart-prod-new-name">
                                    Existing Product Name
                                </p>
                                <p className="cart-prod-new-price">
                                    ₹300.00
                                </p>

                                <div className="cart-new-quantity-box">
                                    <p className="cart-minus-new">
                                        -
                                    </p>
                                    <p className="cart-quantity-new">
                                        10
                                    </p>
                                    <p className="cart-plus-new">
                                        +
                                    </p>

                                </div>

                                <p className="cart-del-new">
                                    Delete
                                </p>
                            </div>
                        </div>
                        <div className="cart-prod-new">
                            <div className="cart-prod-new-left">
                                <img className="cart-prod-new-img" src={require("./product.png")} />
                            </div>
                            <div className="cart-prod-new-right">
                                <p className="cart-prod-new-name">
                                    Existing Product Name
                                </p>
                                <p className="cart-prod-new-price">
                                    ₹300.00
                                </p>

                                <div className="cart-new-quantity-box">
                                    <p className="cart-minus-new">
                                        -
                                    </p>
                                    <p className="cart-quantity-new">
                                        10
                                    </p>
                                    <p className="cart-plus-new">
                                        +
                                    </p>

                                </div>

                                <p className="cart-del-new">
                                    Delete
                                </p>
                            </div>
                        </div>
                        <div className="cart-prod-new">
                            <div className="cart-prod-new-left">
                                <img className="cart-prod-new-img" src={require("./product.png")} />
                            </div>
                            <div className="cart-prod-new-right">
                                <p className="cart-prod-new-name">
                                    Existing Product Name
                                </p>
                                <p className="cart-prod-new-price">
                                    ₹300.00
                                </p>

                                <div className="cart-new-quantity-box">
                                    <p className="cart-minus-new">
                                        -
                                    </p>
                                    <p className="cart-quantity-new">
                                        10
                                    </p>
                                    <p className="cart-plus-new">
                                        +
                                    </p>

                                </div>

                                <p className="cart-del-new">
                                    Delete
                                </p>
                            </div>
                        </div>
                        <div className="cart-prod-new">
                            <div className="cart-prod-new-left">
                                <img className="cart-prod-new-img" src={require("./product.png")} />
                            </div>
                            <div className="cart-prod-new-right">
                                <p className="cart-prod-new-name">
                                    Existing Product Name
                                </p>
                                <p className="cart-prod-new-price">
                                    ₹300.00
                                </p>

                                <div className="cart-new-quantity-box">
                                    <p className="cart-minus-new">
                                        -
                                    </p>
                                    <p className="cart-quantity-new">
                                        10
                                    </p>
                                    <p className="cart-plus-new">
                                        +
                                    </p>

                                </div>

                                <p className="cart-del-new">
                                    Delete
                                </p>
                            </div>
                        </div>
                        <div className="cart-prod-new">
                            <div className="cart-prod-new-left">
                                <img className="cart-prod-new-img" src={require("./product.png")} />
                            </div>
                            <div className="cart-prod-new-right">
                                <p className="cart-prod-new-name">
                                    Existing Product Name
                                </p>
                                <p className="cart-prod-new-price">
                                    ₹300.00
                                </p>

                                <div className="cart-new-quantity-box">
                                    <p className="cart-minus-new">
                                        -
                                    </p>
                                    <p className="cart-quantity-new">
                                        10
                                    </p>
                                    <p className="cart-plus-new">
                                        +
                                    </p>

                                </div>

                                <p className="cart-del-new">
                                    Delete
                                </p>
                            </div>
                        </div>
                        <div className="cart-prod-new">
                            <div className="cart-prod-new-left">
                                <img className="cart-prod-new-img" src={require("./product.png")} />
                            </div>
                            <div className="cart-prod-new-right">
                                <p className="cart-prod-new-name">
                                    Existing Product Name
                                </p>
                                <p className="cart-prod-new-price">
                                    ₹300.00
                                </p>

                                <div className="cart-new-quantity-box">
                                    <p className="cart-minus-new">
                                        -
                                    </p>
                                    <p className="cart-quantity-new">
                                        10
                                    </p>
                                    <p className="cart-plus-new">
                                        +
                                    </p>

                                </div>

                                <p className="cart-del-new">
                                    Delete
                                </p>
                            </div>
                        </div>
                        <div className="cart-prod-new">
                            <div className="cart-prod-new-left">
                                <img className="cart-prod-new-img" src={require("./product.png")} />
                            </div>
                            <div className="cart-prod-new-right">
                                <p className="cart-prod-new-name">
                                    Existing Product Name
                                </p>
                                <p className="cart-prod-new-price">
                                    ₹300.00
                                </p>

                                <div className="cart-new-quantity-box">
                                    <p className="cart-minus-new">
                                        -
                                    </p>
                                    <p className="cart-quantity-new">
                                        10
                                    </p>
                                    <p className="cart-plus-new">
                                        +
                                    </p>

                                </div>

                                <p className="cart-del-new">
                                    Delete
                                </p>
                            </div>
                        </div>
                        <div className="cart-prod-new">
                            <div className="cart-prod-new-left">
                                <img className="cart-prod-new-img" src={require("./product.png")} />
                            </div>
                            <div className="cart-prod-new-right">
                                <p className="cart-prod-new-name">
                                    Existing Product Name
                                </p>
                                <p className="cart-prod-new-price">
                                    ₹300.00
                                </p>

                                <div className="cart-new-quantity-box">
                                    <p className="cart-minus-new">
                                        -
                                    </p>
                                    <p className="cart-quantity-new">
                                        10
                                    </p>
                                    <p className="cart-plus-new">
                                        +
                                    </p>

                                </div>

                                <p className="cart-del-new">
                                    Delete
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="cart-checkout-new">
                        <div className="checkout-coupon">
                            <input className="coup-inp" type="text" placeholder="Enter Coupon Code" />
                            <input className="coup-sub" type="submit" value="Apply" />
                        </div>
                        <div className="checkout-final">
                            <p className="checout-text">
                                Proceed to Checkout
                            </p>
                            <p>
                                |
                            </p>

                            <p className="checout-price">
                                ₹360.00
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="NavNew">
                <div className="new-nav-box">
                    <div className="new-nav-upper">

                        <div className="new-nav-logo">

                            <img onClick={openNav} className="logo-image-paw" src={logo} alt="logo" />


                        </div>
                        <Link className='new-nav-logo-box' to='/'>
                            <p className="co-name-text">
                                The <span className="re-text">Re</span>Tail Project
                            </p>
                        </Link>

                        <div className="new-nav-icons">
                            <div className="menu">

                                {
                                    auth.currentUser
                                        ?
                                        <div className="nav-menu-bar">

                                            <img onClick={openCart} className="menuk hideoii" src={ccart} />

                                            <Link className='nav-linkk' to="/profile">
                                                <img className="menuk hideoii" src={profile} />
                                            </Link>
                                            {/* <Link className='nav-linkk' to="/pet-profile">
                                                <img className="menuk hideoii" src={pawimg} />
                                            </Link> */}
                                            {/* <Link className='nav-linkk' to="/orders">
                                                <img className="menuk hideoii" src={enroll} />
                                            </Link> */}
                                            {/* <img onClick={openNav} className="menuk" src={logo} /> */}
                                        </div>

                                        : (
                                            <div className="nav-menu-i">
                                                <div className='login-buttons'>
                                                    {/* <Link to='/signup' >
                                                        <p onClick={closeNav} className="menu-item login-button"> Sign Up </p>
                                                    </Link> */}
                                                    <Link to='/signin' >
                                                        <p onClick={closeNav} className="menu-item login-button"> Sign In </p>
                                                    </Link>

                                                </div>
                                                {/* <img onClick={openNav} className="menuk" src={menuk} /> */}
                                            </div>
                                        )
                                }


                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>

    );
}

export default Nav;
