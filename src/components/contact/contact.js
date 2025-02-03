import "./contact.scss"
import Nav from "../nav/nav"
import heart from "./heart.png"
import cartttt from "./shopping-bag.png"
import dogf from "./dog-food.png"
import products from "./products.json"
import { useState } from "react"

function Contact() {


    const [conform, setconform] = useState({
        "name": "",
        "email": "",
        "subject": "",
        "message": ""
    })

    const handleChangeCon = (e) => {
        const { name, value } = e.target; // Destructure name and value from the event target
        setconform(prev => ({
            ...prev, // Spread the previous state
            [name]: value // Update the specific field
        }));
    }



    return (
        <div className="ContactBox">
            <div className="home-upper-main">

                {/* <div className="home-upper">
                    <div className="page-head-box">
                        <p className="page-head">Contact</p>
                        <p className="page-path">home/contact</p>
                    </div>


                </div> */}
            </div>


            <div className="home-lower con-low">
                <div className="con-left">
                    <p className="home-main-head chh">
                        Reach Out to Us
                    </p>
                    <p className="con-tag">
                        Please fill out the form below to send us an email.
                    </p>

                    <p className="con-content">
                        We’d love to hear from you!
                        <br />
                        Whether you’re looking to upcycle your old materials or want to discuss a large-scale collaboration, we’re here to help.
                        <br /><br />
                        <b>
                            For customers:</b> Feel free to reach out with any questions or to send us your items for upcycling.
                        <br />
                        <b>For big companies:</b> Let’s work together on large-scale upcycling projects and make a positive environmental impact.

                    </p>

                    <div className="socials">
                        <p className="st">
                            <b>Email: </b><br />
                            <a href="mailto:contact@theretailproject.in" className="">
                                contact@theretailproject.in
                            </a>
                        </p>
                        <p className="st">
                            <b>Phone: </b><br />
                            +91 96641 49148
                        </p>
                    </div>

                </div>
                <div className="con-right">
                    <form className="con-form">
                        <input className="conInp" type="text" name="name" placeholder="Full Name" required />
                        <input className="conInp" type="email" name="email" placeholder="E-mail address" required />
                        <input className="conInp" type="text" name="subject" placeholder="Subject" required />
                        <textarea className="conMess" placeholder="Message" >

                        </textarea>
                        <input className="sendM" type="submit" value="Send" />
                    </form>
                </div>
            </div>




        </div>
    )
}

export default Contact