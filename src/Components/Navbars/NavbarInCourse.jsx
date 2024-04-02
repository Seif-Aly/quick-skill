import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Navbar,
  Container,
  Nav,
  OverlayTrigger,
  Popover,
  Image,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import "../Style/Navbars.css";
import { FaArrowDownWideShort } from "react-icons/fa6";
import { FaBookOpen, FaHeart, FaRegClock } from "react-icons/fa";
import {
  fetchMyCourses,
  fetchCourseResources,
  logoutUser,
  fetchCurrentUser,
} from "../../Store/actions";
import { useParams, useNavigate } from "react-router-dom";

const MAX_HEARTS = 5;
const HEART_REFILL_TIME = 1 * 10 * 1000;

const NavbarInCourse = () => {
  const { courseId } = useParams();
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showCoursesMenu, setShowCoursesMenu] = useState(false);
  const [hearts, setHearts] = useState(0);
  const [nextHeartTimer, setNextHeartTimer] = useState(HEART_REFILL_TIME);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/login");
  };
  const { userCourses, loading, error, courseResources, user } = useSelector(
    (state) => state.auth
  );
  useEffect(() => {
    if (courseId) {
      dispatch(fetchCourseResources(courseId));
      dispatch(fetchMyCourses());
      dispatch(fetchCurrentUser());
    }
  }, [dispatch, courseId]);

  // useEffect(() => {
  //   setUserData(apiResponse);
  //   setHearts(apiResponse.hearts);
  //   setHeartRefillTimer(new Date(Date.now() + HEART_REFILL_TIME));

  //   const interval = setInterval(() => {
  //     setNextHeartTimer((prevTime) => {
  //       if (prevTime <= 0) {
  //         setHearts((currentHearts) => {
  //           if (currentHearts < MAX_HEARTS) {
  //             setUserData((userData) => ({
  //               ...userData,
  //               hearts: userData.hearts + 1,
  //             }));
  //             return currentHearts + 1;
  //           }
  //           return currentHearts;
  //         });
  //         return HEART_REFILL_TIME;
  //       }
  //       return prevTime - 1000;
  //     });
  //   }, 1000);

  //   return () => clearInterval(interval); // Clear interval on component unmount
  // }, []);

  if (loading) {
    return <div>Loading your courses...</div>;
  }

  if (error) {
    return <div>Error fetching courses: {error}</div>;
  }
  if (!courseResources) return <div>Loading resources...</div>;

  const courseListPopover = (
    <Popover id="popover-courses" className="course-popover">
      <Popover.Body>
        <div className="course-menu">
          <Link to="/" className="course-menu-item">
            <FaBookOpen className="course-icon" /> All Courses
          </Link>
          {userCourses &&
            userCourses.map((course) => (
              <Link
                key={course.course_id}
                to={`/course/${course.course_id}`}
                className="course-menu-item"
              >
                {course.media && course.media.length > 0 && (
                  <img
                    src={course.media[1].url}
                    alt={course.media[1].name}
                    className="course-img"
                  />
                )}{" "}
                {course.course_name}
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
          <span className="profile-menu-item" onClick={handleLogout}>
            Logout 🚪
          </span>
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
        <div className="left-navbar">
          <Navbar.Brand href="/">
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
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <LinkContainer to={`/course/${courseId}/leaderboard`}>
              <Nav.Link className="nav-link-lg">Leaderboard</Nav.Link>
            </LinkContainer>
            <LinkContainer to={`/course/${courseId}/community`}>
              <Nav.Link className="nav-link-lg">Community</Nav.Link>
            </LinkContainer>
          </Nav>
          <Nav>
            <div className="d-flex align-items-center">
              <img src="/fire.svg" alt="XP" className="icon22" />
              <span className="mx-2">{courseResources.streak}</span>
              <img src="/crystal.svg" alt="Currency" className="icon22" />{" "}
              <span className="mx-2">{courseResources.currency}</span>
              <OverlayTrigger
                trigger="click"
                placement="bottom"
                overlay={heartPopover}
                onToggle={(show) => setHearts(show ? hearts : hearts)}
                rootClose
              >
                <span style={{ cursor: "pointer" }} className="heart-cont">
                  <FaHeart color="red" className="heart-icn" />
                  {courseResources.hearts}
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
                  src={user && user.photo}
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
