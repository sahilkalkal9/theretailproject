import "../../App.scss"
import Nav from "../nav/nav"
import heart from "./heart.png"
import cartttt from "./shopping-bag.png"
import dogf from "./dog-food.png"
import products from "./products.json"

function Shop() {
    return (
        <div className="Home">
            <div className="home-upper-main">
               
                <div className="home-upper">
                    <div className="page-head-box">
                        <p className="page-head">Shop</p>
                        <p className="page-path">home/shop</p>
                    </div>


                </div>
            </div>


            <div className="home-lower">
                <div className="products">


                    {
                        products.map((p) => (
                            <div className="product-new">
                                <div className={`product-upper-new ${p.class}`} >
                                    <img className="product-image" src={require(`./${p.image}`)} alt="Product Image" />
                                    <div className="cart-like-box">
                                        <img className="heart" src={heart} />
                                        <img className="heart" src={cartttt} />
                                    </div>
                                </div>
                                <div className="product-lower-new">
                                    <p className="product-caption-new">
                                        {p.name}
                                    </p>
                                    <div className="price-cart">
                                        <p className="price-new">{p.price}</p>

                                    </div>

                                </div>
                            </div>
                        ))
                    }



                </div>
            </div>




        </div>
    )
}

export default Shop