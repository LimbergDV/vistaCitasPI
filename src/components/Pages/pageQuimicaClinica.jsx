import React from "react";
import NavBar from "../NavBar/navBar";
import Title from "../H'S/title";
import TableEstudios1 from "../Tables/tableEstudios1";
import Footer from "../Footer/footer";

function PageQuimicaClinica(){
    return(
        <>
        <NavBar/>
        <br />
        <Title title="Química Clínica"/>
        <br />
        <TableEstudios1/>
        <br /> <br />
        <Footer/>
        </>
    )
}

export default PageQuimicaClinica