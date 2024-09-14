import "../../App.scss"
import addImg from "./add.png"
import minusImg from "./minus.png"
import play from "./play.jpg"
import bed from "./bed.png"
import gwalk from "./gwalk.png"
import wear from "./wear.jpg"
import lai from "./lai.png"
import rai from "./rai.png"
import { useState } from "react"

function ProductPage() {

    const images = [
        {
            src: play
        },
        {
            src: wear
        },
        {
            src: bed
        },
        {
            src: gwalk
        },
    ]

    const [currentImg, setCUrrentImg] = useState(play)
    const [currentImgSet, setCUrrentImgSet] = useState(images[0])

    // console.log(currentImgSet)

    const handleChangeImg = (x) => {
        setCUrrentImg(x.src)
        setCUrrentImgSet(x)
        console.log(currentImgSet)


    }

    const handleNextImg = () => {
        const currentIndex = images.findIndex(img => img.src === currentImg);
        const nextIndex = (currentIndex + 1) % images.length;
        setCUrrentImg(images[nextIndex].src);
        // setCUrrentImgSet(images[nextIndex]);
    }

    const handlePrevImg = () => {
        const currentIndex = images.findIndex(img => img.src === currentImg);
        const prevIndex = (currentIndex - 1 + images.length) % images.length;
        setCUrrentImg(images[prevIndex].src);
        // setCUrrentImgSet(images[prevIndex]);
    }

    return (
        <div className="ProductPage">
            <div className="product-page">
                <div className="product-page-left">
                    <p className="product-name">
                        Michael Kors
                    </p>
                    <p className="product-price">
                        ₹ 300
                    </p>
                    <p className="product-info">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint impedit commodi laborum quae ea officia accusamus maxime quam consectetur quis cupiditate nobis, mollitia magnam quidem non vero quas in aperiam.
                    </p>
                    <p className="product-stock">
                        10 in stock
                    </p>
                    <div className="product-page-add-to-cart-box">
                        <div className="product-page-quantity-box">
                            <div className="quantity-number">
                                <p className="qnum">
                                    1
                                </p>
                            </div>
                            <div className="quant-imgs">
                                <div className="quant-img-box addImg">
                                    <img src={addImg} alt="" className="quant-img" />
                                </div>
                                <div className="quant-img-box">
                                    <img src={minusImg} alt="" className="quant-img" />
                                </div>
                            </div>
                        </div>
                        <button className="product-page-add-to-cart-button">
                            Add to Cart
                        </button>
                    </div>

                    <p className="product-page-category">
                        <span className="catHead">
                            Category :
                        </span>
                        Uncategorised
                    </p>
                </div>
                <div className="product-page-right">
                    <div className="small-images">
                        {
                            images.map((i) => (
                                <img onMouseOver={() => { handleChangeImg(i) }} className={i.src == currentImg ? "smallImg currentSmallImg" : "smallImg"} src={i.src} />
                            ))
                        }
                    </div>

                    <div className="currentImgBox">
                        <img className="currImg" src={currentImg} />
                        <div className="imgButtonsProdPage">
                            <img onClick={() => { handlePrevImg(currentImgSet) }} className="lai" src={lai} />
                            <img onClick={() => { handleNextImg(currentImgSet) }} className="lai" src={rai} />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProductPage;