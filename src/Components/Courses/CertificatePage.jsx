import React from "react";
import { useParams } from "react-router-dom";
import "../Style/CoursesPage.css";

const CertificatePage = () => {
  const { courseId } = useParams();

  return (
    <div>
      <h2>Certificate Page</h2>
      <p>Course ID: {courseId}</p>
    </div>
  );
};

export default CertificatePage;
