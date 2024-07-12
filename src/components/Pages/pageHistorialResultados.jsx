import React from "react";
import NavBar from "../NavBar/navBar";
import Title from "../H'S/title";
import FormHistorialResultados from "../Forms/FormHistorialResultados";

function PageHistorialResultados(){
    return(
        <>
        <NavBar/>
        <br /> <br />
        <Title title="Historial de resultados"/>
        <FormHistorialResultados/>
        </>
    )
}

export default PageHistorialResultados