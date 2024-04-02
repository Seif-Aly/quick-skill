import React, { useState, useRef, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  InputGroup,
  ToggleButton,
  ToggleButtonGroup,
  Alert,
} from "react-bootstrap";
import {
  BarChart,
  Clock,
  PatchCheck,
  Search,
  Tag,
} from "react-bootstrap-icons";
import NavbarSignedIn from "../Navbars/NavbarSignedIn";
import { Link, useNavigate } from "react-router-dom";
import "../Style/CoursesPage.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourses } from "../../Store/actions";

const CoursesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [level, setLevel] = useState("");
  const [duration, setDuration] = useState("");
  const [course_type, setCourse_type] = useState("");
  const clearButtonRef = useRef(null);
  const dispatch = useDispatch();
  const { courses, loading, error } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  const fetchFilteredCourses = () => {
    dispatch(
      fetchCourses({
        search: searchQuery,
        level,
        course_type,
        duration,
      })
    );
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    fetchFilteredCourses();
  }, [level, duration, course_type]);

  const handleSearch = () => {
    fetchFilteredCourses();
  };

  const handleClearFilters = () => {
    setLevel("");
    setDuration("");
    setCourse_type("");
    setSearchQuery("");
    fetchFilteredCourses();
    if (clearButtonRef.current) {
      clearButtonRef.current.blur();
    }
  };
  const isCoursesArray = Array.isArray(courses);
  if (loading) {
    return <div>Loading courses...</div>;
  }

  if (error) {
    return <Alert variant="danger">{error}</Alert>;
  }

  return (
    <>
      <NavbarSignedIn />
      <Container className="my-1">
        <Row className="text-center mb-4">
          <Col>
            <h1 className="text-center page-title">Discover courses</h1>
          </Col>
        </Row>

        <Row>
          <Col lg={12} className="mb-4 filters">
            <div className="filter-title d-flex align-items-center">
              <Button
                variant="link"
                className="clear-filters-btn ml-auto"
                onClick={handleClearFilters}
                ref={clearButtonRef}
              >
                Clear Filters
              </Button>
            </div>
            <InputGroup className="search-bar">
              <Form.Control
                placeholder="Search course"
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <Button variant="outline-primary" onClick={handleSearch}>
                <Search color="#000" />
              </Button>
              {/* <InputGroup.Text className="search-icon"> */}

              {/* </InputGroup.Text> */}
            </InputGroup>

            {/* Level Filter */}
            <div className="filter-group">
              <ToggleButtonGroup
                type="radio"
                name="level"
                className="mt-3"
                value={level}
                onChange={(val) => setLevel(val)}
              >
                <ToggleButton
                  id="tbg-radio-1"
                  value="easy"
                  variant="outline-primary"
                  className="flt-btn"
                >
                  Easy
                </ToggleButton>
                <ToggleButton
                  id="tbg-radio-2"
                  value="Medium"
                  variant="outline-primary"
                  className="flt-btn"
                >
                  Medium
                </ToggleButton>
                <ToggleButton
                  id="tbg-radio-3"
                  value="Hard"
                  variant="outline-primary"
                  className="flt-btn"
                >
                  Hard
                </ToggleButton>
              </ToggleButtonGroup>
              {"    "}
              {/* Duration Filter */}
              <ToggleButtonGroup
                type="radio"
                name="duration"
                className="mt-3"
                value={duration}
                onChange={(val) => setDuration(val)}
              >
                <ToggleButton
                  id="tbg-radio-4"
                  value="Short"
                  variant="outline-primary"
                  className="flt-btn"
                >
                  Less than 3 Weeks
                </ToggleButton>
                <ToggleButton
                  id="tbg-radio-5"
                  value="Medium"
                  variant="outline-primary"
                  className="flt-btn"
                >
                  1-3 months
                </ToggleButton>
                <ToggleButton
                  id="tbg-radio-6"
                  value="Long"
                  variant="outline-primary"
                  className="flt-btn"
                >
                  3+ months
                </ToggleButton>
              </ToggleButtonGroup>

              {"    "}
              {/* Pricing Filter */}
              <ToggleButtonGroup
                type="radio"
                name="course_type"
                className="mt-3 tg-bt"
                value={course_type}
                onChange={(val) => setCourse_type(val)}
              >
                <ToggleButton
                  id="tbg-radio-7"
                  value="FR"
                  variant="outline-primary"
                  className="flt-btn"
                >
                  Free
                </ToggleButton>
                <ToggleButton
                  id="tbg-radio-8"
                  value="PD"
                  variant="outline-primary"
                  className="flt-btn"
                >
                  Paid
                </ToggleButton>
              </ToggleButtonGroup>
            </div>
          </Col>
        </Row>

        {/* Course Cards */}
        <Row>
          {isCoursesArray &&
            courses.map((course) => (
              <Col md={4} key={course.course_id} className="mb-4">
                <Card className="course-card">
                  <Link
                    to={`/course/${course.course_id}`}
                    className="card-link"
                  >
                    <div className="course-image-container">
                      {course.media && course.media.length > 0 && (
                        <img
                          src={course.media[0].url}
                          className="course-image"
                          alt={course.course_name}
                        />
                      )}
                      <div className="card-logo-title">
                        {course.media && course.media.length > 1 && (
                          <img
                            src={course.media[1].url}
                            className="csharp-logo"
                            alt="Course Logo"
                          />
                        )}
                        <Card.Title className="card-title">
                          {course.course_name}
                        </Card.Title>
                      </div>
                    </div>
                    <Card.Body className="card-body">
                      <Card.Text className="card-text">
                        {course.course_description}
                      </Card.Text>
                      <div className="course-details">
                        <PatchCheck className="card-icon" />
                        <span className="course-level">
                          {course.difficulty}
                        </span>
                        <Clock className="card-icon" />
                        <span className="course-duration">
                          {course.duration}
                        </span>
                        <Tag className="card-icon" />
                        <span className="course-paid">
                          {course.course_type}
                        </span>
                      </div>
                    </Card.Body>
                  </Link>
                </Card>
              </Col>
            ))}
        </Row>
      </Container>
    </>
  );
};

export default CoursesPage;
