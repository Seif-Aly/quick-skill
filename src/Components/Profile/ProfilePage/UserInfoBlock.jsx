import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { FaUserFriends, FaShoppingCart } from "react-icons/fa";
import { fetchCurrentUser } from "../../../Store/actions";
import { useDispatch, useSelector } from "react-redux";

const UserInfoBlock = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.auth.user); // Adjust based on your state structure
  const isLoading = useSelector((state) => state.auth.loading);
  const error = useSelector((state) => state.auth.error);

  // const [userData, setUserData] = useState({
  //   photo: "",
  //   username: "",
  //   name: "",
  //   xp: "",
  //   following: 0,
  //   followers: 0,
  // });

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading user data...</div>;
  }

  if (error) {
    return <div>Error fetching user data: {error}</div>;
  }

  if (!userData) {
    return <div>No user data available.</div>;
  }

  return (
    <Card className="user-info-card">
      <Card.Img
        variant="top"
        src={userData && userData.photo}
        className="user-photo"
      />
      <Card.Body>
        <Card.Title className="user-name">
          {userData.name || userData.username}
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted user-xp">
          ⭐ {userData.xp} XP
        </Card.Subtitle>
        {/* 
        <Card.Text>
          <span className="user-following">{userData.following} Following</span> | 
          <span className="user-followers">{userData.followers} Followers</span>
        </Card.Text> */}
        <Button variant="primary" className="userActionBtn" href="/search-page">
          <FaUserFriends /> find people
        </Button>
      </Card.Body>
    </Card>
  );
};

export default UserInfoBlock;
