import React from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import CertificatePage from "./Components/Courses/CertificatePage";
import CoursesPage from "./Components/Courses/CoursesPage";
import CSharpCoursesPage from "./Components/Courses/CSharpCoursesPage";
import Error from "./Components/Main/Error";
import "./typography.css";
import RegistrationPage from "./Components/RegistrationAndLogin/RegistrationPage";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginPage from "./Components/RegistrationAndLogin/LoginPage";
import CoursesProgress from "./Components/Profile/ProfilePage/CoursesProgress";
import Certificates from "./Components/Profile/ProfilePage/Certificates";
import BadgesSlider from "./Components/Profile/ProfilePage/BadgesSlider";
import ProfilePage from "./Components/Profile/ProfilePageFromOtherPersonView/ProfilePage";
import Sidebar from "./Components/Settings/Sidebar";
import ProfileSettings from "./Components/Settings/ProfileSettings";
import DeleteSettings from "./Components/Settings/DeleteSettings";
import GoalSettings from "./Components/Settings/GoalSettings";
import SearchPage from "./Components/SearchPage/SearchPage";
import CoursePage from "./Components/Courses/CoursePage";
import QuestionPage from "./Components/Seminar/QuestionPage";
import LecturePage from "./Components/Lecture/LecturePage";
import ResetPasswordPage from "./Components/RegistrationAndLogin/ResetPassword";
import CreateNewPasswordPage from "./Components/RegistrationAndLogin/CreateNewPasswordPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CreateNewPasswordPage />} />
        <Route path="/AllCourses" element={<CoursesPage />} />

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

        <Route path="/courses/1" element={<CSharpCoursesPage />} />
        <Route path="/certificate/:courseId" element={<CertificatePage />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
