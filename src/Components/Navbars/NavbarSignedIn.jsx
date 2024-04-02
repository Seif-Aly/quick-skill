import React, { useState, useEffect } from "react";
import {
  Navbar,
  Container,
  Nav,
  OverlayTrigger,
  Popover,
  Image,
  Dropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "../Style/Navbars.css";
import { FaArrowDownWideShort } from "react-icons/fa6";
import { FaBookOpen, FaHeart, FaRegClock } from "react-icons/fa";

const NavbarSignedIn = () => {
  const [showCoursesMenu, setShowCoursesMenu] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const userData = {
    image: "/prof.png",
  };

  const mockCourses = [
    { id: 1, title: "C#", img: "/Csharp.svg" },
    { id: 2, title: "C#", img: "/Csharp.svg" },
    { id: 3, title: "c#", img: "/Csharp.svg" },
  ];

  const courseListPopover = (
    <Popover id="popover-courses" className="course-popover">
      <Popover.Body>
        <div className="course-menu">
          <Link to="/allcourses" className="course-menu-item">
            <FaBookOpen className="course-icon" /> All Courses
          </Link>
          {mockCourses.map((course) => (
            <Link
              key={course.id}
              to={`/courses/${course.id}`}
              className="course-menu-item"
            >
              <img src={course.img} alt={course.title} className="course-img" />{" "}
              {course.title}
            </Link>
          ))}
        </div>
      </Popover.Body>
    </Popover>
  );

  const profilePopover = (
    <Popover id="popover-basic">
      <Popover.Body>
        <div className="profile-menu">
          <Link to="/profile" className="profile-menu-item">
            Profile 👋
          </Link>
          <Link to="/settings" className="profile-menu-item">
            Settings ⚙️
          </Link>
          <Link to="/login" className="profile-menu-item">
            Logout 🚪
          </Link>
        </div>
      </Popover.Body>
    </Popover>
  );

  return (
    <Navbar bg="white" expand="lg" className="py-2">
      <Container>
        <div className="left-navbar">
          <Navbar.Brand href="/allcourses">
            <img
              src="/quickskill2.png"
              alt="Quickskill"
              className="d-inline-block align-top"
              style={{ width: "auto", height: "50px" }}
            />
          </Navbar.Brand>
          <OverlayTrigger
            trigger="click"
            placement="bottom"
            overlay={courseListPopover}
            rootClose
          >
            <span
              onClick={() => setShowCoursesMenu(!showCoursesMenu)}
              style={{ cursor: "pointer" }}
            >
              <FaArrowDownWideShort size="1.5em" className="course-icon" />
            </span>
          </OverlayTrigger>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0" />
        <div className="nav-buttons">
          <Nav>
            <div className="d-flex align-items-center">
              <OverlayTrigger
                trigger="click"
                placement="bottom"
                overlay={profilePopover}
                show={showProfileMenu}
                onToggle={(nextShow) => setShowProfileMenu(nextShow)}
                rootClose
              >
                <Image
                  src={userData.image}
                  alt="Profile"
                  roundedCircle
                  style={{ width: "40px", height: "40px", cursor: "pointer" }}
                />
              </OverlayTrigger>
            </div>
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavbarSignedIn;
