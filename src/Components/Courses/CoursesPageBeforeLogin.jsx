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
import NavbarSignedOut from "../Navbars/NavbarSignedOut";

const CoursesPageBeforeLogin = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const clearButtonRef = useRef(null);

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

  return (
    <>
      <NavbarSignedOut />
      <Container className="my-5">
        <Row className="text-center mb-4">
          <Col>
            <h1 className="page-title">Courses 🎓</h1>
            <hr className="title-underline" />
            <p className="page-description">
              Explore a world of knowledge and skill development with our online
              programming courses. Dive into comprehensive lessons and expert
              guidance to elevate your programming prowess. Unleash your
              potential and embark on a journey of learning with our carefully
              crafted courses. Enrich your coding repertoire today!
            </p>
            <hr className="title-underline" />
          </Col>
        </Row>

        {/* Filters Section */}
        <Row>
          <Col lg={12} className="mb-4 filters">
            <div className="filter-title d-flex align-items-center">
              <h2 className="all-courses-title">All courses</h2>
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
                <Card.Body>
                  <Card.Title>{course.title}</Card.Title>
                  <Button variant="primary" className="cert">
                    <PatchCheck className="cert-img" />
                    Get certificate
                  </Button>
                  <Card.Text className="card-text">
                    <BarChart className="card-icon" />
                    <span className="course-level">{course.level}</span>
                    <Clock className="card-icon" />
                    <span className="course-duration">{course.duration}</span>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default CoursesPageBeforeLogin;