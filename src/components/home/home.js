import "./home.scss"
import backOne from "./home-back-one.jpg"
import backTwo from "./home-back-two.jpg"
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

                        <div className="home-main-div ">
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
                            <div className="home-main-div-left hmlt">
                                <img className="main-div-back" src={backTwo} />
                            </div>



                        </div>
                    </div>

                    <div className="home-features">


                        <div className="home-features-left-box">
                            <p className="home-main-head fhmm">Our Features</p>
                            <marquee>
                                <div className="home-features-left">
                                    <div className="feature">
                                        <img className="fimg" src={sustainable} />
                                        <p className="fname">
                                            Sustainable
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={handc} />
                                        <p className="fname">
                                            Handcrafted
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={csp} />
                                        <p className="fname">
                                            Craftsmenship
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={corder} />
                                        <p className="fname">
                                            Custom Order
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={sustainable} />
                                        <p className="fname">
                                            Sustainable
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={handc} />
                                        <p className="fname">
                                            Handcrafted
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={csp} />
                                        <p className="fname">
                                            Craftsmenship
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={corder} />
                                        <p className="fname">
                                            Custom Order
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={sustainable} />
                                        <p className="fname">
                                            Sustainable
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={handc} />
                                        <p className="fname">
                                            Handcrafted
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={csp} />
                                        <p className="fname">
                                            Craftsmenship
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={corder} />
                                        <p className="fname">
                                            Custom Order
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={sustainable} />
                                        <p className="fname">
                                            Sustainable
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={handc} />
                                        <p className="fname">
                                            Handcrafted
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={csp} />
                                        <p className="fname">
                                            Craftsmenship
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={corder} />
                                        <p className="fname">
                                            Custom Order
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={sustainable} />
                                        <p className="fname">
                                            Sustainable
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={handc} />
                                        <p className="fname">
                                            Handcrafted
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={csp} />
                                        <p className="fname">
                                            Craftsmenship
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={corder} />
                                        <p className="fname">
                                            Custom Order
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={sustainable} />
                                        <p className="fname">
                                            Sustainable
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={handc} />
                                        <p className="fname">
                                            Handcrafted
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={csp} />
                                        <p className="fname">
                                            Craftsmenship
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={corder} />
                                        <p className="fname">
                                            Custom Order
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={sustainable} />
                                        <p className="fname">
                                            Sustainable
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={handc} />
                                        <p className="fname">
                                            Handcrafted
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={csp} />
                                        <p className="fname">
                                            Craftsmenship
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={corder} />
                                        <p className="fname">
                                            Custom Order
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={sustainable} />
                                        <p className="fname">
                                            Sustainable
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={handc} />
                                        <p className="fname">
                                            Handcrafted
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={csp} />
                                        <p className="fname">
                                            Craftsmenship
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={corder} />
                                        <p className="fname">
                                            Custom Order
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={sustainable} />
                                        <p className="fname">
                                            Sustainable
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={handc} />
                                        <p className="fname">
                                            Handcrafted
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={csp} />
                                        <p className="fname">
                                            Craftsmenship
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={corder} />
                                        <p className="fname">
                                            Custom Order
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={sustainable} />
                                        <p className="fname">
                                            Sustainable
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={handc} />
                                        <p className="fname">
                                            Handcrafted
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={csp} />
                                        <p className="fname">
                                            Craftsmenship
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={corder} />
                                        <p className="fname">
                                            Custom Order
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={sustainable} />
                                        <p className="fname">
                                            Sustainable
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={handc} />
                                        <p className="fname">
                                            Handcrafted
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={csp} />
                                        <p className="fname">
                                            Craftsmenship
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={corder} />
                                        <p className="fname">
                                            Custom Order
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={sustainable} />
                                        <p className="fname">
                                            Sustainable
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={handc} />
                                        <p className="fname">
                                            Handcrafted
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={csp} />
                                        <p className="fname">
                                            Craftsmenship
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={corder} />
                                        <p className="fname">
                                            Custom Order
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={sustainable} />
                                        <p className="fname">
                                            Sustainable
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={handc} />
                                        <p className="fname">
                                            Handcrafted
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={csp} />
                                        <p className="fname">
                                            Craftsmenship
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={corder} />
                                        <p className="fname">
                                            Custom Order
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={sustainable} />
                                        <p className="fname">
                                            Sustainable
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={handc} />
                                        <p className="fname">
                                            Handcrafted
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={csp} />
                                        <p className="fname">
                                            Craftsmenship
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={corder} />
                                        <p className="fname">
                                            Custom Order
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={sustainable} />
                                        <p className="fname">
                                            Sustainable
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={handc} />
                                        <p className="fname">
                                            Handcrafted
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={csp} />
                                        <p className="fname">
                                            Craftsmenship
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={corder} />
                                        <p className="fname">
                                            Custom Order
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={sustainable} />
                                        <p className="fname">
                                            Sustainable
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={handc} />
                                        <p className="fname">
                                            Handcrafted
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={csp} />
                                        <p className="fname">
                                            Craftsmenship
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={corder} />
                                        <p className="fname">
                                            Custom Order
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={sustainable} />
                                        <p className="fname">
                                            Sustainable
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={handc} />
                                        <p className="fname">
                                            Handcrafted
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={csp} />
                                        <p className="fname">
                                            Craftsmenship
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={corder} />
                                        <p className="fname">
                                            Custom Order
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={sustainable} />
                                        <p className="fname">
                                            Sustainable
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={handc} />
                                        <p className="fname">
                                            Handcrafted
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={csp} />
                                        <p className="fname">
                                            Craftsmenship
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={corder} />
                                        <p className="fname">
                                            Custom Order
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={sustainable} />
                                        <p className="fname">
                                            Sustainable
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={handc} />
                                        <p className="fname">
                                            Handcrafted
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={csp} />
                                        <p className="fname">
                                            Craftsmenship
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={corder} />
                                        <p className="fname">
                                            Custom Order
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={sustainable} />
                                        <p className="fname">
                                            Sustainable
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={handc} />
                                        <p className="fname">
                                            Handcrafted
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={csp} />
                                        <p className="fname">
                                            Craftsmenship
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={corder} />
                                        <p className="fname">
                                            Custom Order
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={sustainable} />
                                        <p className="fname">
                                            Sustainable
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={handc} />
                                        <p className="fname">
                                            Handcrafted
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={csp} />
                                        <p className="fname">
                                            Craftsmenship
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={corder} />
                                        <p className="fname">
                                            Custom Order
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={sustainable} />
                                        <p className="fname">
                                            Sustainable
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={handc} />
                                        <p className="fname">
                                            Handcrafted
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={csp} />
                                        <p className="fname">
                                            Craftsmenship
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={corder} />
                                        <p className="fname">
                                            Custom Order
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={sustainable} />
                                        <p className="fname">
                                            Sustainable
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={handc} />
                                        <p className="fname">
                                            Handcrafted
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={csp} />
                                        <p className="fname">
                                            Craftsmenship
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={corder} />
                                        <p className="fname">
                                            Custom Order
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={sustainable} />
                                        <p className="fname">
                                            Sustainable
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={handc} />
                                        <p className="fname">
                                            Handcrafted
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={csp} />
                                        <p className="fname">
                                            Craftsmenship
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={corder} />
                                        <p className="fname">
                                            Custom Order
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={sustainable} />
                                        <p className="fname">
                                            Sustainable
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={handc} />
                                        <p className="fname">
                                            Handcrafted
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={csp} />
                                        <p className="fname">
                                            Craftsmenship
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={corder} />
                                        <p className="fname">
                                            Custom Order
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={sustainable} />
                                        <p className="fname">
                                            Sustainable
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={handc} />
                                        <p className="fname">
                                            Handcrafted
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={csp} />
                                        <p className="fname">
                                            Craftsmenship
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={corder} />
                                        <p className="fname">
                                            Custom Order
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={sustainable} />
                                        <p className="fname">
                                            Sustainable
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={handc} />
                                        <p className="fname">
                                            Handcrafted
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={csp} />
                                        <p className="fname">
                                            Craftsmenship
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={corder} />
                                        <p className="fname">
                                            Custom Order
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={sustainable} />
                                        <p className="fname">
                                            Sustainable
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={handc} />
                                        <p className="fname">
                                            Handcrafted
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={csp} />
                                        <p className="fname">
                                            Craftsmenship
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={corder} />
                                        <p className="fname">
                                            Custom Order
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={sustainable} />
                                        <p className="fname">
                                            Sustainable
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={handc} />
                                        <p className="fname">
                                            Handcrafted
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={csp} />
                                        <p className="fname">
                                            Craftsmenship
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={corder} />
                                        <p className="fname">
                                            Custom Order
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={sustainable} />
                                        <p className="fname">
                                            Sustainable
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={handc} />
                                        <p className="fname">
                                            Handcrafted
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={csp} />
                                        <p className="fname">
                                            Craftsmenship
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={corder} />
                                        <p className="fname">
                                            Custom Order
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={sustainable} />
                                        <p className="fname">
                                            Sustainable
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={handc} />
                                        <p className="fname">
                                            Handcrafted
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={csp} />
                                        <p className="fname">
                                            Craftsmenship
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={corder} />
                                        <p className="fname">
                                            Custom Order
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={sustainable} />
                                        <p className="fname">
                                            Sustainable
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={handc} />
                                        <p className="fname">
                                            Handcrafted
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={csp} />
                                        <p className="fname">
                                            Craftsmenship
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={corder} />
                                        <p className="fname">
                                            Custom Order
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={sustainable} />
                                        <p className="fname">
                                            Sustainable
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={handc} />
                                        <p className="fname">
                                            Handcrafted
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={csp} />
                                        <p className="fname">
                                            Craftsmenship
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={corder} />
                                        <p className="fname">
                                            Custom Order
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={sustainable} />
                                        <p className="fname">
                                            Sustainable
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={handc} />
                                        <p className="fname">
                                            Handcrafted
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={csp} />
                                        <p className="fname">
                                            Craftsmenship
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={corder} />
                                        <p className="fname">
                                            Custom Order
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={sustainable} />
                                        <p className="fname">
                                            Sustainable
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={handc} />
                                        <p className="fname">
                                            Handcrafted
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={csp} />
                                        <p className="fname">
                                            Craftsmenship
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={corder} />
                                        <p className="fname">
                                            Custom Order
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={sustainable} />
                                        <p className="fname">
                                            Sustainable
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={handc} />
                                        <p className="fname">
                                            Handcrafted
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={csp} />
                                        <p className="fname">
                                            Craftsmenship
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={corder} />
                                        <p className="fname">
                                            Custom Order
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={sustainable} />
                                        <p className="fname">
                                            Sustainable
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={handc} />
                                        <p className="fname">
                                            Handcrafted
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={csp} />
                                        <p className="fname">
                                            Craftsmenship
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={corder} />
                                        <p className="fname">
                                            Custom Order
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div> <div className="feature">
                                        <img className="fimg" src={sustainable} />
                                        <p className="fname">
                                            Sustainable
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={handc} />
                                        <p className="fname">
                                            Handcrafted
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={csp} />
                                        <p className="fname">
                                            Craftsmenship
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>
                                    <div className="feature">
                                        <img className="fimg" src={corder} />
                                        <p className="fname">
                                            Custom Order
                                        </p>
                                        {/* <p className="ftext">
                                            Rhuese uyeres seres dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut
                                        </p> */}
                                    </div>

                                    
                                    

                                </div>
                            </marquee>
                        </div>

                        {/* <div className="home-features-right">
                            <img className="feature-back-img" src={require("./fbimg.jpg")} />
                        </div> */}

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
                                {/* <div className="fprod-lower">
                                    <button className="add-cart" >
                                        ADD TO CART
                                    </button>
                                </div> */}
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
                                {/* <div className="fprod-lower">
                                    <button className="add-cart" >
                                        ADD TO CART
                                    </button>
                                </div> */}
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
                                {/* <div className="fprod-lower">
                                    <button className="add-cart" >
                                        ADD TO CART
                                    </button>
                                </div> */}
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
                                {/* <div className="fprod-lower">
                                    <button className="add-cart" >
                                        ADD TO CART
                                    </button>
                                </div> */}
                            </div>


                        </div>
                    </div>







                </div>
            </div>
        </div >
    )
}

export default Home;