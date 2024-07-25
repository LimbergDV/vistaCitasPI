import React from "react";
import NavBar from "../NavBar/navBar";
import NavBarInvited from "../NavBar/navBarInvited";
import NavBarRecepcionista from "../NavBar/navBarRecepcionista";
import NavBarAdmin from "../NavBar/navBarAdmin";
import FormCitaRecepcionista from "../Forms/FormCitaRecepcionita";
import Footer from "../Footer/footer";

function PageCitaRecepcionista(){
    return(
        <>
        {id_rol == 1? <NavBar/> : id_rol == 2? <NavBarRecepcionista/> : id_rol == 3? <NavBarAdmin /> : <NavBarInvited/>}
        <br />
        <FormCitaRecepcionista/>
        <Footer/>
        
        </>
    )
}

export default PageCitaRecepcionista