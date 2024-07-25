import React from "react";
import NavBar from "../NavBar/navBar";
import NavBarInvited from "../NavBar/navBarInvited";
import NavBarRecepcionista from "../NavBar/navBarRecepcionista";
import NavBarAdmin from "../NavBar/navBarAdmin";
import Title from "../H'S/title";
import FormAnalisis from "../Forms/FormAnalisis";
import Footer from "../Footer/footer";

function PageAnalisis(){
    const id_rol = localStorage.getItem("id_rol");
    return(
        <>
        {id_rol == 1? <NavBar/> : id_rol == 2? <NavBarRecepcionista/> : id_rol == 3? <NavBarAdmin /> : <NavBarInvited/>}
        <br /> <br />
        <Title title="Análisis"/>
        <FormAnalisis/>
        <br /> <br /> <br />
        <Footer/>
        </>
    )
}

export default PageAnalisis