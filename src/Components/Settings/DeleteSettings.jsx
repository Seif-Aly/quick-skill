import React, { useState } from "react";
import "../Style/Settings.css";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormControl,
} from "react-bootstrap";
import Sidebar from "./Sidebar";
import NavbarSignedIn from "../Navbars/NavbarSignedIn";
import { FaRegTrashAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteUser, logoutUser } from "../../Store/actions";
import { useNavigate } from "react-router-dom";

const DeleteSettings = () => {
  // const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/login");
  };

  // const handlePasswordChange = (event) => setPassword(event.target.value);
  const handleCheckboxChange = (event) => setIsChecked(event.target.checked);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (isChecked) {
      dispatch(deleteUser()).then((response) => {
        if (response.success) {
          dispatch(logoutUser());
          window.location.href = "/login";
        } else {
          alert("Failed to delete account: " + response.message);
        }
      });
    }
  };

  return (
    <>
      <NavbarSignedIn />
      <Container fluid>
        <Row>
          <Col md={3}>
            <Sidebar />
          </Col>
          <Col md={9} className="delete-container">
            <div className="delete-title">Are you sure?</div>
            <h3 className="mb-2">You will lose:</h3>
            <ul className="delete-list">
              <li>All your progress</li>
              <li>Access to courses</li>
              <li>Your certificates</li>
              {/* Other list items */}
            </ul>
            <p className="mb-2">
              Money for unused time of PRO status <b>won't</b> be refunded.
            </p>
            <p className="mb-4">
              If you came across any problem just contact us and we’ll solve it
            </p>
            <p className="mb-2">
              Otherwise, enter your password and confirm deletion below
            </p>
            <Form onSubmit={handleSubmit} className="delete-form">
              {/* <Form.Group controlId="deletePassword">
                <Form.Label>Password</Form.Label>
                <FormControl
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </Form.Group> */}
              <Form.Group
                controlId="deleteCheckbox"
                className="delete-checkbox"
              >
                <Form.Check
                  type="checkbox"
                  label="I understand that account deleting is irreversible and I'll lose all my achievements."
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
              </Form.Group>
              <Button
                variant="danger"
                type="submit"
                disabled={!isChecked}
                className="text-center delete-btn"
                // onClick={handleLogout}
              >
                Delete
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default DeleteSettings;
