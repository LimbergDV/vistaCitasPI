import React from "react";
import NavBar from "../NavBar/navBar";
import NavBarInvited from "../NavBar/navBarInvited";
import NavBarRecepcionista from "../NavBar/navBarRecepcionista";
import NavBarAdmin from "../NavBar/navBarAdmin";
import Carousel from "../Carousel/carousel";
import InformationalSection from "../Sections/informationalSection";
import Footer from "../Footer/footer";
import MoreSection from "../Sections/moreSection";

function PageInicio (){
    const id_rol = localStorage.getItem("id_rol");
    return(
        <>
        {id_rol == 1? <NavBar/> : id_rol == 2? <NavBarRecepcionista/> : id_rol == 3? <NavBarAdmin /> : <NavBarInvited/>}
        <Carousel/>
        <InformationalSection/>
        <hr />
        <MoreSection />
        <Footer/>
        </>
    )
}

export default PageInicio