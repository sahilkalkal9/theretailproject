import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
import "firebase/compat/auth"

firebase.initializeApp({
  apiKey: "AIzaSyDBkS0OjfWvXRexTR7TM0DOwnozIKceefo",
  authDomain: "trp3-413d6.firebaseapp.com",
  projectId: "trp3-413d6",
  storageBucket: "trp3-413d6.appspot.com",
  messagingSenderId: "210713876650",
  appId: "1:210713876650:web:736fcabf1b5ce07a0458d3",
  measurementId: "G-849FRB0PMK"

    
});

const auth = firebase.auth();
const firestore = firebase.firestore();


export { auth, firestore, firebase };