'use client';
import { Navbar, Nav, Button } from 'react-bootstrap';
import Link from 'next/link';
import styles from './header.module.css';
import { useState } from 'react';

const Header = () => {
  const [clicked, setClicked] = useState(false);

  const changeColor = () => {
    setClicked(true);
  };

  return (
    <div className='navbar'> 
        <Navbar bg="white" expand="md">
          <Navbar.Brand href="/">
        <img src="/images/Logoa.png" alt="Logo" className={`img-fluid ${styles.logo}`}  />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link as={Link} href="/"> <div style={{color: "blue"}}>Home</div> </Nav.Link> 
             <Nav.Link as={Link} href="#link">About</Nav.Link>
            <Nav.Link as={Link} href="#link">Services</Nav.Link>
            <button onClick={changeColor} style={{ color: clicked ? 'white' : 'white' }}  className={`contact_us ${styles.contact_us} `}>  Contact us </button>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
      </div>
      
  );
};

export default Header;

