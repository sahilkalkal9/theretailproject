import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../global.scss";
import kglogo from "./kglogo.png";
import userr from "./userr.png";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import profile from "./person.png"
import enroll from "./page.png"
import invoices from "./dollar-sign.png"
import support from "./support.png"
import exiti from "./exit.png"
import menuk from "./menuk.png"

function Nav() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return () => unsubscribe();
    }, []);

    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    const closeNav = () => {
        document.getElementById("overlayNav").style.width = "0cm"
    }

    const openNav = () => {
        document.getElementById("overlayNav").style.width = "10cm"
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
                        <Link to="/account/profile">
                            <div onClick={closeNav} className={isActive("/account") || isActive("/account/profile") || isActive("/account/") ? "account-dets-menu-item activeM" : "account-dets-menu-item"} >
                                <img className="acc-dets-img" src={profile} />
                                <p className="acc-dets-text">
                                    My Profile
                                </p>
                            </div>
                        </Link>
                        <Link to="/account/enrollments">
                            <div onClick={closeNav} className={isActive("/account/enrollments") ? "account-dets-menu-item activeM" : "account-dets-menu-item"}>
                                <img className="acc-dets-img" src={enroll} />
                                <p className="acc-dets-text">
                                    My Enrollments
                                </p>
                            </div>
                        </Link>
                        <Link to="/account/invoices">
                            <div onClick={closeNav} className={isActive("/account/invoices") ? "account-dets-menu-item activeM" : "account-dets-menu-item"}>
                                <img className="acc-dets-img" src={invoices} />
                                <p className="acc-dets-text">
                                    My Invoices
                                </p>
                            </div>
                        </Link>
                        <Link to='/contact'>
                            <div onClick={closeNav} className={isActive("/contact") ? "account-dets-menu-item activeM" : "account-dets-menu-item"}>
                                <img className="acc-dets-img" src={support} />
                                <p className="acc-dets-text">
                                    Contact
                                </p>
                            </div>
                        </Link>
                        <div onClick={() => { auth.signOut(); closeNav() }} className="account-dets-menu-item">
                            <img className="acc-dets-img" src={exiti} />
                            <p className="acc-dets-text">
                                Sign Out
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="NavBar">
                <div className="nav">
                    <Link to="/">
                        <p className="logo-text" >Gate World</p>
                    </Link>

                    <div className="menu">

                        {
                            !user
                                ? (
                                    <Link to="/contact">
                                        <p className="menu-item">
                                            Contact
                                        </p>
                                    </Link>
                                )
                                : null
                        }

                        {
                            !user
                                ? <Link to="/signin">
                                    <button className="signin-nav" >
                                        SIGN IN
                                    </button>
                                </Link>
                                : null
                        }
                        {
                            !user
                                ? <Link to="/signup">
                                    <button className="signup-nav" >
                                        SIGN UP
                                    </button>
                                </Link>
                                : null
                        }

                        {
                            user
                                ? <img onClick={openNav} className="menuk" src={menuk} />
                                : null
                        }
                    </div>
                </div>
            </div>
        </>

    );
}

export default Nav;
