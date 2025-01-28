import "./checkout.scss";

const CheckoutP = () => {
    return (
        <div className="CheckoutNew">
            <p className="checkout-h">Checkout</p>
            <div className="checkout-container">
                <div className="checkout-box">
                    <form action="" className="personal-dets">
                        <p className="check-head">
                            Shipping Details
                        </p>
                        <input type="text" className="check-input" name="name" placeholder="Name" />
                        <input type="email" className="check-input" name="email" placeholder="E-mail address" />
                        <input type="number" className="check-input" name="phone" placeholder="Phone number" />
                        <input type="text" className="check-input" name="address" placeholder="Full Address" />
                        <input type="number" className="check-input" name="pincode" placeholder="Pincode" />
                    </form>

                    <div className="personal-dets">
                        <p className="check-head">
                            Add tip
                        </p>
                        <div className="tip-box">
                            <p className="tip-per active-tip">
                                10%
                            </p>
                            <p className="tip-per">
                                20%
                            </p>
                            <p className="tip-per">
                                30%
                            </p>
                            <p className="tip-per">
                                None
                            </p>
                        </div>
                        <input className="tip-input" type="number" placeholder="Custom tip (₹)" />

                    </div>
                </div>
                <div className="checkout-box">
                    <div className="personal-dets">
                        <p className="check-head">
                            Payment Info
                        </p>
                        <div className="payment-info">
                            <div className="payi">
                                <p className="payiname" >Items</p>
                                <p className="payival">₹ 1000</p>
                            </div>
                            <div className="payi">
                                <p className="payiname" >Delivery charges</p>
                                <p className="payival">₹ 80</p>
                            </div>
                            <div className="payi">
                                <p className="payiname" >Total</p>
                                <p className="payival">₹ 1080</p>
                            </div>
                            <button className="pay-button" >Proceed to Pay</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckoutP;