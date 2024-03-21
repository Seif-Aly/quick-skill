import React from "react";

const YourQuicky = () => {
  // Mock data
  const userData = {
    level: 15,
    currentXP: 5123,
    nextLevelXP: 10000,
    avatarImage: "Avatar.svg",
  };

  // Calculate XP percentage for progress bar
  const xpPercentage = (userData.currentXP / userData.nextLevelXP) * 100;

  return (
    <div className="quicky-container">
      <h2 className="titleQuicky">His Quicky</h2>
      <img src="/levelShield.svg" alt="shield" className="shield" />
      <span className="levelShield">{userData.level}</span>
      <div className="quicky-avatar">
        <img
          src={userData.avatarImage}
          alt="Avatar"
          className="quicky-avatar-img"
        />
      </div>
      <div className="quicky-level-container">
        <div
          className="quicky-level-bar"
          style={{ width: `${xpPercentage}%` }}
        ></div>
        <span className="quicky-level">{userData.currentXP} XP</span>
      </div>
      <div className="quicky-xp-info">
        <div className="quicky-next-level-xp">{userData.nextLevelXP} XP</div>
      </div>
    </div>
  );
};

export default YourQuicky;
