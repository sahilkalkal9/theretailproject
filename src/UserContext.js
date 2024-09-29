import { createContext, useContext, useState, useEffect } from "react";
import { auth, firestore } from "./firebase"; // Make sure your Firebase config is imported
import { onAuthStateChanged } from "firebase/auth";

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
        // Function to fetch user and pet data
        const fetchUserData = async (uid) => {
            if (uid) {
                try {
                    // Fetch user data
                    const usersRef = firestore.collection("users");
                    const userSnapshot = await usersRef
                        .where("uid", "==", uid)
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
                        const petsRef = usersRef.doc(uid).collection("pets");
                        const petsSnapshot = await petsRef.get();
                        const fetchedPets = petsSnapshot.docs.map((doc) => doc.data());

                        // Update local state with fetched pets
                        setPetData(fetchedPets);
                    } else {
                        console.warn("No user data found for the current user.");
                    }
                } catch (error) {
                    console.error("Error fetching user or pet data:", error);
                }
            } else {
                console.warn("User ID is not available.");
            }
        };

        // Set up auth state listener
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                fetchUserData(user.uid); // Fetch user data when authenticated
            } else {
                // Reset state when user is logged out
                setUserData({
                    name: "",
                    email: "",
                    phone: "",
                    pan: "",
                    address: "",
                });
                setPetData([]); // Clear pet data when user is logged out
            }
        });

        return () => unsubscribe(); // Cleanup listener on unmount
    }, []); // Run only once when the component mounts

    return (
        <UserContext.Provider value={{ userData, petData }}>
            {children} {/* Ensure data is loaded before rendering children */}
        </UserContext.Provider>
    );
};

// Custom hook for using the UserContext
export const useUserContext = () => {
    return useContext(UserContext);
};
