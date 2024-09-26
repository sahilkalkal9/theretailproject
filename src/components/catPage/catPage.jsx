import { useParams } from "react-router-dom";
import "../../App.scss"

import products from "../shop/products.json"

function CatPage() {

    const params = useParams()

    const catid = params.catid;

    return (
        <div className="CatPage">
            <div className="cat-page-lower">
                <p className="cat-head">
                    shop/{catid}
                </p>
                <div className="products">
                    {
                        products.map((p) => (
                            p.name.toLowerCase() == catid
                                ? (
                                    p.products.map((cp) => (
                                        <div className="product">
                                            <img className="product-img" src={require(`../shop/${cp.image}`)} />

                                            <div className="prod-lower">
                                                <p className="product-name">
                                                    {cp.name}
                                                </p>

                                                <div className="price-div">
                                                    <p className="price">
                                                        ₹ {cp.price}
                                                    </p>
                                                    <p className="cut-price">
                                                        ₹ 1300
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                )
                                : null
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default CatPage;