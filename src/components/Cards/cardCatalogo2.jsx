import React from "react";
import "../styles/cardCatalogo2.css";
import { useNavigate } from 'react-router-dom';
import img1 from "../images/master-en-microbiologia-clinica.jpg"
import img2 from "../images/pexels-edward-jenner-4033148-scaled.jpg"
import img3 from "../images/AdobeStock_197669370-768x512.webp"


function CardCatalogo2(){
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/microbiologiaMedica'); 
      };

      const handleButtonClick2 = () => {
        navigate('/microbiologiaSanitaria'); 
      }; 

      const handleButtonClick3 = () => {
        navigate('/citologia&histopatologia'); 
      }; 
    return(
        <>
        <div className="card-container">
            <div className="card">
            <img src={img1}/>
            <div className="card-content">
                <h3>Microbiología Médica</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe ut nulla vel sit reprehenderit, unde molestiae vero magni veritatis architecto minus mollitia distinctio iste dignissimos voluptatem, neque pariatur cum! Expedita!</p>
                <a href="" className="btn" onClick={handleButtonClick}>Ver Estudios</a>
            </div>
            </div>

            <div className="card">
            <img src={img2}/>
            <div className="card-content">
                <h3>Microbiología Sanitaria</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe ut nulla vel sit reprehenderit, unde molestiae vero magni veritatis architecto minus mollitia distinctio iste dignissimos voluptatem, neque pariatur cum! Expedita!</p>
                <a href="" className="btn" onClick={handleButtonClick2}>Ver Estudios</a>
            </div>
            </div>

            <div className="card">
            <img src={img3}/>
            <div className="card-content">
                <h3>Citología e Histopatologías</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe ut nulla vel sit reprehenderit, unde molestiae vero magni veritatis architecto minus mollitia distinctio iste dignissimos voluptatem, neque pariatur cum! Expedita!</p>
                <a href="" className="btn" onClick={handleButtonClick3}>Ver Estudios</a>
            </div>
            </div>
        </div>
        </>
    )
}

export default CardCatalogo2