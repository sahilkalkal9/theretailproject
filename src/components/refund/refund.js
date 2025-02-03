import "./refund.scss"
// import GoToTop from "../../top";
// import privacy from "./privacy.svg"
import { Link } from "react-router-dom";
function Refund() {

    return (
        <div className="AcetoaceticOne">
            <br />
            <div className="content-rxn" id="aceto-synt" >
                <h1 className="privacy-head">Refund Policy</h1>

                <br /><br />

                <h2 className="privacy-tag" > Order Cancellation</h2>
                <p className="privacy-text" >
                    You may cancel your order while it is still under processing. Once the order has been shipped, cancellation is not possible.
                    <br />
                    Orders can be returned up to 1 week (7 days) from the date of delivery.
                </p>
                <br /><br />
                <h2 className="privacy-tag" > Return Conditions</h2>
                <p className="privacy-text" >
                    Products must be returned in the same condition as they were delivered. This means they should be unused, unwashed, and with all original tags and packaging intact.
                    <br />
                    Refunds will be processed once the returned product has been received and inspected by our team.
                </p>
                <br /><br />
                <h2 className="privacy-tag" > Non-Refundable Items</h2>
                <p className="privacy-text" >
                    Certain items cannot be returned, such as perishable goods, custom products.
                    <br />
                    Please check the product description for details on non-refundable items.
                </p>
                <br /><br />
                <h2 className="privacy-tag" > Process</h2>
                <p className="privacy-text" >
                    <ol className="pol">
                        <li>
                            To initiate a return, please contact our customer service team with your order number and reason for return.
                        </li>

                        <li>
                            We will provide instructions on how to return your product.
                        </li>

                        <li>
                            Once we receive and inspect the returned product, we will notify you of the status of your refund.
                        </li>

                        <li>
                            If approved, your refund will be processed to the original method of payment within 3-4 working days.
                        </li>
                    </ol>
                </p>
                <br /><br />
                <h2 className="privacy-tag" > Shipping</h2>
                <p className="privacy-text" >
                    You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable.
                </p>
                <br /><br />
                <h2 className="privacy-tag" > CONTACT INFORMATION </h2>
                <p className="privacy-text" >

                    If you have any questions or need assistance, feel free to contact our customer service team at <a href="mailto:contact@theretailproject.in" className="mailto">
                        contact@theretailproject.in
                    </a>

                </p>

            </div>
            <br /><br /><br /><br />
            {/* <GoToTop /> */}

        </div>
    )



}

export default Refund;














