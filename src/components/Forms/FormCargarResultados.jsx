import React from "react";
import "../styles/formCargarResultados.css";
import SearchNavResultados from "../SearchNav/searchNavResultados";
import TableSearchUser from "../Tables/tableSearchUser";
import TableSearchPatient from "../Tables/tableSearchPatient";
import Footer from "../Footer/footer";

function FormCargarResultados() {
  return (
    <div>
    <div className="principalContent">
      <h1 className="mainTitle">Cargar Resultados</h1>
      <div className="contentContainer">
        <div className="leftContainer">
          <div className="searchSection">
            <div className="searchTitleContainer">
              <h3 className="searchTitle">Busca al Usuario</h3>
              <SearchNavResultados />
            </div>
          </div>
          <TableSearchUser />

          <div className="searchPacienteSection"> {/* Nuevo contenedor para "Buscar Paciente" */}
            <div className="searchSection">
              <div className="searchTitleContainer">
                <h3 className="searchTitle">Buscar Paciente</h3>
                <SearchNavResultados />
              </div>
            </div>
          </div>
          <TableSearchPatient/>

          <div className="fileUploadSection">
            <h3 className="uploadTitle">Arrastra los archivos</h3>
            <div className="uploadContainer">
              <div className="uploadIcon">📄</div>
              <input name="solicitud_estudios" type="file" accept=".pdf"/>
            </div>
          </div>
        </div>

        <div className="documentViewSection">
          <h3 className="documentViewTitle">Vista del documento</h3>
          <div className="documentView"></div>
        </div>
      </div>
      <button className="btnUpload">Cargar</button>
      
    </div>
    <Footer/>
    </div>
  );
}

export default FormCargarResultados;
