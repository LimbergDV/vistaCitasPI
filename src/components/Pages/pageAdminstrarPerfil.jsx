import React from "react";
import NavBar from "../NavBar/navBar";
import NavBarRecepcionista from "../NavBar/navBarRecepcionista";
import NavBarAdmin from "../NavBar/navBarAdmin";
import FormAdministrarPerfil from "../Forms/FormAdministrarPerfil";
import NavBarInvited from "../NavBar/navBarInvited";
import Footer from "../Footer/footer";

function PageAdministrarPerfil() {

  const id_rol = localStorage.getItem("id_rol");

  return (
    <>
      {id_rol == 1 ? (
        <NavBar />
      ) : id_rol == 2 ? (
        <NavBarRecepcionista />
      ) : id_rol == 3 ? (
        <NavBarAdmin />
      ) : (
        <NavBarInvited />
      )}
      <br /> <br />
      <FormAdministrarPerfil />
      <Footer/>
    </>
  );
}

export default PageAdministrarPerfil;
