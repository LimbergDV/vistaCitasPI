import React, { useState } from "react";
import "../styles/formCargarResultados.css";
import SearchNavResultados from "../SearchNav/searchNavResultados";
import TableSearchUser from "../Tables/tableSearchUser";
import Footer from "../Footer/footer";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import Swal from "sweetalert2";

const url = import.meta.env.VITE_URL_BASE;
const token = localStorage.getItem("token");

const currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1; // Los meses empiezan desde 0
const day = currentDate.getDate();
const fecha_emision = `${year}-${month}-${day}`;

function FormCargarResultados() {
  const [user, setDataUser] = useState(null);
  const [patient, setDataPatient] = useState(null);
  const [file, setFile] = useState(null);
  const [fileBLOB, setFileBLOB] = useState(null);

  const handleSearchUser = (searchData) => {
    setDataUser(searchData);
  };

  const handleSearchPatient = (searchData) => {
    setDataPatient(searchData);
  };

  const handleFileChange = (e) => {
    setFileBLOB(e.target.files[0]);
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  const newPlugin = defaultLayoutPlugin();

  const crearConsulta = async () => {
    
    if(user != null && patient != null && file != null){

      //Insertamos en la tabla de resultados
      const formData = new FormData;
      formData.append("respaldo_resultado", fileBLOB);
      formData.append("fecha_emicion", fecha_emision);

      const res = await fetch(`${url}/results/add/`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });
      const resAdd = await res.json();
      console.log(resAdd);
      
      console.log(user[0].id_usuario, patient[0].id_paciente)
      const id_usuario = user[0].id_usuario;
      const id_paciente = patient[0].id_paciente;
      //Insertamos en la tabla historial_medico
      const response = await fetch(`${url}/history/add/`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id_usuario: id_usuario,
          id_paciente: id_paciente,
          id_resultado: resAdd.id_resultado,
        }),
      });
      console.log(response);
      if(response.ok) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: `Agregado con éxito`,
          showConfirmButton: false,
          timer: 1500
        });
      } else {
        Swal.fire({
          position: "center",
          icon: "error",
          title: `Opss, ocurrió un error`,
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
  }

  return (
    <div>
      <div className="principalContent">
        <h1 className="mainTitle">Cargar Resultados</h1>
        <div className="contentContainer">
          <div className="leftContainer">
            <div className="searchSection">
              <div className="searchTitleContainer">
                <h3 className="searchTitle">Buscar Usuario</h3>
                <SearchNavResultados onSearchData={handleSearchUser} resource="users" />
              </div>
            </div>
            <TableSearchUser data={user} />

            <div className="searchPacienteSection">
              <div className="searchSection">
                <div className="searchTitleContainer">
                  <h3 className="searchTitle">Buscar Paciente</h3>
                  <SearchNavResultados onSearchData={handleSearchPatient} resource="patients" />
                </div>
              </div>
            </div>
            <TableSearchUser data={patient} />

            <div className="fileUploadSection">
              <h3 className="uploadTitle">Arrastra los archivos</h3>
              <div className="uploadContainer">
                <div className="uploadIcon">📄</div>
                <input name="respaldo_resultados" type="file" accept=".pdf" onChange={handleFileChange} />
              </div>
            </div>
          </div>

          <div className="documentViewSection">
            <h3 className="documentViewTitle">Vista del documento</h3>
            <div className="documentView">
              <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                {file ? (
                  <Viewer fileUrl={file} plugins={[newPlugin]} />
                ) : (
                  <><p>No existe vista previa</p></>
                )}
              </Worker>
            </div>
          </div>
        </div>
        <button className="btnUpload" onClick={() => crearConsulta()}>Cargar</button>
      </div>
      <Footer />
    </div>
  );
}

export default FormCargarResultados;
