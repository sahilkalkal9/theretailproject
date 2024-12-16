import "./about.scss"

function About() {
    return (
        <div className="About">
            <div className="about-lower">
                <p className="about-head-main">
                    About Us
                </p>
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
                                <br />
                                <b>Our Vision</b>
                                <br />
                                We aspire to weave a narrative of love, sustainability,and the enduring
                                connection we share with our animal companions.

                            </p>
                            <p className="about-text">
                                <br />
                                <b>Our Mission</b>
                                <br />
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
                        <img className="founder-img" src={require("./founder.jpg")} />
                    </div>
                    <div className="about-two-right">
                        <img className="qoute" src={require("./quote.png")} />

                        <div className="founder-desc">
                            <p className="founder-text">
                                My love for pets and my commitment to sustainable living are at the heart of everything we do. Each product is not just a step towards a more eco-friendly world, but also a reflection of the unconditional love and joy that pets bring into our lives.


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



                <div className="about-misc">
                    <p className="about-misc-head">
                        Our Story
                    </p>
                    <p className="about-story-text" >
                        The ReTail Project: A Tale of Love, Recycling, and Compassion
                        <br /><br />
                        Once upon a time,in a world where passion met purpose,there existed a
                        profound bond between siblings,Saurabh and Mahima.Their shared love for
                        animals ignited a flame that burned brightly in their hearts.When tragedy
                        struck and Saurabh transcended to another realm, Mahima was left with a
                        void, yet also with a determination to honour his memory in a meaningful
                        way.
                        <br /><br />
                        In the depths of grief, inspiration blossomed The ReTail Project.Mahima
                        found solace and purpose in merging her fervour for recycling waste
                        materials with the unconditional love shared with her pets.Thus, the ReTail
                        project was born — a testament to the enduring bond between humans and
                        animals, and a tribute to the legacy of Saurabh Bhaiya, Chloe and Brida who
                        continue to inspire her with their unwavering spirit.
                        <br /><br />
                        Fuelled by passion and driven by a desire to make a positive impact, I
                        embarked on a journey to turn waste into wonder. Through innovative
                        recycling techniques and a commitment to sustainability, The ReTail Project
                        transformed discarded materials into high - quality pet products, each in fused
                        with love and compassion.
                        <br /><br />
                        But The ReTail Project is more than just a business — it is a beacon of hope, a
                        symbol of resilience, and a reminder that even in the face of loss, love endures.
                        With each purchase, customers not only gain a product but also become part
                        of a larger movement — a movement fueled by love for animals, respect for
                        the environment, and a shared commitment to making the world a better
                        place.
                        <br /><br />
                        As the story of The ReTail Project unfolded, it became clear that its success
                        was not measured solely by profits, but by the lives touched, the smiles
                        created, and the memories cherished. For in the tapestry of life, every thread — no matter how small — holds the potential to weave a story of love,
                        compassion, and hope. And in the hearts of those who dared to dream, The
                        ReTail Project would forever remain a testament to the power of love to
                        overcome even the greatest of challenges.

                    </p>
                </div>






                <div className="about-three">
                    <p className="about-three-head">
                        Why Choose Us ?
                    </p>

                    <div className="about-three-points">
                        <div className="about-three-point">
                            <img className="about-point-img" src={require("./quality.png")} />
                            <div className="about-point-right">
                                <p className="about-point-head">
                                    Sustainability at Our Core
                                </p>
                                <p className="about-point-text">
                                    We upcycle pre-owned materials to create eco-friendly products, reducing waste and promoting a healthier planet.

                                </p>
                            </div>

                        </div>

                        <div className="about-three-point">
                            <img className="about-point-img" src={require("./planning.png")} />
                            <div className="about-point-right">
                                <p className="about-point-head">
                                    Customization with Care
                                </p>
                                <p className="about-point-text">
                                    Each item is personalized to reflect your pet’s unique personality, crafted with love and attention to detail.

                                </p>
                            </div>

                        </div>

                        <div className="about-three-point">
                            <img className="about-point-img" src={require("./designing.png")} />
                            <div className="about-point-right">
                                <p className="about-point-head">
                                    Community-Driven
                                </p>
                                <p className="about-point-text">
                                    We are a passionate community of pet lovers dedicated to compassion and sustainability, connecting with fellow pet parents.

                                </p>
                            </div>

                        </div>

                        <div className="about-three-point">
                            <img className="about-point-img" src={require("./production.png")} />
                            <div className="about-point-right">
                                <p className="about-point-head">
                                    Transparency and Quality
                                </p>
                                <p className="about-point-text">
                                    Our commitment to high-quality materials and transparent practices ensures your pet receives the best.

                                </p>
                            </div>

                        </div>
                    </div>
                </div>


                <div className="about-four">
                    <div className="about-four-text-sec">
                        <p className="about-four-head">
                            Enjoy up to 25% off on all upcycling services
                        </p>
                        <p className="about-four-text">
                            Give your old favorites a sustainable makeover!
                        </p>
                    </div>
                    <div className="newsletter-box">
                        <input type="text" className="news-inp" placeholder="Enter Email Address Here" />
                        <input type="submit" value="Subscribe" className="news-submit" />
                    </div>
                </div>

                <div className="about-five">
                    <div className="about-five-box">
                        <div className="about-five-point">
                            <img className="about-five-img" src={require("./truck.png")} />

                            <div className="about-fiv-point-desc">
                                <p className="about-five-point-name">
                                    Easy Home Delivery
                                </p>
                                <p className="about-five-point-text">
                                    Seamless home delivery experiece and real-time tracking.
                                </p>
                            </div>
                        </div>

                        <div className="about-five-point">
                            <img className="about-five-img" src={require("./support.png")} />

                            <div className="about-fiv-point-desc">
                                <p className="about-five-point-name">
                                    Quick Support System
                                </p>
                                <p className="about-five-point-text">
                                    We provide fast assistance through chat, email, or calls,
                                </p>
                            </div>
                        </div>

                        <div className="about-five-point">
                            <img className="about-five-img" src={require("./secure.png")} />

                            <div className="about-fiv-point-desc">
                                <p className="about-five-point-name">
                                    Secure Payment Way
                                </p>
                                <p className="about-five-point-text">
                                Offering secure payment methods with encrypted transactions and options like credit/debit cards, upi for a safe shopping experience.
                                </p>
                            </div>
                        </div>



                    </div>
                </div>


            </div>
        </div>
    )
}

export default About;