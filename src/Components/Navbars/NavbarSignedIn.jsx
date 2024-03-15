import React, { useState, useEffect } from "react";
import { Navbar, Container, Image, Nav, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const NavbarSignedIn = () => {
  const [userData, setUserData] = useState({
    hearts: 0,
    xp: 0,
    currency: 0,
    image: "",
  });

  // Simulating fetching data from the API
  useEffect(() => {
    // Fetch data from API and update state
    const fetchData = async () => {
      const apiResponse = {
        hearts: 5,
        xp: 20,
        currency: 500,
        image: "path-to-your-profile-image.png", // Replace with actual path or API response
      };

      setUserData(apiResponse);
    };

    fetchData();
  }, []);

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
            <Nav.Link href="#My-Home" className="nav-link-lg">
              My Home
            </Nav.Link>
            <Nav.Link href="#courses" className="nav-link-lg">
              Courses
            </Nav.Link>
            <Nav.Link href="#leaderboard" className="nav-link-lg">
              Leaderboard
            </Nav.Link>
            <Nav.Link href="#community" className="nav-link-lg">
              Community
            </Nav.Link>
            <Nav.Link href="#resources" className="nav-link-lg">
              Resources
            </Nav.Link>
          </Nav>
          <Nav>
            <div className="d-flex align-items-center">
              <img src="fire.png" alt="XP" className="icon" />
              <span className="mx-2">{userData.xp}</span>
              <img src="crystal.svg" alt="Currency" className="icon2" />{" "}
              <span className="mx-2">{userData.currency}</span>
              <div className="icon3">❤️</div>
              <span className="mx-2">{userData.hearts}</span>
              <Image
                src={userData.image}
                alt="Profile"
                roundedCircle
                style={{ width: "40px", height: "40px" }}
              />
              <Button variant="warning" className="mx-2">
                Get PRO
              </Button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarSignedIn;
