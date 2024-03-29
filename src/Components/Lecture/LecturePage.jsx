import React, { useState } from "react";
import { Container, Row, Col, Accordion, Button } from "react-bootstrap";
import { BsArrowRight, BsFillHouseFill } from "react-icons/bs";
import NavbarSignedIn from "../Navbars/NavbarSignedIn";
import "../Style/LecturePage.css";

const mockData = {
  header: "Strings",
  subHeader: "Learn basic features of string in C#",
  videoUrl: "https://www.youtube.com/embed/1itn-TSR4o8?si=UQvQ_feDV4X-XVk5",
  summary:
    "No writer who knows the great writers who did not receive the Prize can accept it other than with humility...",
  transcript: "Full transcript goes here...",
  notes: "Personal notes and annotations go here...",
};

const LecturePage = () => {
  const [activeKey, setActiveKey] = useState(["0", "1", "2"]);

  const toggleActiveKey = (key) => {
    setActiveKey((prevActiveKey) =>
      prevActiveKey.includes(key)
        ? prevActiveKey.filter((s) => s !== key)
        : [...prevActiveKey, key]
    );
  };

  return (
    <>
      <NavbarSignedIn />
      <Container className="lecture-page-container">
        {/* Header Section */}
        <Col xs={10} className="header-section text-left">
          <h1>{mockData.header}</h1>
          <h2>{mockData.subHeader}</h2>
        </Col>
        <Row className="justify-content-between align-items-center mt-3">
          <Col xs={1}>
            <button>
              <BsFillHouseFill size={30} className="home-icon " />
            </button>
          </Col>

          <Col xs={1}>
            <button className="next-cont">
              Next
              <BsArrowRight size={30} className="text-right  next-icon" />
            </button>
          </Col>
        </Row>

        {/* Video Section */}
        <Row className="my-4 video-section ">
          <Col>
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                className="embed-responsive-item"
                src={mockData.videoUrl}
                allowFullScreen
                title="Video Lecture"
              ></iframe>
            </div>
          </Col>
        </Row>

        {/* Accordion Section */}
        <Accordion activeKey={activeKey} className="lecture-accordion">
          <Accordion.Item eventKey="0">
            <Accordion.Header onClick={() => toggleActiveKey("0")}>
              Summarize
            </Accordion.Header>
            <div>
              <Accordion.Body>
                {mockData.summary}
                <div className="d-flex justify-content-center">
                  <Button variant="primary" className="mt-3 summarize-btn">
                    Summarize
                  </Button>
                </div>
              </Accordion.Body>
            </div>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header onClick={() => toggleActiveKey("1")}>
              Transcript
            </Accordion.Header>
            <Accordion.Body style={{ overflowY: "scroll", maxHeight: "200px" }}>
              {mockData.transcript}
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header onClick={() => toggleActiveKey("2")}>
              Notes
            </Accordion.Header>
            <Accordion.Body style={{ overflowY: "scroll", maxHeight: "200px" }}>
              {mockData.notes}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </>
  );
};

export default LecturePage;
