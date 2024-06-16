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
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
