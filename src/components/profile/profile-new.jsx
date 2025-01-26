import { useCollectionData } from "react-firebase-hooks/firestore";
import { auth, firestore } from "../../firebase";
import pencil from "./write.png";
import checkMark from "./check-mark.png";
import "./profile.scss";
import { useContext, useEffect, useState } from "react";
import { UserContext, useUserContext } from "../../UserContext.js";
import PetProfile from "../pet-profile/profile-new";

function ProfileNew() {
    // const usersRef = firestore.collection("users");
    // const [users] = useCollectionData(usersRef);
    // const [userData, setUserData] = useState({
    //     name: "",
    //     email: "",
    //     phone: "",
    //     pan: "",
    //     address: ""
    // });

    // useEffect(() => {
    //     // Ensure the user is authenticated
    //     const currentUser = auth.currentUser;

    //     if (currentUser && users) {
    //         const user = users.find(u => u.uid === currentUser.uid);
    //         if (user) {
    //             setUserData({
    //                 name: user.name,
    //                 email: user.email,
    //                 phone: user.phone,
    //                 pan: user.pan,
    //                 address: user.address
    //             });
    //         }
    //     }
    // }, [users]); // Only run when `users` changes


    const { userData, petData } = useUserContext();

    return (
        <div className="ProfileNew">
            <div className="profile-new-box">
                <p className="profile-head">User Profile</p>
                <div className="profile-box-dets">
                    <div className="profile-box-det">
                        <div className="profile-det-head">
                            <p className="profile-det-label">Account Name</p>
                            <p className="profile-det-text">{userData.name}</p>
                        </div>
                        <img className="write" src={pencil} alt="Edit" />
                    </div>
                    <div className="profile-box-det">
                        <div className="profile-det-head">
                            <p className="profile-det-label">Email</p>
                            <p className="profile-det-text">{userData.email}</p>
                        </div>
                        <img className="write" src={checkMark} alt="Verified" />
                    </div>
                    <div className="profile-box-det">
                        <div className="profile-det-head">
                            <p className="profile-det-label">Contact Number</p>
                            <p className="profile-det-text">{userData.phone}</p>
                        </div>
                        <img className="write" src={pencil} alt="Edit" />
                    </div>
                   
                    <div className="profile-box-det">
                        <div className="profile-det-head">
                            <p className="profile-det-label">My Address</p>
                            <p className="profile-det-text">{userData.address}</p>
                        </div>
                        <img className="write" src={pencil} alt="Edit" />
                    </div>
                </div>
                <br />  <br />
                <PetProfile />
            </div>
        </div>
    );
}

export default ProfileNew;
