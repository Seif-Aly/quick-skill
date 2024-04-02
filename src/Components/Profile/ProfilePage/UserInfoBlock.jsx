import React from "react";
import { Card, Button } from "react-bootstrap";
import { FaUserFriends, FaShoppingCart } from "react-icons/fa";

const UserInfoBlock = () => {
  const userData = {
    photo: "/prof.PNG",
    username: "Seif",
    name: "Seif Aly",
    xp: 10430,
    following: 29,
    followers: 17,
  };

  return (
    <Card className="user-info-card">
      <Card.Img variant="top" src={userData.photo} className="user-photo" />
      <Card.Body>
        <Card.Title className="user-name">{userData.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted user-xp">
          ⭐ {userData.xp} XP
        </Card.Subtitle>
        <Card.Text>
          <span className="user-following">{userData.following} Following</span>{" "}
          |{" "}
          <span className="user-followers">{userData.followers} Followers</span>
        </Card.Text>
        <Button variant="primary" className="userActionBtn" href="/search-page">
          <FaUserFriends /> find people
        </Button>
      </Card.Body>
    </Card>
  );
};

export default UserInfoBlock;
