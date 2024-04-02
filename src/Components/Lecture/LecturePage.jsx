import React, { useEffect, useState } from "react";
import { Container, Row, Col, Accordion, Button } from "react-bootstrap";
import { BsArrowRight, BsFillHouseFill } from "react-icons/bs";
import NavbarSignedIn from "../Navbars/NavbarSignedIn";
import "../Style/LecturePage.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchLectureById, summarizeLecture } from "../../Store/actions";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const LecturePage = () => {
  const [activeKey, setActiveKey] = useState(["0", "1", "2"]);
  const dispatch = useDispatch();
  const { lectureId } = useParams();
  const {
    lectureData,
    loadingLecture,
    lectureError,
    summary,
    loadingSummarization,
    errorSummarization,
  } = useSelector((state) => state.auth);

  useEffect(() => {
    if (lectureId) {
      dispatch(fetchLectureById(lectureId));
    }
  }, [dispatch, lectureId]);

  const handleSummarizeClick = () => {
    dispatch(summarizeLecture(lectureId));
  };

  // Handle active key for accordion
  const toggleActiveKey = (key) => {
    setActiveKey((prevActiveKey) =>
      prevActiveKey.includes(key)
        ? prevActiveKey.filter((s) => s !== key)
        : [...prevActiveKey, key]
    );
  };

  if (loadingLecture) return <div>Loading...</div>;
  if (lectureError) return <div>Error: {lectureError}</div>;
  if (!lectureData) return <div>No lecture data available</div>;

  return (
    <>
      <NavbarSignedIn />
      <Container className="lecture-page-container">
        {/* Header Section */}
        <Col xs={10} className="header-section text-left">
          <h1>{lectureData.name}</h1>
          <h2>{lectureData.description}</h2>
        </Col>
        <Row className="justify-content-between align-items-center mt-3">
          <Col xs={1}>
            <Link to="/" className="home-icon-link">
              <BsFillHouseFill size={30} className="home-icon" />
            </Link>
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
                src={lectureData.video_link}
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
                {loadingSummarization && <div>Loading summary...</div>}
                {errorSummarization && <div>Error: {errorSummarization}</div>}
                {summary && <div>{summary}</div>}
                <div className="d-flex justify-content-center">
                  <Button
                    variant="primary"
                    className="mt-3 summarize-btn"
                    onClick={handleSummarizeClick}
                  >
                    Summarize By <b>AI</b>
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
              {lectureData.lecture_transcript}
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header onClick={() => toggleActiveKey("2")}>
              Notes
            </Accordion.Header>
            <Accordion.Body style={{ overflowY: "scroll", maxHeight: "200px" }}>
              {lectureData.lecture_notes}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </>
  );
};

export default LecturePage;
