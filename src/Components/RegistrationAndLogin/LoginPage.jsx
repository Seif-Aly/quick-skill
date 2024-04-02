import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import NavbarSignedOut from "../Navbars/NavbarSignedOut";
import { FaFacebook, FaGoogle, FaGithub } from "react-icons/fa";
import { useDispatch } from "react-redux";
import "../Style/RegistrationAndLogin.css";
import { loginUser, LOGIN_SUCCESS } from "../../Store/actions";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loginError, setLoginError] = useState("");
  const [confirmationMessage, setConfirmationMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async (e) => {
    setConfirmationMessage("");
    e.preventDefault();
    try {
      const data = await dispatch(
        loginUser({
          email: formData.email,
          password: formData.password,
        })
      );
      if (data.success) {
        setConfirmationMessage(data.message);
        navigate("/");
      } else {
        setLoginError("Login failed.");
      }
    } catch (error) {
      setLoginError("An error occurred during Login.");
    }
  };

  return (
    <>
      <NavbarSignedOut />
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col lg={6}>
            <Card className="p-4">
              <Card.Body>
                <Card.Title className="text-center mb-4">
                  Hi, Welcome Back! 👋
                </Card.Title>
                <Form onSubmit={handleLogin}>
                  <Form.Group controlId="loginEmail" className="mb-3">
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="loginPassword">
                    <Form.Control
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Button
                    variant="link"
                    className="text-decoration-none mt-1"
                    href="/reset-password"
                  >
                    Forgot Password?
                  </Button>

                  <Button
                    variant="primary"
                    type="submit"
                    className="w-100 mb-3"
                  >
                    Log in
                  </Button>
                  {loginError && (
                    <div className="alert alert-danger">{loginError}</div>
                  )}
                  {confirmationMessage && (
                    <div className="alert alert-success">
                      {confirmationMessage}
                    </div>
                  )}
                </Form>

                <div className="text-center mb-3">Or With</div>

                <Button variant="primary" className="mb-2 w-100 btn-facebook">
                  <FaFacebook className="me-2" /> Login with Facebook
                </Button>
                <Button variant="danger" className="mb-2 w-100 btn-google">
                  <FaGoogle className="me-2" /> Login with Google
                </Button>
                <Button variant="secondary" className="w-100 btn-github ">
                  <FaGithub className="me-2" /> Login with Github
                </Button>
                <div className="text-center mt-4">
                  Don't have an account?{" "}
                  <a href="/sign-up" className="btn-signUp">
                    Sign Up
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LoginPage;
