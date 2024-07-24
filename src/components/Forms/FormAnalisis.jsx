import React, { useEffect } from "react";
import "../styles/formAnalisis.css";
import TableHistorialPagos from "../Tables/tableHistorialPagos";
import { IoIosAddCircleOutline } from "react-icons/io";
import { MdLocalPrintshop } from "react-icons/md";
import SearchNavResultados from "../SearchNav/searchNavResultados";
import TableAnalisis from "../Tables/tableAnalisis";
import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

// Métodos GET usados en la página
const token = localStorage.getItem("token");
const url = import.meta.env.VITE_URL_BASE;

function FormAnalisis() {
  const [data, setData] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [edit, setEdit] = useState(false);
  const [deleteA, setDelete] = useState(false);
  const [isDisabled, setDisabled] = useState(true);
  const [action, setAction] = useState("");

  const [formAnalysis, setformAnalysis] = useState({
    nombre: "",
    clave_estudios: "",
    descripcion: "",
    precio: "",
    id_categoria: "",
  });

  useEffect(() => {
    const obtenerCategorias = async () => {
      const options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await fetch(`${url}/categorias/getAll/`, options);
      const res = await response.json();
      if (res.length > 0) {
        setCategorias(res);
      }
    };

    const actions = () => {
      if (edit) {
        editAnalysis(data[0]);
        setEdit(false);
      } else if (deleteA) {
        deleteAnalysis(data[0]);
        setDelete(false);
      }
    };
    actions();
    obtenerCategorias();
  }, [edit, deleteA]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (
      [
        "id_categoria",
        "nombre",
        "clave_estudios",
        "descripcion",
        "precio",
      ].includes(name)
    ) {
      setformAnalysis((prevState) => ({ ...prevState, [name]: value }));
    }
  };

  const editAnalysis = (analysis) => {
    setDisabled(false); //Activar los inputs y botones
    console.log(analysis.nombre);
    //Imprimir la informacion en los inputs
    setformAnalysis({
      nombre: analysis.nombre,
      clave_estudios: analysis.clave_estudios,
      descripcion: analysis.descripcion,
      precio: analysis.precio,
      id_categoria: analysis.id_categoria,
    });

    setAction("UPDATE");
  };

  const addAnalysis = () => {
    setDisabled(false);
    setAction("ADD");
  };

  const deleteAnalysis = (analisis) => {
    Swal.fire({
      title: "¿Esta seguro de eliminarlo por completo?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Eliminar",
      denyButtonText: `Cancelar`,
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await fetch(
            `${url}/analysis/delete/${analisis.id_analisis}`,
            {
              method: "DELETE",
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          if (response.ok) {
            Swal.fire("¡Eliminado correctamente!", "", "success");
            setTimeout(() => {
              window.location.reload();
            }, 1000);
          }
        } catch (e) {
          console.log(e);
          Swal.fire("Ocurrió un error inesperado", "", "error");
        }
      } else if (result.isDenied) {
        Swal.fire("Cancelado", "", "info");
      }
    });
  };

  const handleClick = (action, analisis) => {
    //UPDATE
    if (action === "UPDATE") {
      Swal.fire({
        title: "¿Esta seguro de guardar los cambios?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Guardar",
        denyButtonText: `No Guardar`,
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            const response = await fetch(
              `${url}/analysis/update/${analisis.id_analisis}`,
              {
                method: "PUT",
                headers: {
                  Authorization: `Bearer ${token}`,
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(formAnalysis),
              }
            );
            if (response.ok) {
              Swal.fire("¡Guardado correctamente!", "", "success");
              setTimeout(() => {
                window.location.reload();
              }, 1000);
            }
          } catch (e) {
            console.log(e);
            Swal.fire("Ocurrió un error inesperado", "", "error");
          }
        } else if (result.isDenied) {
          setformAnalysis({
            nombre: "",
            clave_estudios: "",
            descripcion: "",
            precio: "",
            id_categoria: "",
          });
          setDisabled(true);
          Swal.fire("Cancelado", "", "info");
        }
      });
    } else if (action === "ADD") {
      //Metodo POST
      Swal.fire({
        title: "¿Desea agregarlo?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Sí",
        denyButtonText: `No`,
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            if (formAnalysis.id_categoria === "") {
              formAnalysis.id_categoria = 1;
            }

            const response = await fetch(`${url}/analysis/add/`, {
              method: "POST",
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
              body: JSON.stringify(formAnalysis),
            });
            if (response.ok) {
              Swal.fire("¡Guardado correctamente!", "", "success");
              setTimeout(() => {
                window.location.reload();
              }, 1000);
            }
          } catch (e) {
            console.log(e);
            Swal.fire("Ocurrió un error inesperado", "", "error");
          }
        } else if (result.isDenied) {
          setformAnalysis({
            nombre: "",
            clave_estudios: "",
            descripcion: "",
            precio: "",
            id_categoria: "",
          });
          setDisabled(true);
          Swal.fire("Cancelado", "", "info");
        }
      });
    }
  };

  const cancel = () => {
    Swal.fire({
      position: "center",
      icon: "info",
      title: "Se canceló la operación",
      showConfirmButton: false,
      timer: 1500,
    });
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  return (
    <>
      <div className="main-container">
        <div className="searchPatientSection">
          <div className="searchSection">
            <div className="searchTitleContainer">
              <h3 className="searchTitle">Buscar Análisis</h3>
              <SearchNavResultados
                onSearchData={setData}
                resource={"analysis"}
              />
            </div>
          </div>
        </div>
        <TableAnalisis data={data} actionE={setEdit} actionD={setDelete} />
        <div className="btn-main">
          <button className="print-btn" onClick={() => addAnalysis()}>
            <IoIosAddCircleOutline className="icon-add" />
          </button>
        </div>
        <div className="addAnalysisSection">
          <h3 className="addAnalysisTitle">Agregar análisis</h3>

          <div className="addAnalysisForm">
            <div className="formGroup">
              <label htmlFor="nombre">Nombre</label>
              <input
                className="input-name"
                type="text"
                name="nombre"
                placeholder="Ingrese el nombre"
                disabled={isDisabled}
                value={formAnalysis.nombre}
                onChange={handleChange}
              />
            </div>
            <div className="formGroup">
              <label htmlFor="descripcion">Descripción</label>
              <input
                className="input-description"
                type="text"
                name="descripcion"
                placeholder="Ingrese su descripción"
                disabled={isDisabled}
                value={formAnalysis.descripcion}
                onChange={handleChange}
              />
            </div>
            <div className="formGroup">
              <label htmlFor="clave_estudios">Clave de estudios</label>
              <input
                className="input-studyKey"
                type="text"
                name="clave_estudios"
                placeholder="Ingrese la clave de estudios"
                disabled={isDisabled}
                value={formAnalysis.clave_estudios}
                onChange={handleChange}
              />
            </div>
            <div className="formGroup">
              <label htmlFor="precio">Precio</label>
              <input
                className="input-price"
                type="text"
                name="precio"
                placeholder="Ingrese el precio"
                disabled={isDisabled}
                value={formAnalysis.precio}
                onChange={handleChange}
              />
            </div>
            <div className="formGroup">
              <label htmlFor="id_categoria">Categoría:</label>
              <select
                name="id_categoria"
                className="select"
                value={formAnalysis.id_categoria}
                onChange={handleChange}
                disabled={isDisabled}
              >
                {categorias.map((categoria) => (
                  <option
                    key={categoria.id_categoria}
                    value={categoria.id_categoria}
                  >
                    {categoria.nombre_categoria}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="formActions">
            <button
              className="btn btn-add"
              disabled={isDisabled}
              onClick={() => handleClick(action, data[0])}
            >
              Guardar
            </button>
            <button
              className="btn btn-cancel"
              disabled={isDisabled}
              onClick={() => cancel()}
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormAnalisis;
