import React, { useState, useRef } from "react";
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

const CoursesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const clearButtonRef = useRef(null);
  const navigate = useNavigate();

  // State for each group's selected value
  const [level, setLevel] = useState("");
  const [duration, setDuration] = useState("");
  const [pricing, setPricing] = useState("");

  const courses = [
    {
      id: 1,
      title: "C#",
      level: "Beginner",
      duration: "2 weeks",
      paid: "free",
      image: "/prof.png",
      logo: "/Csharp.svg",
      description: "Private community for C# developers.",
    },
    {
      id: 2,
      title: "C++",
      level: "Beginner",
      duration: "2 weeks",
      paid: "paid",
      image: "/prof.png",
      logo: "/Csharp.svg",
      description: "Private community for C++ developers.",
    },
    {
      id: 3,
      title: "Python",
      level: "Beginner",
      duration: "2 weeks",
      paid: "free",
      image: "/prof.png",
      logo: "/Csharp.svg",
      description: "Private community for python developers.",
    },
  ];

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleClearFilters = () => {
    setLevel("");
    setDuration("");
    setPricing("");
    if (clearButtonRef.current) {
      clearButtonRef.current.blur();
    }
  };

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
              <InputGroup.Text className="search-icon">
                <Search />
              </InputGroup.Text>
            </InputGroup>

            {/* Level Filter */}
            <ToggleButtonGroup
              type="radio"
              name="levels"
              className="mt-3"
              value={level}
              onChange={(val) => setLevel(val)}
            >
              <ToggleButton
                id="tbg-radio-1"
                value="beginner"
                variant="outline-primary"
              >
                Beginner
              </ToggleButton>
              <ToggleButton
                id="tbg-radio-2"
                value="intermediate"
                variant="outline-primary"
              >
                Intermediate
              </ToggleButton>
              <ToggleButton
                id="tbg-radio-3"
                value="advanced"
                variant="outline-primary"
              >
                Advanced
              </ToggleButton>
            </ToggleButtonGroup>
            {"    "}
            {/* Duration Filter */}
            <ToggleButtonGroup
              type="radio"
              name="durations"
              className="mt-3"
              value={duration}
              onChange={(val) => setDuration(val)}
            >
              <ToggleButton
                id="tbg-radio-4"
                value="<1"
                variant="outline-primary"
              >
                Less than 1 month
              </ToggleButton>
              <ToggleButton
                id="tbg-radio-5"
                value="2-3"
                variant="outline-primary"
              >
                2-3 months
              </ToggleButton>
              <ToggleButton
                id="tbg-radio-6"
                value="3+"
                variant="outline-primary"
              >
                3+ months
              </ToggleButton>
            </ToggleButtonGroup>
            {"    "}
            {/* Pricing Filter */}
            <ToggleButtonGroup
              type="radio"
              name="pricing"
              className="mt-3 tg-bt"
              value={pricing}
              onChange={(val) => setPricing(val)}
            >
              <ToggleButton
                id="tbg-radio-7"
                value="free"
                variant="outline-primary"
              >
                Free
              </ToggleButton>
              <ToggleButton
                id="tbg-radio-8"
                value="paid"
                variant="outline-primary"
              >
                Paid
              </ToggleButton>
            </ToggleButtonGroup>
          </Col>
        </Row>

        {/* Course Cards */}
        <Row>
          {courses.map((course) => (
            <Col md={4} key={course.id} className="mb-4">
              <Card className="course-card">
                <Link to={`/courses/${course.id}`} className="card-link">
                  <div className="course-image-container">
                    <img
                      src={course.image}
                      className="course-image"
                      alt={course.title}
                    />
                    <div className="card-logo-title">
                      <img
                        src={course.logo}
                        className="course-logo"
                        alt="logo"
                      />
                      <Card.Title className="card-title">
                        {course.title}
                      </Card.Title>
                    </div>
                  </div>
                  <Card.Body className="card-body">
                    <Card.Text className="card-text">
                      {course.description}
                    </Card.Text>
                    <div className="course-details">
                      <PatchCheck className="card-icon" />
                      <span className="course-level">{course.level}</span>
                      <Clock className="card-icon" />
                      <span className="course-duration">{course.duration}</span>
                      <Tag className="card-icon" />
                      <span className="course-paid">{course.paid}</span>
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
