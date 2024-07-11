import React from "react";
import Title from "../H'S/title";
import NavBarRecepcionista from "../NavBar/navBarRecepcionista";
import FormCargarResultados from "../Forms/FormCargarResultados";

function PageCargarResultados (){
    return(
        <>
        <NavBarRecepcionista/>
        <br />
        <Title title="Cargar resultados"/>
        <FormCargarResultados/>
        </>
    )
}

export default PageCargarResultados