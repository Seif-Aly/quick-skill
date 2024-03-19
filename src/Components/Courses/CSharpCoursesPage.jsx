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
import { BarChart, Clock, PatchCheck, Search } from "react-bootstrap-icons";
import NavbarSignedIn from "../Navbars/NavbarSignedIn";
import { useNavigate, Link } from "react-router-dom";

const CSharpCoursesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const clearButtonRef = useRef(null);
  const navigate = useNavigate();

  const courses = [
    { id: 1, title: "C#", level: "Beginner", duration: "2 weeks" },
    { id: 2, title: "C#", level: "Intermediate", duration: "1 month" },
    { id: 3, title: "C#", level: "Advanced", duration: "2 months" },
  ];

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleClearFilters = () => {
    setSearchQuery("");
    if (clearButtonRef.current) {
      clearButtonRef.current.blur();
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  const handleNavigateToCertificate = (courseId) => {
    navigate(`/certificate/${courseId}`);
  };

  return (
    <>
      <NavbarSignedIn />
      <Container className="my-5">
        <Row className="align-items-center mb-4">
          <Col xs={12} md={8} lg={6} className="mb-3 mb-md-0">
            <Button variant="link" onClick={handleBack} className="back-button">
              &lt; All courses
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Col xs={12} md={4} lg={6} className="mb-3 mb-md-0 text-left">
              <img src="/csharp.svg" alt="C#" className="csharp-logo" />
            </Col>
            <hr className="title-underline" />
            <p className="page-description">
              Dive into the world of C# - the versatile programming language for
              mobile apps, game development, and enterprise solutions. Learning
              C# unlocks endless possibilities, making you a developer with the
              key to a world of opportunities.
            </p>
            <hr className="title-underline" />
          </Col>
        </Row>

        {/* Filters Section */}
        <Row>
          <Col lg={12} className="mb-4 filters">
            <div className="filter-title d-flex align-items-center">
              <h2 className="all-courses-title">All C# courses</h2>
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
            <ToggleButtonGroup type="checkbox" className="mt-3">
              <ToggleButton variant="outline-primary" value={1}>
                Beginner
              </ToggleButton>
              <ToggleButton variant="outline-primary" value={2}>
                Intermediate
              </ToggleButton>
              <ToggleButton variant="outline-primary" value={3}>
                Advanced
              </ToggleButton>
            </ToggleButtonGroup>
            {"    "}
            <ToggleButtonGroup type="checkbox" className="mt-3">
              <ToggleButton variant="outline-primary" value={1}>
                Less than 1 month
              </ToggleButton>
              <ToggleButton variant="outline-primary" value={2}>
                2-3 months
              </ToggleButton>
              <ToggleButton variant="outline-primary" value={3}>
                3+ months
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
                  <Card.Body>
                    <Card.Title>{course.title}</Card.Title>
                    <Card.Text className="card-text">
                      <BarChart className="card-icon" />
                      <span className="course-level">{course.level}</span>
                      <Clock className="card-icon" />
                      <span className="course-duration">{course.duration}</span>
                    </Card.Text>
                  </Card.Body>
                </Link>
                <Button
                  variant="primary"
                  className="cert"
                  onClick={() => handleNavigateToCertificate(course.id)}
                >
                  <PatchCheck className="cert-img" />
                  Get certificate
                </Button>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default CSharpCoursesPage;
