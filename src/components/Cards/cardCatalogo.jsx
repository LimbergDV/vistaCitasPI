//Molécula
import React from "react";
import "../styles/cardCatalogo.css";
import { useNavigate } from "react-router-dom";
import img1 from "../images/iStock_20380641_SMALL-805x536.jpg";
import img2 from "../images/que-es-biologia-molecular.jpg";
import img3 from "../images/tipos-de-alergias-wide_webp.webp";

const option = parseInt(localStorage.getItem("id_rol"));

function CardCatalogo() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    switch (parseInt(option)) {
      case 1:
        navigate("/quimicaClinica");
        break;
      case 2:
        navigate("/quimicaClinicaR");
        break;
      case 3:
        navigate("/quimicaClinicaA");
        break;
    }
  };

  const handleButtonClick2 = () => {
    switch (parseInt(option)) {
        case 1:
          navigate("/biologiaMolecular");
          break;
        case 2:
          navigate("/biologiaMolecularR");
          break;
        case 3:
          navigate("/biologiaMolecularA");
          break;
      }
  };

  const handleButtonClick3 = () => {
    switch (parseInt(option)) {
        case 1:
          navigate("/alergenos");
          break;
        case 2:
          navigate("/alergenosR");
          break;
        case 3:
          navigate("/alergenosA");
          break;
      }
  };

  return (
    <>
      <div className="card-container">
        <div className="card">
          <img src={img1} />
          <div className="card-content">
            <h3>Química Clinica</h3>
            <p>
            La química clínica se enfoca en el análisis de sustancias químicas en la sangre y otros fluidos corporales. Evalúa el estado de salud, diagnostica enfermedades y monitorea tratamientos mediante pruebas como glucosa, colesterol y electrolitos.
            </p>
            <a href="" className="btn-1" onClick={handleButtonClick}>
              Ver Estudios
            </a>
          </div>
        </div>

        <div className="card">
          <img src={img2} />
          <div className="card-content">
            <h3>Biología Molecular</h3>
            <p>
            La biología molecular en el laboratorio clínico estudia el material genético (ADN y ARN) para detectar enfermedades genéticas e infecciosas. Utiliza técnicas como la PCR para identificar mutaciones y patógenos.
            </p>
            <a href="" className="btn-2" onClick={handleButtonClick2}>
              Ver Estudios
            </a>
          </div>
        </div>

        <div className="card">
          <img src={img3} />
          <div className="card-content">
            <h3>Alérgenos</h3>
            <p>
            El análisis de alérgenos identifica sustancias que causan reacciones alérgicas. Incluye pruebas para detectar anticuerpos contra alérgenos comunes como polvo, alimentos y animales, ayudando a diagnosticar alergias.
            </p>
            <a href="" className="btn-3" onClick={handleButtonClick3}>
              Ver Estudios
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardCatalogo;
