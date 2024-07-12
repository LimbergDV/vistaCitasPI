import React from "react";
import NavBar from "../NavBar/navBar";
import FormCotizacionUser from "../Forms/FormCotizacionUser";
import Title from "../H'S/title";
import Footer from "../Footer/footer";

function PageCotizacionUser (){
    return(
        <>
        <NavBar/>
        <br /> <br />
        <Title title="Cotización"/>
        <FormCotizacionUser/>
        <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
        <Footer/>
        </>
    )
}

export default PageCotizacionUser