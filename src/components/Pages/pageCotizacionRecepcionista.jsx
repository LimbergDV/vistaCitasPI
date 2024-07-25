import React from "react";
import Title from "../H'S/title";
import Footer from "../Footer/footer";
import NavBar from "../NavBar/navBar";
import NavBarInvited from "../NavBar/navBarInvited";
import NavBarRecepcionista from "../NavBar/navBarRecepcionista";
import NavBarAdmin from "../NavBar/navBarAdmin";
import FormCotizacionUser from "../Forms/FormCotizacionUser";

function PageCotizacionRecepcionista (){
    const id_rol = localStorage.getItem("id_rol");
    return(
        <>
        {id_rol == 1? <NavBar/> : id_rol == 2? <NavBarRecepcionista/> : id_rol == 3? <NavBarAdmin /> : <NavBarInvited/>}
        <br /> <br />
        <Title title="Cotización"/>
        <FormCotizacionUser user="Cobrar"/>
        <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
        <Footer/>
        </>
    )
}

export default PageCotizacionRecepcionista