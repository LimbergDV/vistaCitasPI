import React from "react";

import "../styles/principal.css";
import { FaCircleInfo } from "react-icons/fa6";
import NavBar from "../NavBar/navBar";
import FormCitaUser from "../Forms/FormCitaUser";

function PageCitaUser() {
  return (
    <>
      <NavBar/>
      <FormCitaUser/>      
    </>
  );
}

export default PageCitaUser;
