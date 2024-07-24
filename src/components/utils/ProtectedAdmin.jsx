import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedAdmin = ({ element: Component, isAuthenticated, ...rest }) => {
  if (localStorage.getItem("id_rol") == 3) {
    return isAuthenticated ? <Component {...rest} /> : <Navigate to="/loginA" />;
  } else {
    return <Navigate to="/loginA" />;
  }
};

export default ProtectedAdmin;
