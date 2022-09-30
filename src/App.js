import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import React from 'react';
import Home from './Home';
import Menu from './Menu';
import About from './About';
import Contactus from './Contactus';
import logo from './whitecat3.png'

function App() {
  return (<Router>
    <nav>
      <img src={logo} alt="logo" className='logocat' width='120px'/>
    <Link to="/" className='link'>HOME</Link>
    <Link to="/about" className='link'>ABOUT</Link>
    <Link to="/menu" className='link redmenu'>MENU</Link>
    <Link to="/contactus" className='link'>CONTACT US</Link>
    </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/contactus' element={<Contactus />} />

      </Routes>
    </Router>
  );
}


export default App;
