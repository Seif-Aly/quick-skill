import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import NavbarSignedOut from "../Navbars/NavbarSignedOut";
import { useNavigate } from "react-router-dom";
import "../Style/RegistrationAndLogin.css";

const CreateNewPasswordPage = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [passwordChanged, setPasswordChanged] = useState(false);
  const navigate = useNavigate();

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowPassword2 = () => {
    setShowPassword2(!showPassword2);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      newPassword &&
      newPassword === confirmPassword &&
      newPassword &&
      newPassword >= 6
    ) {
      console.log("Password updated");
      setPasswordChanged(true);
    } else {
      console.log("Passwords do not match");
    }
  };

  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <>
      <NavbarSignedOut />
      <Container>
        <Row className="justify-content-center">
          {passwordChanged ? (
            <Col md={6} className="reset-password-form">
              <h2>Create new password 🔑</h2>
              <p>
                Congratulations 🎉 Your password was successfully changed. Now
                you can login with new password.
              </p>
              <Button onClick={goToLogin} className="mt-4" variant="primary">
                Continue
              </Button>
            </Col>
          ) : (
            <Col md={6} className="reset-password-form">
              <h2>Create new password 🔑</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group
                  controlId="formNewPassword"
                  className="form-group-custom"
                >
                  <div className="password-toggle">
                    <Form.Control
                      type={showPassword ? "text" : "password"}
                      placeholder="New password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                    <Button
                      onClick={toggleShowPassword}
                      className="toggle-password-btn"
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </Button>
                  </div>
                </Form.Group>
                <Form.Group
                  controlId="formConfirmPassword"
                  className="form-group-custom"
                >
                  <div className="password-toggle">
                    <Form.Control
                      type={showPassword2 ? "text" : "password"}
                      placeholder="Again new password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <Button
                      onClick={toggleShowPassword2}
                      className="toggle-password-btn"
                    >
                      {showPassword2 ? <FaEyeSlash /> : <FaEye />}
                    </Button>
                  </div>
                </Form.Group>

                <Button variant="primary" type="submit" className="mt-4">
                  Reset password
                </Button>
              </Form>
            </Col>
          )}
        </Row>
      </Container>
    </>
  );
};

export default CreateNewPasswordPage;
