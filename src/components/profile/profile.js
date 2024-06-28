import "../../App.scss"
import { auth, firestore } from "../../firebase"
import Nav from "../nav/nav"
import { useCollectionData } from "react-firebase-hooks/firestore"

function Profile() {

    const usersRef = firestore.collection("users")
    const [users] = useCollectionData(usersRef)



    return (
        <div className="Home">
            <div className="home-upper-main">

                <div className="home-upper">
                    <div className="page-head-box">
                        <p className="page-head">Profile</p>
                        <p className="page-path">home/profile</p>
                    </div>


                </div>
            </div>


            <div className="home-lower">
                {
                    auth.currentUser ?
                        (
                            users && users.map((u) => (

                                auth.currentUser?.uid == u.uid
                                    ? (
                                        <h1>Hello, {u.username}</h1>
                                    )
                                    : null
                            ))
                        )
                        : null
                }
            </div>




        </div>
    )
}

export default Profile