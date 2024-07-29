//Organismo
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import img1 from "../images/EVALUACION-SALUDABLE-4.png"
import img2 from "../images/prevencion-masculino.png"
import img3 from "../images/BIOLOGIA-MOLECULAR-3.png"
import img4 from "../images/CHECK-UP-VIP-WEB-3.png"
import img5 from "../images/perfil-activa-2.png"
import img6 from "../images/descuentoUP.png"



function Carousel (){
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true
      };
    return(
        <>
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src={img1}/>
        </div>
        <div>
        <img src={img2}/>      
        </div>
        <div>
        <img src={img3}/>
        </div>
        <div>
        <img src={img4}/>
        </div>
        <div>
        <img src={img5}/>
        </div>
        <div>
          <img src={img6} />
        </div>
      </Slider>
    </div>
        </>
    )
}

export default Carousel