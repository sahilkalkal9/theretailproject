import { createContext, useContext, useState, useEffect } from "react";
import { auth, firestore } from "./firebase"; // Make sure your Firebase config is imported

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        phone: "",
        pan: "",
        address: "",
    });

    const [petData, setPetData] = useState([]);

    useEffect(() => {
        const fetchUserData = async () => {
            if (auth.currentUser) {
                try {
                    // Fetch user data
                    const usersRef = firestore.collection("users");
                    const userSnapshot = await usersRef
                        .where("uid", "==", auth.currentUser.uid)
                        .get();
                    if (!userSnapshot.empty) {
                        const userDoc = userSnapshot.docs[0].data();
                        setUserData({
                            name: userDoc.name,
                            email: userDoc.email,
                            phone: userDoc.phone,
                            pan: userDoc.pan,
                            address: userDoc.address,
                        });

                        // Fetch pet data from subcollection
                        const petsRef = usersRef.doc(auth.currentUser.uid).collection("pets");
                        const petsSnapshot = await petsRef.get();
                        const fetchedPets = petsSnapshot.docs.map((doc) => doc.data());

                        // Store each fetched pet as an individual document in the users collection
                        const batch = firestore.batch();
                        fetchedPets.forEach((pet) => {
                            const petDocRef = usersRef.doc(auth.currentUser.uid).collection("pets").doc(); // Create a new document reference
                            batch.set(petDocRef, pet); // Store the pet data
                        });
                        await batch.commit();

                        // Update local state with fetched pets
                        setPetData(fetchedPets);
                    }
                } catch (error) {
                    console.error("Error fetching user or pet data:", error);
                }
            }
        };

        fetchUserData();
    }, []); // Fetch only once on app load

    return (
        <UserContext.Provider value={{ userData, petData }}>
            {children} {/* Ensure data is loaded before rendering children */}
        </UserContext.Provider>
    );
};
