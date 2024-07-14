import React from "react";
import NavBarRecepcionista from "../NavBar/navBarRecepcionista";
import Title from "../H'S/title";
import FormCobroRecepcionista from "../Forms/FormCobroRecepcionista";
import FormCotizacionUser from "../Forms/FormCotizacionUser";

function PageCobroRecepcionista(){
    return(
        <>
        <NavBarRecepcionista/>
        <br /> <br />
        <Title title="Generar cobro"/>
        <FormCobroRecepcionista/>
        </>
    )
}

export default PageCobroRecepcionista