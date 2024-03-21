import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import CertificatePage from "./Components/Courses/CertificatePage";
import CoursesPage from "./Components/Courses/CoursesPage";
import CSharpCoursesPage from "./Components/Courses/CSharpCoursesPage";
import Error from "./Components/Main/Error";
import "./Components/Style/CoursesPage.css";
import "./Components/Style/Navbars.css";
import "./Components/Style/PresentationPage.css";
import "./Components/Style/RegistrationAndLogin.css";
import PresentationPage from "./Components/Home/PresentationPage";
import "./typography.css";
import RegistrationPage from "./Components/RegistrationAndLogin/RegistrationPage";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginPage from "./Components/RegistrationAndLogin/LoginPage";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<CoursesPage />} /> */}
        {/* <Route path="/" element={<PresentationPage />} /> */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/courses/1" element={<CSharpCoursesPage />} />
        <Route path="/certificate/:courseId" element={<CertificatePage />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
