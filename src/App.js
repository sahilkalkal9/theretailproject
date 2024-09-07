import logo from './logo.svg';
import './App.scss';
import Home from './components/home/home';
import { Route, Routes } from 'react-router-dom';
import Shop from './components/shop/shop';
import Cart from './components/cart/cart';
import Blogs from './components/blogs/blogs';
import Contact from './components/contact/contact';
import Profile from './components/profile/profile';
import Nav from './components/nav/nav';
import Signup from './components/signup/signup';
import Login from './components/login/login';
import Checkout from './components/checkout/checkout';
import { auth, firestore } from './firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { useEffect, useState } from 'react';
import Orders from './components/orders/orders';
import Story from './components/story/story';
import FAQQ from './components/faq/faq.jsx';
import Recycle from './components/recycle/recycle.jsx';


function App() {

  const usersRef = firestore.collection("users");
  const [users] = useCollectionData(usersRef);

  const [userData, setUserData] = useState({
    username: "",
    phone: "",
    email: "",
    address: "",
    pincode: 0,
    state: "",
    district: "",
    petname: "",
    petdob: "",
    petage: "",
    petbreed: "",
    petgender: ""
  });

  useEffect(() => {
    const fetchUserData = async () => {
      if (auth.currentUser) {
        const userDoc = await firestore.collection("users").doc(auth.currentUser.uid).get();
        if (userDoc.exists) {
          setUserData(userDoc.data());
        } else {
          console.log("No such document!");
        }
      }
    };

    fetchUserData();
  }, [auth.currentUser]);


  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/how-to-recycle' element={<Recycle />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<Story />} />
        <Route path='/faq' element={<FAQQ />} />
        <Route path='/profile' element={<Profile userData={userData} setUserData={setUserData} />} />
        <Route path='/checkout' element={<Checkout userData={userData} setUserData={setUserData} />} />
      </Routes>
    </div>
  );
}


export default App;
