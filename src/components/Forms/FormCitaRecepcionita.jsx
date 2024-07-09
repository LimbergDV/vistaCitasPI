import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "../styles/formCitaRecepcionista.css";
import { FaCircleInfo } from "react-icons/fa6";
import { fetchData } from "../../fetchData";
import { useFetchPOST } from "../../useFetch";
import { useFetchBLOB } from "../../useFetch";
import { useState } from "react";

//Métodos GET usados en la página
const token = import.meta.env.VITE_TOKEN;
const options = {
  method: "GET",
  headers: {
    Authorization: `Bearer ${token}`,
  },
};
const generos = fetchData("http://localhost:3000/genders/getAll/", options);

const colonias = fetchData("http://localhost:3000/colonies/getAll/", options);

const analisis = fetchData("http://localhost:3000/analysis/getAll/", options);

export default function FormCitaRecepcionista() {
  //Logica de navegacion
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/citasAgendadas");
  };

  //Construccion del módelo de datos para insertar una cita

  //Valores predefinidos pensados para pasarse como parámetros
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
    fecha: "",
    horario_inicio: "",
  });

  //Valores predefinidos pensados para pasarse como parámetros
  let usuario = 2;
  let cotizacion = 1; //Modulos aun no terminados

  const [formCita, setFormCita] = useState({
    id_analisis: "",
  });

  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Determine which form state to update based on the input name
    if (
      [
        "nombre",
        "apellidoP",
        "apellidoM",
        "fecha_nacimiento",
        "id_genero",
        "id_direccion",
        "telefono",
      ].includes(name)
    ) {
      setFormPaciente((prevState) => ({ ...prevState, [name]: value }));
    } else if (
      ["calle", "numero", "codigo_postal", "id_colonia"].includes(name)
    ) {
      setFormDireccion((prevState) => ({ ...prevState, [name]: value }));
    } else if (["fecha", "horario_inicio"].includes(name)) {
      setFormHorario((prevState) => ({ ...prevState, [name]: value }));
    } else if (["solicitud_estudios", "id_analisis"].includes(name)) {
      setFormCita((prevState) => ({ ...prevState, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    //POST en la tabla direccion
    const response = await fetch("http://localhost:3000/direcciones/add/", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id_colonia: formDireccion.id_colonia,
        calle: formDireccion.calle,
        numero: formDireccion.numero,
        codigo_postal: formDireccion.codigo_postal,
      }),
    });
    const resDireccion = await response.json();
    console.log(resDireccion);

    //POST en la tabla horarios_atencion
    const respons = await fetch("http://localhost:3000/horarios/add/", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formHorario),
    });
    const resHorario = await respons.json();
    console.log(resHorario);

    //POST en la tabla pacientes
    const respon = await fetch("http://localhost:3000/patients/add/", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombre: formPaciente.nombre,
        apellidoP: formPaciente.apellidoP,
        apellidoM: formPaciente.apellidoM,
        fecha_nacimiento: formPaciente.fecha_nacimiento,
        id_genero: formPaciente.id_genero,
        id_direccion: resDireccion.id_direccion,
        telefono: formPaciente.telefono,
      }),
    });
    const resPacientes = await respon.json();
    console.log(resPacientes);

    //POST en la tabla citas
     //Insertar en la tabla citas
     const formData = new FormData();
     formData.append("id_usuario", usuario);
     formData.append("id_paciente", resPacientes.id_paciente);
     formData.append("id_horario_atencion", resHorario.id_horario);
     formData.append("id_analisis", formCita.id_analisis);
     formData.append("solicitud_estudios", file);
     formData.append("id_cotizacion", cotizacion);

    const respo = await fetch("http://localhost:3000/appointments/add/", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });
    const resCita = await respo.json();
    console.log(resCita);
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
        title: "Ups Ocurrió un error",
        showConfirmButton: false,
        timer: 1500,
      });
    }
   
  };

  return (
    <>
      <div className="principalContent">
        <div className="formLogin">
          <div className="btnCita">
            <button className="btn1" onClick={handleButtonClick}>
              Ver Citas Agendadas 📅
            </button>
          </div>
          <h1 className="textPrincipal">Programa una cita</h1>
          <form onSubmit={handleSubmit}>
            <h3 className="secondText">
              {" "}
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
                    placeholder="Género"
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
                    Teléfono:{" "}
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
                    Número:{" "}
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
                      <option
                        key={colonia.id_colonia}
                        value={colonia.id_colonia}
                      >
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
                  min="2024-07-01"
                  max="2024-07-31"
                  name="fecha"
                  id="date2"
                  type="date"
                  required
                  value={formHorario.fecha}
                  onChange={handleChange}
                />
                <label htmlFor="horario_inicio" className="birthDate">
                  Hora:{" "}
                </label>
                <input
                  min="07:30"
                  max="14:00"
                  name="horario_inicio"
                  id="date3"
                  type="time"
                  placeholder="Ingrese su fecha de nacimiento"
                  required
                  value={formHorario.horario_inicio}
                  onChange={handleChange}
                />{" "}
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
                  placeholder="Arrastra los archivos"
                  onChange={handleFileChange}
                />
                <label htmlFor="id_analisis" className="">
                  Elige tus análisis:{" "}
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
    </>
  );
}
