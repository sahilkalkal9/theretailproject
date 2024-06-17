import "../../App.scss";
import walk from "./walk.png";
import wear from "./wear.png";
import sleep from "./bed.png";
import play from "./play.png";
import gwalk from "./gwalk.png"
import renewal from "./rew.png"

function Home() {
    return (
        <div className="Home">
            <div className="slider-box">

            </div>
            <div className="home-lower">
                <div className="content-div">
                    <marquee className="marquee" direction="left" scrollamount="5" >
                        <div className="features">
                            <p className="feature">First feature</p>
                            <p className="feature">Second feature</p>
                            <p className="feature">Third feature</p>
                            <p className="feature">Four feature</p>
                            <p className="feature">Five feature</p>
                        </div>
                    </marquee>
                </div>

                <div className="content-div">
                    <p className="head" >Our Features</p>
                    <div className="featuresM ">

                        <div className="featureM">
                            <img className="fmimg" src={renewal} />
                            <p className="ftext">Renewal</p>
                        </div>
                        <div className="featureM">
                            <img className="fmimg" />
                        </div>
                        <div className="featureM">
                            <img className="fmimg" />
                        </div>
                        <div className="featureM">
                            <img className="fmimg" />
                        </div>
                        <div className="featureM">
                            <img className="fmimg" />
                        </div>



                    </div>
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
                        <p className="fptext">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>



                        <div className="fproducts">
                            <div className="fprod">
                                <img src={walk} alt="product image" className="fprodimg" />
                                <div className="fprodlower">
                                    <p className="fprodname">Leash and Collar</p>
                                    <p className="fprodprice">$35</p>
                                    <button className="fprodcart">Add to cart</button>
                                </div>
                            </div>
                            <div className="fprod">
                                <img src={wear} alt="product image" className="fprodimg" />
                                <div className="fprodlower">
                                    <p className="fprodname">Bandana</p>
                                    <p className="fprodprice">$50</p>
                                    <button className="fprodcart">Add to cart</button>
                                </div>
                            </div>
                            <div className="fprod">
                                <img src={play} alt="product image" className="fprodimg" />
                                <div className="fprodlower">
                                    <p className="fprodname">Soft Bone Toy</p>
                                    <p className="fprodprice">$30</p>
                                    <button className="fprodcart">Add to cart</button>
                                </div>
                            </div>
                            <div className="fprod">
                                <img src={sleep} alt="product image" className="fprodimg" />
                                <div className="fprodlower">
                                    <p className="fprodname">Comfortable Warm Dog Bed</p>
                                    <p className="fprodprice">$60</p>
                                    <button className="fprodcart">Add to cart</button>
                                </div>
                            </div>

                        </div>



                    </div>
                </div>

                <div className="content-div ">
                    <p className="head" >The Gram Fam</p>
                    <div className="content" >
                        <p className="fptext">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>



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