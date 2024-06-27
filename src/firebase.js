import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
import "firebase/compat/auth"

firebase.initializeApp({
    apiKey: "AIzaSyDdyapAH2x1zC5pSLg-CkGAGdSzOCgMX_k",
  authDomain: "theretailproject-c92a9.firebaseapp.com",
  projectId: "theretailproject-c92a9",
  storageBucket: "theretailproject-c92a9.appspot.com",
  messagingSenderId: "69661042474",
  appId: "1:69661042474:web:b0640ee18dcdded090e053",
  measurementId: "G-T074DTYK74"

    
});

const auth = firebase.auth();
const firestore = firebase.firestore();


export { auth, firestore, firebase };