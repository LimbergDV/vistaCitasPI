import React from "react";
import NavBar from "../NavBar/navBar";
import NavBarInvited from "../NavBar/navBarInvited";
import NavBarRecepcionista from "../NavBar/navBarRecepcionista";
import NavBarAdmin from "../NavBar/navBarAdmin";
import Title from "../H'S/title";
import TableEstudios1 from "../Tables/tableEstudios1";
import Footer from "../Footer/footer";

function PageBiologiaMolecular(){
    const id_rol = localStorage.getItem("id_rol");
    return(
        <>
        {id_rol == 1? <NavBar/> : id_rol == 2? <NavBarRecepcionista/> : id_rol == 3? <NavBarAdmin /> : <NavBarInvited/>}
        <br />
        <Title title="Biología Molecular"/>
        <br />
        <TableEstudios1 id_categoria = "2"/>
        <br /> <br />
        <Footer/>
        </>
    )
}

export default PageBiologiaMolecular