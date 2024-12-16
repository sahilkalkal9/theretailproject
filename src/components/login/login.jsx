import React, { useEffect, useState } from 'react';
import firebase from 'firebase/compat/app';
import { auth, firestore } from '../../firebase';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [otp, setOtp] = useState('');
    const [confirmationResult, setConfirmationResult] = useState(null);
    const [isOtpSent, setIsOtpSent] = useState(false);
    const [notification, setNotification] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
            "recaptcha-container", {
            size: "invisible",
            callback: function (response) {
                console.log("Captcha Resolved");
            },
            'expired-callback': () => {
                console.log("not verified")
            },

            defaultCountry: "IN",
        }
        );
    }, []);

    const handleSendOtp = (e) => {
        e.preventDefault();


        const phoneNumberWithCountryCode = `+91${phoneNumber}`;
        const appVerifier = window.recaptchaVerifier;

        const usersRef = firestore.collection('users');
        usersRef.where('phone', '==', phoneNumberWithCountryCode)
            .get()
            .then(querySnapshot => {
                if (!querySnapshot.empty) {
                    auth.signInWithPhoneNumber(phoneNumberWithCountryCode, appVerifier)
                        .then(confirmationResult => {
                            setConfirmationResult(confirmationResult);
                            setIsOtpSent(true);
                            setNotification('OTP sent.');
                        })
                        .catch(error => {
                            console.error("SMS not sent", error);
                            setNotification('Failed to send SMS. Please try again.');
                        });
                } else {
                    setNotification('Account does not exist. Please register.');
                }
            })
            .catch(error => {
                console.error("Error checking phone number:", error);
                setNotification('Error checking phone number. Please try again.');
            });
    };

    const handleVerifyOtp = (e) => {
        e.preventDefault();
        if (confirmationResult) {
            confirmationResult.confirm(otp)
                .then(result => {
                    navigate("/");
                    console.log("User signed in successfully:", result.user);
                })
                .catch(error => {
                    console.error("Incorrect OTP", error);
                    setNotification('Incorrect OTP. Please try again.');
                });
        } else {
            setNotification('No confirmation result found.');
        }
    };

    return (

        <div className='SignUpNew'>
            <Link to="/">
                <div className="signup-head-upn">
                    <img className="signup-logon" src={require("./pawb.png")} />
                    <p className="signup-head-textn">
                        The <span className="re-text">Re</span>Tail Project
                    </p>
                </div>
            </Link>

            <p>{notification}</p>

            <div className="signup-new-box">
                <div className="signup-head">
                    <p className="signup-new-head">
                        Welcome!
                    </p>
                    <p className="singup-new-text">
                        Use your credentials to access
                    </p>
                </div>


                {
                    isOtpSent
                        ? <form className='signup-new-form' onSubmit={handleVerifyOtp}>
                            <input
                                type="text"
                                placeholder="OTP"
                                value={otp}
                                className='singup-input-new'
                                onChange={(e) => setOtp(e.target.value)}
                            />

                            <button className='singup-new-submit' type="submit">Verify OTP</button>
                        </form>
                        :
                        <form className='signup-new-form' onSubmit={handleSendOtp}>
                            <input
                                type="text"
                                inputMode="numeric"
                                pattern="[0-9]*"
                                placeholder="Phone Number"
                                value={phoneNumber}
                                onChange={(e) => {
                                    if (e.target.value.length <= 10) {
                                        setPhoneNumber(e.target.value);
                                    }
                                }}
                                className='singup-input-new no-arrows'
                                required
                            />
                            <div id="recaptcha-container"></div>
                            <button type="submit" className='singup-new-submit'>Send OTP</button>

                        </form>
                }
                <p className="alreadyheavanaccount">
                    Don't have an account ? <Link to="/signup">
                        <span className="signup-signin-button" >Sign Up</span>
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
