import "./home.scss"
import backOne from "./home-back-one.jpg"
import backTwo from "./home-back-two.jpg"
import csp from "./scissors.png"
import sustainable from "./renewal.png"
import corder from "./review.png"
import handc from "./tailoring.png"
import { useEffect, useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Autoplay } from "swiper/modules"
import { Link } from "react-router-dom"



function NextArrow(props) {
    const { onClick } = props;
    return (
        <img src={require("./next.png")} onClick={onClick} alt="" className="transformed" />
    );
}

function PrevArrow(props) {
    const { onClick } = props;
    return (
        <img src={require("./next.png")} onClick={onClick} alt="" className="transformed transformedR" />
    );
}


function NextArrowHome(props) {
    const { onClick } = props;
    return (
        <img src={require("./next.png")} onClick={onClick} alt="" className="transformed transformedR thh" />
    );
}

function PrevArrowHome(props) {
    const { onClick } = props;
    return (
        <img src={require("./next.png")} onClick={onClick} alt="" className="transformed  thh thhr" />
    );
}




function Home() {




    const slides = [
        { img: "slide-one-before.jpg", img2: "slide-one-after.jpg" },
        { img: "slide-two-before.jpg", img2: "slide-two-after.jpg" },
        { img: "slide-three-before.jpg", img2: "slide-three-after.jpg" },
        { img: "slide-four-before.jpg", img2: "slide-four-after.jpg" },
        { img: "slide-five-before.jpg", img2: "slide-five-after.jpg" },
        { img: "slide-six-before.jpg", img2: "slide-six-after.jpg" }
    ];
    const settingsT = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 5000,
    }





    const settingsF = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,

        autoplay: true,
        speed: 1000,
        autoplaySpeed: 5000,
        arrows: false
    }







    const mainSlider = [
        {
            img: require("./home-one.jpg"),
            title: "Custom Tailoring"
        },
        {
            img: require("./home-two.JPG"),
            title: "Preserve Memories"
        },
        {
            img: require("./home-three.jpg"),
            title: "Sustainable Pet Fashion"
        },
        {
            img: require("./home-four.jpg"),
            title: "Made with Love & Care"
        },
    ]




    return (
        <div className="Home">
            <Slider {...settingsF} className="SliderCusHome">

                {
                    mainSlider.map((m) => (
                        <div className="slider-maincus">
                            <img src={m.img} alt="" className="slider-main-imgcus" />
                            <p className="main-slider-captioncus">
                                {
                                    m.title
                                }
                            </p>
                        </div>
                    ))
                }

            </Slider>

            <div className="Hero">
                <div className="hero-lower">
                    <div className="home-main">
                        <div className="home-main-div">
                            <div className="home-main-div-left">
                                <img className="main-div-back hbone" src={backOne} />
                            </div>
                            <div className="home-main-div-right">
                                <p className="home-main-head">
                                    Who We Are ?
                                </p>
                                <p className="main-text">
                                    The ReTail Project is a conscious pet brand that customizes pet clothing, accessories, bedding and toys offering eco-friendly, personalized designs.
                                    <br /><br />
                                    With our own product range and a focus on upcycling, we bring sustainability and style together for pet parents who care about the planet.
                                </p>

                                <button className="read-more" >
                                    Read more
                                </button>
                            </div>


                        </div>

                        <div className="home-main-div htwoow">
                            <div className="home-main-div-right">
                                <p className="home-main-head">
                                    What We Do ?
                                </p>
                                <p className="main-text">
                                    The ReTail Project is all about giving pet parents the opportunity to breathe new life into their pre-owned items by transforming them into customized, eco-friendly products for their pets.
                                    <br /><br />We take materials that would otherwise go unused and upcycle them into unique, tailor-made pet products. This way, we not only help reduce waste but also create a stronger connection with our community, as each product is personal and sustainable.
                                </p>

                                <button className="read-more">
                                    Read more
                                </button>
                            </div>
                            <div className="home-main-div-left hmltt">
                                <img className="main-div-back hbone" src={backTwo} />
                            </div>



                        </div>
                    </div>

                    {/* <div className="home-features">


                        <div className="home-features-left-box">
                            <p className="home-main-head fhmm">Our Features</p>

                            <div className="home-features-new-ssd">
                                <div className="feature">
                                    <img className="fimg" src={sustainable} />
                                    <p className="fname">
                                        Sustainable
                                    </p>

                                </div>
                                <div className="feature">
                                    <img className="fimg" src={handc} />
                                    <p className="fname">
                                        Handcrafted
                                    </p>

                                </div>
                                <div className="feature">
                                    <img className="fimg" src={csp} />
                                    <p className="fname">
                                        Craftsmenship
                                    </p>

                                </div>
                                <div className="feature">
                                    <img className="fimg" src={corder} />
                                    <p className="fname">
                                        Custom Order
                                    </p>

                                </div>
                            </div>

                        </div>



                    </div> */}


                    <div className="collection-box">
                        <p className="home-main-head" >Our Collections</p>
                        <div className="collections">
                            <Link to="/shop/wear">
                                <div className="collection wear">
                                    <p className="coltext">
                                        WEAR
                                    </p>
                                </div>
                            </Link>
                            <Link to="/shop/walk">
                                <div className="collection walk">
                                    <p className="coltext ">
                                        WALK
                                    </p>
                                </div>
                            </Link>
                            <Link to='/shop/play'>
                                <div className="collection coplay">
                                    <p className="coltext ">
                                        PLAY
                                    </p>
                                </div>
                            </Link>
                            <Link to='/shop/sleep'>
                                <div className="collection sleep">
                                    <p className="coltext ">
                                        SLEEP
                                    </p>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="transformations">
                        <p className="home-main-head">
                            Our Transformations
                        </p>




                        <Slider {...settingsT} className="slick-slider-custom" >
                            {
                                slides.map((s) => (
                                    <div className="slick-slide-custom">


                                        <div className="slide-left">
                                            <img className="slide-left-img" src={require(`./${s.img}`)} />
                                            <p className="before">
                                                Before
                                            </p>
                                        </div>


                                        <div className="slide-right">
                                            <img className="slide-left-img" src={require(`./${s.img2}`)} />
                                            <p className="after">
                                                After
                                            </p>
                                        </div>
                                    </div>
                                ))
                            }
                        </Slider>




                    </div>







                    <div className="featured-products-box">
                        <div className="home-main-head">
                            Our Bestsellers
                        </div>
                        <div className="featured-products">
                            <div className="fproduct">
                                <div className="fprod-upper">
                                    <img className="prodimg" src={require("./bone.jpg")} />
                                    <div className="prod-desc">
                                        <p className="prod-cat">
                                            SLEEP
                                        </p>
                                        <p className="prod-name">
                                            Patch Pet Bed
                                        </p>
                                        <p className="prod-price">
                                            ₹ 999 - ₹ 2499
                                        </p>
                                    </div>
                                </div>
                                <div className="fprod-lower">
                                    <Link to='/shop/sleep'>
                                        <button className="add-cart" >
                                            View
                                        </button>
                                    </Link>
                                </div>
                            </div>

                            <div className="fproduct">
                                <div className="fprod-upper">
                                    <img className="prodimg" src={require("./btwo.jpg")} />
                                    <div className="prod-desc">
                                        <p className="prod-cat">
                                            WEAR
                                        </p>
                                        <p className="prod-name">
                                            Festive Frock
                                        </p>
                                        <p className="prod-price">
                                            ₹ 599 - ₹ 799
                                        </p>
                                    </div>
                                </div>
                                <div className="fprod-lower">
                                    <Link to='/shop/wear'>
                                        <button className="add-cart" >
                                            View
                                        </button>
                                    </Link>
                                </div>
                            </div>

                            <div className="fproduct">
                                <div className="fprod-upper">
                                    <img className="prodimg" src={require("./bthree.jpg")} />
                                    <div className="prod-desc">
                                        <p className="prod-cat">
                                            PLAY
                                        </p>
                                        <p className="prod-name">
                                            Tug Rope
                                        </p>
                                        <p className="prod-price">
                                            ₹ 250
                                        </p>
                                    </div>
                                </div>
                                <div className="fprod-lower">
                                    <Link to='/shop/play'>
                                        <button className="add-cart" >
                                            View
                                        </button>
                                    </Link>
                                </div>
                            </div>

                            <div className="fproduct">
                                <div className="fprod-upper">
                                    <img className="prodimg" src={require("./bfour.jpg")} />
                                    <div className="prod-desc">
                                        <p className="prod-cat">
                                            WALK
                                        </p>
                                        <p className="prod-name">
                                            Harness and leash set
                                        </p>
                                        <p className="prod-price">
                                            ₹ 850 - ₹ 1200
                                        </p>
                                    </div>
                                </div>
                                <div className="fprod-lower">
                                    <Link to='/shop/walk'>
                                        <button className="add-cart" >
                                            View
                                        </button>
                                    </Link>
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