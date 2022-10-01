import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import React from 'react';
import Home from './Home';
import Menu from './Menu';
import About from './About';
import Contactus from './Contactus';
import Navibar from './Navibar';

function App() {
  return (<Router>
    
    <Navibar />
    
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
