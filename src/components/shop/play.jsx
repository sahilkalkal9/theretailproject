import "./shop.scss"
import products from "./products.json"
import { Link } from "react-router-dom"
import { useUserContext } from "../../UserContext";

export const Play = () => {

    const { addToCart, doingWork } = useUserContext();

    return (
        <div className="nproducts">
            {
                products.map((p) => (
                    p.category == "play"
                        ?
                        <div className="fproduct">
                            <Link to={`/shop/${p.category}/${p.id}`}>
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
                                            ₹ {p.price}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                            <div className="fprod-lower">
                                <button className="add-cart" onClick={() => { addToCart(p) }} disabled={doingWork ? true : false}  >
                                    ADD TO CART
                                </button>
                            </div>
                        </div>
                        : null
                ))
            }

        </div >
    )
}