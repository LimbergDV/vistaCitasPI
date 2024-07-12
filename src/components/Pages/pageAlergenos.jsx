import React from "react";
import NavBar from "../NavBar/navBar";
import Title from "../H'S/title";
import TableEstudios1 from "../Tables/tableEstudios1";
import Footer from "../Footer/footer";
import SearchNav from "../SearchNav/searchNav";

function PageAlergenos(){
    return(
        <>
        <NavBar/>
        <br />
        <Title title="Alérgenos"/>
        <br />
        <SearchNav/>
        <TableEstudios1 id_categoria = "3"/>
        <br /> <br />
        <Footer/>
        </>
    )
}

export default PageAlergenos