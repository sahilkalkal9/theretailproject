import "./shop.scss"
import products from "./products.json"

export const Play = () => {
    return (
        <div className="nproducts">
            {
                products.map((p) => (
                    p.category == "play"
                        ?
                        <div className="fproduct">
                            <div className="fprod-upper">
                                <img className="prodimg" src={p.thumbnail} />
                                <div className="prod-desc">
                                    <p className="prod-cat">
                                        Play
                                    </p>
                                    <p className="prod-name">
                                        {p.name}
                                    </p>
                                    <p className="prod-price">
                                        {p.price}
                                    </p>
                                </div>
                            </div>
                            <div className="fprod-lower">
                                <button className="add-cart" >
                                    ADD TO CART
                                </button>
                            </div>
                        </div>
                        : null
                ))
            }

        </div>
    )
}