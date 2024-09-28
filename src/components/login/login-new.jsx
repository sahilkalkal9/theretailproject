import { Link } from "react-router-dom"
import "./signup.scss"

function LogInNew() {
    return (
        <div className="SignUpNew">
            <div className="signup-new-box">
                <p className="signup-new-head">
                    Sign In to your account
                </p>
                <form action="" className="signup-new-form">

                    <input type="email" className="singup-input-new" placeholder="Email address" />
                    <input type="password" className="singup-input-new" placeholder="Password" />
                    <input type="submit" className="singup-new-submit" value="Sign In" />
                </form>
                <p className="or">
                    OR
                </p>
                <button className="signupwithgoogle">
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