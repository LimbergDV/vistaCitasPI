import React from "react";
import NavBar from "../NavBar/navBar";
import Carousel from "../Carousel/carousel";
import InformationalSection from "../Sections/informationalSection";
import Footer from "../Footer/footer";
import MoreSection from "../Sections/moreSection";

function PageInicio (){
    return(
        <>
        <NavBar/>
        <Carousel/>
        <InformationalSection/>
        <hr />
        <MoreSection/>
        <Footer/>
        </>
    )
}

export default PageInicio