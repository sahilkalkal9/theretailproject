import { useNavigate } from "react-router-dom"
import "../../App.scss"
import { auth, firestore } from "../../firebase"
import Nav from "../nav/nav"
import { useCollectionData } from "react-firebase-hooks/firestore"

function Profile() {

    const usersRef = firestore.collection("users")
    const [users] = useCollectionData(usersRef)

    const navigate = useNavigate()

    const signOut = () => {
        auth.signOut()
        navigate("/login")
    }



    return (
        <>

            <div id="editPet" className="edit-user">
                <div className="edit-box">
                    <div className="edit-inputs">
                        <form className="edit-form">
                            <div>
                                <label>Name</label>
                                <input className="edit-inp" />
                            </div>
                            <div>
                                <label>Email</label>
                                <input className="edit-inp" />
                            </div>
                            <div>
                                <label>Mobile Number</label>
                                <input className="edit-inp" />
                            </div>
                            <div>
                                <label>Address</label>
                                <input className="edit-inp" />
                            </div>
                            <div>
                                <label>Pincode</label>
                                <input className="edit-inp" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="Home">
                {/* <div className="home-upper-main">

                <div className="home-upper">
                    <div className="page-head-box">
                        <p className="page-head">Profile</p>
                        <p className="page-path">home/profile</p>
                    </div>


                </div>
            </div> */}


                <div className="home-lower">
                    <p className="signout" onClick={signOut}>Sign Out</p>
                    {
                        auth.currentUser ?
                            (
                                users && users.map((u) => (

                                    auth.currentUser?.uid == u.uid
                                        ? (
                                            <div className="profile-box">
                                                <div className="user-box">
                                                    <h3>Your details</h3>
                                                    <div className="user-dets">
                                                        <div className="user-det">
                                                            <p className="user-det-head">Name</p>
                                                            <p className="user-det-text">{u.username}</p>
                                                        </div>
                                                        <div className="user-det">
                                                            <p className="user-det-head">Email</p>
                                                            <p className="user-det-text">{u.email}</p>
                                                        </div>
                                                        <div className="user-det">
                                                            <p className="user-det-head">Mobile Number</p>
                                                            <p className="user-det-text">{u.phone}</p>
                                                        </div>
                                                        <div className="user-det">
                                                            <p className="user-det-head">Address</p>
                                                            <p className="user-det-text">{u.address}</p>
                                                        </div>
                                                        <div className="user-det">
                                                            <p className="user-det-head">Pincode</p>
                                                            <p className="user-det-text">{u.pincode}</p>
                                                        </div>

                                                    </div>
                                                </div>

                                                <div className="user-box">
                                                    <h3>Pet details</h3>
                                                    <div className="user-dets">
                                                        <div className="user-det">
                                                            <p className="user-det-head">Name</p>
                                                            <p className="user-det-text">{u.petname}</p>
                                                        </div>
                                                        <div className="user-det">
                                                            <p className="user-det-head">DOB</p>
                                                            <p className="user-det-text">{u.petdob}</p>
                                                        </div>
                                                        <div className="user-det">
                                                            <p className="user-det-head">Breed</p>
                                                            <p className="user-det-text">{u.petbreed}</p>
                                                        </div>
                                                        <div className="user-det">
                                                            <p className="user-det-head">Gender</p>
                                                            <p className="user-det-text">{u.petgender}</p>
                                                        </div>
                                                        <div className="user-det">
                                                            <p className="user-det-head">Age</p>
                                                            <p className="user-det-text">{u.petage}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                        : null
                                ))
                            )
                            : <p>Loading....</p>
                    }
                </div>




            </div>
        </>
    )
}

export default Profile