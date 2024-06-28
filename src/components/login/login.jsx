import React, { useEffect, useState } from 'react';
import firebase from 'firebase/compat/app';
import { auth, firestore } from '../../firebase';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [otp, setOtp] = useState('');
    const [confirmationResult, setConfirmationResult] = useState(null);
    const [isOtpSent, setIsOtpSent] = useState(false)
    const [notification, setNotification] = useState("")
    const navigate = useNavigate()


    useEffect(() => {
        // Render the reCAPTCHA widget
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
            'size': 'invisible',
            'callback': (response) => {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
                handleSendOtp();
            },
            'expired-callback': () => {
                // Handle reCAPTCHA expiration
                setNotification('reCAPTCHA expired, please try again.');
            }
        });

        window.recaptchaVerifier.render().then(function (widgetId) {
            window.recaptchaWidgetId = widgetId;
        }).catch(error => {
            console.error("reCAPTCHA rendering failed", error);
        });
    }, []);

    const handleSendOtp = (e) => {
        e.preventDefault();

        const phoneNumberWithCountryCode = `+91${phoneNumber}`; // Adjust country code as needed
        const appVerifier = window.recaptchaVerifier;

        // Check if the phone number already exists in Firestore
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
                            setNotification('SMS not sent. Please try again.');
                        });
                } else {
                    // Phone number already exists, show error message
                    setNotification('Account does not exist. Please register');
                }
            })
            .catch(error => {
                console.error('Error checking phone number:', error);
                setNotification('Error checking phone number. Please try again.');
            });
    };




    const handleVerifyOtp = (e) => {
        e.preventDefault()
        if (confirmationResult) {
            confirmationResult.confirm(otp)
                .then(result => {


                    navigate("/profile")

                    console.log("User signed in successfully:", result.user);
                    // Save additional user info to database

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
        <div className='SignUp' >
            <h2>Login</h2>
            <br /><br />
            <p>{notification}</p>
            {
                isOtpSent
                    ? <form onSubmit={handleVerifyOtp}>
                        <input
                            type="text"
                            placeholder="OTP"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                        />
                        <button type="submit">Verify OTP</button>
                    </form>
                    :
                    <form className='register-box' onSubmit={handleSendOtp}>
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
                            className='regInp no-arrows'
                            required
                        />
                        <div id="recaptcha-container"></div>
                        <button type="submit" className='regInp subInp' >Send OTP</button>
                        <Link to="/signup">
                            <p className='st' >Signup</p>
                        </Link>
                    </form>
            }


        </div>
    );
};

export default Login;
