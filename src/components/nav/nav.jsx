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
import { useCollectionData } from 'react-firebase-hooks/firestore';

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

    const openNav = () => {
        document.getElementById("overlay-nav").style.display = "flex";
    };

    const closeNav = () => {
        document.getElementById("overlay-nav").style.display = "none";
    };

    return (
        // <>
        //     <div id="overlay-nav" className="overlayNav">
        //         <div className="overlay-box">
        //             <div className="onav-head">
        //                 <img className="close" onClick={closeNav} src={close} alt="close" />
        //             </div>
        //             <div className="onav-menu">

        //                 <Link to='/about' >
        //                     <p onClick={closeNav} className="menu-item"> About </p>
        //                 </Link>
        //                 <Link to='/how-to-recycle' >
        //                     <p onClick={closeNav} className="menu-item"> How to recycle </p>
        //                 </Link>
        //                 <Link to='/shop' >
        //                     <p onClick={closeNav} className="menu-item"> Shop </p>
        //                 </Link>
        //                 <Link to='/orders' >
        //                     <p onClick={closeNav} className="menu-item"> My orders </p>
        //                 </Link>
        //                 <Link to='/Services' >
        //                     <p onClick={closeNav} className="menu-item"> Services </p>
        //                 </Link>
        //                 <Link to='/blogs' >
        //                     <p onClick={closeNav} className="menu-item"> Blogs </p>
        //                 </Link>
        //                 <Link to='/faq' >
        //                     <p onClick={closeNav} className="menu-item"> FAQs </p>
        //                 </Link>
        //                 <Link to='/contact' >
        //                     <p onClick={closeNav} className="menu-item"> Contact us </p>
        //                 </Link>

        //                 <Link to='/signup' >
        //                     <p onClick={closeNav} className="menu-item login-button"> Signup </p>
        //                 </Link>
        //                 <Link to='/login' >
        //                     <p onClick={closeNav} className="menu-item login-button"> Login </p>
        //                 </Link>
        //             </div>
        //         </div>
        //     </div>
        //     <div className="Nav">
        //         <div className="nav-box">
        //             <div className="logo">
        //                 <Link to='/'>
        //                     <img className="logo-image-paw" onClick={openNav} src={logo} alt="logo" />
        //                 </Link>
        //             </div>
        //             <div className="co-name">
        //                 <p className="co-name-text">
        //                     The <span className="re-text">Re</span>Tail Project
        //                 </p>
        //             </div>
        //             <div className="menu">
        //                 <Link className="cartLink" to='/cart' >
        //                     <div>
        //                         <img className="menu-item-img carti" src={ccart} alt="cart" />
        //                         <p className='cnum'>{nitems}</p>
        //                     </div>
        //                 </Link>
        //                 {currentUser ? (
        //                     <Link className="cartLink" to='/profile' >
        //                         <img className="menu-item-img" src={user} alt="user" />
        //                     </Link>
        //                 ) : (
        //                     <Link to='/login' >
        //                         <p onClick={closeNav} className="menu-item login-button mainL"> Login </p>
        //                     </Link>
        //                 )}
        //             </div>
        //         </div>
        //     </div>
        // </>
        <>
            <div id="overlay-nav" className="overlayNav">
                <div className="overlay-box">
                    <div className="onav-head">
                        <img className="close" onClick={closeNav} src={close} alt="close" />
                    </div>
                    <div className="onav-menu">

                        <Link to='/about' >
                            <p onClick={closeNav} className="menu-item"> About </p>
                        </Link>
                        <Link to='/how-to-recycle' >
                            <p onClick={closeNav} className="menu-item"> How to recycle </p>
                        </Link>
                        <Link to='/shop' >
                            <p onClick={closeNav} className="menu-item"> Shop </p>
                        </Link>
                        <Link to='/orders' >
                            <p onClick={closeNav} className="menu-item"> My orders </p>
                        </Link>
                        <Link to='/Services' >
                            <p onClick={closeNav} className="menu-item"> Services </p>
                        </Link>
                        <Link to='/blogs' >
                            <p onClick={closeNav} className="menu-item"> Blogs </p>
                        </Link>
                        <Link to='/faq' >
                            <p onClick={closeNav} className="menu-item"> FAQs </p>
                        </Link>
                        <Link to='/contact' >
                            <p onClick={closeNav} className="menu-item"> Contact us </p>
                        </Link>
                        <Link to='/signup' >
                            <p onClick={closeNav} className="menu-item login-button"> Signup </p>
                        </Link>
                        <Link to='/login' >
                            <p onClick={closeNav} className="menu-item login-button"> Login </p>
                        </Link>
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
                                <Link className="cartLink" to='/cart' >
                                    <div>
                                        <img className="menu-item-img carti" src={ccart} alt="cart" />
                                        <p className='cnum'>{nitems}</p>
                                    </div>
                                </Link>
                                <Link className="cartLink" to='/profile' >
                                    <img className="menu-item-img" src={user} alt="user" />
                                </Link>
                                
                                <img onClick={openNav} className="menu-item-img carti" id='dostNav' src={dots} alt="cart" />
                            </div>
                        </div>
                    </div>
                    <div className="new-nav-lower">
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
                            <Link to='/orders' >
                                <p onClick={closeNav} className="new-nav-menu-item"> My orders </p>
                            </Link>
                            <Link to='/Services' >
                                <p onClick={closeNav} className="new-nav-menu-item"> Services </p>
                            </Link>
                            <Link to='/blogs' >
                                <p onClick={closeNav} className="new-nav-menu-item"> Blogs </p>
                            </Link>
                            <Link to='/faq' >
                                <p onClick={closeNav} className="new-nav-menu-item"> FAQs </p>
                            </Link>
                            <Link to='/contact' >
                                <p onClick={closeNav} className="new-nav-menu-item"> Contact us </p>
                            </Link>


                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Nav;
