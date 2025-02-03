import "./shop.scss"
import gwalk from "./gwalknp.png"
import { Link, Outlet, Route, Routes, useLocation } from "react-router-dom";
import { auth, firestore } from "../../firebase";
import { Wear } from "./wear";
import { Walk } from "./walk";
import { Sleep } from "./sleep";
import { Play } from "./play";
import { useCollectionData } from "react-firebase-hooks/firestore";

function Shop() {


    const location = useLocation();



    const isActive = (path) => location.pathname === path;






    return (
        <div className="Shop">
            <div className="shop-box">

                <div className="shop-cats-box">

                    <Link to='/shop/wear'>
                        <p className={isActive("/shop/wear") || isActive("/shop") ? "shop-cat-name activeCat" : "shop-cat-name"}>
                            Wear
                        </p>
                    </Link>
                    <Link to='/shop/walk'>
                        <p className={isActive("/shop/walk") ? "shop-cat-name activeCat" : "shop-cat-name"}>
                            Walk
                        </p>
                    </Link>
                    <Link to='/shop/play'>
                        <p className={isActive("/shop/play") ? "shop-cat-name activeCat" : "shop-cat-name"}>
                            Play
                        </p>
                    </Link>
                    <Link to='/shop/sleep'>
                        <p className={isActive("/shop/sleep") ? "shop-cat-name activeCat" : "shop-cat-name"}>
                            Sleep
                        </p>
                    </Link>

                </div>

                <Routes>
                    <Route path="/wear" element={<Wear />} />
                    <Route path="/walk" element={<Walk />} />
                    <Route path="/play" element={<Play />} />
                    <Route path="/sleep" element={<Sleep />} />
                </Routes>
            </div>
        </div>
    )
}

export default Shop;
