import React from "react";
import Title from "../H'S/title";
import Footer from "../Footer/footer";
import NavBarRecepcionista from "../NavBar/navBarRecepcionista";
import FormCotizacionRecepcionista from "../Forms/FormCotizacionRecepcionista";

function PageCotizacionRecepcionista (){
    return(
        <>
        <NavBarRecepcionista/>
        <br /> <br />
        <Title title="Cotización"/>
        <FormCotizacionRecepcionista/>
        <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
        <Footer/>
        </>
    )
}

export default PageCotizacionRecepcionista