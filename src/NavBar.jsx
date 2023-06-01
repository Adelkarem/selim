import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Container, Nav, Navbar } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" className="sticky-top">
      <Container>
        <Navbar.Brand as={HashLink} to="#home">
          <img src="imgs/3.1.png" alt="" width={50} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center">
          <Nav>
            <Nav.Link as={HashLink} to="#home">
              HOME
            </Nav.Link>
            <Nav.Link as={HashLink} to="#products">
              PRODUCTS
            </Nav.Link>
            <Nav.Link as={HashLink} to="#contact">
              CONTACT
            </Nav.Link>
            <Nav.Link as={HashLink} to="#About">
              ABOUT
            </Nav.Link>
         
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
