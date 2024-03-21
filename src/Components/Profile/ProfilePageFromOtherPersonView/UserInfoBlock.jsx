import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { FaUserFriends, FaShoppingCart } from "react-icons/fa";

const UserInfoBlock = () => {
  const [isFollowing, setIsFollowing] = useState(false);

  const userData = {
    photo: "/prof.PNG",
    username: "Seif",
    name: "Seif Aly",
    xp: 10430,
    following: 29,
    followers: 17,
    // isFollowed would typically come from your backend data
    isFollowed: false,
  };

  // Toggle follow status
  const toggleFollow = () => {
    setIsFollowing(!isFollowing);
    // Here you would also call your backend to update the follow status
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
        <Button
          variant="primary"
          className={isFollowing ? "unFollowBtn" : "followBtn"}
          onClick={toggleFollow}
        >
          {isFollowing ? "Unfollow" : "Follow"}
        </Button>
      </Card.Body>
    </Card>
  );
};
export default UserInfoBlock;
