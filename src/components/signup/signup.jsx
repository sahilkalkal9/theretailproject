import { Link, useNavigate } from "react-router-dom"
import "./signup.scss"
import { useState } from "react"
import { auth, firestore } from "../../firebase";
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


function SignUp() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    })
    const navigate = useNavigate()

    const handleChange = (e) => {
        e.preventDefault();

        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {



            document.getElementsByClassName("singup-new-submit")[0].value = "Signing Up.."
            await createUserWithEmailAndPassword(auth, formData.email, formData.password)
                .then(async () => {
                    await firestore.collection("users").doc(auth.currentUser.uid).set({
                        name: formData.name,
                        email: formData.email,
                        uid: auth.currentUser.uid,
                        checkoutAmt : 0

                    }, { merge: true })
                    document.getElementsByClassName("singup-new-submit")[0].value = "Sign Up"
                    navigate("/profile")
                })




        }
        catch (error) {
            if (error.code == "auth/email-already-in-use") {
                document.getElementsByClassName("singup-new-submit")[0].value = "Sign Up"
                alert("Email already in use")


            }
        }
    }

    const handleSubmitWithGoogle = async (e) => {
        e.preventDefault();

        try {




            const provider = new GoogleAuthProvider()

            await signInWithPopup(auth, provider)
                .then(async () => {
                    await firestore.collection("users").doc(auth.currentUser.uid).set({
                        name: auth.currentUser.displayName,
                        email: auth.currentUser.email,
                        uid: auth.currentUser.uid,
                        checkoutAmt : 0

                    }, { merge: true })
                    document.getElementsByClassName("singup-new-submit")[0].value = "Sign Up"
                    navigate("/profile")
                })
        }
        catch (error) {
            console.log(error)
        }
    }





    return (
        <div className="SignUpNew">


            <Link to="/">
                <div className="signup-head-upn">
                    <img className="signup-logon" src={require("./pawb.png")} />
                    <p className="signup-head-textn">
                        The <span className="re-text">Re</span>Tail Project
                    </p>
                </div>
            </Link>





            <div className="signup-new-box">
                <div className="signup-head">
                    <p className="signup-new-head">
                        Join Now!
                    </p>
                    <p className="singup-new-text">
                        Setup a new account in just a minute
                    </p>
                </div>
                <form onSubmit={handleSubmit} className="signup-new-form">
                    <input type="text" required onChange={(e) => { handleChange(e) }} value={formData.name} name="name" className="singup-input-new" placeholder="Full name" />
                    <input type="email" required onChange={(e) => { handleChange(e) }} value={formData.email} name="email" className="singup-input-new" placeholder="Email address" />
                    <input type="password" required onChange={(e) => { handleChange(e) }} value={formData.password} name="password" className="singup-input-new" placeholder="Password" />
                    <input type="submit" className="singup-new-submit" value="Sign Up" />
                </form>
                <p className="or">
                    OR
                </p>
                <button onClick={handleSubmitWithGoogle} className="signupwithgoogle">
                    Sign Up with Google
                </button>

                <p className="alreadyheavanaccount">
                    Already have an account ? <Link to="/signin">
                        <span className="signup-signin-button" >Sign In</span>
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default SignUp