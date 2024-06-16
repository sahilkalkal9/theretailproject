import "../../App.scss"

import dogf from "./dog-food.png"

import ropet from "./ropet.png"
import petbed from "./pet-bed.png"
import harness from "./hdd.png"
import shirtd from "./shirt.png"
import scrunchie from "./scrunchie.png"
import walk from "./walk.png"
import wear from "./wear.png"
import sleep from "./bed.png"
import play from "./play.png"

import handcraft from "./tie.png"
import heart from "./heart.png"
import cartttt from "./shopping-bag.png"

function Home() {
    return (
        <div className="Home">
            <div className="slider-box">

            </div>
            <div className="home-lower">
                {/* <div id="whywe" className="content-div whyc">
                    <p className="head" >Why ReTail ?</p>
                    <div className="content " >
                        <p className="tag-main">
                            “A recycle project for animal lifestyle that crafts sustainable comfort and
                            joy
                            ”
                        </p>

                        <p className=" txt left-con">
                            We specialise exclusively in sustainable fashion for animals.
                            Our brand is dedicated to creating stylish, eco-friendly clothing and
                            accessories that prioritize the well-being of our furry friends.
                            Explore a collection that not only showcases trendy designs but also
                            embodies our commitment to reusing raw materials for a paw-sitively
                            positive impact on the environment.
                        </p>


                        <p className="txt right-con">
                            We prioritizes mindful and aware practices in caring for dogs
                            while emphasizing a commitment to sustainability. It communicates a
                            focus on both the well-being of the canine companions and
                            environmentally friendly, sustainable living practices
                        </p>

                    </div>
                </div> */}
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

                <div id="whywe" className="content-div ">
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

                <div className="content-div">
                    <p className="head" >Our Categories</p>
                    {/* <div className="products categories">
                        <div className="category">
                            <img className="cimg" src={handcraft} />
                            <p className="cat-name">Handcrafted Accessories</p>
                        </div>
                        <div className="category">
                            <img className="cimg" src={ropet} />
                            <p className="cat-name">Toys</p>
                        </div>
                        <div className="category">
                            <img className="cimg" src={petbed} />
                            <p className="cat-name">Beddings</p>
                        </div>

                        <div className="category">
                            <img className="cimg" src={shirtd} />
                            <p className="cat-name">Apparels</p>
                        </div>
                        <div className="category">
                            <img className="cimg" src={harness} />
                            <p className="cat-name">Harnesses & Leashes</p>
                        </div>



                    </div> */}

                    <div className="products categories">
                        <div className="cat-box">
                            <div className="category">
                                <img className="cimg" src={handcraft} />
                            </div>
                            <p className="cat-name">Handcrafted Accessories</p>
                        </div>
                        <div className="cat-box">
                            <div className="category">
                                <img className="cimg" src={petbed} />

                            </div>
                            <p className="cat-name">Beddings</p>
                        </div>
                        <div className="cat-box">
                            <div className="category">
                                <img className="cimg" src={shirtd} />

                            </div>
                            <p className="cat-name">Apparels</p>
                        </div>
                        <div className="cat-box">
                            <div className="category">
                                <img className="cimg" src={ropet} />

                            </div>
                            <p className="cat-name">Toys</p>
                        </div>
                        <div className="cat-box">
                            <div className="category">
                                <img className="cimg" src={harness} />

                            </div>
                            <p className="cat-name">Harnesses & Leashes</p>
                        </div>







                    </div>
                </div>

                <div className="content-div">
                    <p className="head" >Recommended Products</p>
                    <div className="products">
                        {/* <div className="product">
                            <div className="product-upper">
                                <img className="product-image" src={dogf} alt="Product Image" />
                            </div>
                            <div className="product-lower">
                                <p className="product-caption">
                                    Calcium Bones for small and adult dogs most efficient
                                </p>
                                <div className="price-cart">
                                    <p className="price">₹ 500</p>
                                   
                                </div>
                                <div className="product-buttons">
                                    <img className="cart" src={cart} alt="Add to cart" />
                                    <button className="product-button">Buy now</button>
                                </div>
                            </div>
                        </div>
                        <div className="product">
                            <div className="product-upper">
                                <img className="product-image" src={dogf} alt="Product Image" />
                            </div>
                            <div className="product-lower">
                                <p className="product-caption">
                                    Calcium Bones for small and adult dogs most efficient
                                </p>
                                <div className="price-cart">
                                    <p className="price">₹ 500</p>

                                </div>
                                <div className="product-buttons">
                                    <img className="cart" src={cart} alt="Add to cart" />
                                    <button className="product-button">Buy now</button>
                                </div>
                            </div>
                        </div>
                        <div className="product">
                            <div className="product-upper">
                                <img className="product-image" src={dogf} alt="Product Image" />
                            </div>
                            <div className="product-lower">
                                <p className="product-caption">
                                    Calcium Bones for small and adult dogs most efficient
                                </p>
                                <div className="price-cart">
                                    <p className="price">₹ 500</p>
                                   
                                </div>
                                <div className="product-buttons">
                                    <img className="cart" src={cart} alt="Add to cart" />
                                    <button className="product-button">Buy now</button>
                                </div>
                            </div>
                        </div>
                        <div className="product">
                            <div className="product-upper">
                                <img className="product-image" src={dogf} alt="Product Image" />
                            </div>
                            <div className="product-lower">
                                <p className="product-caption">
                                    Calcium Bones for small and adult dogs most efficient
                                </p>
                                <div className="price-cart">
                                    <p className="price">₹ 500</p>
                                
                                </div>
                                <div className="product-buttons">
                                    <img className="cart" src={cart} alt="Add to cart" />
                                    <button className="product-button">Buy now</button>
                                </div>
                            </div>
                        </div> */}


                        <div className="product-new">
                            <div className="product-upper-new p1">
                                <img className="product-image" src={dogf} alt="Product Image" />
                                <div className="cart-like-box">
                                    <img className="heart" src={heart} />
                                    <img className="heart" src={cartttt} />
                                </div>
                            </div>
                            <div className="product-lower-new">
                                <p className="product-caption-new">
                                    Calcium Bones for small and adult dogs most efficient
                                </p>
                                <div className="price-cart">
                                    <p className="price-new">₹ 500</p>

                                </div>

                            </div>
                        </div>
                        <div className="product-new ">
                            <div className="product-upper-new p2">
                                <img className="product-image" src={dogf} alt="Product Image" />
                                <div className="cart-like-box">
                                    <img className="heart" src={heart} />
                                    <img className="heart" src={cartttt} />
                                </div>
                            </div>
                            <div className="product-lower-new">
                                <p className="product-caption-new">
                                    Calcium Bones for small and adult dogs most efficient
                                </p>
                                <div className="price-cart">
                                    <p className="price-new">₹ 500</p>

                                </div>

                            </div>
                        </div>
                        <div className="product-new ">
                            <div className="product-upper-new p3">
                                <img className="product-image" src={dogf} alt="Product Image" />

                                <div className="cart-like-box">
                                    <img className="heart" src={heart} />
                                    <img className="heart" src={cartttt} />
                                </div>
                            </div>
                            <div className="product-lower-new">
                                <p className="product-caption-new">
                                    Calcium Bones for small and adult dogs most efficient
                                </p>
                                <div className="price-cart">
                                    <p className="price-new">₹ 500</p>

                                </div>

                            </div>
                        </div>
                        <div className="product-new">
                            <div className="product-upper-new p4">
                                <img className="product-image" src={dogf} alt="Product Image" />

                                <div className="cart-like-box">
                                    <img className="heart" src={heart} />
                                    <img className="heart" src={cartttt} />
                                </div>
                            </div>
                            <div className="product-lower-new">
                                <p className="product-caption-new">
                                    Calcium Bones for small and adult dogs most efficient
                                </p>
                                <div className="price-cart">
                                    <p className="price-new">₹ 500</p>

                                </div>

                            </div>
                        </div>
                        <div className="product-new ">
                            <div className="product-upper-new p5">
                                <img className="product-image" src={dogf} alt="Product Image" />

                                <div className="cart-like-box">
                                    <img className="heart" src={heart} />
                                    <img className="heart" src={cartttt} />
                                </div>
                            </div>
                            <div className="product-lower-new">
                                <p className="product-caption-new">
                                    Calcium Bones for small and adult dogs most efficient
                                </p>
                                <div className="price-cart">
                                    <p className="price-new">₹ 500</p>

                                </div>

                            </div>
                        </div>


                    </div>
                </div>

                {/* <div className="content-div ">
                    <p className="head" >What We Do ?</p>
                    <div className="whatwedoboxes">
                        <div className="whatwedo">
                            <img className="what-image" src={recycle} alt="Image" />
                            <div className="whatwedo-text-box">
                                <p className="whatwedo-head wrt">
                                    Give & take products
                                </p>
                                <p className="txt whatwedo-text wrt">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.

                                </p>
                            </div>
                        </div>
                        <div className="whatwedo wdbr">
                            <img className="what-image" src={gift} alt="Image" />
                            <div className="whatwedo-text-box">
                                <p className="whatwedo-head wlt">
                                    All from us
                                </p>
                                <p className="txt whatwedo-text wlt">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.

                                </p>
                            </div>
                        </div>
                        <div className="whatwedo">
                            <img className="what-image" src={donate} alt="Image" />
                            <div className="whatwedo-text-box">
                                <p className="whatwedo-head wrt">
                                    Donate
                                </p>
                                <p className="txt whatwedo-text wrt">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.

                                </p>
                            </div>
                        </div>

                    </div>
                </div> */}

                {/* <div className="content-div ">
                    <p className="head" >What We Recycle ?</p>
                    <div className="recyclables">
                        {
                            recyclables.map((r) => (
                                <div className="recyclable">
                                    <img className="rimage" src={require(`./${r.img}`)} />
                                    <div className="rname-box">
                                        <p className="rname">{r.name}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <p className="txt rtt">
                        We proudly recycle a variety of items, including blankets, T-shirts/shirts,
                        handkerchiefs, Indian wear, denims, sweatshirts, socks, towels, ropes,
                        tennis balls, stockings/socks, rackets, and even Christmas caps. Our
                        commitment to sustainability extends to repurposing these materials into
                        stylish and eco-friendly products for your pets.
                        <br />
                        Join us in giving new life to old items and creating a positive impact on
                        the environment.
                    </p>
                </div> */}

                {/* <div className="content-div ">
                    <p className="head" >Our Vision</p>
                    <div className="content " >


                        <p className=" txt left-con">
                            Through the ReTail Project, we aspire to weave a narrative of love,
                            sustainability, and the enduring connection we share with our animal
                            companions.
                            <br />
                            We aim to create a community that cherishes pets while being kind to
                            the planet. Through recycling and eco-friendly products, we envision a
                            future where every pet's comfort comes with a conscious choice.

                        </p>




                    </div>
                </div> */}

                {/* <div className="content-div ">
                    <p className="head" >Our Inspiration</p>
                    <div className="content " >


                        <p className=" txt left-con">
                            The genesis of the concept is deeply rooted in the shared passion my
                            late brother Saurabh and I held for animals.
                            <br />
                            In honoring his memory, I found inspiration to channel our collective love
                            into a meaningful initiative. My fervor for recycling waste material
                            intertwines seamlessly with the joy of bonding with my pet, serving as the driving force behind this project.


                        </p>




                    </div>
                </div> */}




            </div>
        </div>
    )
}

export default Home;