import React from "react";

import "../styles/principal.css";
import { FaCircleInfo } from "react-icons/fa6";
import NavBar from "../NavBar/navBar";
import FormCitaUser from "../Forms/FormCitaUser";
import Footer from "../Footer/footer";

function PageCitaUser() {
  return (
    <>
      <NavBar/>
      <br />
      <FormCitaUser/>
      <Footer/>      
    </>
  );
}

export default PageCitaUser;
