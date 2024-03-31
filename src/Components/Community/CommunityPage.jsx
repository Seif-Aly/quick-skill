import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Card,
  Dropdown,
  Modal,
} from "react-bootstrap";
import "../Style/CommunityPage.css";
import NavbarInCourse from "../Navbars/NavbarInCourse";
import { AiOutlineLike } from "react-icons/ai";

const mockQuestions = new Array(4).fill(null).map((_, index) => ({
  id: index,
  tag: "OOP",
  title: "How to make a class in C#?",
  answers: 20,
  likes: 50,
  date: "13/01/2024",
}));

const NewQuestionModal = ({ show, handleClose }) => {
  const [tag, setTag] = useState("");

  const handleSelect = (eventKey) => {
    setTag(eventKey);
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      className="new-question-modal"
    >
      <Modal.Header closeButton className="new-question-modal-header">
        <Modal.Title>New Question</Modal.Title>
      </Modal.Header>
      <Modal.Body className="new-question-modal-body">
        <Form>
          <Form.Group className="mb-3 new-question-form-group">
            <Form.Control
              className="new-question-title-input"
              type="text"
              placeholder="Please write your question title"
            />
          </Form.Group>
          <Form.Group className="mb-3 new-question-form-group">
            <Form.Control
              className="new-question-description-textarea"
              as="textarea"
              rows={3}
              placeholder="Type here"
            />
          </Form.Group>
          <Dropdown onSelect={handleSelect} className="new-question-dropdown">
            <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
              {tag || "Choose a tag"}
            </Dropdown.Toggle>
            <Dropdown.Menu className="new-question-dropdown-menu">
              <Dropdown.Item eventKey="OOP">OOP</Dropdown.Item>
              <Dropdown.Item eventKey="String">String</Dropdown.Item>
              <Dropdown.Item eventKey="DataType">DataType</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Form>
      </Modal.Body>
      <Modal.Footer className="new-question-modal-footer">
        <Button
          variant="primary"
          onClick={handleClose}
          className="new-question-submit-btn"
        >
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

const CommunityPage = () => {
  const [questions, setQuestions] = useState(mockQuestions);
  const [sortOption, setSortOption] = useState("trend");
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const loadMoreQuestions = () => {
    setQuestions((prevQuestions) => [...prevQuestions, ...mockQuestions]);
  };

  const handleSortChange = (key) => {
    setSortOption(key);
  };

  return (
    <>
      <NavbarInCourse />
      <Container fluid="md" className="my-4 comm-cont">
        <Row className="mb-3 justify-content-start">
          <h1 className="mt-4">Follow us in our channels </h1>
          <Col md="auto">
            <Button variant="primary">Discord Channel</Button>
          </Col>
          <Col md="auto">
            <Button variant="primary">Telegram Channel</Button>
          </Col>
        </Row>

        <Row>
          <Col>
            <h1 className="mt-4">Q&A Discussions</h1>
            <Button
              variant="primary"
              onClick={handleShow}
              className="new-question-btn"
            >
              + NEW QUESTION
            </Button>
            <NewQuestionModal show={showModal} handleClose={handleClose} />
            <Dropdown onSelect={handleSortChange} className="mb-3">
              <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
                {sortOption === "trend" ? "In trend" : "Recent"}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item eventKey="trend">In trend</Dropdown.Item>
                <Dropdown.Item eventKey="recent">Recent</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Form.Group className="mb-4" controlId="searchQuestion">
              <Form.Control type="search" placeholder="Search question" />
            </Form.Group>

            {questions.map((question) => (
              <div key={question.id} className="custom-card">
                <div className="custom-card-header">
                  <span className="custom-card-tag">{question.tag}</span>
                </div>
                <div className="custom-card-body">
                  <h5 className="custom-card-title">{question.title}</h5>
                  <div className="custom-card-stats">
                    <span className="custom-card-answers">
                      Answers: {question.answers}
                    </span>
                    <span className="custom-card-likes">
                      <AiOutlineLike className="mr-1" /> {question.likes}
                    </span>
                    <span className="custom-card-date">Alexey Kiselev</span>
                    <span className="custom-card-date">{question.date}</span>
                  </div>
                </div>
              </div>
            ))}

            <div className="d-grid">
              <Button variant="outline-primary" onClick={loadMoreQuestions}>
                Load more
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CommunityPage;