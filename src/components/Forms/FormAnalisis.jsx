import React from "react";
import "../styles/formAnalisis.css";
import TableHistorialPagos from "../Tables/tableHistorialPagos";
import { IoIosAddCircleOutline } from "react-icons/io";
import { MdLocalPrintshop } from "react-icons/md";
import SearchNavResultados from "../SearchNav/searchNavResultados";
import TableAnalisis from "../Tables/tableAnalisis";

function FormAnalisis() {
  return (
    <>
      <div className="main-container">
        <div className="searchPatientSection">
          <div className="searchSection">
            <div className="searchTitleContainer">
              <h3 className="searchTitle">Buscar Análisis</h3>
              <SearchNavResultados />
            </div>
          </div>
        </div>
        <TableAnalisis />
        <div className="btn-main">
          <button className="print-btn">
            <IoIosAddCircleOutline className="icon-add" />
          </button>
        </div>
        <div className="addAnalysisSection">
          <h3 className="addAnalysisTitle">Agregar análisis</h3>
          <div className="addAnalysisForm">
            <div className="formGroup">
              <label htmlFor="name">Nombre</label>
              <input className="input-name" type="text" id="name" placeholder="Ingrese el nombre" />
            </div>
            <div className="formGroup">
              <label htmlFor="description">Descripción</label>
              <input className="input-description" type="text" id="description" placeholder="Ingrese su descripción" />
            </div>
            <div className="formGroup">
              <label htmlFor="studyKey">Clave de estudios</label>
              <input className="input-studyKey" type="text" id="studyKey" placeholder="Ingrese la clave de estudios" />
            </div>
            <div className="formGroup">
              <label htmlFor="price">Precio</label>
              <input className="input-price" type="text" id="price" placeholder="Ingrese el precio" />
            </div>
          </div>
          <div className="formActions">
            <button className="btn btn-add">Agregar</button>
            <button className="btn btn-cancel">Cancelar</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormAnalisis;
