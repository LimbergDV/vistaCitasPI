import React from "react";
import "../styles/principal.css";
import NavBar from "../NavBar/navBar";
import NavBarInvited from "../NavBar/navBarInvited";
import NavBarRecepcionista from "../NavBar/navBarRecepcionista";
import NavBarAdmin from "../NavBar/navBarAdmin";
import FormCitaUser from "../Forms/FormCitaUser";
import Footer from "../Footer/footer";

function PageCitaUser() {
  const id_rol = localStorage.getItem("id_rol");
  return (
    <>
      {id_rol == 1? <NavBar/> : id_rol == 2? <NavBarRecepcionista/> : id_rol == 3? <NavBarAdmin /> : <NavBarInvited/>}
      <br />
      <FormCitaUser/>
      <Footer/>      
    </>
  );
}

export default PageCitaUser;
