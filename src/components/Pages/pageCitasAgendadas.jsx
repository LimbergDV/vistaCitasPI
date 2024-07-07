import React from "react";
import NavBarRecepcionista from "../NavBar/navBarRecepcionista";
import Title from "../H'S/title";
import StickyHeadTable from "../Tables/usersCitas";

function PageCitasAgendadasRec(){
    return(
        <>
        <NavBarRecepcionista/>
        <Title title="Citas Agendadas"/>
        <StickyHeadTable/>
        </>
    )
}

export default PageCitasAgendadasRec