import React, { useEffect, useState } from "react";
import { fetchCurrentUser } from "../../../Store/actions";
import { useDispatch, useSelector } from "react-redux";

const YourQuicky = () => {
  // Mock data
  const avatarImage = "Avatar.svg";
  const nextLevelXP = 100;
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.auth.user);
  const isLoading = useSelector((state) => state.auth.loading);
  const error = useSelector((state) => state.auth.error);

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

  // Calculate XP percentage for progress bar
  const xpPercentage = (userData.xp / nextLevelXP) * 100;

  return (
    <div className="quicky-container">
      <h2 className="titleStreak">Your Quicky</h2>
      <div className="quicky-avatar">
        <img src={avatarImage} alt="Avatar" className="quicky-avatar-img" />
      </div>
      <div className="quicky-level-container">
        <div
          className="quicky-level-bar"
          style={{ width: `${xpPercentage}%` }}
        ></div>
        <span className="quicky-level">{userData.xp} XP</span>
      </div>
      <div className="quicky-xp-info">
        <div className="quicky-next-level-xp">{nextLevelXP} XP</div>
      </div>
    </div>
  );
};

export default YourQuicky;
