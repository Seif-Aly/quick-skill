import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavbarSignedOut from "../Navbars/NavbarSignedOut";
import "../Style/RegistrationAndLogin.css";
import { useNavigate } from "react-router-dom";

const ResetPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const navigate = useNavigate();

  const mockEmailCheck = "example@example.com";

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email === mockEmailCheck) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
    setEmailSubmitted(true);
  };

  const goToSuccess = () => {
    navigate("/create-new-password");
  };

  return (
    <>
      <NavbarSignedOut />
      <Container>
        <Row className="justify-content-center">
          <Col md={6} className="reset-password-form">
            <h2>Reset password 🔒</h2>
            <p className="text-secondary">
              Forgot you password? Don't worry, we’ll figure it out. Just enter
              the email you used for registration:
            </p>
            <form className="email-form" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter your email (For cheking type example@example.com)"
                className="email-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailSubmitted &&
                (emailValid ? (
                  <button
                    type="submit"
                    className="submit-btn"
                    onClick={goToSuccess}
                  >
                    Submit
                  </button>
                ) : (
                  <div></div>
                ))}
            </form>
            {emailSubmitted &&
              (emailValid ? (
                <div className="alert alert-success" role="alert">
                  An email has been sent to you with instructions to reset your
                  password.
                </div>
              ) : (
                <div className="alert alert-danger" role="alert">
                  Sorry, there's no such user with this email.
                </div>
              ))}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ResetPasswordPage;
