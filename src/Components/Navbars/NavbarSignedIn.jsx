import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
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
import {
  fetchMyCourses,
  logoutUser,
  fetchCurrentUser,
} from "../../Store/actions";

const NavbarSignedIn = () => {
  const [showCoursesMenu, setShowCoursesMenu] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/login");
  };
  const { userCourses, loading, error, user } = useSelector(
    (state) => state.auth
  );
  useEffect(() => {
    if (!user) {
      dispatch(fetchMyCourses());
      dispatch(fetchCurrentUser());
    }
  }, [dispatch, user]);

  if (loading) {
    return <div>Loading your courses...</div>;
  }

  if (error) {
    return <div>Error fetching courses: {error}</div>;
  }

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
                  src={user && user.photo}
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
