import "./home.scss"
import backOne from "./imageO.webp"
import backTwo from "./imageT.webp"
import csp from "./scissors.png"
import sustainable from "./renewal.png"
import corder from "./review.png"
import handc from "./tailoring.png"


function Home() {
    return (
        <div className="Home">
            <div className="Slider">
                <div className="slider-box">

                </div>
            </div>

            <div className="Hero">
                <div className="hero-lower">
                    <div className="home-main">
                        <div className="home-main-div">
                            <div className="home-main-div-left">
                                <img className="main-div-back" src={backOne} />
                            </div>
                            <div className="home-main-div-right">
                                <p className="home-main-head">
                                    Who We Are ?
                                </p>
                                <p className="main-text">
                                    Morbi tempus iaculis urna id volutpat lacus laoreet. Odio morbi quis commodo odio Ut porttitor leo a diam.
                                </p>

                                <button className="read-more" >
                                    Read more
                                </button>
                            </div>


                        </div>

                        <div className="home-main-div ">
                            <div className="home-main-div-right">
                                <p className="home-main-head">
                                    What We Do ?
                                </p>
                                <p className="main-text">
                                    Morbi tempus iaculis urna id volutpat lacus laoreet. Odio morbi quis commodo odio Ut porttitor leo a diam.
                                </p>

                                <button className="read-more" >
                                    Read more
                                </button>
                            </div>
                            <div className="home-main-div-left hmlt">
                                <img className="main-div-back" src={backOne} />
                            </div>



                        </div>
                    </div>

                    <div className="home-features">
                        <div className="home-features-left">
                            <div className="home-features-left-one">
                                <div className="feature">
                                    <img className="fimg" src={sustainable} />
                                    <p className="fname">
                                        Sustainable
                                    </p>
                                    <p className="ftext">
                                        Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                    </p>
                                </div>
                                <div className="feature">
                                    <img className="fimg" src={handc} />
                                    <p className="fname">
                                        Handcrafted
                                    </p>
                                    <p className="ftext">
                                        Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                    </p>
                                </div>
                            </div>
                            <div className="home-features-left-two">
                                <div className="feature">
                                    <img className="fimg" src={csp} />
                                    <p className="fname">
                                        Craftsmenship
                                    </p>
                                    <p className="ftext">
                                        Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                    </p>
                                </div>
                                <div className="feature">
                                    <img className="fimg" src={corder} />
                                    <p className="fname">
                                        Custom Order
                                    </p>
                                    <p className="ftext">
                                        Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="home-features-right">
                            <img className="feature-back-img" src={backOne} />
                        </div>
                    </div>


                    <div className="collection-box">
                        <p className="home-main-head" >Our Collections</p>
                        <div className="collections">
                            <div className="collection wear">
                                <p className="coltext">
                                    WEAR
                                </p>
                            </div>
                            <div className="collection walk">
                                <p className="coltext ">
                                    WALK
                                </p>
                            </div>
                            <div className="collection coplay">
                                <p className="coltext ">
                                    PLAY
                                </p>
                            </div>
                            <div className="collection sleep">
                                <p className="coltext ">
                                    SLEEP
                                </p>
                            </div>
                        </div>
                    </div>



                    <div className="featured-products-box">
                        <div className="home-main-head">
                            Our Bestsellers
                        </div>
                        <div className="featured-products">
                            <div className="fproduct">
                                <div className="fprod-upper">
                                    <img className="prodimg" src={require("./product.png")} />
                                    <div className="prod-desc">
                                        <p className="prod-cat">
                                            Wear
                                        </p>
                                        <p className="prod-name">
                                            Leash and collar combo for every sized dog
                                        </p>
                                        <p className="prod-price">
                                            Rs. 600.00
                                        </p>
                                    </div>
                                </div>
                                <div className="fprod-lower">
                                    <button className="add-cart" >
                                        ADD TO CART
                                    </button>
                                </div>
                            </div>

                            <div className="fproduct">
                                <div className="fprod-upper">
                                    <img className="prodimg" src={require("./product.png")} />
                                    <div className="prod-desc">
                                        <p className="prod-cat">
                                            Wear
                                        </p>
                                        <p className="prod-name">
                                            Leash and collar combo for every sized dog
                                        </p>
                                        <p className="prod-price">
                                            Rs. 600.00
                                        </p>
                                    </div>
                                </div>
                                <div className="fprod-lower">
                                    <button className="add-cart" >
                                        ADD TO CART
                                    </button>
                                </div>
                            </div>

                            <div className="fproduct">
                                <div className="fprod-upper">
                                    <img className="prodimg" src={require("./product.png")} />
                                    <div className="prod-desc">
                                        <p className="prod-cat">
                                            Wear
                                        </p>
                                        <p className="prod-name">
                                            Leash and collar combo for every sized dog
                                        </p>
                                        <p className="prod-price">
                                            Rs. 600.00
                                        </p>
                                    </div>
                                </div>
                                <div className="fprod-lower">
                                    <button className="add-cart" >
                                        ADD TO CART
                                    </button>
                                </div>
                            </div>

                            <div className="fproduct">
                                <div className="fprod-upper">
                                    <img className="prodimg" src={require("./product.png")} />
                                    <div className="prod-desc">
                                        <p className="prod-cat">
                                            Wear
                                        </p>
                                        <p className="prod-name">
                                            Leash and collar combo for every sized dog
                                        </p>
                                        <p className="prod-price">
                                            Rs. 600.00
                                        </p>
                                    </div>
                                </div>
                                <div className="fprod-lower">
                                    <button className="add-cart" >
                                        ADD TO CART
                                    </button>
                                </div>
                            </div>

                        
                    </div>
                </div>







            </div>
        </div>
        </div >
    )
}

export default Home;