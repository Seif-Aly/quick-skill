import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import NavbarSignedOut from "../Navbars/NavbarSignedOut";
import { FaFacebook, FaGoogle, FaGithub } from "react-icons/fa";
import "../Style/RegistrationAndLogin.css";
import { useDispatch } from "react-redux";
import { registerUser } from "../../Store/actions";

const RegistrationPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    errors: {
      password: "",
      confirmPassword: "",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let newErrors = { ...formData.errors, password: "", confirmPassword: "" };

    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long.";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    if (newErrors.password || newErrors.confirmPassword) {
      setFormData({ ...formData, errors: newErrors });
      return;
    }

    dispatch(
      registerUser({
        firstname: formData.firstName,
        lastname: formData.lastName,
        email: formData.email,
        password: formData.password,
      })
    ).then(() => {
      navigate("/AllCourses");
    });
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
                  Create an account 🤖
                </Card.Title>
                <Card.Subtitle className="text-center mb-4">
                  Start your IT journey here
                </Card.Subtitle>
                {/* Registration Form */}
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="registrationEmail" className="mb-3">
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Enter email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group
                    controlId="registrationFirstName"
                    className="mb-3"
                  >
                    <Form.Control
                      type="text"
                      name="firstName"
                      placeholder="First name"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="registrationLastName" className="mb-3">
                    <Form.Control
                      type="text"
                      name="lastName"
                      placeholder="Last name"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="registrationPassword" className="mb-3">
                    <Form.Control
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                    {formData.errors.password && (
                      <Form.Text className="text-danger">
                        {formData.errors.password}
                      </Form.Text>
                    )}
                  </Form.Group>

                  <Form.Group
                    controlId="registrationConfirmPassword"
                    className="mb-3"
                  >
                    <Form.Control
                      type="password"
                      name="confirmPassword"
                      placeholder="Confirm password"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                    />
                    {formData.errors.confirmPassword && (
                      <Form.Text className="text-danger">
                        {formData.errors.confirmPassword}
                      </Form.Text>
                    )}
                  </Form.Group>

                  <Button
                    variant="primary"
                    type="submit"
                    className="w-100 mb-3 btn-primary"
                  >
                    Sign up
                  </Button>
                </Form>

                <div className="text-center mb-3">Or with</div>

                <Button variant="primary" className="mb-2 w-100 btn-facebook">
                  <FaFacebook className="me-2" /> SignUp with Facebook
                </Button>
                <Button variant="danger" className="mb-2 w-100 btn-google">
                  <FaGoogle className="me-2" /> SignUp with Google
                </Button>
                <Button variant="secondary" className="w-100 btn-github ">
                  <FaGithub className="me-2" /> SignUp with Github
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default RegistrationPage;
