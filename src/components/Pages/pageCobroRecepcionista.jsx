import React from "react";
import NavBar from "../NavBar/navBar";
import NavBarInvited from "../NavBar/navBarInvited";
import NavBarRecepcionista from "../NavBar/navBarRecepcionista";
import NavBarAdmin from "../NavBar/navBarAdmin";
import Title from "../H'S/title";
import FormCobroRecepcionista from "../Forms/FormCobroRecepcionista";
import FormCotizacionUser from "../Forms/FormCotizacionUser";

function PageCobroRecepcionista(){
    const id_rol = localStorage.getItem("id_rol");
    return(
        <>
        {id_rol == 1? <NavBar/> : id_rol == 2? <NavBarRecepcionista/> : id_rol == 3? <NavBarAdmin /> : <NavBarInvited/>}
        <br /> <br />
        <Title title="Generar cobro"/>
        <FormCobroRecepcionista/>
        </>
    )
}

export default PageCobroRecepcionista