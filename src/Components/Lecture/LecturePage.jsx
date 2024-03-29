import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Row, Col } from "react-bootstrap";
import { BsFillPlayFill, BsArrowRight } from "react-icons/bs";

// Mock data for the lecture page
const mockData = {
  header: "Strings",
  subHeader: "Learn basic features of string in C#",
  videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Sample YouTube video embed link
  summary:
    "No writer who knows the great writers who did not receive the Prize can accept it other than with humility. There is no need to list these writers. Everyone here may make his own list according to his knowledge and his conscience.",
  transcript: "Full transcript goes here...",
  notes: "Personal notes and annotations go here...",
};

const LecturePage = () => {
  const [showSummary, setShowSummary] = useState(false);
  const [showTranscript, setShowTranscript] = useState(false);
  const [showNotes, setShowNotes] = useState(false);

  return (
    <Container>
      <Row className="justify-content-between align-items-center header-section">
        <Col>
          <h1>{mockData.header}</h1>
          <h2>{mockData.subHeader}</h2>
        </Col>
        <Col className="text-right">
          <Button as={Link} to="/" variant="primary">
            <BsFillPlayFill /> Home
          </Button>
          <Button variant="secondary" className="ml-2">
            <BsArrowRight /> Next
          </Button>
        </Col>
      </Row>

      {/* Placeholder for video */}
      <Row className="my-4 video-section">
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

      {/* Summary section */}
      <Row className="my-4 summary-section">
        <Col>
          <Button
            variant="outline-secondary"
            onClick={() => setShowSummary(!showSummary)}
          >
            {showSummary ? "Hide" : "Summarize"}
          </Button>
          {showSummary && <p className="mt-3">{mockData.summary}</p>}
        </Col>
      </Row>

      {/* Transcript section */}
      <Row className="my-4 transcript-section">
        <Col>
          <Button
            variant="outline-secondary"
            onClick={() => setShowTranscript(!showTranscript)}
          >
            {showTranscript ? "Hide" : "Transcript"}
          </Button>
          {showTranscript && <p className="mt-3">{mockData.transcript}</p>}
        </Col>
      </Row>

      {/* Notes section */}
      <Row className="my-4 notes-section">
        <Col className="top-buttons">
          <Button
            variant="outline-secondary"
            onClick={() => setShowNotes(!showNotes)}
          >
            {showNotes ? "Hide" : "Notes"}
          </Button>
          {showNotes && <p className="mt-3">{mockData.notes}</p>}
        </Col>
      </Row>
    </Container>
  );
};

export default LecturePage;
