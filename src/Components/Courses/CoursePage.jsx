import React, { useState } from "react";
import { Container, Row, Col, Button, Accordion } from "react-bootstrap";
import NavbarSignedIn from "../Navbars/NavbarSignedIn";
import { useNavigate, Link } from "react-router-dom";
import "../Style/CoursePage.css";

const CoursePage = () => {
  const navigate = useNavigate();
  const [isJoined, setIsJoined] = useState(false);

  const courseData = {
    logo: "/Csharp.svg",
    name: "C#",
    members: "1.2k members",
    description: ["Basics of programming", "OOP"],
    sections: [
      {
        title: "Overview",
        lessons: [
          {
            name: "Your First Lesson",
            description: "An introduction to C# basics.",
          },
          { name: "Output", description: "How to output data to the console." },
          {
            name: "Variables",
            description: "Understanding variables and data types.",
          },
        ],
      },
      {
        title: "Overview",
        lessons: [
          {
            name: "Your First Lesson",
            description: "An introduction to C# basics.",
          },
          { name: "Output", description: "How to output data to the console." },
          {
            name: "Variables",
            description: "Understanding variables and data types.",
          },
        ],
      },
      {
        title: "Overview",
        lessons: [
          {
            name: "Your First Lesson",
            description: "An introduction to C# basics.",
          },
          { name: "Output", description: "How to output data to the console." },
          {
            name: "Variables",
            description: "Understanding variables and data types.",
          },
        ],
      },
    ],
  };

  const isUserEnrolled = false;

  const handleBack = () => {
    navigate(-1);
  };

  const toggleJoin = () => {
    setIsJoined(!isJoined);
  };

  return (
    <>
      <NavbarSignedIn />
      <Container className="course-page-container">
        <Row>
          <Col className="my-4">
            <Button variant="link" className="back-btn" onClick={handleBack}>
              &lt; Back
            </Button>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={8} className="text-left course-intro">
            <img
              src={courseData.logo}
              className="course-logo"
              alt={courseData.name}
            />
            <div className="course-info">
              <div>
                <h1 className="course-title">{courseData.name}</h1>
                <p className="course-members">{courseData.members}</p>
              </div>
              <Button
                variant={isJoined ? "secondary" : "primary"}
                className="btn-join"
                onClick={toggleJoin}
              >
                {isJoined ? "LEAVE THIS GROUP" : "JOIN THIS GROUP"}
              </Button>
            </div>

            <ul className="course-description">
              {courseData.description.map((item, idx) => (
                <li key={idx}>{"⚫ " + item}</li>
              ))}
            </ul>
          </Col>
        </Row>
        <Accordion defaultActiveKey="0" className="course-accordion">
          {courseData.sections.map((section, index) => (
            <Accordion.Item
              eventKey={String(index)}
              key={index}
              className="course-section"
            >
              <Accordion.Header>{section.title}</Accordion.Header>
              <Accordion.Body>
                {section.lessons.map((lesson, lessonIndex) => (
                  <div key={lessonIndex} className="lesson-item">
                    <strong>{lesson.name}</strong>
                    <p className="lesson-description">{lesson.description}</p>
                  </div>
                ))}
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
        <Row className="certification-section">
          <Col>
            <div className="certification-block">
              <div className="cert-logo-container">
                <img
                  src="/cert.svg"
                  className="cert-logo"
                  alt="Certificate Logo"
                />
              </div>
              <div className="cert-info">
                <h2>Certification</h2>
                <p>
                  We are happy to present your certificate to you for completing
                  this course.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CoursePage;
