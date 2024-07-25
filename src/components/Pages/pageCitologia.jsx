import React from "react";
import NavBar from "../NavBar/navBar";
import NavBarInvited from "../NavBar/navBarInvited";
import NavBarRecepcionista from "../NavBar/navBarRecepcionista";
import NavBarAdmin from "../NavBar/navBarAdmin";
import Title from "../H'S/title";
import TableEstudios1 from "../Tables/tableEstudios1";
import Footer from "../Footer/footer";

function PageCitologia(){
    const id_rol = localStorage.getItem("id_rol");
    return(
        <>
        {id_rol == 1? <NavBar/> : id_rol == 2? <NavBarRecepcionista/> : id_rol == 3? <NavBarAdmin /> : <NavBarInvited/>}
        <br />
        <Title title="Citología e Histopatología"/>
        <br />
        <TableEstudios1 id_categoria = "6"/>
        <br /> <br />
        <Footer/>
        </>
    )
}

export default PageCitologia