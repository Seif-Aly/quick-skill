import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { requestPasswordResetEmail } from "../../Store/actions";
import { Container, Row, Col } from "react-bootstrap";
import NavbarSignedOut from "../Navbars/NavbarSignedOut";
import "../Style/RegistrationAndLogin.css";

const ResetPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage("");
    try {
      const responseMessage = await dispatch(requestPasswordResetEmail(email));
      setMessage(responseMessage);
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <>
      <NavbarSignedOut />
      <Container>
        <Row className="justify-content-center">
          <Col md={6} className="reset-password-form">
            <h2>Reset password 🔒</h2>
            <p className="text-secondary">
              Forgot your password? Don't worry, we’ll figure it out. Just enter
              the email you used for registration:
            </p>
            <form className="email-form" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter your email"
                className="email-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="submit-btn">
                Submit
              </button>
            </form>
            {message && (
              <div
                className={`alert ${
                  message.includes("sent") ? "alert-success" : "alert-danger"
                }`}
                role="alert"
              >
                {message}
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ResetPasswordPage;
