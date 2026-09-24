import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';

function MyNavbar() {
  return (
    <Navbar expand="lg" className="custom-navbar" sticky="top">
      <Container>
        {/* Brand Logo & Name (Left) */}
        <Navbar.Brand href="#home" className="brand-logo d-flex align-items-center gap-2">
          <img
            src="/images/LogoCofeeshop.png"
            alt="Brew & Bean Logo"
            width="36"
            height="36"
            className="rounded-circle d-inline-block"
          />
          Brew & Bean
        </Navbar.Brand>

        {/* Responsive Mobile Toggle Button */}
        <Navbar.Toggle aria-controls="coffee-navbar-nav" />

        <Navbar.Collapse id="coffee-navbar-nav">
          {/* Navigation Links (Centered in the middle with mx-auto) */}
          <Nav className="mx-auto align-items-center my-2 my-lg-0">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#menu">Menu</Nav.Link>
            <Nav.Link href="#shop">Shop</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
          </Nav>

          {/* Action Buttons: Search button + Cart button (Right) */}
          <div className="d-flex align-items-center gap-2 mt-2 mt-lg-0">
            <Button variant="outline-dark" className="nav-search-btn d-flex align-items-center gap-1">
              🔍 <span>Search</span>
            </Button>
            <Button className="nav-cart-btn d-flex align-items-center gap-1">
              🛒 <span>Cart</span>
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
