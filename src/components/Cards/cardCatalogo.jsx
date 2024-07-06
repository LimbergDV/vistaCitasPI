import React from "react";
import "../styles/cardCatalogo.css";
import img1 from "../images/iStock_20380641_SMALL-805x536.jpg"
import img2 from "../images/que-es-biologia-molecular.jpg"
import img3 from "../images/tipos-de-alergias-wide_webp.webp"

function cardCatalogo(){
    return(
        <>
        <div className="card-container">
            <div className="card">
            <img src={img1}/>
            <div className="card-content">
                <h3>Química Clinica</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe ut nulla vel sit reprehenderit, unde molestiae vero magni veritatis architecto minus mollitia distinctio iste dignissimos voluptatem, neque pariatur cum! Expedita!</p>
                <a href="" className="btn">Ver Estudios</a>
            </div>
            </div>

            <div className="card">
            <img src={img2}/>
            <div className="card-content">
                <h3>Biología Molecular</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe ut nulla vel sit reprehenderit, unde molestiae vero magni veritatis architecto minus mollitia distinctio iste dignissimos voluptatem, neque pariatur cum! Expedita!</p>
                <a href="" className="btn">Ver Estudios</a>
            </div>
            </div>

            <div className="card">
            <img src={img3}/>
            <div className="card-content">
                <h3>Alergenos</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe ut nulla vel sit reprehenderit, unde molestiae vero magni veritatis architecto minus mollitia distinctio iste dignissimos voluptatem, neque pariatur cum! Expedita!</p>
                <a href="" className="btn">Ver Estudios</a>
            </div>
            </div>
        </div>
        </>
    )
}

export default cardCatalogo