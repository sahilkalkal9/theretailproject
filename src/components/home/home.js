import "./home.scss"
import backOne from "./imageO.webp"
import backTwo from "./imageT.webp"


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
                </div>
            </div>
        </div>
    )
}

export default Home;