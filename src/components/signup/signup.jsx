import React, { useState, useEffect } from 'react';
import { auth, firebase, firestore } from '../../firebase.js';

const Signup = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [otp, setOtp] = useState('');
    const [isOtpSent, setIsOtpSent] = useState(false);
    const [confirmationResult, setConfirmationResult] = useState(null);
    const [notification, setNotification] = useState('');

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

        // If email is available, check if the email is already registered




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

    }




    const handleVerifyOtp = () => {
        if (confirmationResult) {
            confirmationResult.confirm(otp)
                .then(result => {
                    firestore.collection("users").doc(auth.currentUser?.uid).set({
                        "phone": phoneNumber,
                        uid: auth.currentUser?.uid
                    })
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
        <div>
            <h2>Signup</h2>
            <div id="recaptcha-container"></div>
            {notification && <p>{notification}</p>}
            {isOtpSent ? (
                <div>
                    <input
                        type="text"
                        placeholder="Enter OTP"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                    />
                    <button onClick={handleVerifyOtp}>Verify OTP</button>
                </div>
            ) : (

                <div>
                    <input
                        type="text"
                        placeholder="Phone Number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                    <button onClick={handleSendOtp}>Send OTP</button>
                </div>

            )}
            {
                auth.currentUser ? <p>Hello, {auth.currentUser.displayName} {auth.currentUser.age} {auth.currentUser.email}</p> : null
            }
        </div>
    );
};

export default Signup;
