import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<CoursesPage />} /> */}
        {/* <Route path="/" element={<PresentationPage />} /> */}
        <Route path="/" element={<ProfilePage />} />
        <Route path="/courses/1" element={<CSharpCoursesPage />} />
        <Route path="/certificate/:courseId" element={<CertificatePage />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
