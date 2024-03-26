import React, { useState } from "react";
import "../Style/Settings.css";
import {
  FaRobot,
  FaSchool,
  FaSmileBeam,
  FaBriefcase,
  FaDollarSign,
  FaBrain,
  FaCheck,
  FaTimes,
} from "react-icons/fa";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  InputGroup,
  FormControl,
  Alert,
} from "react-bootstrap";
import Sidebar from "./Sidebar";
import NavbarSignedIn from "../Navbars/NavbarSignedIn";

const GoalSettings = () => {
  const [goal, setGoal] = useState("");
  const [customGoal, setCustomGoal] = useState("");
  const [studyDays, setStudyDays] = useState(4);
  const [emailNotification, setEmailNotification] = useState(true);

  const handleGoalChange = (selectedGoal) => {
    if (selectedGoal !== "custom") {
      setGoal(selectedGoal);
      setCustomGoal("");
    }
  };

  const handleCustomGoalInput = (e) => {
    setCustomGoal(e.target.value);
    setGoal("custom");
  };

  const handleStudyDaysChange = (value) => {
    setStudyDays(value);
  };

  const handleEmailNotificationChange = () => {
    setEmailNotification(!emailNotification);
  };

  const renderEmailReminderToggle = () => {
    return (
      <div className="email-reminder-section">
        <div className="email-reminder-question">
          Would you like to get reminders on your email?
        </div>
        <div className="email-reminder-toggle">
          <Button
            className={`toggle-btn ${emailNotification ? "active" : ""}`}
            onClick={handleEmailNotificationChange}
          >
            Yes, notify me <FaCheck />
          </Button>
          <Button
            className={`toggle-btn ${!emailNotification ? "active" : ""}`}
            onClick={handleEmailNotificationChange}
          >
            No, thank you <FaTimes />
          </Button>
        </div>
      </div>
    );
  };

  return (
    <>
      <NavbarSignedIn />
      <Container fluid>
        <Row>
          <Col md={3}>
            <Sidebar />
          </Col>
          <Col md={9}>
            <div className="goal-settings">
              <h2 className="text-left my-4 goalHd">Goal Settings</h2>
              <h3 className="text-center goal-shd">What's your goal? 🎯</h3>
              <div className="mt-3 mb-3">
                <button
                  onClick={() => handleGoalChange("job")}
                  className={`goal-option ${goal === "job" ? "active" : ""}`}
                >
                  <FaBriefcase /> Find a new job
                </button>
                <button
                  onClick={() => handleGoalChange("raise")}
                  className={`goal-option ${goal === "raise" ? "active" : ""}`}
                >
                  <FaDollarSign /> Get raise
                </button>
                <button
                  onClick={() => handleGoalChange("skill")}
                  className={`goal-option ${goal === "skill" ? "active" : ""}`}
                >
                  <FaBrain /> Just get a new skill
                </button>
                {/* ... other buttons from the previous snippet ... */}
                <button
                  onClick={() => handleGoalChange("school")}
                  className={`goal-option ${goal === "school" ? "active" : ""}`}
                >
                  <FaSchool /> Learn for school
                </button>
                <button
                  onClick={() => handleGoalChange("fun")}
                  className={`goal-option ${goal === "fun" ? "active" : ""}`}
                >
                  <FaSmileBeam /> Learn for fun
                </button>
                <input
                  type="text"
                  value={customGoal}
                  onChange={handleCustomGoalInput}
                  placeholder="Or type your own..."
                  className={`goal-option ${goal === "custom" ? "active" : ""}`}
                />
              </div>

              {/* Slider section */}
              <div className="study-days-container">
                <label htmlFor="study-days-slider" className="form-label">
                  How many days a week will you study?
                </label>
                <input
                  id="study-days-slider"
                  type="range"
                  min="1"
                  max="7"
                  value={studyDays}
                  onChange={(e) => handleStudyDaysChange(e.target.value)}
                  className="custom-slider"
                />
                <div className="slider-marks">
                  {[...Array(7).keys()].map((day) => (
                    <span
                      key={day}
                      className={`slider-mark ${
                        studyDays === String(day + 1) ? "active" : ""
                      }`}
                    >
                      {day + 1}
                    </span>
                  ))}
                </div>
              </div>
              {renderEmailReminderToggle()}
              <button className="save-goal-button">Save goal</button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default GoalSettings;
