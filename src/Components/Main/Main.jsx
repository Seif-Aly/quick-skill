import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../../Store/useAuth";
import PresentationPage from "../Home/PresentationPage";
import CoursesPage from "../Courses/CoursesPage";

const Main = () => {
  const isAuthenticated = useAuth();

  if (isAuthenticated) {
    return <CoursesPage />;
  }

  return <PresentationPage />;
};

export default Main;
