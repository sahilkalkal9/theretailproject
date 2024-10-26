import logo from './logo.svg';
import './App.css';
import Nav from './components/nav/nav';
import { Route, Routes, useLocation } from 'react-router-dom';
import Shop from './components/shop/shop';
import Home from './components/home/home';
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

function App() {


  const location = useLocation();
  const isActive = (path) => location.pathname === path;






  return (
    <UserProvider>
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
          <Route path='/shop' element={<Shop />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/signin' element={<LogInNew />} />
          <Route path='/faq' element={<FAQQ />} />
        </Routes>

        <Footer />

      </div>
    </UserProvider>
  );
}

export default App;
