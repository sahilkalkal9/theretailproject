import logo from './logo.svg';
import './App.css';
import "./app.scss"
import Nav from './components/nav/nav';
import { Route, Routes, useLocation } from 'react-router-dom';
import Shop from './components/shop/shop.jsx';
import Home from './components/home/home.js';
import About from './components/about/about';
import SignUp from './components/signup/signup';
import Login from './components/login/login';
import LogInNew from './components/login/login-new';
import Recycle from './components/recycle/recycle';
import FAQQ from './components/faq/faq.jsx';
import Contact from './components/contact/contact.js';

import ProfileNew from './components/profile/profile-new.jsx';
import { UserProvider, useUserContext } from './UserContext.js';
import Footer from './components/footer/footer.js';

import { useEffect, useState } from 'react';
import SignUpNew from './components/signup/signup-new.jsx';
import { Wear } from './components/shop/wear.jsx';
import { Walk } from './components/shop/walk.jsx';
import { Play } from './components/shop/play.jsx';
import { Sleep } from './components/shop/sleep.jsx';
import { auth, firestore } from './firebase.js';
import CheckoutP from './components/checkout/checkout.jsx';
import Orders from './components/orders/orders.jsx';
import ProductPage from './components/productPage/productPage.js';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import PrivacyT from './components/privacy/privacy.js';
import Terms from './components/terms/terms.js';
import Refund from './components/refund/refund.js';
import Preserve from './components/shop/preserve.jsx';
// import Invoice from './components/invoice/invoice.jsx';



function App() {


  const location = useLocation();
  const [showdp, setshowdp] = useState(true)
  const isActive = (path) => location.pathname === path;

  const handleClosePopup = () => {
    document.getElementById("dpMain").style.display = "none"
  }

  // if (showdp) {
  //   setTimeout(() => {
  //     document.getElementById("dpMain").style.display = "flex"

  //   }, 5000)

  //   setshowdp(false)

  // }









  return (
    <UserProvider>
      <>



        <div id='dpMain' className='discount-popup-box-main'>
          <div className='discount-popup-main'>
            <p onClick={handleClosePopup} className="dp-close">
              Close
            </p>
            <p className='dp-head'>
              Yay! You just got 20% off.
            </p>

            <form className='dp-form'>
              <input type='email' className='dp-inp' required placeholder='Enter your email' />
              <input type='submit' className='dp-submit' value="Reveal Promo Code" />
            </form>

            <p className='dp-text'>
              Consequat proident non cillum enim veniam proident do qui veniam laboris esse. Aliqua et duis quis ad dolor. Ut quis ea ullamco do nulla et est qui velit.
            </p>
          </div>
        </div>


      </>
      <div className="App">
        {
          isActive("/signup") || isActive("/signin") ? null : <Nav />
        }

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<ProfileNew />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/how-to-recycle' element={<Recycle />} />
          <Route path='/about-us' element={<About />} />
          <Route path='/shop' element={<Shop />} >
            <Route index path='/shop/' element={<Wear />} />
            <Route index path='/shop/wear' element={<Wear />} />
            <Route index path='/shop/walk' element={<Walk />} />
            <Route index path='/shop/play' element={<Play />} />
            <Route index path='/shop/sleep' element={<Sleep />} />
            <Route index path='/shop/preserve' element={<Preserve />} />
          </Route>
          <Route path='/signup' element={<SignUp />} />
          <Route path='/signin' element={<LogInNew />} />
          <Route path='/faq' element={<FAQQ />} />
          <Route path='/checkout' element={<CheckoutP />} />
          <Route path='/orders' element={<Orders />} />
          <Route path="/shop/:category/:pid" element={<ProductPage />} />
          <Route path='/privacy-policy' element={<PrivacyT />} />
          <Route path='/terms' element={<Terms />} />
          {/* <Route path='/invoice' element={<Invoice />} /> */}
          <Route path='/refund-policy' element={<Refund />} />

        </Routes>
        <Footer />

      </div>
    </UserProvider>
  );
}

export default App;
