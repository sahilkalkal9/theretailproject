import { Link, useNavigate } from "react-router-dom"
import "./signup.scss"
import { useState } from "react";
import { auth, firestore } from "../../firebase";
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

function LogInNew() {

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



            document.getElementsByClassName("singup-new-submit")[0].value = "Signing In.."
            await signInWithEmailAndPassword(auth, formData.email, formData.password)
                .then(() => {

                    document.getElementsByClassName("singup-new-submit")[0].value = "Sign In"
                    navigate("/")
                })




        }
        catch (error) {
            if (error.code === "auth/wrong-password") {
                alert("Incorrect password");
            } else if (error.code === "auth/user-not-found") {
                alert("No user found with this email");
            } else {
                alert(error.message);
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

                    }, { merge: true })
                    navigate("/")
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
                        Welcome!
                    </p>
                    <p className="singup-new-text">
                        Use your credentials to access
                    </p>
                </div>
                <form onSubmit={handleSubmit} className="signup-new-form">

                    <input type="email" required onChange={(e) => { handleChange(e) }} value={formData.email} name="email" className="singup-input-new" placeholder="Email address" />
                    <input type="password" required onChange={(e) => { handleChange(e) }} value={formData.password} name="password" className="singup-input-new" placeholder="Password" />
                    <input type="submit" className="singup-new-submit" value="Sign In" />
                </form>
                <p className="or">
                    OR
                </p>
                <button onClick={handleSubmitWithGoogle} className="signupwithgoogle">
                    Sign In with Google
                </button>

                <p className="alreadyheavanaccount">
                    Don't have an account ? <Link to="/signup">
                        <span className="signup-signin-button" >Sign Up</span>
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default LogInNew