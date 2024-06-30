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

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
