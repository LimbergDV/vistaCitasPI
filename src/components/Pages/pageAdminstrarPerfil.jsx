import React from "react";
import NavBar from "../NavBar/navBar";
import NavBarRecepcionista from "../NavBar/navBarRecepcionista";
import NavBarAdmin from "../NavBar/navBarAdmin";
import FormAdministrarPerfil from "../Forms/FormAdministrarPerfil";

function PageAdministrarPerfil(){
    const id_rol = localStorage.getItem("id_rol");

    return(
        <>
        {id_rol == 1? <NavBar/> : id_rol == 2? <NavBarRecepcionista/> : <NavBarAdmin /> }
        <br /> <br />
        <FormAdministrarPerfil/>
        </>
    )
}

export default PageAdministrarPerfil