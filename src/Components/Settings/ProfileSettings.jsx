import React from "react";
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
import { FaUpload } from "react-icons/fa";
import "../Style/Settings.css";
import NavbarSignedIn from "../Navbars/NavbarSignedIn";

// Mock data simulating a response from a backend
const mockUserData = {
  firstName: "Alexey",
  lastName: "Kiselev",
  username: "AKisily",
  bio: "Software Engineer",
  isUsernameTaken: true,
  photo: "/prof.png",
};

const handleFileChange = (e) => {
  const file = e.target.files[0];

  // Check if the file is of the correct type (jpg or png) and does not exceed 900 KB
  if (
    file &&
    (file.type === "image/jpeg" || file.type === "image/png") &&
    file.size <= 900 * 1024
  ) {
    const reader = new FileReader();
    reader.onload = (upload) => {
      document.querySelector(
        ".photo-preview"
      ).style.backgroundImage = `url(${upload.target.result})`;
    };
    reader.readAsDataURL(file);
  } else {
    // Handle errors
    alert("File must be a JPG or PNG and less than 900 KB in size.");
  }
};

const ProfileSettings = () => {
  return (
    <>
      <NavbarSignedIn />
      <Container fluid className="profile-settings">
        <Row>
          <Col xs={12} md={3}>
            <Sidebar />
          </Col>
          <Col xs={12} md={9}>
            <Form>
              <Form.Group as={Row} controlId="formFirstName" className="mb-3">
                <Form.Label column sm={2}>
                  First name
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="text"
                    defaultValue={mockUserData.firstName}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formLastName" className="mb-3">
                <Form.Label column sm={2}>
                  Last name
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="text"
                    defaultValue={mockUserData.lastName}
                  />
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                controlId="formUsername"
                className={
                  mockUserData.isUsernameTaken ? "has-error mb-3" : "mb-3"
                }
              >
                <Form.Label column sm={2}>
                  Username
                </Form.Label>
                <Col sm={10}>
                  <InputGroup hasValidation>
                    <Form.Control
                      type="text"
                      defaultValue={mockUserData.username}
                      isInvalid={mockUserData.isUsernameTaken}
                    />
                    <Form.Control.Feedback type="invalid">
                      Sorry, this name is already taken
                    </Form.Control.Feedback>
                  </InputGroup>
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formBio" className="mb-3">
                <Form.Label column sm={2}>
                  Bio
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    defaultValue={mockUserData.bio}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formPhoto" className="mb-3">
                <Form.Label column sm={2}>
                  Photo
                </Form.Label>
                <Col sm={10}>
                  <InputGroup>
                    <div className="upload-btn">
                      <label
                        htmlFor="file-upload"
                        className="custom-file-upload"
                      >
                        <FaUpload />
                        <span> Upload</span>
                      </label>
                      <input
                        id="file-upload"
                        type="file"
                        hidden
                        accept=".jpg, .jpeg, .png"
                        className="upload-input"
                        onChange={handleFileChange}
                      />
                    </div>
                    <div
                      className="photo-preview"
                      style={{ backgroundImage: `url(${mockUserData.photo})` }}
                    ></div>
                  </InputGroup>
                  <Form.Text className="text-muted">
                    JPG or PNG. Max size - 900 kB
                  </Form.Text>
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formPassword" className="mb-3">
                <Form.Label column sm={2}>
                  Password
                </Form.Label>
                <Col sm={10}>
                  <InputGroup>
                    <Form.Control type="password" defaultValue="password" />
                    <InputGroup>
                      <Button variant="outline-secondary">Change</Button>
                    </InputGroup>
                  </InputGroup>
                </Col>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProfileSettings;
