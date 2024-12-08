// src/components/auth/ProtectedRoute.js
import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const sessionToken = sessionStorage.getItem("sessionToken");

  // If no session token, redirect to login
  if (!sessionToken) {
    return <Navigate to="/login" />;
  }

  // Otherwise, render the child components
  return children;
};

export default ProtectedRoute;
