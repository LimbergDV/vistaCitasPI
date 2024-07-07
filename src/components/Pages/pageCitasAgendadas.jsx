import React from "react";
import NavBarRecepcionista from "../NavBar/navBarRecepcionista";
import Title from "../H'S/title";
import StickyHeadTable from "../Tables/usersCitas";

function PageCitasAgendadasRec(){
    return(
        <>
        <NavBarRecepcionista/>
        <Title title="Usuarios con citas agendadas"/>
        <StickyHeadTable/>
        </>
    )
}

export default PageCitasAgendadasRec