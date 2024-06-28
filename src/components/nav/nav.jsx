import logo from "./pawb.png"
import "../../App.scss"
import { Link, useLocation } from "react-router-dom"
import fullLogo from "./full-logo.jpg"
import cart from "./shopping-bag.png"
import user from "./user.png"
import close from "./close.png"



function Nav() {

    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    const openNav = () => {
        document.getElementById("overlay-nav").style.display = "flex"
    }

    const closeNav = () => {
        document.getElementById("overlay-nav").style.display = "none"
    }


    return (
        <>
            <div id="overlay-nav" className="overlayNav">
                <div className="overlay-box">
                    <div className="onav-head">
                        <img className="close" onClick={closeNav} src={close} />
                    </div>
                    <div className="onav-menu">
                        <Link to='/' >
                            <p onClick={closeNav} className="menu-item"> Home </p>
                        </Link>
                        <Link to='/our-story' >
                            <p onClick={closeNav} className="menu-item"> Our Story </p>
                        </Link>
                        <Link to='/about' >
                            <p onClick={closeNav} className="menu-item"> About TRP </p>
                        </Link>
                        <Link to='/shop' >
                            <p onClick={closeNav} className="menu-item"> Shop </p>
                        </Link>
                        <Link to='/transformations' >
                            <p onClick={closeNav} className="menu-item"> Transformations </p>
                        </Link>
                        <Link to='/service-projects' >
                            <p onClick={closeNav} className="menu-item"> Service Projects </p>
                        </Link>
                        <Link to='/contact' >
                            <p onClick={closeNav} className="menu-item"> Contact </p>
                        </Link>
                        <Link to='/login' >
                            <p onClick={closeNav} className="menu-item login-button"> Login </p>
                        </Link>

                    </div>
                </div>
            </div>
            <div className="Nav">
                <div className="nav-box">
                    <div className="logo">
                        <Link to='/'>
                            <img className="logo-image-paw" onClick={openNav} src={logo} alt="logo" />
                        </Link>
                    </div>
                    <div className="co-name">
                        <p className="co-name-text">
                            The <span className="re-text">Re</span>Tail Project
                        </p>
                    </div>
                    <div className="menu">
                        {/* <Link to='/' >
                            <p className="menu-item"> Home </p>
                        </Link>
                        <Link to='/shop' >
                            <p className="menu-item"> Shop </p>
                        </Link>
                        <Link to='/blogs' >
                            <p className="menu-item"> Blogs </p>
                        </Link>
                        <Link to='/contact' >
                            <p className="menu-item"> Contact </p>
                        </Link> */}
                        <Link className="cartLink" to='/cart' >
                            <img className="menu-item-img " src={cart} />
                        </Link>
                        <Link className="cartLink" to='/profile' >
                            <img className="menu-item-img" src={user} />
                        </Link>




                        {/* <button className="login">Log In</button> */}


                    </div>
                </div>
            </div>
        </>
    )
}

export default Nav