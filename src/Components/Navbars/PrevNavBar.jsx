import React from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { Instagram, Telegram } from "react-bootstrap-icons";
import "../Style/Navbars.css";
import "../Style/PreViewPage.css";

const PrevNavBar = () => {
  return (
    <Navbar bg="white" expand="lg" className="py-2">
      <Container>
        <div className="logo-cont">
          <Navbar.Brand href="/">
            <img
              src="QUICKSKILL.png"
              alt="Quickskill"
              className="d-inline-block align-top"
              style={{ width: "auto", height: "50px" }}
            />
            <h1>QuickSkill</h1>
          </Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0 " />
        <div className="nav-buttonss">
          <a
            href="https://www.instagram.com/quickskilledu"
            className="navbar-icon-link"
          >
            <Instagram size={24} />
          </a>
          <a href="https://t.me/quickskillhse" className="navbar-icon-link">
            <Telegram size={24} />
          </a>
          <Button
            variant="primary"
            className="mx-2 custom-button-create-account"
            href="#contact-form"
          >
            К форме
          </Button>
        </div>
      </Container>
    </Navbar>
  );
};

export default PrevNavBar;
