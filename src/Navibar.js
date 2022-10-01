import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "./whitecat3.png";



function Navibar() {
    return (
    <Navbar fixed="top" collapseOnSelect expand="md" >
        <Navbar.Brand>
        <img className="logoimg" src={Logo} width='120px' alt="logo" />
        </Navbar.Brand>

        <Navbar.Toggle  aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-2">
                <Nav.Link><Link to="/" className='link'>HOME</Link></Nav.Link>
                <Nav.Link><Link to="/about" className='link'>ABOUT</Link></Nav.Link>
                <Nav.Link><Link to="/menu" className='link redmenu'>MENU</Link></Nav.Link>
                <Nav.Link><Link to="/contactus" className='link'>CONTACT US</Link></Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    );
}

export default Navibar;