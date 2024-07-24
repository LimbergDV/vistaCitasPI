import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedUser = ({ element: Component, isAuthenticated, ...rest }) => {
  if (localStorage.getItem("id_rol") == 1) {
    return isAuthenticated ? <Component {...rest} /> : <Navigate to="/login" />;
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectedUser;
