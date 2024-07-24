import React from "react";
import NavBar from "../NavBar/navBar";
import Carousel from "../Carousel/carousel";
import "../styles/carousel.css";
import Title from "../H'S/title";
import CardCatalogo from "../Cards/cardCatalogo";
import CardCatalogo2 from "../Cards/cardCatalogo2";
import Footer from "../Footer/footer";


function PageCatalogoServicios() {
  return (
    <>
      <NavBar />
      <Carousel />
      <br /> <br /> <br />
      <Title title="Catálogo de servicios" />
      <CardCatalogo />
      <CardCatalogo2 />
      <Footer />
    </>
  );
}

export default PageCatalogoServicios;
