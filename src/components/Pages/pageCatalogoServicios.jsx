import React from "react";
import NavBar from "../NavBar/navBar";
import Carousel from "../Carousel/carousel";
import "../styles/carousel.css"
import Title from "../H'S/title";
import CardCatalogo from "../Cards/cardCatalogo";

function PageCatalogoServicios (){
    return(
        <>
        <NavBar/>
        <Carousel/>
        <br /> <br /> <br />
        <Title title="Catálogo de servicios"/>
        <CardCatalogo/>
        </>
    )
}

export default PageCatalogoServicios