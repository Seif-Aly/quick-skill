import React, { useState, useEffect } from "react";
import { Navbar, Container, Image, Nav, Button } from "react-bootstrap";
import "../Style/Navbars.css";

const NavbarSignedIn = () => {
  const userData = {
    image: "/prof.png",
  };

  return (
    <Navbar bg="white" expand="lg" className="py-2">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="/quickskill2.png"
            alt="Quickskill"
            className="d-inline-block align-top"
            style={{ width: "auto", height: "50px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0" />
        <div className="nav-buttons">
          <Nav>
            <div className="d-flex align-items-center">
              <Image
                src={userData.image}
                alt="Profile"
                roundedCircle
                style={{ width: "40px", height: "40px" }}
              />
            </div>
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavbarSignedIn;
