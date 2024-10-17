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


    const slides = [
        {
            id: 'firstSlide',
            heading: 'Eco Fashion for Pets 1',
            tag: 'Get woodenly artisan chair now & get special offer',
            buttonText: 'Grab Now',
        },
        {
            id: 'secondSlide',
            heading: 'Eco Fashion for Pets 2',
            tag: 'Get woodenly artisan chair now & get special offer',
            buttonText: 'Grab Now',
        },
        {
            id: 'thirdSlide',
            heading: 'Eco Fashion for Pets 3',
            tag: 'Get woodenly artisan chair now & get special offer',
            buttonText: 'Grab Now',
        },
        {
            id: 'fourthSlide',
            heading: 'Eco Fashion for Pets 4',
            tag: 'Get woodenly artisan chair now & get special offer',
            buttonText: 'Grab Now',
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(false);

    // Auto-slide every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            handleNext(); // Trigger next slide on interval
        }, 5000);

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    const handleNext = () => {
        setFade(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
            setFade(false);
        }, 300); // Duration matches the fade-out duration
    };

    const handlePrevious = () => {
        setFade(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
            setFade(false);
        }, 300); // Duration matches the fade-out duration
    };






    return (
        <div className="Home">
            <div className="slider-box">
                <img onClick={handlePrevious} src="left-arrow.png" alt="Previous" className="leftslideimg" />

                <div className={`first-slide ${fade ? 'fade-out' : 'fade-in'}`}>
                    <p className="fslide-head">{slides[currentIndex].heading}</p>
                    <p className="fslide-tag">{slides[currentIndex].tag}</p>
                    <button className="grab">{slides[currentIndex].buttonText}</button>
                </div>

                <img onClick={handleNext} src="right-arrow.png" alt="Next" className="rightslideimg" />
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
                            <div className="fmimgbox">
                                <img className="fmimg" src={renewal} />
                            </div>
                            <p className="ftext">Sustainable</p>
                        </div>
                        <div className="featureM">

                            <div className="fmimgbox">
                                <img className="fmimg" src={hcf} />
                            </div> 
                            <p className="ftext">Handcrafted</p>
                        </div>
                        <div className="featureM">

                            <div className="fmimgbox">
                                <img className="fmimg" src={csp} />
                            </div>
                            <p className="ftext">Local Craftsmenship</p>
                        </div>
                        <div className="featureM">

                            <div className="fmimgbox">
                                <img className="fmimg" src={cor} />
                            </div>
                            <p className="ftext">Custom Order</p>
                        </div>





                    </div>
                    {/* </marquee> */}

                </div>

                {/* <div className="content-div">
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
                </div> */}

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

                {/* <div className="content-div ">
                    <p className="head" >The Gram Fam</p>
                    <div className="content" >
                     



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
                </div> */}
            </div>
        </div>
    )
}

export default Home;