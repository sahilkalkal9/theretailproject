import "./shop.scss"
import gwalk from "./gwalknp.png"
import { Link, Outlet } from "react-router-dom";

function Shop() {


    



    return (
        <div className="Shop">
            <div className="shop-box">

                <div className="shop-cats-box">

                    <Link to='/shop/wear'>
                        <p className="shop-cat-name activeCat">
                            Wear
                        </p>
                    </Link>
                    <Link to='/shop/walk'>
                        <p className="shop-cat-name activeCat">
                            Walk
                        </p>
                    </Link>
                    <Link to='/shop/play'>
                        <p className="shop-cat-name activeCat">
                            Play
                        </p>
                    </Link>
                    <Link to='/shop/sleep'>
                        <p className="shop-cat-name activeCat">
                            Sleep
                        </p>
                    </Link>

                </div>

                <Outlet />
            </div>
        </div>
    )
}

export default Shop;
