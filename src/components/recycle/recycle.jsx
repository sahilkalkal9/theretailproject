import "./recycle.scss"
import one from "./send.png"
import two from "./style.png"
import three from "./smile.png"
import prc from "./prc.jpg"


function Recycle() {
    return (
        <div className="RecyclePage">
            <div className="upcycle-lower">

                <div className="upcycle-content">

                    <div>
                        <p className="upcycle-head">
                            Steps to upcycle
                        </p>
                        <br />
                        <div className="upcycle-intro">

                            <p className="rec-text rct">
                                We proudly upcycle a variety of items, including blankets, old clothing (T-shirts/shirts, Indian wear, denims, sweatshirts, socks), towels and more.
                                Join us in giving new life to old memories and creating a positive impact on the environment.
                            </p>
                        </div>

                        <div className="rec-imgs">
                            <div className="rec-new-box">
                                <img className="rec-img" src={one} />
                                <div className="rec-process-text">
                                    <p className="rec-head">
                                        Step 1 : SEND
                                    </p>
                                    <p className="rec-text">
                                        Customers send us their old materials, pet clothes, or any fabric they wish to upcycle. This could be items that hold sentimental value or simply things no longer in use.
                                        <br />
                                        Once received, we carefully assess the items to determine the best way to repurpose, redesign, or alter them into something fresh, sustainable, and unique for your pet.

                                    </p>
                                </div>
                            </div>
                            <div className="rec-new-box">
                                <img className="rec-img scc" src={two} />
                                <div className="rec-process-text">
                                    <p className="rec-head">
                                        Step 2 : STYLE
                                    </p>
                                    <p className="rec-text">
                                        After receiving the materials, we creatively design and style them based on your preferences.
                                        <br />
                                        Whether it’s repurposing fabrics into customized pet clothing, accessories, or other products, we focus on making each item unique, stylish, and functional while maintaining sustainability.

                                    </p>
                                </div>
                            </div>
                            <div className="rec-new-box">
                                <img className="rec-img" src={three} />
                                <div className="rec-process-text">
                                    <p className="rec-head">
                                        Step 3 : SMILE
                                    </p>
                                    <p className="rec-text">
                                        Once your upcycled item is ready, we deliver it back to you, bringing joy and satisfaction with a one-of-a-kind, eco-friendly creation that you and your pet will love!
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* <div className="upcycle-process">
                            <div className="rec-left">

                                <div className="rec-process-text">
                                    <p className="rec-head">
                                        Step 1 : SEND
                                    </p>
                                    <p className="rec-text">
                                        Send us any material that holds sentimental value or is simply lying around unused. We encourage you to send it to us and begin the recycling process.
                                    </p>
                                </div>
                            </div>
                            <div className="rec-left rr">

                                <div className="rec-process-text">
                                    <p className="rec-head">
                                        Step 2 : STYLE
                                    </p>
                                    <p className="rec-text">
                                        We discuss various options, considering factors such as functionality, aesthetics, and the specific requirements of the pet. Whether it's a cozy bed, a durable toy, or a stylish accessory, we work closely with you to ensure that the final design reflects your vision and exceeds expectations.
                                    </p>
                                </div>
                            </div>
                            <div className="rec-left">

                                <div className="rec-process-text">
                                    <p className="rec-head">
                                        Step 3 : SMILE
                                    </p>
                                    <p className="rec-text">
                                        As you unwrap the package, you are greeted with a custom creation, crafted with care and creativity. It's a heartwarming moment that highlights the joy of sustainable pet ownership and the happiness that comes from giving old materials new life.
                                    </p>
                                </div>
                            </div>
                        </div> */}
                    </div>

                    <div className="rec-details">
                        <p className="upcycle-head">
                            The ReTail Process
                        </p>
                        <br />

                        <div className="upcycle-iframe-box">

                        </div>


                        <img className="prc" src={prc} />

                        <p className="rec-text rct">
                            At ReTail Project, we've streamlined the process of transforming customers' old fabrics or blankets into new, eco-friendly delights for their pets. Here's how it works:
                        </p>

                        <div className="rec-det-box">
                            <div className="rec-det">
                                <p className="rec-head">
                                    1. Submission :
                                </p>
                                <p className="rec-text rlt">
                                    Customers send us their old raw materials, such as fabrics or blankets, expressing their desire to upcycle and repurpose them.
                                </p>
                            </div>
                            <div className="rec-det">
                                <p className="rec-head">
                                    2. Assessment :
                                </p>
                                <p className="rec-text rlt">
                                    Our team carefully examines the submitted materials to ensure they align with our sustainability standards and can be effectively repurposed.

                                </p>
                            </div>
                            <div className="rec-det">
                                <p className="rec-head">
                                    3. Design Consultation :
                                </p>
                                <p className="rec-text rlt">
                                    We engage with customers to understand their preferences and pet's needs, ensuring the final product is not only sustainable but also tailored to their style and pet's comfort.
                                </p>
                            </div>
                            <div className="rec-det">
                                <p className="rec-head">
                                    4. Crafting :
                                </p>
                                <p className="rec-text rlt">
                                    Skilled artisans transform the recycled materials into stylish and functional pet clothing, toys, or accessories, incorporating the customer's unique touch.
                                </p>
                            </div>
                            <div className="rec-det">
                                <p className="rec-head">
                                    5. Quality Check :
                                </p>
                                <p className="rec-text rlt">
                                    Each item undergoes rigorous quality checks to guarantee durability, safety, and adherence to our environmental values.
                                </p>
                            </div>
                            <div className="rec-det">
                                <p className="rec-head">
                                    6. Delivery :
                                </p>
                                <p className="rec-text rlt">
                                    The customized, sustainable pet products are sent back to the customer, completing the cycle of transforming old materials into new, conscientious creations for their furry companions.
                                </p>
                            </div>

                        </div>

                        <br />
                        <p className="rec-text">
                            Connect with us on WhatsApp to discuss the transformation. Our team is ready to make adjustments according to your dog's size and any specific preferences you may have.
                            <br />
                            <br />
                            Tailor your pet's fashion sustainably with ReTail Project.
                        </p>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Recycle;