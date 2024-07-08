import React from "react";
import NavBarRecepcionista from "../NavBar/navBarRecepcionista";
import FormCitaRecepcionista from "../Forms/FormCitaRecepcionita";
import Footer from "../Footer/footer";

function PageCitaRecepcionista(){
    return(
        <>
        <NavBarRecepcionista/>
        <br />
        <FormCitaRecepcionista/>
        <Footer/>
        
        </>
    )
}

export default PageCitaRecepcionista