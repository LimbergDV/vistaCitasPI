import React from "react";
import NavBar from "../NavBar/navBar";
import Title from "../H'S/title";
import TableEstudios1 from "../Tables/tableEstudios1";
import Footer from "../Footer/footer";

function PageCitologia(){
    return(
        <>
        <NavBar/>
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