import React from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import CertificatePage from "./Components/Courses/CertificatePage";
import CoursesPage from "./Components/Courses/CoursesPage";
import Error from "./Components/Main/Error";
import "./typography.css";
import RegistrationPage from "./Components/RegistrationAndLogin/RegistrationPage";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginPage from "./Components/RegistrationAndLogin/LoginPage";
import ProfilePage from "./Components/Profile/ProfilePage/ProfilePage";
import Sidebar from "./Components/Settings/Sidebar";
import ProfileSettings from "./Components/Settings/ProfileSettings";
import DeleteSettings from "./Components/Settings/DeleteSettings";
import GoalSettings from "./Components/Settings/GoalSettings";
import SearchPage from "./Components/SearchPage/SearchPage";
import CoursePage from "./Components/Courses/CoursePage";
import LecturePage from "./Components/Lecture/LecturePage";
import QuestionPage from "./Components/Seminar/QuestionPage";
import ResetPasswordPage from "./Components/RegistrationAndLogin/ResetPassword";
import CreateNewPasswordPage from "./Components/RegistrationAndLogin/CreateNewPasswordPage";
import PresentationPage from "./Components/Home/PresentationPage";
import LeaderboardPage from "./Components/Leaderboard/LeaderboardPage";
import CommunityPage from "./Components/Community/CommunityPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PresentationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<RegistrationPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/allCourses" element={<CoursesPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/courses/*" element={<CoursePage />} />
        <Route path="/Leaderboard" element={<LeaderboardPage />} />
        <Route path="/Community" element={<CommunityPage />} />
        <Route path="/lecture" element={<LecturePage />} />
        <Route path="/seminar" element={<QuestionPage />} />
        <Route path="/search-page" element={<SearchPage />} />
        <Route
          path="/create-new-password"
          element={<CreateNewPasswordPage />}
        />

        <Route
          path="/settings"
          element={<Navigate replace to="/settings/profile" />}
        />
        <Route
          path="/settings/*"
          element={
            <div>
              <Sidebar />
              <Routes>
                <Route path="profile" element={<ProfileSettings />} />
                <Route path="goals" element={<GoalSettings />} />{" "}
                <Route path="delete" element={<DeleteSettings />} />
              </Routes>
            </div>
          }
        />

        <Route path="/certificate/:courseId" element={<CertificatePage />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
