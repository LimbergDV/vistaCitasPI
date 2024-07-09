import React from "react";
import NavBar from "../NavBar/navBar";
import Title from "../H'S/title";
import TableEstudios1 from "../Tables/tableEstudios1";
import Footer from "../Footer/footer";

function PageBiologiaMolecular(){
    return(
        <>
        <NavBar/>
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