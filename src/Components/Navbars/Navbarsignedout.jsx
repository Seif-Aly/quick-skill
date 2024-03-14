import React from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbarsignedout = () => {
  return (
    <Navbar bg="white" expand="lg" className="py-2">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="quickskill2.png"
            alt="Quickskill"
            className="d-inline-block align-top"
            style={{ width: "auto", height: "50px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#courses" className="nav-link-lg">
              Courses
            </Nav.Link>
            <Nav.Link href="#community" className="nav-link-lg">
              Community
            </Nav.Link>
            <Nav.Link href="#resources" className="nav-link-lg">
              Resources
            </Nav.Link>
          </Nav>
          <Nav>
            <Button
              variant="outline-secondary"
              className="mx-2 custom-button-login"
            >
              Login
            </Button>
            <Button
              variant="primary"
              className="mx-2 custom-button-create-account"
            >
              Create free account
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbarsignedout;
