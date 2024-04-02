import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Accordion } from "react-bootstrap";
import NavbarInCourse from "../Navbars/NavbarInCourse";
import { useNavigate, Link } from "react-router-dom";
import "../Style/CoursePage.css";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCourseContent,
  joinCourse,
  quitCourse,
} from "../../Store/actions";
import { useParams } from "react-router-dom";
import NavbarSignedIn from "../Navbars/NavbarSignedIn";

const CoursePage = () => {
  const navigate = useNavigate();
  const [isJoined, setIsJoined] = useState(false);
  const { courseContent, loadingCourseContent, courseContentError } =
    useSelector((state) => state.auth);
  const { courseId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (courseId) {
      dispatch(fetchCourseContent(courseId, isJoined));
    }
  }, [dispatch, courseId, isJoined]);

  useEffect(() => {
    if (courseContent && courseContent.enroll_status) {
      setIsJoined(courseContent.enroll_status === "leave");
    }
  }, [courseContent]);

  const handleJoin = async () => {
    try {
      await dispatch(joinCourse(courseId));
      setIsJoined(true);
    } catch (error) {
      console.error("Failed to join the course:", error);
    }
  };

  const handleQuit = async () => {
    try {
      await dispatch(quitCourse(courseId));
      setIsJoined(false);
    } catch (error) {
      console.error("Failed to leave the course:", error);
    }
  };

  if (loadingCourseContent) return <div>Loading course content...</div>;
  if (courseContentError) return <div>Error: {courseContentError}</div>;
  if (!courseContent) return <div>No course content available</div>;

  const courseLogoUrl =
    courseContent.media && courseContent.media[1]
      ? courseContent.media[1].url
      : "/prof.png";

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
      {isJoined ? <NavbarInCourse /> : <NavbarSignedIn />}
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
              src={courseLogoUrl}
              className="course-logo"
              alt={
                courseContent.media && courseContent.media[1]
                  ? courseContent.media[1].name
                  : "Course logo"
              }
            />
            <div className="course-info">
              <div>
                <h1 className="course-title">{courseContent.course_name}</h1>
                {/* <p className="course-members">{courseContent.members}</p> */}
              </div>
              <Button
                variant={isJoined ? "secondary" : "primary"}
                onClick={isJoined ? handleQuit : handleJoin}
              >
                {isJoined ? "Leave This Group" : "Join This Group"}
              </Button>
            </div>

            <ul className="course-description">
              <p className="course-title">{courseContent.course_description}</p>
            </ul>
          </Col>
        </Row>
        <Accordion defaultActiveKey="0" className="course-accordion">
          {courseContent.course_topics.map((topicWrapper, index) => (
            <Accordion.Item
              eventKey={String(index)}
              key={topicWrapper.topic.topic_id}
              className="course-section"
            >
              <Accordion.Header>{topicWrapper.topic.name}</Accordion.Header>
              <Accordion.Body>
                {topicWrapper.topic.topic_content.map(
                  (content, contentIndex) => (
                    <div key={contentIndex} className="lesson-item">
                      <strong>
                        {content.content_object.lecture_id ? (
                          <Link
                            to={`/course/${courseId}/lecture/${content.content_object.lecture_id}`}
                          >
                            {content.content_object.name}
                          </Link>
                        ) : content.content_object.seminar_id ? (
                          <Link
                            to={`/course/${courseId}/seminar/${content.content_object.seminar_id}`}
                          >
                            {content.content_object.name}
                          </Link>
                        ) : (
                          content.content_object.name
                        )}
                      </strong>
                      <p className="lesson-description">
                        {content.content_object.description}
                      </p>
                    </div>
                  )
                )}
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
                <h2>
                  <Link to={"/certificate/1"}>Certification</Link>
                </h2>
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
