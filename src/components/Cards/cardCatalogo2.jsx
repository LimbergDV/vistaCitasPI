//Molécula
import React from "react";
import "../styles/cardCatalogo2.css";
import { useNavigate } from "react-router-dom";
import img1 from "../images/master-en-microbiologia-clinica.jpg";
import img2 from "../images/pexels-edward-jenner-4033148-scaled.jpg";
import img3 from "../images/AdobeStock_197669370-768x512.webp";

const option = parseInt(localStorage.getItem("id_rol"));

function CardCatalogo2() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    switch (parseInt(option)) {
        case 1:
          navigate("/microbiologiaMedica");
          break;
        case 2:
          navigate("/microbiologiaMedicaR");
          break;
        case 3:
          navigate("/microbiologiaMedicaA");
          break;
      }
  };

  const handleButtonClick2 = () => {
    switch (parseInt(option)) {
        case 1:
          navigate("/microbiologiaSanitaria");
          break;
        case 2:
          navigate("/microbiologiaSanitariaR");
          break;
        case 3:
          navigate("/microbiologiaSanitariaA");
          break;
      }
  };

  const handleButtonClick3 = () => {
    switch (parseInt(option)) {
        case 1:
          navigate("/citologia&histopatologia");
          break;
        case 2:
          navigate("/citologia&histopatologiaR");
          break;
        case 3:
          navigate("/citologia&histopatologiaA");
          break;
      }
  };
  return (
    <>
      <div className="card-container">
        <div className="card">
          <img src={img1} />
          <div className="card-content">
            <h3>Microbiología Médica</h3>
            <p>
            La microbiología médica estudia microorganismos que causan enfermedades en humanos. Identifica bacterias, virus, hongos y parásitos mediante cultivos y pruebas específicas para diagnosticar infecciones y guiar tratamientos adecuados.
            </p>
            <a href="" className="btn-4" onClick={handleButtonClick}>
              Ver Estudios
            </a>
          </div>
        </div>

        <div className="card">
          <img src={img2} />
          <div className="card-content">
            <h3>Microbiología Sanitaria</h3>
            <p>
            La microbiología sanitaria se enfoca en la detección y control de microorganismos que se conservan en el medio ambiente, agua y alimentos. Garantiza la seguridad sanitaria y previene enfermedades mediante el análisis de contaminantes microbiológicos.
            </p>
            <a href="" className="btn-5" onClick={handleButtonClick2}>
              Ver Estudios
            </a>
          </div>
        </div>

        <div className="card">
          <img src={img3} />
          <div className="card-content">
            <h3>Citología e Histopatologías</h3>
            <p>
            La citología e histopatología estudian células y tejidos para diagnosticar enfermedades. La citología analiza células individuales, mientras que la histopatología examina la estructura de los tejidos para detectar anomalías y patologías.
            </p>
            <a href="" className="btn-6" onClick={handleButtonClick3}>
              Ver Estudios
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardCatalogo2;
