import React from "react";
import NavBarRecepcionista from "../NavBar/navBarRecepcionista";
import Title from "../H'S/title";
import FormAnalisis from "../Forms/FormAnalisis";
import Footer from "../Footer/footer";

function PageAnalisis(){
    return(
        <>
        <NavBarRecepcionista/>
        <br /> <br />
        <Title title="Análisis"/>
        <FormAnalisis/>
        <br /> <br /> <br />
        <Footer/>
        </>
    )
}

export default PageAnalisis