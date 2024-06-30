import "../../App.scss"

function Checkout({ userData, setUserData }) {
    return (
        <div className="Checkout" >
            <div className="checkout-box">
                <p className="headC" >Checkout</p>
                <div className="checkout-dets">
                    <div className="checkout-left">
                        <div className="checkoutdet">
                            <div className="checkoutdethead">
                                <p className="cheadtext">
                                    Delivery & Contact Details
                                </p>
                                <div className="cdetbox">
                                    <p className="cdetboxtext">
                                        {userData.address}
                                    </p>

                                    <p className="editT">Edit</p>
                                </div>

                            </div>
                        </div>
                        <div className="checkoutdet">
                            <div className="checkoutdethead">
                                <p className="cheadtext">
                                    Review Items
                                </p>
                                <div className="cdetbox">
                                    <p className="cdetboxtext">
                                        {userData.address}
                                    </p>

                                    <p className="editT">Edit</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="checkout-right">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout