import React from "react";
import NavBar from "../NavBar/navBar";
import Title from "../H'S/title";
import TableEstudios1 from "../Tables/tableEstudios1";
import Footer from "../Footer/footer";

function PageMicrobiologiaSanitaria(){
    return(
        <>
        <NavBar/>
        <br />
        <Title title="Microbiología Sanitaria"/>
        <br />
        <TableEstudios1 id_categoria = "3"/>
        <br /> <br />
        <Footer/>
        </>
    )
}

export default PageMicrobiologiaSanitaria