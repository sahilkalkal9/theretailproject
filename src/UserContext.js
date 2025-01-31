import { createContext, useContext, useState, useEffect } from "react";
import { auth, firestore } from "./firebase"; // Ensure Firebase is correctly configured
import { onAuthStateChanged } from "firebase/auth";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState({

    });

    const [petData, setPetData] = useState([]);
    const [orderData, setOrderData] = useState([]);
    const [cartData, setCartData] = useState([])

    useEffect(() => {
        const fetchUserData = async (uid) => {
            if (uid) {
                try {
                    // Fetch user data
                    const userDoc = await firestore.collection("users").doc(uid).get();
                    if (userDoc.exists) {
                        const userData = userDoc.data();

                        setUserData(userData);

                        // Fetch pet data from subcollection
                        const petsSnapshot = await firestore.collection("users").doc(uid).collection("pets").get();
                        const fetchedPets = petsSnapshot.docs.map((doc) => doc.data());
                        setPetData(fetchedPets);

                        // Fetch order data from subcollection
                        const ordersSnapshot = await firestore.collection("users").doc(uid).collection("orders").get();
                        const fetchedOrders = ordersSnapshot.docs.map((doc) => doc.data());
                        setOrderData(fetchedOrders);

                        const cartSnapshot = await firestore.collection("users").doc(uid).collection("cart").get()
                        const fetchCartData = await cartSnapshot.docs.map((doc) => doc.data());
                        setCartData(fetchCartData)
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
                setOrderData([]); // Clear order data when user is logged out
            }
        });

        return () => unsubscribe(); // Cleanup listener on unmount
    }, []); // Run only once when the component mounts

    return (
        <UserContext.Provider value={{ userData, petData, orderData, cartData }}>
            {children} {/* Ensure data is loaded before rendering children */}
        </UserContext.Provider>
    );
};



// Custom hook for using the UserContext
export const useUserContext = () => {
    return useContext(UserContext);
};
