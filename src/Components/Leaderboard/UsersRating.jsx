import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, ListGroup, ButtonGroup } from "react-bootstrap";
import mockData from "./mockData";

const UsersRating = ({ users }) => {
  const [activeList, setActiveList] = useState("weekly");

  const handleListSwitch = (listName) => {
    setActiveList(listName);
  };

  const weeklyRating = mockData.weeklyRating;
  const followingRating = mockData.followingRating;

  return (
    <>
      <div className="rating-toggle">
        <ButtonGroup>
          <Button
            variant={activeList === "weekly" ? "primary" : "outline-secondary"}
            onClick={() => setActiveList("weekly")}
          >
            Еженедельный рейтинг
          </Button>
          <Button
            variant={
              activeList === "following" ? "primary" : "outline-secondary"
            }
            onClick={() => setActiveList("following")}
          >
            Следующий рейтинг
          </Button>
        </ButtonGroup>
      </div>
      {activeList === "weekly" ? (
        <ListGroup variant="flush">
          {weeklyRating.map((user, index) => (
            <div
              key={index}
              className={`user-rating ${index < 3 ? "top-three" : ""}`}
            >
              {index >= 3 && <span className="user-number">{index + 1}</span>}
              <Link to={user.prof}>
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="user-avatar"
                />
              </Link>
              <span className="user-name">{user.name}</span>
              <span className="user-xp">{user.xp}</span>
            </div>
          ))}
        </ListGroup>
      ) : (
        <ListGroup variant="flush">
          {followingRating.map((user, index) => (
            <div
              key={index}
              className={`user-rating ${index < 3 ? "top-three" : ""}`}
            >
              {index >= 3 && <span className="user-number">{index + 1}</span>}
              <img src={user.avatar} alt={user.name} className="user-avatar" />
              <span className="user-name">{user.name}</span>
              <span className="user-xp">{user.xp}</span>
            </div>
          ))}
        </ListGroup>
      )}
    </>
  );
};

export default UsersRating;
