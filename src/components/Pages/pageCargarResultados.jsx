import React from "react";
import Title from "../H'S/title";
import NavBar from "../NavBar/navBar";
import NavBarInvited from "../NavBar/navBarInvited";
import NavBarRecepcionista from "../NavBar/navBarRecepcionista";
import NavBarAdmin from "../NavBar/navBarAdmin";
import FormCargarResultados from "../Forms/FormCargarResultados";

function PageCargarResultados (){
    const id_rol = localStorage.getItem("id_rol");
    return(
        <>
        {id_rol == 1? <NavBar/> : id_rol == 2? <NavBarRecepcionista/> : id_rol == 3? <NavBarAdmin /> : <NavBarInvited/>}
        <br />
        <Title title="Cargar resultados"/>
        <FormCargarResultados/>
        </>
    )
}

export default PageCargarResultados