import { useNavigate } from "react-router-dom";
import "./profile.scss";
import { auth, firestore } from "../../firebase";
import { useEffect, useState } from "react";
import pincodes from "../signup/pincode.json";
import Signup from "../signup/signup";

function Profile({ userData, setUserData }) {
    const [isvalidpincode, setisvalidpincode] = useState(false);
    const [stateName, setStateName] = useState(userData.district || "");
    const [district, setDistrict] = useState(userData.state || "");

    useEffect(() => {
        const calculateAge = (dob) => {
            const birthDate = new Date(dob);
            const today = new Date();
            let ageYears = today.getFullYear() - birthDate.getFullYear();
            let ageMonths = today.getMonth() - birthDate.getMonth();

            if (ageMonths < 0) {
                ageYears--;
                ageMonths += 12;
            }

            return { years: ageYears, months: ageMonths };
        };

        if (userData.petdob) {
            setUserData((prevData) => ({
                ...prevData,
                petage: calculateAge(prevData.petdob),
            }));
        }
    }, [userData.petdob, setUserData]);

    const navigate = useNavigate();

    const signOut = () => {
        auth.signOut();
        navigate("/login");
    };

    const openUserEdit = () => {
        document.getElementById("editUser").style.display = "flex";
    };

    const closeUserEdit = () => { 
        document.getElementById("editUser").style.display = "none";
    };

    const openPetEdit = () => {
        document.getElementById("editPet").style.display = "flex";
    };

    const closePetEdit = () => {
        document.getElementById("editPet").style.display = "none";
    };

    const [message, setMessage] = useState("");

    const handleUserDataChange = (e) => {
        const { name, value } = e.target;

        if (name === "pincode") {
            const newPincode = value;

            if (newPincode.length <= 6) {
                setUserData((prevData) => ({
                    ...prevData,
                    pincode: newPincode,
                }));

                const matchedPincode = pincodes.find((p) => p.Pincode === newPincode);

                if (matchedPincode) {
                    setDistrict(matchedPincode.District);
                    setStateName(matchedPincode.StateName);
                    setMessage(district + ", " + stateName);
                    setisvalidpincode(true);
                } else {
                    setMessage("Please enter a valid pincode.");
                    setisvalidpincode(false);
                }
            }
        } else {
            setUserData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };

    const handlePetDataChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleUserSubmit = async (e) => {
        e.preventDefault();
        if (auth.currentUser) {
            if (!isvalidpincode) {
                setMessage("Please enter a valid pincode");
                return;
            } else {
                closeUserEdit();
                await firestore
                    .collection("users")
                    .doc(auth.currentUser.uid)
                    .set(userData, { merge: true });
            }
        }
    };

    const handlePetSubmit = async (e) => {
        e.preventDefault();
        if (auth.currentUser) {
            closePetEdit();
            await firestore
                .collection("users")
                .doc(auth.currentUser.uid)
                .set(userData, { merge: true });
        }
    };

    const [dateT, setDateT] = useState("");
    const [minDate, setMinDate] = useState("");

    useEffect(() => {
        const today = new Date();
        const formattedToday = today.toISOString().split("T")[0];
        setMinDate(formattedToday);
    }, []);

    return (
        <>
            <div id="editUser" className="edit-user">
                <div className="edit-box">
                    <div className="edit-upper">
                        <h3>Edit your details</h3>
                        <p onClick={closeUserEdit} className="close">
                            Close
                        </p>
                    </div>
                    <br />
                    <div className="edit-inputs">
                        <form className="edit-form" onSubmit={handleUserSubmit}>
                            <div className="inp-div">
                                <label className="label">Name</label>
                                <input
                                    className="edit-inp"
                                    name="username"
                                    value={userData.username}
                                    onChange={handleUserDataChange}
                                />
                            </div>
                            <div className="inp-div">
                                <label className="label">Email</label>
                                <input
                                    className="edit-inp"
                                    name="email"
                                    value={userData.email}
                                    onChange={handleUserDataChange}
                                />
                            </div>
                            <div className="inp-div">
                                <label className="label">Mobile Number</label>
                                <input
                                    className="edit-inp"
                                    name="phone"
                                    value={userData.phone}
                                    readOnly
                                />
                            </div>
                            <div className="inp-div">
                                <label className="label">Address</label>
                                <input
                                    className="edit-inp"
                                    name="address"
                                    value={userData.address}
                                    onChange={handleUserDataChange}
                                />
                            </div>
                            <div className="inp-div">
                                <label className="label">Pincode</label>
                                <input
                                    className="edit-inp"
                                    name="pincode"
                                    value={userData.pincode}
                                    onChange={handleUserDataChange}
                                />
                                <p className="pinData">{message}</p>
                            </div>
                            <input type="submit" className="subInpEP" value="Save" />
                        </form>
                    </div>
                </div>
            </div>
            <div id="editPet" className="edit-user">
                <div className="edit-box">
                    <div className="edit-upper">
                        <h3>Edit pet details</h3>
                        <p onClick={closePetEdit} className="close">
                            Close
                        </p>
                    </div>
                    <br />
                    <div className="edit-inputs">
                        <form className="edit-form" onSubmit={handlePetSubmit}>
                            <div className="inp-div">
                                <label className="label">Name</label>
                                <input
                                    className="edit-inp"
                                    name="petname"
                                    value={userData.petname}
                                    onChange={handlePetDataChange}
                                />
                            </div>
                            <div className="inp-div">
                                <label className="label">DOB *You can't change it in lifetime*</label>
                                <input
                                    type="date"
                                    readOnly={userData.petdob}
                                    max={minDate}
                                    className="edit-inp"
                                    placeholder="Todo deadline (optional)"
                                    value={userData.petdob}
                                    onChange={(e) =>
                                        setUserData((prevData) => ({
                                            ...prevData,
                                            petdob: e.target.value,
                                        }))
                                    }
                                />
                            </div>
                            <div className="inp-div">
                                <label className="label">Breed</label>
                                <input
                                    className="edit-inp"
                                    name="petbreed"
                                    value={userData.petbreed}
                                    onChange={handlePetDataChange}
                                />
                            </div>
                            <div className="inp-div">
                                <label className="label">Age</label>
                                <input
                                    className="edit-inp"
                                    name="petage"
                                    value={
                                        userData.petage
                                            ? `${userData.petage.years} years ${userData.petage.months} months`
                                            : "Age not available"
                                    }
                                    readOnly
                                />
                            </div>
                            <div className="inp-div">
                                <label className="label">Gender</label>
                                <select
                                    className="edit-inp"
                                    name="petgender"
                                    value={userData.petgender || "Select Gender"}
                                    onChange={handlePetDataChange}
                                    defaultValue="Select"
                                    required
                                >
                                    <option value="Select Gender">Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>
                            <input type="submit" className="subInpEP" value="Save" />
                        </form>
                    </div>
                </div>
            </div>

            <div className="Profile">
                {
                    auth.currentUser ?
                        (
                            <div className="profile-lower">
                                <div className="signout-box">
                                    <p className="signout" onClick={signOut}>
                                        Sign Out
                                    </p>
                                </div>
                                {auth.currentUser ? (
                                    <div className="profile-box">
                                        <div className="user-box">
                                            <div className="ub-head">
                                                <h3>Pet details</h3>
                                                <p className="edit" onClick={openPetEdit}>
                                                    Edit
                                                </p>
                                            </div>
                                            <div className="user-dets">
                                                <div className="user-det">
                                                    <p className="user-det-head">Name</p>
                                                    <p className="user-det-text">{userData.petname}</p>
                                                </div>
                                                <div className="user-det">
                                                    <p className="user-det-head">DOB</p>
                                                    <p className="user-det-text">{userData.petdob}</p>
                                                </div>
                                                <div className="user-det">
                                                    <p className="user-det-head">Breed</p>
                                                    <p className="user-det-text">{userData.petbreed}</p>
                                                </div>
                                                <div className="user-det">
                                                    <p className="user-det-head">Gender</p>
                                                    <p className="user-det-text">{userData.petgender}</p>
                                                </div>
                                                <div className="user-det">
                                                    <p className="user-det-head">Age</p>
                                                    <p className="user-det-text">
                                                        {userData.petage
                                                            ? `${userData.petage.years} years ${userData.petage.months} months`
                                                            : "Age not available"}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="user-box">
                                            <div className="ub-head">
                                                <h3>Your details</h3>
                                                <p onClick={openUserEdit} className="edit">
                                                    Edit
                                                </p>
                                            </div>
                                            <div className="user-dets">
                                                <div className="user-det">
                                                    <p className="user-det-head">Name</p>
                                                    <p className="user-det-text">{userData.username}</p>
                                                </div>
                                                <div className="user-det">
                                                    <p className="user-det-head">Email</p>
                                                    <p className="user-det-text">{userData.email}</p>
                                                </div>
                                                <div className="user-det">
                                                    <p className="user-det-head">Mobile Number</p>
                                                    <p className="user-det-text">{userData.phone}</p>
                                                </div>
                                                <div className="user-det">
                                                    <p className="user-det-head">Address</p>
                                                    <p className="user-det-text">{userData.address}</p>
                                                </div>
                                                <div className="user-det">
                                                    <p className="user-det-head">Pincode</p>
                                                    <p className="user-det-text">{userData.pincode}</p>
                                                    <p className="pinData">
                                                        {userData.district}, {userData.state}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <p>Loading....</p>
                                )}
                            </div>
                        )
                        :
                        <Signup />
                }
            </div>
        </>
    );
}

export default Profile;
