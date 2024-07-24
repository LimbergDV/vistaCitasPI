import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRecep = ({ element: Component, isAuthenticated, ...rest }) => {
  if (localStorage.getItem("id_rol") == 2) {
    return isAuthenticated ? <Component {...rest} /> : <Navigate to="/loginR" />;
  } else {
    return <Navigate to="/loginR" />;
  }
};

export default ProtectedRecep;
