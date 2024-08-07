//Molécula
import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "../styles/formCitaRecepcionista.css";
import { FaCircleInfo } from "react-icons/fa6";
import { useState } from "react";
import { fetchData } from "../../fetchData";

// Métodos GET usados en la página
const token = localStorage.getItem("token");
const url = import.meta.env.VITE_URL_BASE;
const id_usuario = parseInt(localStorage.getItem("id_usuario"));

const options = {
  method: "GET",
  headers: {
    Authorization: `Bearer ${token}`,
  },
};
const generos = fetchData(`${url}/genders/getAll/`, options);
const colonias = fetchData(`${url}/colonies/getAll/`, options);
const analisis = fetchData(`${url}/analysis/getAll/`, options);
const horarios = fetchData(`${url}/horarios/getAll/`, options);

function FormCitaRecepcionita() {
  //Logica de navegacion
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/citasAgendadasR");
  };

  // Construcción del modelo de datos para insertar una cita
  const [formPaciente, setFormPaciente] = useState({
    nombre: "",
    apellidoP: "",
    apellidoM: "",
    fecha_nacimiento: "",
    id_genero: "",
    telefono: "",
  });

  const [formDireccion, setFormDireccion] = useState({
    calle: "",
    id_colonia: "",
    numero: "",
    codigo_postal: "",
  });

  const [formHorario, setFormHorario] = useState({
    horario_inicio: "",
  });

  const [formCita, setFormCita] = useState({
    id_analisis: "",
    fecha: "",
  });

  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (
      [
        "nombre",
        "apellidoP",
        "apellidoM",
        "fecha_nacimiento",
        "id_genero",
        "telefono",
      ].includes(name)
    ) {
      setFormPaciente((prevState) => ({ ...prevState, [name]: value }));
    } else if (
      ["calle", "numero", "codigo_postal", "id_colonia"].includes(name)
    ) {
      setFormDireccion((prevState) => ({ ...prevState, [name]: value }));
    } else if (["horario_inicio"].includes(name)) {
      setFormHorario((prevState) => ({ ...prevState, [name]: value }));
    } else if (["solicitud_estudios", "id_analisis", "fecha"].includes(name)) {
      setFormCita((prevState) => ({ ...prevState, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    //Validar con la existencia de una cita...
    if (formHorario.horario_inicio === "") {
      formHorario.horario_inicio = 1;
    }
    const res = await fetch(
      `${url}/appointments/exist/${formCita.fecha}/${formHorario.horario_inicio}`,
      options
    );
    const data = await res.json();

    if (data.length == 0) {
      // POST en la tabla direccion
      console.log(formDireccion);
      if (formDireccion.id_colonia === "") {
        formDireccion.id_colonia = 1;
      }
      const response = await fetch(`${url}/direcciones/add/`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDireccion),
      });
      const resDireccion = await response.json();
      console.log(resDireccion);

      // POST en la tabla pacientes
      if (formPaciente.id_genero === "") {
        formPaciente.id_genero = 1;
      }
      const respon = await fetch(`${url}/patients/add/`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formPaciente,
          id_direccion: resDireccion.id_direccion,
        }),
      });
      const resPacientes = await respon.json();
      console.log(resPacientes);

      // POST en la tabla citas
      if (formCita.id_analisis === "") {
        formCita.id_analisis = 1;
      }
      const formData = new FormData();
      formData.append("id_usuario", id_usuario);
      formData.append("id_paciente", resPacientes.id_paciente);
      formData.append("id_horario_atencion", formHorario.horario_inicio);
      formData.append("id_analisis", formCita.id_analisis);
      formData.append("solicitud_estudios", file);
      formData.append("fecha", formCita.fecha);

      const respo = await fetch(`${url}/appointments/add/`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });
      if (respo.ok) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Consulta agendada",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Oops, Ocurrió un error",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops, Ya existe una cita",
        text: "Elige otra fecha u hora en la que le podamos atender",
      });
    }
  };

  return (
    <div className="principalContent">
      <div className="formLogin">
        <h1 className="textPrincipal">Programa una cita</h1>
        <form onSubmit={handleSubmit}>
          <div className="btnCita">
            <button className="btn1" onClick={handleButtonClick}>
              Ver Citas Agendadas 📅
            </button>
          </div>

          <h3 className="secondText">
            <FaCircleInfo className="infoIcon" />
            Sobre el paciente
          </h3>
          <div className="sobre-paciente">
            <div className="inputsPrincipal">
              <div>
                <label htmlFor="nombre" className="labelName">
                  Nombre:
                </label>
                <input
                  name="nombre"
                  type="text"
                  placeholder="Ingrese su nombre"
                  required
                  value={formPaciente.nombre}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="apellidoP" className="lastName">
                  Apellido Paterno:
                </label>
                <input
                  name="apellidoP"
                  type="text"
                  placeholder="Ingrese su apellido paterno"
                  required
                  value={formPaciente.apellidoP}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="apellidoM" className="lastName2">
                  Apellido Materno:
                </label>
                <input
                  name="apellidoM"
                  type="text"
                  placeholder="Ingrese su apellido materno"
                  required
                  value={formPaciente.apellidoM}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="inputsPrincipal">
              <div>
                <label htmlFor="fecha_nacimiento" className="birthDate">
                  Fecha de nacimiento:
                </label>
                <input
                  name="fecha_nacimiento"
                  id="date"
                  type="date"
                  placeholder="Ingrese su fecha de nacimiento"
                  required
                  value={formPaciente.fecha_nacimiento}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="id_genero" className="gender">
                  Género:
                </label>
                <select
                  name="id_genero"
                  className="select"
                  value={formPaciente.id_genero}
                  onChange={handleChange}
                >
                  {generos.read()?.map((genero) => (
                    <option key={genero.id_genero} value={genero.id_genero}>
                      {genero.nombre_genero}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="telefono" className="phoneNumber">
                  Teléfono:
                </label>
                <input
                  name="telefono"
                  type="text"
                  placeholder="Ingrese su teléfono"
                  maxLength={10}
                  required
                  value={formPaciente.telefono}
                  onChange={handleChange}
                />
              </div>
            </div>
            <h3 className="direccion">Dirección</h3>
            <div className="inputsPrincipal">
              <div>
                <label htmlFor="calle" className="street">
                  Calle:
                </label>
                <input
                  name="calle"
                  type="text"
                  placeholder="Ingrese su calle"
                  required
                  value={formDireccion.calle}
                  onChange={handleChange}
                />
                <label htmlFor="numero" className="numberHouse">
                  Número:
                </label>
                <input
                  name="numero"
                  type="number"
                  placeholder="Ingrese número de su casa"
                  required
                  value={formDireccion.numero}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="codigo_postal" className="postalCode">
                  Código Postal:
                </label>
                <input
                  name="codigo_postal"
                  type="number"
                  placeholder="Ingrese el código postal"
                  required
                  value={formDireccion.codigo_postal}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="id_colonia" className="neighborhood">
                  Colonia
                </label>
                <select
                  name="id_colonia"
                  className="select"
                  value={formDireccion.id_colonia}
                  onChange={handleChange}
                >
                  {colonias.read()?.map((colonia) => (
                    <option key={colonia.id_colonia} value={colonia.id_colonia}>
                      {colonia.nombre}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <h3 className="secondText">
            <FaCircleInfo className="infoIcon" />
            Elije tu tiempo
          </h3>
          <div className="elegir-cita">
            <div className="fechas">
              <label htmlFor="fecha" className="birthDate">
                Fecha:
              </label>
              <input
                name="fecha"
                id="date2"
                type="date"
                required
                value={formCita.fecha}
                onChange={handleChange}
              />
              <label htmlFor="horario_inicio" className="birthDate">
                Hora:
              </label>
              <select
                name="horario_inicio"
                id="date3"
                className="select"
                value={formHorario.horario_inicio}
                onChange={handleChange}
              >
                {horarios.read().map((horario) => (
                  <option value={horario.id_horario} key={horario.id_horario}>
                    {horario.horario_inicio}
                  </option>
                ))}
              </select>
              <br />
              <button className="btn" type="submit">
                Agendar
              </button>
            </div>
            <div className="motivos">
              <h3 className="motivosh3">Añadir motivos</h3>
              <label htmlFor="solicitud_estudios" className="file">
                Sube tu solicitud de estudios medicos:
              </label>
              <input
                name="solicitud_estudios"
                type="file"
                accept=".pdf"
                onChange={handleFileChange}
              />
              <label htmlFor="id_analisis" className="">
                Elige tus análisis:
              </label>
              <select
                name="id_analisis"
                className="select"
                value={formCita.id_analisis}
                onChange={handleChange}
              >
                {analisis.read()?.map((analisis) => (
                  <option
                    key={analisis.id_analisis}
                    value={analisis.id_analisis}
                  >
                    {analisis.nombre}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormCitaRecepcionita;
