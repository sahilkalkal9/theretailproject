import React, { useEffect, useState } from 'react';
import firebase from 'firebase/compat/app';
import { auth, firestore } from '../../firebase';
import { Link, useNavigate } from 'react-router-dom';

const SignUpNew = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [otp, setOtp] = useState('');
    const [email, setEmail] = useState('');
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
                console.log("Captcha expired");
            },

            defaultCountry: "IN",
        }
        );
    }, []);

    const handleSendOtp = (e) => {
        e.preventDefault();

        const phoneNumberWithCountryCode = `+91${phoneNumber}`;
        const appVerifier = window.recaptchaVerifier;

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
    };

    const handleVerifyOtp = (e) => {
        e.preventDefault();
        if (confirmationResult) {
            confirmationResult.confirm(otp)
                .then(result => {
                    const userRef = firestore.collection('users').doc(result.user.uid);
                    userRef.set({
                        uid: result.user.uid,
                        phone: `+91${phoneNumber}`,
                        email: email,
                    })
                        .then(() => {
                            setNotification('Account created successfully.');
                            navigate("/");
                        })
                        .catch(error => {
                            console.error("Error saving user data:", error);
                            setNotification('Failed to save user data. Please try again.');
                        });
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
                        Join US!
                    </p>
                    <p className="singup-new-text">
                        Enter details to continue
                    </p>
                </div>

                {
                    isOtpSent
                        ? <form className='signup-new-form' onSubmit={handleVerifyOtp}>
                            <input
                                type="email"
                                placeholder="Email Address"
                                value={email}
                                className='singup-input-new'
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <input
                                type="text"
                                placeholder="OTP"
                                value={otp}
                                className='singup-input-new'
                                onChange={(e) => setOtp(e.target.value)}
                                required
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
                    Already have an account? <Link to="/signin">
                        <span className="signup-signin-button">Sign In</span>
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignUpNew;
