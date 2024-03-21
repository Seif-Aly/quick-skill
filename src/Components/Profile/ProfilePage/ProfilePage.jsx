import React from "react";
import NavbarSignedIn from "../../Navbars/NavbarSignedIn";
import UserInfoBlock from "./UserInfoBlock";
import CoursesProgress from "./CoursesProgress";
import Certificates from "./Certificates";
import StreakCalendar from "./StreakCalendar";
import BadgesSlider from "./BadgesSlider";
import "../../Style/ProfilePage.css";
import YourQuicky from "./YourQuicky";

const ProfilePage = () => {
  return (
    <>
      <NavbarSignedIn />
      <div className="profile-container">
        <div className="left-column">
          <UserInfoBlock />
          <CoursesProgress />
          <Certificates />
          <YourQuicky />
        </div>
        <div className="right-column">
          <StreakCalendar />
          <BadgesSlider />
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
