import "./shop.scss"
import gwalk from "./gwalknp.png"

function Shop() {
    return (
        <div className="Shop">
            <div className="shop-box">

                <div className="shop-cats-box">
                    <p className="shop-cat-name activeCat">
                        All
                    </p>
                    <p className="shop-cat-name">
                        Wear
                    </p>
                    <p className="shop-cat-name">
                        Walk
                    </p>
                    <p className="shop-cat-name">
                        Play
                    </p>
                    <p className="shop-cat-name">
                        Sleep
                    </p>
                </div>

                <div className="nproducts">
                    <div className="fproduct">
                        <div className="fprod-upper">
                            <img className="prodimg" src={require("./product.png")} />
                            <div className="prod-desc">
                                <p className="prod-cat">
                                    Sleep
                                </p>
                                <p className="prod-name">
                                    Leash and collar combo for every sized dog
                                </p>
                                <p className="prod-price">
                                    Rs. 600.00
                                </p>
                            </div>
                        </div>
                        <div className="fprod-lower">
                            <button className="add-cart" >
                                ADD TO CART
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop;
