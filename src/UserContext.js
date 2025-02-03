import { createContext, useContext, useState, useEffect } from "react";
import { auth, firestore } from "./firebase"; // Ensure Firebase is correctly configured
import { onAuthStateChanged } from "firebase/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState({

    });

    const [petData, setPetData] = useState([]);
    const [orderData, setOrderData] = useState([]);
    const [cartData, setCartData] = useState([])
    const [checkoutAmt, setCheckoutAmt] = useState(0)

    const [doingWork, setDoingWork] = useState(false)

    useEffect(() => {
        const fetchUserData = async (uid) => {
            if (uid) {
                try {
                    // Fetch user data
                    const userDoc = await firestore.collection("users").doc(uid).get();
                    if (userDoc.exists) {
                        const userData = userDoc.data();

                        setUserData(userData);

                        // const unsubscribeCheckoutAmt = userDoc.onSnapshot((doc) => {
                        //     if (doc.exists) {
                        //         const data = doc.data();
                        //         setCheckoutAmt(data.checkoutAmt || 0); 
                        //     }
                        // });

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

                        const checkoutAmtRef = firestore.collection("users").doc(uid);
                        checkoutAmtRef.onSnapshot((doc) => {
                            if (doc.exists) {
                                const updatedUserData = doc.data();
                                setUserData(updatedUserData)
                            }
                        });

                        const cartDataRef = firestore.collection("users").doc(uid).collection("cart");
                        cartDataRef.onSnapshot((doc) => {
                            if (doc.exists) {
                                const updatedCartData = doc.data();
                                setUserData(updatedCartData)
                            }
                        });

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
                    checkoutAmt: 0
                });
                setPetData([]); // Clear pet data when user is logged out
                setOrderData([]); // Clear order data when user is logged out
            }
        });

        return () => unsubscribe(); // Cleanup listener on unmount
    }, []); // Run only once when the component mounts

    const cartRef = firestore.collection("users").doc(auth.currentUser?.uid).collection("cart")
    const [cart] = useCollectionData(cartRef)

    const addToCart = async (p) => {
        const cartProdId = firestore.collection("users").doc(auth.currentUser?.uid).collection("cart").doc().id

        if (cart && cart.some(product => product.itemId == p.id)) {
            alert("Item is already in cart, increase quantity in cart")
        }
        else {
            await setDoingWork(true)
            await firestore.collection("users").doc(auth.currentUser?.uid).collection("cart").doc(cartProdId).set({
                "docId": cartProdId,
                "name": p.name,
                "thumbnail": p.thumbnail,
                "link": `/shop/${p.category}/${p.id}`,
                "price": p.price,
                "quantity": 1,
                "itemId": p.id
            })
                .then(async () => {
                    const newAmt = userData.checkoutAmt + Number(p.price);
                    setCheckoutAmt(newAmt)
                    await firestore.collection("users").doc(auth.currentUser?.uid).update({
                        "checkoutAmt": newAmt
                    }, { merge: true })
                    alert("product added to cart")
                    await setDoingWork(false)
                })
        }
    }

    return (
        <UserContext.Provider value={{ userData, petData, orderData, cartData, addToCart, checkoutAmt, setCheckoutAmt, doingWork, setDoingWork, setCartData }}>
            {children} {/* Ensure data is loaded before rendering children */}
        </UserContext.Provider>
    );
};



// Custom hook for using the UserContext
export const useUserContext = () => {
    return useContext(UserContext);
};
