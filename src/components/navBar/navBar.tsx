import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import './NavBar.scss';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar expand="lg" className="navbar-custom" style={{ position: 'fixed', width: '100%', zIndex: '100' }}>
      <Navbar.Brand href="#">
        <img src="" alt="" className='logo' /> {/* Add your logo */}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="#about">About Us</Nav.Link>
          <Nav.Link href="#service">Programs</Nav.Link>
          <Nav.Link href="#gallery">Gallery</Nav.Link>
          <Nav.Link style={{marginRight:'10px'}} href="#blog">Blog</Nav.Link>
        </Nav>
        <Button style={{marginRight:'20px'}} variant="outline-primary" className="btn">CONTACT</Button>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
