import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCurrentUser,
  updateDescription,
  updateFirstName,
  updateLastName,
  updateUserName,
  uploadPhoto,
} from "../../Store/actions";
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

const ProfileSettings = () => {
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.auth || {});
  const [firstname, setFirstName] = useState(user ? user.firstname : "");
  const [lastname, setLastName] = useState(user ? user.lastname : "");
  const [username, setUserName] = useState(user ? user.username : "");
  const [description, setDescription] = useState(user ? user.description : "");
  const [photo, setPhoto] = useState(user ? user.photo : "");
  const [updateError, setUpdateError] = useState("");

  useEffect(() => {
    dispatch(fetchCurrentUser());
    const storedPhotoUrl = localStorage.getItem("userPhotoUrl");
    if (storedPhotoUrl) {
      setPhoto(storedPhotoUrl);
    }
  }, [dispatch]);

  useEffect(() => {
    if (user && user.photo) {
      setPhoto(user.photo);
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      setFirstName(user.firstname);
      setLastName(user.lastname);
      setUserName(user.username);
      setDescription(user.description);
    }
  }, [user]);

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (
      file &&
      (file.type === "image/jpeg" || file.type === "image/png") &&
      file.size <= 900 * 1024
    ) {
      const reader = new FileReader();
      reader.onload = (upload) => {
        setPhoto(reader.result);
      };
      reader.readAsDataURL(file);
      try {
        await dispatch(uploadPhoto(file));
      } catch (error) {
        alert(error.message);
      }
    } else {
      alert("File must be a JPG or PNG and less than 900 KB in size.");
    }
  };

  const handleSaveChanges = async (e) => {
    e.preventDefault();
    try {
      await dispatch(updateFirstName(firstname));
      await dispatch(updateLastName(lastname));
      await dispatch(updateUserName(username));
      await dispatch(updateDescription(description));
    } catch (error) {
      setUpdateError("An error occurred while saving changes.");
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <Alert variant="danger">{error}</Alert>;
  if (!user) return <div>No user data available.</div>;
  return (
    <>
      <NavbarSignedIn />
      <Container fluid className="profile-settings">
        <Row>
          <Col xs={12} md={3}>
            <Sidebar />
          </Col>
          <Col xs={12} md={9}>
            <Form onSubmit={handleSaveChanges}>
              <Form.Group as={Row} controlId="formFirstName" className="mb-3">
                <h2 className="formtitles">First name</h2>
                <Col sm={10}>
                  <Form.Control
                    type="text"
                    value={firstname}
                    onChange={handleFirstNameChange}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formLastName" className="mb-3">
                <h2 className="formtitles">Last name</h2>
                <Col sm={10}>
                  <Form.Control
                    type="text"
                    value={lastname}
                    onChange={handleLastNameChange}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formUsername" className="mb-3">
                <h2 className="formtitles">Username</h2>
                <Col sm={10}>
                  <InputGroup hasValidation>
                    <Form.Control
                      type="text"
                      defaultValue={user.username}
                      onChange={handleUserNameChange}
                    />
                    <Form.Control.Feedback type="invalid">
                      Sorry, this name is already taken
                    </Form.Control.Feedback>
                  </InputGroup>
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formBio" className="mb-3">
                <h2 className="formtitles">Description</h2>
                <Col sm={10}>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    defaultValue={user.description}
                    onChange={handleDescriptionChange}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formPhoto" className="mb-3">
                <h2 className="formtitles mb-3">Photo</h2>
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
                      style={{ backgroundImage: `url(${photo})` }}
                    ></div>
                  </InputGroup>
                  <Form.Text className="text-muted">
                    JPG or PNG. Max size - 900 kB
                  </Form.Text>
                </Col>
              </Form.Group>

              {/* <Form.Group as={Row} controlId="formPassword" className="mb-3">
                <h2 className="formtitles">Password</h2>
                <Col sm={10}>
                  <InputGroup>
                    <Form.Control type="password" defaultValue="password" />
                    <InputGroup>
                      <Button variant="outline-secondary">Change</Button>
                    </InputGroup>
                  </InputGroup>
                </Col>
              </Form.Group> */}

              <Button
                type="submit"
                variant="primary"
                className="btn-submit-form"
              >
                Save Changes
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProfileSettings;
