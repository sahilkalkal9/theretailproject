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
import { UserProvider } from './UserContext.js';
import Footer from './components/footer/footer.js';
import ProductPage from './components/product/product.jsx';
import { useEffect, useState } from 'react';
import SignUpNew from './components/signup/signup-new.jsx';
import { Wear } from './components/shop/wear.jsx';
import { Walk } from './components/shop/walk.jsx';
import { Play } from './components/shop/play.jsx';
import { Sleep } from './components/shop/sleep.jsx';

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

  //   }, 10000)

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
          </Route>
          <Route path='/signup' element={<SignUp />} />
          <Route path='/signin' element={<LogInNew />} />
          <Route path='/faq' element={<FAQQ />} />
          <Route path='/product' element={<ProductPage />} />
        </Routes>
        <Footer />

      </div>
    </UserProvider>
  );
}

export default App;
