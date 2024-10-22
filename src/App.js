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

function App() {


  const location = useLocation();
  const isActive = (path) => location.pathname === path;






  return (
    <div className="App">
      {
        isActive("/signup") || isActive("/signin") ? null : <Nav />
      }


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/how-to-recycle' element={<Recycle />} />
        <Route path='/about-us' element={<About />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<LogInNew />} />
      </Routes>



    </div>
  );
}

export default App;
