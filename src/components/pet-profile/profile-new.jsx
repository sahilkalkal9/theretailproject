import { useCollectionData } from "react-firebase-hooks/firestore"
import { auth, firestore } from "../../firebase"
import pencil from "./write.png"
import checkMark from "./check-mark.png"
import "./profile.scss"
import { useState } from "react"
import { useUserContext } from "../../UserContext"

function PetProfile() {

    // const usersRef = firestore.collection("users").doc(auth.currentUser?.uid).collection("pets")
    // const [users] = useCollectionData(usersRef)

    const openAddPet = () => {
        document.getElementById("overlayAddPet").style.display = "flex"
    }

    const closeAddPet = () => {
        document.getElementById("overlayAddPet").style.display = "none"
    }

    const [formdata, setformdata] = useState({
        name: "",
        dob: "",
        breed: "",
        gender: "",
        age: ""
    })



    const handleChangeDate = (e) => {
        const newDate = e.target.value;
        setformdata((prev) => ({
            ...prev,
            dob: newDate
        }));

        const dob = new Date(newDate); // Convert the selected date to a Date object
        const today = new Date(); // Get the current date

        // Calculate the year and month difference
        let ageYears = today.getFullYear() - dob.getFullYear();
        let ageMonths = today.getMonth() - dob.getMonth();

        // If the current month is before the birth month, subtract one year and adjust the months
        if (ageMonths < 0) {
            ageYears--;
            ageMonths += 12;
        } else if (ageMonths === 0 && today.getDate() < dob.getDate()) {
            // If it's the same month but the birthday hasn't occurred yet this year
            ageYears--;
            ageMonths = 11;
        }

        const ageString = `${ageYears} year${ageYears !== 1 ? 's' : ''} and ${ageMonths} month${ageMonths !== 1 ? 's' : ''}`;

        // Update the formdata with the formatted age
        setformdata((prev) => ({
            ...prev,
            age: ageString
        }));

        console.log(`Age: ${ageString}`);
        console.log(formdata.dob);
    }

    const handleChangeData = (e) => {
        const { name, value } = e.target

        setformdata((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleAddPet = async (e) => {
        e.preventDefault();

        const docId = firestore.collection("users").doc(auth.currentUser?.uid).collection("pets").doc().id
        document.getElementsByClassName("add-pet-submit")[0].value = "Adding Pet Details...."

        await firestore.collection("users").doc(auth.currentUser?.uid).collection("pets").doc(docId).set({
            name: formdata.name,
            dob: formdata.dob,
            breed: formdata.breed,
            gender: formdata.gender,
            age: formdata.age,
            pid: docId
        })
        closeAddPet()
        document.getElementsByClassName("add-pet-submit")[0].value = "Add Pet Profile"


    }


    const [loading, setLoading] = useState(false)

    // setTimeout(() => {
    //     setLoading(false)
    // }, 1000)

    const { userData, petData } = useUserContext();


    return (
        <>
            <div id="overlayAddPet" className="overlay-add-pet">
                <div className="overlay-add-pet-box">
                    <div className="add-pet-head">
                        <p className="add-pet-head-text">
                            Add pet
                        </p>
                        <p onClick={closeAddPet} className="closeP">
                            Close
                        </p>
                    </div>

                    <form onSubmit={handleAddPet} className="add-pet-form">
                        <input type="text" onChange={handleChangeData} name="name" value={formdata.name} placeholder="Pet Name" className="add-pet-input" required />
                        <input type="date" name="dob" value={formdata.dob} onChange={handleChangeDate} placeholder="Date of Birth" className="add-pet-input" required />
                        <input type="breed" onChange={handleChangeData} name="breed" value={formdata.breed} placeholder="Breed name" className="add-pet-input" required />
                        <select name="gender" required className="add-pet-input" onChange={handleChangeData} value={formdata.gender} id="">
                            <option value="" defaultChecked>Select gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                        <input type="text" name="age" value={formdata.age} placeholder="Age" readOnly className="add-pet-input" />
                        <input type="submit" value="Add Pet Profile" className="add-pet-submit" />
                    </form>
                </div>

            </div>
            <div className="">
                <div className="">

                    <p className="profile-head">
                        Pet Profile(s)
                    </p>

                    {

                        <div className="pet-profiles">
                            {
                                petData == 0
                                    ?
                                    <p>
                                        No pet profiles
                                    </p>
                                    : (
                                        petData && petData.map((u) => (

                                            <div className="profile-box-dets">
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

                                        ))


                                    )
                            }
                        </div>

                    }
                    <button onClick={openAddPet} className="add-pet">
                        Add Pet Profile
                    </button>
                </div>
            </div>
        </>
    )
}

export default PetProfile