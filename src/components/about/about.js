import "./about.scss"

function About() {
    return (
        <div className="About">
            <div className="about-lower">
                <div className="about-one">
                    <div className="about-one-left">
                        {/* <p className="small-head">
                            About Us
                        </p> */}
                        <p className="about-head">
                            Conscious Canine Living: Sustainably Yours
                        </p>
                        <div className="about-desc">
                            <p className="about-text">
                                We offer eco-friendly, customizable pet products, meticulously crafted from
                                recycled materials to suit your furry friend's unique style and needs.
                            </p>
                            <p className="about-text">
                                We aspire to weave a narrative of love, sustainability,and the enduring
                                connection we share with our animal companions.

                            </p>
                            <p className="about-text">
                                Our mission is to revolutionize the pet industry by promoting sustainability,
                                creativity,and compassion.

                            </p>
                        </div>
                    </div>
                    <div className="about-one-right">
                        <img className="about-one-img" src={require("./01.jpg")} />
                        <img className="about-one-img" src={require("./02.jpg")} />
                        <img className="about-one-img" src={require("./03.jpg")} />
                        <img className="about-one-img" src={require("./04.jpg")} />
                    </div>
                </div>

                <div className="about-two">
                    <div className="about-two-left">
                        <img className="founder-img" src={require("./01.jpg")} />
                    </div>
                    <div className="about-two-right">
                        <img className="qoute" src={require("./quote.png")} />

                        <div className="founder-desc">
                            <p className="founder-text">
                                I want to build a brand that prioritizes mindful and aware practices in caring for dogs with
                                every stich while emphasizing a commitment to sustainability.
                            </p>

                        </div>
                        <div className="about-founder">
                            <p className="foname">
                                Mahima Chauhan Bindal
                            </p>
                            <p className="fopost">
                                CEO
                            </p>
                        </div>
                    </div>
                </div>
                <div className="about-three">
                    <p className="about-three-head">
                        Why People Choose Their Pet Comfort With Us
                    </p>

                    <div className="about-three-points">
                        <div className="about-three-point">
                            <img className="about-point-img" src={require("./quality.png")} />
                            <div className="about-point-right">
                                <p className="about-point-head">
                                    Quality
                                </p>
                                <p className="about-point-text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing tempora pariatur provident animi error dignissimo cumque minus facere dolores cupiditate debitis
                                </p>
                            </div>

                        </div>

                        <div className="about-three-point">
                            <img className="about-point-img" src={require("./planning.png")} />
                            <div className="about-point-right">
                                <p className="about-point-head">
                                    Planning
                                </p>
                                <p className="about-point-text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing tempora pariatur provident animi error dignissimo cumque minus facere dolores cupiditate debitis
                                </p>
                            </div>

                        </div>

                        <div className="about-three-point">
                            <img className="about-point-img" src={require("./designing.png")} />
                            <div className="about-point-right">
                                <p className="about-point-head">
                                    Designing
                                </p>
                                <p className="about-point-text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing tempora pariatur provident animi error dignissimo cumque minus facere dolores cupiditate debitis
                                </p>
                            </div>

                        </div>

                        <div className="about-three-point">
                            <img className="about-point-img" src={require("./production.png")} />
                            <div className="about-point-right">
                                <p className="about-point-head">
                                    Production
                                </p>
                                <p className="about-point-text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing tempora pariatur provident animi error dignissimo cumque minus facere dolores cupiditate debitis
                                </p>
                            </div>

                        </div>
                    </div>
                </div>


                <div className="about-four">
                    <div className="about-four-text-sec">
                        <p className="about-four-head">
                            Get 10% Discount For Subscriber
                        </p>
                        <p className="about-four-text">

                        </p>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default About;