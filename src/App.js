import React from "react";
import "./App.css";
import "./typography.css";
import { Routes, Route } from "react-router-dom";
import CertificatePage from "./Components/Courses/CertificatePage";
import CoursesPage from "./Components/Courses/CoursesPage";
import CSharpCoursesPage from "./Components/Courses/CSharpCoursesPage";
import Error from "./Components/Main/Error";
import "./Components/Style/CoursesPage.css";
import "./Components/Style/Navbars.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CoursesPage />} />
        <Route path="/courses/1" element={<CSharpCoursesPage />} />
        <Route path="/certificate/:courseId" element={<CertificatePage />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
