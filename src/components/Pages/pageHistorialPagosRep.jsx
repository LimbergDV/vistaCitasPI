import React from "react";
import Title from "../H'S/title";
import NavBar from "../NavBar/navBar";
import NavBarInvited from "../NavBar/navBarInvited";
import NavBarRecepcionista from "../NavBar/navBarRecepcionista";
import NavBarAdmin from "../NavBar/navBarAdmin";
import TableHistorialPagos from "../Tables/tableHistorialPagos";
import FormHistorialPagos from "../Forms/FormHistorialPagos";

function PageHistorialPagosRep (){
    const id_rol = localStorage.getItem("id_rol");
    return(
    <>
    {id_rol == 1? <NavBar/> : id_rol == 2? <NavBarRecepcionista/> : id_rol == 3? <NavBarAdmin /> : <NavBarInvited/>}
    <br /> <br />
    <Title title="Historial de pagos"/>
    <br />
    <FormHistorialPagos/>
    
    </>
)}

export default PageHistorialPagosRep