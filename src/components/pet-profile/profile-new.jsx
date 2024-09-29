import { useCollectionData } from "react-firebase-hooks/firestore"
import { auth, firestore } from "../../firebase"
import pencil from "./write.png"
import checkMark from "./check-mark.png"
import "./profile.scss"

function PetProfile() {

    const usersRef = firestore.collection("users").doc(auth.currentUser?.uid).collection("pets")
    const [users] = useCollectionData(usersRef)

    return (
        <>
            <div className="overlay-add-pet">
                <div className="overlay-add-pet-box">
                    <div className="add-pet-head">
                        <p className="profile-head">
                            Add pet
                        </p>
                        <p className="close">
                            Close
                        </p>
                    </div>
                    
                </div>
            </div>
            <div className="ProfileNew">
                <div className="profile-new-box">

                    <p className="profile-head">
                        Pet Profile
                    </p>

                    {
                        users == 0
                            ?
                            <button className="add-pet">
                                Add Pet Profile
                            </button>
                            : (
                                users && users.map((u) => (
                                    u.uid == auth.currentUser?.uid
                                        ? <div className="profile-box-dets">
                                            <div className="profile-box-det">
                                                <div className="profile-det-head">
                                                    <p className="profile-det-label">
                                                        Name
                                                    </p>
                                                    <p className="profile-det-text">
                                                        {u.name}
                                                    </p>
                                                </div>
                                                <img className="write" src={pencil} />
                                            </div>
                                            <div className="profile-box-det">
                                                <div className="profile-det-head">
                                                    <p className="profile-det-label">
                                                        DOB
                                                    </p>
                                                    <p className="profile-det-text">
                                                        {u.dob}
                                                    </p>
                                                </div>
                                                <img className="write" src={checkMark} />
                                            </div>
                                            <div className="profile-box-det">
                                                <div className="profile-det-head">
                                                    <p className="profile-det-label">
                                                        Breed
                                                    </p>
                                                    <p className="profile-det-text">
                                                        {u.breed}
                                                    </p>
                                                </div>
                                                <img className="write" src={pencil} />
                                            </div>
                                            <div className="profile-box-det">
                                                <div className="profile-det-head">
                                                    <p className="profile-det-label">
                                                        Gender
                                                    </p>
                                                    <p className="profile-det-text">
                                                        {u.gender}
                                                    </p>
                                                </div>
                                                <img className="write" src={pencil} />
                                            </div>
                                            <div className="profile-box-det">
                                                <div className="profile-det-head">
                                                    <p className="profile-det-label">
                                                        Age
                                                    </p>
                                                    <p className="profile-det-text">
                                                        {u.age}
                                                    </p>
                                                </div>
                                                <img className="write" src={pencil} />
                                            </div>
                                        </div>
                                        : null
                                ))
                            )
                    }
                </div>
            </div>
        </>
    )
}

export default PetProfile