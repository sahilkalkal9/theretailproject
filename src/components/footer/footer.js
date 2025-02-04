
import { Link } from "react-router-dom"
import "./footer.scss"

function Footer() {
        return (
                <div className="Footer">
                        <div className="main-footer-box ">
                                <div className="footer-box">
                                        <div className="company-footer">
                                                <div className="footer-logo">

                                                        <img className="logo-image-paw" src={require("./pawb.png")} alt="logo" />
                                                        {/* <p className="footer-logo-text">
                                                                The ReTail Project
                                                        </p> */}

                                                </div>
                                                <p className="footer-about" >A conscious pet brand that upcycles and customises pet clothing, accessories, bedding and toys offering eco-friendly, personalized designs.</p>
                                                <p className="footer-reach">Reach out to us</p>
                                                <p className="footer-about" >Get your questions answered about TRP</p>
                                                <div className="footer-icons">

                                                        <p className="footer-email" ><a href="mailto:theretailproject.in@gmail.com" >theretailproject.in@gmail.com</a></p>


                                                </div>
                                                <div className="footer-icons">



                                                        <p className="footer-email" ><a href="tel:+919664149148" >+91 9664149148</a></p>
                                                </div>

                                        </div>
                                        <div className="second-footer">
                                                <div className="spds">
                                                        <div className="spd">
                                                                <p className="footer-head-sub">Discover</p>
                                                                <div className="footer-menu">
                                                                        <Link to="/about-us">
                                                                                <p className="footer-menuItem">About us</p>
                                                                        </Link>
                                                                        {/* <Link to="/blogs">
                                                                                <p className="footer-menuItem">Blogs</p>
                                                                        </Link> */}
                                                                        <Link to="/shop">
                                                                                <p className="footer-menuItem">Shop</p>
                                                                        </Link>
                                                                        <Link to="/contact">
                                                                                <p className="footer-menuItem">Contact</p>
                                                                        </Link>








                                                                </div>
                                                        </div>

                                                        <div className="spd">
                                                                <p className="footer-head-sub">Support</p>
                                                                <div className="footer-menu">
                                                                        <Link to="/privacy-policy">
                                                                                <p className="footer-menuItem">Privacy Policy</p>
                                                                        </Link>
                                                                        <Link to="/terms">
                                                                                <p className="footer-menuItem">Terms & Conditions</p>
                                                                        </Link>
                                                                        <Link to="/refund-policy">
                                                                                <p className="footer-menuItem">Refund Policy</p>
                                                                        </Link>




                                                                </div>
                                                        </div>
                                                </div>

                                                <div className="social-medias">
                                                        <a href="https://instagram.com/the_retail_project" target="blank">
                                                                <img className="smimg" src={require("./instagram.png")} />
                                                        </a>
                                                        <a>
                                                                <img className="smimg" src={require("./facebook.png")} />
                                                        </a>
                                                        <a>
                                                                <img className="smimg" src={require("./wt.png")} />
                                                        </a>
                                                </div>

                                        </div>
                                </div>
                                <div className="lower-footer">
                                        <p className="copyright" >
                                                The ReTail Project &copy; 2023
                                        </p>

                                </div>
                        </div>
                </div>
        )
}

export default Footer;