import React, { useState, useEffect } from 'react';
import { auth, firebase, firestore } from '../../firebase.js';
import { Link, useNavigate } from 'react-router-dom';
import pincodes from "./pincode.json"

const Signup = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [otp, setOtp] = useState('');
    const [isOtpSent, setIsOtpSent] = useState(false);
    const [confirmationResult, setConfirmationResult] = useState(null);
    const [notification, setNotification] = useState('');
    const [userName, setUsername] = useState('');
    const [userAddress, setUserAddress] = useState('');
    const [useremail, setuseremail] = useState('');
    const [pincode, setpincode] = useState('');
    const [stateName, setStateName] = useState('State');
    const [district, setDistrict] = useState('District');
    const [isPincodeValid, setIsPincodeValid] = useState(false);

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

        if (!isPincodeValid) {
            setNotification('Please enter a valid pincode.');
            return;
        }

        const phoneNumberWithCountryCode = `+91${phoneNumber}`;
        const appVerifier = window.recaptchaVerifier;

        firestore.collection('users').where('phone', '==', phoneNumberWithCountryCode)
            .get()
            .then(querySnapshot => {
                if (!querySnapshot.empty) {
                    setNotification('Phone number already exists. Please use a different number.');
                } else {
                    auth.signInWithPhoneNumber(phoneNumberWithCountryCode, appVerifier)
                        .then(confirmationResult => {
                            setConfirmationResult(confirmationResult);
                            setIsOtpSent(true);
                            setNotification('OTP sent.');
                        })
                        .catch(error => {
                            console.error("SMS not sent", error);
                            setNotification(`SMS not sent. Error : ${error}`);
                        });
                }
            })
            .catch(error => {
                console.error('Error checking phone number:', error);
                setNotification('Error checking phone number. Please try again.');
            });
    };

    const handleVerifyOtp = () => {
        if (confirmationResult) {
            confirmationResult.confirm(otp)
                .then(result => {
                    firestore.collection("users").doc(auth.currentUser?.uid).set({
                        phone: `+91${phoneNumber}`,
                        uid: auth.currentUser?.uid,
                        email: useremail,
                        address: userAddress,
                        username: userName,
                        pincode: pincode,
                        state: stateName,
                        district: district
                    });

                    navigate("/profile");

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

    const handlePincodeChange = async (e) => {
        const newPincode = e.target.value;

        if (newPincode.length <= 6) {
            setpincode(newPincode);

            const matchedPincode = pincodes.find(p => p.Pincode == newPincode);

            if (matchedPincode) {
                setDistrict(matchedPincode.District);
                setStateName(matchedPincode.StateName);
                setNotification('');
                setIsPincodeValid(true);
            } else {
                setNotification('Invalid pincode. Please enter a valid pincode.');
                setIsPincodeValid(false);
            }
        }
    };

    return (
        <div className='SignUp'>
            <h2>Signup</h2>
            <br /><br />
            <div id="recaptcha-container"></div>
            {notification && <p>{notification}</p>}
            {isOtpSent ? (
                <div>
                    <input
                        type="text"
                        placeholder="Enter OTP"
                        value={otp}
                        className='regInp'
                        onChange={(e) => setOtp(e.target.value)}
                    />
                    <button className='regInp subInp' onClick={handleVerifyOtp}>Verify OTP</button>
                </div>
            ) : (
                <form onSubmit={handleSendOtp} className='register-box'>
                    <input
                        type="text"
                        value={userName}
                        onChange={(e) => setUsername(e.target.value)}
                        className="regInp"
                        placeholder='Full Name'
                        required
                    />
                    <input
                        type="email"
                        value={useremail}
                        onChange={(e) => setuseremail(e.target.value)}
                        className="regInp"
                        placeholder='Email address'
                        required
                    />
                    <input
                        type="text"
                        value={userAddress}
                        onChange={(e) => setUserAddress(e.target.value)}
                        className="regInp"
                        placeholder='Address'
                        required
                    />
                    <input
                        type="text"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        placeholder="Pincode"
                        value={pincode}
                        onChange={handlePincodeChange}
                        className='regInp no-arrows'
                        required
                    />
                    <p className="pinData">{district}, {stateName}</p>
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
                    <input
                        type="submit"
                        className='regInp subInp'
                        value="Send Otp"
                        disabled={!isPincodeValid}
                    />
                    <Link to="/login">
                        <p className='st'>Login</p>
                    </Link>
                </form>
            )}
        </div>
    );
};

export default Signup;
