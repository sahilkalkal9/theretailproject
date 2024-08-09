import "../../App.scss"
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
        <div className="Home">
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
                    <p className="contact-head">
                        Reach Out to Us
                    </p>
                    <p className="con-tag">
                        Please fill out the form below to send us an email.
                    </p>

                    <p className="con-content">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>

                    <div className="socials">
                        <p className="st">
                            <b>Email: </b><br />
                            theretailproject.in@gmail.com
                        </p>
                        <p className="st">
                            <b>Phone: </b><br />
                            +91 0123456789
                        </p>
                    </div>

                </div>
                <div className="con-right">
                    <form className="con-form">
                        <input className="conInp"  type="text" name="name" placeholder="Full Name" required />
                        <input className="conInp" type="email" name="email" placeholder="E-mail address"  required />
                        <input className="conInp" type="text" name="subject" placeholder="Subject"  required />
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