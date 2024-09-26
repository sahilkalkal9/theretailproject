import "../../App.scss";
import walk from "./walk.png";
import wear from "./wear.png";
import sleep from "./bed.png";
import play from "./play.png";
import gwalk from "./gwalk.png"
import renewal from "./renewal.png"
import hcf from "./tailoring.png"
import csp from "./scissors.png"
import cor from "./review.png"
import back from "./back.png"
import { useState } from "react";
import { useEffect } from "react";

function Home() {


    const [currentId, setCurrentId] = useState("firstSlide")

    let i = 0;

    const slides = ["firstSlide", "secondSlide", "thirdSlide", "fourthSlide"]

    useEffect(() => {
        const interval = setInterval(() => {
            // Hide the current slide
            document.getElementById(currentId).style.display = "none";

            // Update the currentId to the next slide
            setCurrentId(prevId => {
                const currentIndex = slides.indexOf(prevId);
                const nextIndex = (currentIndex + 1) % slides.length;
                return slides[nextIndex];
            });
        }, 5000);

        return () => clearInterval(interval);
    }, [currentId, slides]);

    // Show the current slide whenever currentId changes
    useEffect(() => {
        document.getElementById(currentId).style.display = "flex";
        if (currentId == "firstSlide") {
            document.getElementsByClassName("limgs")[0].style.display = "none"
            document.getElementsByClassName("rimgs")[0].style.display = "flex"
        }
        else if (currentId == "fourthSlide") {
            document.getElementsByClassName("rimgs")[0].style.display = "none"
            document.getElementsByClassName("limgs")[0].style.display = "flex"
        }
        else {
            document.getElementsByClassName("limgs")[0].style.display = "flex"
            document.getElementsByClassName("rimgs")[0].style.display = "flex"
        }
    }, [currentId]);


    const handleRightSlide = () => {
        document.getElementById(currentId).style.display = "none";
        setCurrentId(prevId => {
            const currentIndex = slides.indexOf(prevId);
            const nextIndex = (currentIndex + 1) % slides.length;
            return slides[nextIndex];
        });
    }

    const handleLeftSlide = () => {
        document.getElementById(currentId).style.display = "none";
        setCurrentId(prevId => {
            const currentIndex = slides.indexOf(prevId);
            const nextIndex = (currentIndex - 1) % slides.length;
            return slides[nextIndex];
        });
    }






    return (
        <div className="Home">
            <div className="slider-box">
                <img onClick={handleLeftSlide} src={back} alt="" className="leftslideimg limgs" />
                <div id="firstSlide" className="first-slide">
                    <p className="fslide-head">
                        Eco Fashion for Pets 1
                    </p>
                    <p className="fslide-tag">
                        Get woodenly artisan chair now & get special offer
                    </p>

                    <button className="grab">
                        Grab Now
                    </button>
                </div>
                <div id="secondSlide" className="first-slide">
                    <p className="fslide-head">
                        Eco Fashion for Pets 2
                    </p>
                    <p className="fslide-tag">
                        Get woodenly artisan chair now & get special offer
                    </p>

                    <button className="grab">
                        Grab Now
                    </button>
                </div>
                <div id="thirdSlide" className="first-slide">
                    <p className="fslide-head">
                        Eco Fashion for Pets 3
                    </p>
                    <p className="fslide-tag">
                        Get woodenly artisan chair now & get special offer
                    </p>

                    <button className="grab">
                        Grab Now
                    </button>
                </div>
                <div id="fourthSlide" className="first-slide">
                    <p className="fslide-head">
                        Eco Fashion for Pets 4
                    </p>
                    <p className="fslide-tag">
                        Get woodenly artisan chair now & get special offer
                    </p>

                    <button className="grab">
                        Grab Now
                    </button>
                </div>

                <img onClick={handleRightSlide} src={back} alt="" className="leftslideimg rimgs" />

            </div>
            <div className="home-lower">

                {/* <div className="content-div">
                    <marquee className="marquee" direction="left" scrollamount="5" >
                        <div className="features">
                            <p className="feature">First feature</p>
                            <p className="feature">Second feature</p>
                            <p className="feature">Third feature</p>
                            <p className="feature">Four feature</p>
                            <p className="feature">Five feature</p>
                        </div>
                    </marquee>
                </div> */}

                <div className="content-div">
                    <p className="head" >Our Features</p>
                    {/* <marquee className="marqueea" direction="left" scrollamount="10" > */}
                        <div className="featuresM ">

                            <div className="featureM">
                                <img className="fmimg" src={renewal} />
                                <p className="ftext">Sustainable</p>
                            </div>
                            <div className="featureM">
                                <img className="fmimg" src={hcf} />
                                <p className="ftext">Handcrafted</p>
                            </div>
                            <div className="featureM">
                                <img className="fmimg" src={csp} />
                                <p className="ftext">Local Craftsmenship</p>
                            </div>
                            <div className="featureM">
                                <img className="fmimg" src={cor} />
                                <p className="ftext">Custom Order</p>
                            </div>





                        </div>
                    {/* </marquee> */}

                </div>

                <div className="content-div">
                    <p className="head" >Our Collections</p>
                    <div className=" OcollectionsM ">

                        <div className="collection fc">
                            <p className="ctext"> Wear</p>
                        </div>
                        <div className="collection sc">
                            <p className="ctext"> Play</p>
                        </div>
                        <div className="collection tc">
                            <p className="ctext"> Sleep</p>
                        </div>
                        <div className="collection foc">
                            <p className="ctext"> Walk</p>
                        </div>

                    </div>
                </div>

                <div className="content-div ">
                    <p className="head" >Featured Products</p>
                    <div className="content" >
                        {/* <p className="fptext">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p> */}



                        <div className="fproducts">
                            <div className="product">
                                <img className="product-img" src={gwalk} />

                                <div className="prod-lower">
                                    <p className="product-name">
                                        Collars and leash for dogs
                                    </p>

                                    <div className="price-div">
                                        <p className="price">
                                            ₹ 600
                                        </p>
                                        <p className="cut-price">
                                            ₹ 1300
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="product">
                                <img className="product-img" src={gwalk} />

                                <div className="prod-lower">
                                    <p className="product-name">
                                        Collars and leash for dogs
                                    </p>

                                    <div className="price-div">
                                        <p className="price">
                                            ₹ 600
                                        </p>
                                        <p className="cut-price">
                                            ₹ 1300
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="product">
                                <img className="product-img" src={gwalk} />

                                <div className="prod-lower">
                                    <p className="product-name">
                                        Collars and leash for dogs
                                    </p>

                                    <div className="price-div">
                                        <p className="price">
                                            ₹ 600
                                        </p>
                                        <p className="cut-price">
                                            ₹ 1300
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="product">
                                <img className="product-img" src={gwalk} />

                                <div className="prod-lower">
                                    <p className="product-name">
                                        Collars and leash for dogs
                                    </p>

                                    <div className="price-div">
                                        <p className="price">
                                            ₹ 600
                                        </p>
                                        <p className="cut-price">
                                            ₹ 1300
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>



                    </div>
                </div>

                <div className="content-div ">
                    <p className="head" >The Gram Fam</p>
                    <div className="content" >
                        {/* <p className="fptext">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p> */}



                        <div className="gramMaim">
                            <div className="gramBox">
                                <div className="gram">
                                    <img className="gramImg" src={gwalk} />
                                </div>
                                <div className="gram">
                                    <img className="gramImg" src={gwalk} />
                                </div>
                                <div className="gram">
                                    <img className="gramImg" src={gwalk} />
                                </div>
                                <div className="gram">
                                    <img className="gramImg" src={gwalk} />
                                </div>
                                <div className="gram">
                                    <img className="gramImg" src={gwalk} />
                                </div>
                                <div className="gram">
                                    <img className="gramImg" src={gwalk} />
                                </div>
                                <div className="gram">
                                    <img className="gramImg" src={gwalk} />
                                </div>
                                <div className="gram">
                                    <img className="gramImg" src={gwalk} />
                                </div>
                                <div className="gram">
                                    <img className="gramImg" src={gwalk} />
                                </div>

                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;