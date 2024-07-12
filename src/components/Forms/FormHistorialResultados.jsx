import React from "react";
import Swal from "sweetalert2";
import "../styles/formHistorialResultados.css";
import { FaSearch } from "react-icons/fa";
import TableHistorialResultados from "../Tables/tableHistorialResultados";

function FormHistorialResultados(){
    return(
        <>
        <div className="historial-container">
      <div className="search-section">
        <h2>Buscar resultados</h2>
        <div className="search-inputs">
          <div className="input-group">
            <label>Nombre</label>
            <input type="text" placeholder="Ingrese el nombre" />
          </div>
          <div className="input-group">
            <label>Fecha de emisión</label>
            <input type="date" placeholder="Ingrese su fecha de emición" />
          </div>
          <button className="search-button">
          <FaSearch />
          </button>
        </div>
        <br /> <br />
        <TableHistorialResultados/>
      </div>
    </div>
        </>
    )
}

export default FormHistorialResultados