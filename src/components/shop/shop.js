import "../../App.scss"
import products from "./products.json"
import { Link } from "react-router-dom"

function Shop() {


    


   




    return (
        <>
           

            <div className="Home">
                {/* <div className="home-upper-main">

                    <div className="home-upper">
                        <div className="page-head-box">
                            <p className="page-head">Shop</p>
                            <p className="page-path">home/shop</p>
                        </div>
                    </div>
                </div> */}


                <div className="home-lower shop-lower">
                    <p className="shop-cat-head">
                        Categories
                    </p>
                    <div className="shop-cats">
                        {
                            products.map((p) => (
                                <Link to={p.link} >
                                    <div className="shop-cat">
                                        <img className="cat-img" src={require(`./${p.image}`)} />
                                        <p className="cat-name" >{p.name}</p>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                </div>




            </div>
        </>
    )
}

export default Shop