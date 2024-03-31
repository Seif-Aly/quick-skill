import React from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import "../Style/Navbars.css";

const NavbarSignedOut = () => {
  return (
    <Navbar bg="white" expand="lg" className="py-2">
      <Container>
        <Navbar.Brand href="/">
          <img
            src="quickskill2.png"
            alt="Quickskill"
            className="d-inline-block align-top"
            style={{ width: "auto", height: "50px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0 " />
        <div className="nav-buttons">
          <Nav>
            <Button
              variant="outline-secondary"
              className="mx-2 custom-button-login"
              href="/login"
            >
              Login
            </Button>
            <Button
              variant="primary"
              className="mx-2 custom-button-create-account"
              href="/sign-up"
            >
              Sign Up
            </Button>
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavbarSignedOut;
