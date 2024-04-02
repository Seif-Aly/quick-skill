import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "./useAuth";

const RedirectIfAuthenticated = ({ children, redirectTo }) => {
  const isLoggedIn = useAuth();

  if (isLoggedIn) {
    return <Navigate to={redirectTo} replace />;
  }

  return children;
};

export default RedirectIfAuthenticated;
