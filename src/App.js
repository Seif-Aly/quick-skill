import React, { useEffect } from "react";
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
import ProfilePageOtherUser from "./Components/Profile/ProfilePageFromOtherPersonView/ProfilePage";
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
import LeaderboardPage from "./Components/Leaderboard/LeaderboardPage";
import CommunityPage from "./Components/Community/CommunityPage";
import ProtectedRoute from "./Store/ProtectedRoute";
import RedirectIfAuthenticated from "./Store/RedirectIfAuthenticated";
import Main from "./Components/Main/Main";
import Preview from "./Components/Home/PreViewPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Preview />} />
        {/* <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<RegistrationPage />} />
        <Route
          path="/create-new-password"
          element={<CreateNewPasswordPage />}
        />
        <Route path="/reset-password" element={<ResetPasswordPage />} />


        <Route
          path="/"
          element={
            <ProtectedRoute>
              <CoursesPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/ProfilePageOtherUser"
          element={
            <ProtectedRoute>
              <ProfilePageOtherUser />
            </ProtectedRoute>
          }
        />
        <Route
          path="/course/:courseId"
          element={
            <ProtectedRoute>
              <CoursePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/course/:courseId/Leaderboard"
          element={
            <ProtectedRoute>
              <LeaderboardPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/course/:courseId/Community"
          element={
            <ProtectedRoute>
              <CommunityPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/course/:courseId/lecture/:lectureId"
          element={
            <ProtectedRoute>
              <LecturePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/course/:courseId/seminar/:SeminarId"
          element={
            <ProtectedRoute>
              <QuestionPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/search-page"
          element={
            <ProtectedRoute>
              <SearchPage />
            </ProtectedRoute>
          }
        />


        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <Navigate replace to="/settings/profile" />
            </ProtectedRoute>
          }
        />
        <Route
          path="/settings/*"
          element={
            <ProtectedRoute>
              <div>
                <Sidebar />
                <Routes>
                  <Route path="profile" element={<ProfileSettings />} />
                  <Route path="goals" element={<GoalSettings />} />
                  <Route path="delete" element={<DeleteSettings />} />
                </Routes>
              </div>
            </ProtectedRoute>
          }
        />

        <Route
          path="/certificate/:courseId"
          element={
            <ProtectedRoute>
              <CertificatePage />
            </ProtectedRoute>
          }
        /> */}
      </Routes>
    </div>
  );
}
export default App;
