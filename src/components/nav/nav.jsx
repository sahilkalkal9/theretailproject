import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { auth, firestore } from "../../firebase";
import logo from "./pawb.png";
import fullLogo from "./full-logo.jpg";
import ccart from "./shopping-bag.png";
import user from "./user.png";
import simg from "./sig.png"
import close from "./close.png";
import "../../App.scss";
import dots from "./dots.png"
import profile from "./person.png"
import enroll from "./page.png"
import invoices from "./dollar-sign.png"
import support from "./support.png"
import exiti from "./exit.png"
import menuk from "./menuk.png"
import { useCollectionData } from 'react-firebase-hooks/firestore';
import shopimg from "./shop.png"
import faq from "./faq.png"
import aboutimg from "./about.png"
import pawimg from "./paw.png"
import recimg from "./recycle.png"

function Nav() {
    const location = useLocation();
    const [currentUser, setCurrentUser] = useState(null);
    const [nitems, setnitems] = useState(0);

    // Set up cart reference only if user is authenticated
    const cartRef = auth.currentUser
        ? firestore.collection("users").doc(auth.currentUser.uid).collection("cart")
        : null;

    // Using the cartRef only if it's defined
    const [cart] = useCollectionData(cartRef, { idField: 'id' });

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setCurrentUser(user);
        });
        return () => unsubscribe();
    }, []);

    useEffect(() => {
        if (cart && Array.isArray(cart)) {
            setnitems(cart.length);
        }
    }, [cart]);

    const isActive = (path) => location.pathname === path;

    const closeNav = () => {
        document.getElementById("overlayNav").style.width = "0cm"
    }

    const openNav = () => {
        document.getElementById("overlayNav").style.width = "7cm"
    }

    return (

        <>
            <div id="overlayNav" className="overlay-nav">
                <div className="overlay-box">
                    <div className="close-div">
                        {/* <img className="close-img" src={cross} onClick={closeNav} /> */}
                    </div>
                    <div className="account-dets-menu">
                        <div onClick={() => { closeNav() }} className="account-dets-menu-item">
                            {/* <img className="acc-dets-img" src={cross} /> */}
                            <p className="acc-dets-text">
                                Close
                            </p>
                        </div>


                        <Link to="/shop">
                            <div onClick={closeNav} className={isActive("/account") || isActive("/account/profile") || isActive("/account/") ? "account-dets-menu-item activeM" : "account-dets-menu-item"} >
                                <img className="acc-dets-img" src={shopimg} />
                                <p className="acc-dets-text">
                                    Shop
                                </p>
                            </div>
                        </Link>
                        {
                            auth.currentUser ?
                                <Link to="/profile">
                                    <div onClick={closeNav} className={isActive("/account") || isActive("/account/profile") || isActive("/account/") ? "account-dets-menu-item activeM" : "account-dets-menu-item"} >
                                        <img className="acc-dets-img" src={profile} />
                                        <p className="acc-dets-text">
                                            My Profile
                                        </p>
                                    </div>
                                </Link>
                                : null
                        }
                        {
                            auth.currentUser
                                ?
                                <Link to="/pet-profile">
                                    <div onClick={closeNav} className={isActive("/account/enrollments") ? "account-dets-menu-item activeM" : "account-dets-menu-item"}>
                                        <img className="acc-dets-img" src={pawimg} />
                                        <p className="acc-dets-text">
                                            Pet Profile
                                        </p>
                                    </div>
                                </Link>
                                : null
                        }
                        {
                            auth.currentUser
                                ?
                                <Link to="/orders">
                                    <div onClick={closeNav} className={isActive("/account/enrollments") ? "account-dets-menu-item activeM" : "account-dets-menu-item"}>
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
                                    <div onClick={closeNav} className={isActive("/account/invoices") ? "account-dets-menu-item activeM" : "account-dets-menu-item"}>
                                        <img className="acc-dets-img" src={ccart} />
                                        <p className="acc-dets-text">
                                            Cart
                                        </p>
                                    </div>
                                </Link>
                                : null
                        }
                        <Link to="/about-us">
                            <div onClick={closeNav} className={isActive("/account") || isActive("/account/profile") || isActive("/account/") ? "account-dets-menu-item activeM" : "account-dets-menu-item"} >
                                <img className="acc-dets-img" src={aboutimg} />
                                <p className="acc-dets-text">
                                    About Us
                                </p>
                            </div>
                        </Link>
                        <Link to="/how-to-recycle">
                            <div onClick={closeNav} className={isActive("/account") || isActive("/account/profile") || isActive("/account/") ? "account-dets-menu-item activeM" : "account-dets-menu-item"} >
                                <img className="acc-dets-img" src={recimg} />
                                <p className="acc-dets-text">
                                    How to Recycle
                                </p>
                            </div>
                        </Link>
                        <Link to="/faq">
                            <div onClick={closeNav} className={isActive("/account") || isActive("/account/profile") || isActive("/account/") ? "account-dets-menu-item activeM" : "account-dets-menu-item"} >
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
                                    Helpdesk
                                </p>
                            </div>
                        </Link>
                        {
                            auth.currentUser
                                ?
                                <div onClick={() => { auth.signOut(); closeNav() }} className="account-dets-menu-item">
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
                                        <Link to='/signup' >
                                            <p onClick={closeNav} className="menu-item login-button"> Signup </p>
                                        </Link>
                                        <Link to='/login' >
                                            <p onClick={closeNav} className="menu-item login-button"> Login </p>
                                        </Link>
                                    </div>
                                )
                        }
                    </div>
                </div>
            </div>
            <div className="NavNew">
                <div className="new-nav-box">
                    <div className="new-nav-upper">

                        <div className="new-nav-logo">
                            <Link className='new-nav-logo-box' to='/'>
                                <img className="logo-image-paw" src={logo} alt="logo" />
                                <p className="co-name-text">
                                    The <span className="re-text">Re</span>Tail Project
                                </p>
                            </Link>
                        </div>
                        <div className="new-nav-icons">
                            <div className="menu">
                                {/* <img className="menu-item-img carti simgg" src={simg} alt="cart" /> */}
                                {/* <Link className="cartLink" to='/cart' >
                                    <div>
                                        <img className="menu-item-img carti" src={ccart} alt="cart" />
                                        <p className='cnum'>{nitems}</p>
                                    </div>
                                </Link> */}
                                {
                                    auth.currentUser
                                        ? <Link className="cartLink" to='/profile' >
                                            {/* <img className="menu-item-img" src={user} alt="user" /> */}
                                            <img onClick={openNav} className="menuk" src={menuk} />
                                        </Link>
                                        : (
                                            <div className="nav-menu-i">
                                                <div className='login-buttons'>
                                                    <Link to='/signup' >
                                                        <p onClick={closeNav} className="menu-item login-button"> Signup </p>
                                                    </Link>
                                                    <Link to='/login' >
                                                        <p onClick={closeNav} className="menu-item login-button"> Login </p>
                                                    </Link>

                                                </div>
                                                <img onClick={openNav} className="menuk" src={menuk} />
                                            </div>
                                        )
                                }


                            </div>
                        </div>
                    </div>
                    {/* <div className="new-nav-lower">
                        <div className="new-nav-menu">
                            <Link to='/about' >
                                <p onClick={closeNav} className="new-nav-menu-item"> About </p>
                            </Link>
                            <Link to='/how-to-recycle' >
                                <p onClick={closeNav} className="new-nav-menu-item"> How to recycle </p>
                            </Link>
                            <Link to='/shop' >
                                <p onClick={closeNav} className="new-nav-menu-item"> Shop </p>
                            </Link>
                          
                            <Link to='/faq' >
                                <p onClick={closeNav} className="new-nav-menu-item"> FAQs </p>
                            </Link>
                            <Link to='/contact' >
                                <p onClick={closeNav} className="new-nav-menu-item"> Contact us </p>
                            </Link>


                        </div>
                    </div> */}
                </div>
            </div>
        </>

    );
}

export default Nav;
