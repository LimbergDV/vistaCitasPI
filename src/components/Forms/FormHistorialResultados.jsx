import React, { useState } from "react";
import Swal from "sweetalert2";
import "../styles/formHistorialResultados.css";
import { FaSearch } from "react-icons/fa";
import TableHistorialResultados from "../Tables/tableHistorialResultados";

const id_usuario = 2; //SE DEFINE EN EL LOGIN

const url = import.meta.env.VITE_URL_BASE;
const token = import.meta.env.VITE_TOKEN;

function FormHistorialResultados() {
  const [nombre, setNombre] = useState("");
  const [data, setData] = useState(null);
  const [fechaEmision, setFechaEmision] = useState("");

  const handleNombreChange = (e) => {
    setNombre(e.target.value);
  };

  const handleFechaEmisionChange = (e) => {
    setFechaEmision(e.target.value);
  };

  const handleSearch = async () => {
    if (nombre && fechaEmision) {
      try {
        const res = await fetch(
          `${url}/history/getAll/${nombre}/${id_usuario}/${fechaEmision}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (!res.ok) {
          throw new Error('Error al realizar la solicitud');
        }
        const resAdd = await res.json();
        setData(resAdd);
      } catch (error) {
        console.error("Error fetching data:", error);
        Swal.fire({
          position: "center",
          icon: "error",
          title: `Opss, ocurrió un error`,
          text: "No se pudo obtener los datos, por favor intente nuevamente.",
          showConfirmButton: true,
        });
      }
    } else {
      Swal.fire({
        position: "center",
        icon: "error",
        title: `Opss, ocurrió un error`,
        text: "Revise la entrada de datos",
        showConfirmButton: true,
      });
    }
  };

  return (
    <>
      <div className="historial-container">
        <div className="search-section">
          <h2>Buscar resultados</h2>
          <div className="search-inputs">
            <div className="input-group">
              <label>Nombre</label>
              <input
                type="text"
                placeholder="Ingrese el nombre"
                value={nombre}
                onChange={handleNombreChange}
              />
            </div>
            <div className="input-group">
              <label>Fecha de emisión</label>
              <input
                type="date"
                placeholder="Ingrese su fecha de emisión"
                value={fechaEmision}
                onChange={handleFechaEmisionChange}
              />
            </div>
            <button className="search-button" onClick={handleSearch}>
              <FaSearch />
            </button>
          </div>
          <br /> <br />
          {<TableHistorialResultados data={data} />}
        </div>
      </div>
    </>
  );
}

export default FormHistorialResultados;
