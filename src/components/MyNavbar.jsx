import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

function MyNavbar() {
  return (
    <Navbar expand="lg" className="custom-navbar" sticky="top">
      <Container>
        {/* Brand Logo & Name */}
        <Navbar.Brand href="#home" className="brand-logo">
          ☕ Brew & Bean
        </Navbar.Brand>

        {/* Responsive Mobile Toggle Button */}
        <Navbar.Toggle aria-controls="coffee-navbar-nav" />

        {/* Navigation Links */}
        <Navbar.Collapse id="coffee-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#menu">Menu</Nav.Link>
            <Nav.Link href="#shop">Shop</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#cart" className="cart-link">
              🛒 Cart
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
