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

const mockCourses = [
  { id: 1, title: "C#", img: "/Csharp.svg" },
  { id: 2, title: "C++", img: "/Csharp.svg" },
  { id: 3, title: "Python", img: "/Csharp.svg" },
];

const MAX_HEARTS = 5;
const HEART_REFILL_TIME = 1 * 60 * 1000; // 1 minute

const NavbarInCourse = () => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showCoursesMenu, setShowCoursesMenu] = useState(false);
  const [hearts, setHearts] = useState(0);
  const [nextHeartTimer, setNextHeartTimer] = useState(HEART_REFILL_TIME);
  const [heartRefillTimer, setHeartRefillTimer] = useState(null);

  const [userData, setUserData] = useState({
    hearts: 0,
    xp: 0,
    currency: 0,
    image: "/prof.png",
  });

  useEffect(() => {
    // Mock fetching user data
    const apiResponse = {
      hearts: 3,
      xp: 20,
      currency: 500,
      image: "/prof.png",
    };
    setUserData(apiResponse);
    setHearts(apiResponse.hearts);
    setHeartRefillTimer(new Date(Date.now() + HEART_REFILL_TIME));

    const interval = setInterval(() => {
      setNextHeartTimer((prevTime) => {
        if (prevTime <= 0 && hearts < MAX_HEARTS) {
          setHearts((h) => h + 1);
          return HEART_REFILL_TIME; // Reset timer
        }
        return prevTime - 1000; // Decrement timer by 1 second
      });
    }, 1000);

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [hearts]);

  const courseListPopover = (
    <Popover id="popover-courses" className="course-popover">
      <Popover.Body>
        <div className="course-menu">
          <Link to="/all-courses" className="course-menu-item">
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
          <Link to="/support" className="profile-menu-item">
            Support ❓
          </Link>
          <Link to="/logout" className="profile-menu-item">
            Logout 🚪
          </Link>
        </div>
      </Popover.Body>
    </Popover>
  );

  // Converts milliseconds to mm:ss format
  const formatTime = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = ((ms % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  };

  const heartPopover = (
    <Popover id="popover-hearts" className="popover-hearts">
      <Popover.Body>
        <h1>Hearts</h1>
        <p>Hearts allow you to learn</p>
        <p>No hearts - no practice</p>
        <div className="purple-line"></div>
        <div className="hearts-container">
          {Array.from({ length: MAX_HEARTS }, (_, i) => (
            <FaHeart
              key={i}
              color={i < hearts ? "red" : "grey"}
              className="heart-icn"
            />
          ))}
        </div>
        <div className="purple-line"></div>
        {hearts < MAX_HEARTS && (
          <div className="timer">
            <FaRegClock /> +1 in {formatTime(nextHeartTimer)}
          </div>
        )}
        {hearts === MAX_HEARTS && (
          <div className="full-hearts">Full hearts</div>
        )}
      </Popover.Body>
    </Popover>
  );

  return (
    <Navbar bg="white" expand="lg" className="py-2">
      <Container>
        <Navbar.Brand href="">
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
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#leaderboard" className="nav-link-lg">
              Leaderboard
            </Nav.Link>
            <Nav.Link href="#community" className="nav-link-lg">
              Community
            </Nav.Link>
          </Nav>
          <Nav>
            <div className="d-flex align-items-center">
              <img src="/fire.svg" alt="XP" className="icon22" />
              <span className="mx-2">{userData.xp}</span>
              <img src="/crystal.svg" alt="Currency" className="icon22" />{" "}
              <span className="mx-2">{userData.currency}</span>
              <OverlayTrigger
                trigger="click"
                placement="bottom"
                overlay={heartPopover}
                onToggle={(show) => setHearts(show ? hearts : hearts)}
                rootClose
              >
                <span style={{ cursor: "pointer" }} className="heart-cont">
                  <FaHeart color="red" className="heart-icn" />
                  {userData.hearts}
                </span>
              </OverlayTrigger>
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarInCourse;
