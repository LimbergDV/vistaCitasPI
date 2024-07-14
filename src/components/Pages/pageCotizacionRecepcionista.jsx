import React from "react";
import Title from "../H'S/title";
import Footer from "../Footer/footer";
import NavBarRecepcionista from "../NavBar/navBarRecepcionista";
import FormCotizacionUser from "../Forms/FormCotizacionUser";

function PageCotizacionRecepcionista (){
    return(
        <>
        <NavBarRecepcionista/>
        <br /> <br />
        <Title title="Cotización"/>
        <FormCotizacionUser user="Cobrar"/>
        <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
        <Footer/>
        </>
    )
}

export default PageCotizacionRecepcionista