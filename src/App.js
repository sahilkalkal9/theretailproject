import logo from './logo.svg';
import './App.css';
import Nav from './components/nav/nav';
import { Route, Routes } from 'react-router-dom';
import Shop from './components/shop/shop';
import Home from './components/home/home';

function App() {
  return (
    <div className="App">
      <Nav />


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
      </Routes>



    </div>
  );
}

export default App;
