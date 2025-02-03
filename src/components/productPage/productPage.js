import { useParams } from "react-router-dom"
import "./productPage.scss"
import products from "../shop/products.json"
import { useState } from "react";
import { useUserContext } from "../../UserContext";


function ProductPage() {

    const { addToCart, doingWork } = useUserContext();


    const { pid } = useParams();

    const [currentImg, setCurrentImg] = useState(() => {
        const product = products.find(product => product.id == pid);
        return product ? product.thumbnail : null;
    });

    const onMouseOverChange = (x) => {
        setCurrentImg(x)
    }




    return (
        <div className="MainDiv">
            {
                products.map((p) => (
                    p.id == pid
                        ?
                        !p.multiple
                            ?
                            <div className="product-page-box">
                                <div className="product-left">
                                    {
                                        p.images
                                            ? (
                                                <div className="prodPageImgDiv">
                                                    {
                                                        p.images.map((pi) => (
                                                            <div className={pi == currentImg ? "prodPageSmallImgDiv activeImgProdPage" : "prodPageSmallImgDiv"}>
                                                                <img className="prodPageSmallImg" onMouseEnter={() => { onMouseOverChange(pi) }} onClick={() => { setCurrentImg(pi) }} src={pi} />
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            )
                                            : null
                                    }
                                    <img className="prodPageImg" src={currentImg} />


                                </div>
                                <div className="product-right">
                                    <p className="prodPageName" >{p.name}</p>
                                    <p className="price">
                                        ₹ {p.price}
                                    </p>
                                    <p className="brand-name fl">
                                        by {p["brand-name"]}
                                    </p>
                                    <p className="brand-name weight">
                                        {p.weight}
                                    </p>
                                    <p className="brand-name weight">
                                        {
                                            p.dimensions.map((i, index) => (
                                                <span> {i} {index < (p.dimensions.length) - 1 ? "X" : ""}</span>
                                            ))
                                        }
                                    </p>

                                    <div className="product-page-buttons">
                                        <button onClick={() => { addToCart(p) }} className="pp-button" disabled={doingWork ? true : false}>
                                            Add to Cart
                                        </button>
                                        <button className="pp-button">
                                            Buy Now
                                        </button>
                                    </div>


                                </div>
                            </div>
                            : null
                        : null

                ))
            }
        </div>
    )
}

export default ProductPage