import React from "react";
import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "./whitecat3.png";



function Navibar() {
    
    const [expanded, setExpanded] = useState(false);

    return (
    <Navbar expanded={expanded} fixed="top" collapseOnSelect expand="md" >
        <Navbar.Brand className="navbrand">
        <img className="logoimg" src={Logo} width='120px' alt="logo" />
       <div className="spanbrand"><span className="gr">LOST CAT</span><span>•</span><span className="rd"> PUB</span></div>
        </Navbar.Brand>

        <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")}  aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-2">
                <Nav.Link><Link onClick={() => setExpanded(false)} to="/" className='link'>HOME</Link></Nav.Link>
                <Nav.Link><Link onClick={() => setExpanded(false)} to="/about" className='link'>ABOUT</Link></Nav.Link>
                <Nav.Link><Link onClick={() => setExpanded(false)} to="/menu" className='link redmenu'>MENU</Link></Nav.Link>
                <Nav.Link><Link onClick={() => setExpanded(false)} to="/contactus" className='link'>CONTACT US</Link></Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>


);
}

export default Navibar;