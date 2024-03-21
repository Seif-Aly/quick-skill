import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import NavbarSignedOut from "../Navbars/NavbarSignedOut";
import { FaFacebook, FaGoogle, FaGithub } from "react-icons/fa";

const LoginPage = () => {
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // This will toggle the "remember me" checkbox state
  const handleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  // Add your login logic here
  const handleLogin = async (e) => {
    e.preventDefault();

    if (rememberMe) {
      // Logic to remember the user, like setting a cookie or localStorage
    } else {
      // Logic to not remember the user
    }

    // Proceed with the login process
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

                  <Form.Group controlId="loginPassword" className="mb-3">
                    <Form.Control
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Check
                    type="checkbox"
                    label="Remember Me"
                    className="mb-3"
                    checked={rememberMe}
                    onChange={handleRememberMe}
                  />

                  <Button
                    variant="primary"
                    type="submit"
                    className="w-100 mb-3"
                  >
                    Log in
                  </Button>
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
                  <a href="/signup" className="btn-signUp">
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
