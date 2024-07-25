import React from "react";
import NavBar from "../NavBar/navBar";
import NavBarInvited from "../NavBar/navBarInvited";
import NavBarRecepcionista from "../NavBar/navBarRecepcionista";
import NavBarAdmin from "../NavBar/navBarAdmin";
import Carousel from "../Carousel/carousel";
import "../styles/carousel.css";
import Title from "../H'S/title";
import CardCatalogo from "../Cards/cardCatalogo";
import CardCatalogo2 from "../Cards/cardCatalogo2";
import Footer from "../Footer/footer";


function PageCatalogoServicios() {
  const id_rol = localStorage.getItem("id_rol");
  return (
    <>
      {id_rol == 1? <NavBar/> : id_rol == 2? <NavBarRecepcionista/> : id_rol == 3? <NavBarAdmin /> : <NavBarInvited/>}
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
