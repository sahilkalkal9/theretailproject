import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
import "firebase/compat/auth"

firebase.initializeApp({
  apiKey: "AIzaSyDrkh-R6MQsc1-Am40ars54HsIY5ztzHzo",
  authDomain: "trp1-284bb.firebaseapp.com",
  projectId: "trp1-284bb",
  storageBucket: "trp1-284bb.appspot.com",
  messagingSenderId: "918926952258",
  appId: "1:918926952258:web:e3ff270a16a52a7715aadb",
  measurementId: "G-FRTW26MCF0"

    
});

const auth = firebase.auth();
const firestore = firebase.firestore();


export { auth, firestore, firebase };