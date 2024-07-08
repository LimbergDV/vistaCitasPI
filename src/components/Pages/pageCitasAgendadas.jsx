import React from "react";
import NavBarRecepcionista from "../NavBar/navBarRecepcionista";
import Title from "../H'S/title";
import StickyHeadTable from "../Tables/usersCitas";
import Footer from "../Footer/footer";

function PageCitasAgendadasRec(){
    return(
        <>
        <NavBarRecepcionista/>
        <Title title="Usuarios con citas agendadas"/>
        <StickyHeadTable/>
        <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
        <Footer/>
        </>
    )
}

export default PageCitasAgendadasRec