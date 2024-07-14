import React from "react";
import NavBar from "../NavBar/navBar";
import Title from "../H'S/title";
import TableEstudios1 from "../Tables/tableEstudios1";
import Footer from "../Footer/footer";

function PageAlergenos(){
    return(
        <>
        <NavBar/>
        <br />
        <Title title="Alérgenos"/>
        <br />
        <TableEstudios1 id_categoria = "3"/>
        <br /> <br />
        <Footer/>
        </>
    )
}

export default PageAlergenos