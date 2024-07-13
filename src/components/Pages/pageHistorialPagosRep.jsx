import React from "react";
import Title from "../H'S/title";
import NavBarRecepcionista from "../NavBar/navBarRecepcionista";
import TableHistorialPagos from "../Tables/tableHistorialPagos";
import FormHistorialPagos from "../Forms/FormHistorialPagos";

function PageHistorialPagosRep (){
    return(
    <>
    <NavBarRecepcionista/>
    <br /> <br />
    <Title title="Historial de pagos"/>
    <br />
    <FormHistorialPagos/>
    
    </>
)}

export default PageHistorialPagosRep