import React from "react";
import ResponsiveAppBar from "../NavBar/navBar";
import "../styles/principal.css";
import { FaCircleInfo } from "react-icons/fa6";
import { ImOpera } from "react-icons/im";
import { useFetch } from "../../useFetch";
import { useState } from "react";

function Principal() {
  let token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MjAyNDQwOTEsImV4cCI6MTcyMDI0NzY5MX0.hxS5YSC6-T2XRI9Ea8BOQBwg8me5rI5WMe0xDgV4-RI";
  //Métodos GET usados en la página
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const { data: generos } = useFetch(
    "http://localhost:3000/genders/getAll/",
    options
  );

  const { data: colonias } = useFetch(
    "http://localhost:3000/colonies/getAll/",
    options
  );

  const { data: analisis } = useFetch(
    "http://localhost:3000/analysis/getAll/",
    options
  );

  //Construccion del módelo de datos para insertar una cita

  const [formPaciente, setFormPaciente] = useState({
    nombre: "",
    apellidoP: "",
    apellidoM: "",
    fecha_nacimiento: "",
    id_genero: 1,
    id_direccion: 1,
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

  const [formCita, setFormCita] = useState({
    id_usuario: 1,
    id_paciente: 1,
    id_horario_atencion: 1,
    id_analisis: 1,
    solicitud_studios: "",
    id_cotizacion: 1,
  });

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
    } else if (["solicitud_studios", "id_analisis"].includes(name)) {
      setFormCita((prevState) => ({ ...prevState, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let url = "http://localhost:3000/direcciones/add/"; // Reemplaza con tu URL de API

    let options = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formDireccion),
    };

    let response = await fetch(url, options);
    console.log(response);

    url = "http://localhost:3000/horarios/add/"; // Reemplaza con tu URL de API

    options = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formHorario),
    };

    response = await fetch(url, options);
    console.log(response);

    url = "http://localhost:3000/patients/add/"; // Reemplaza con tu URL de API

    options = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formPaciente),
    };

    response = await fetch(url, options);
    console.log(response);

    url = "http://localhost:3000/appointments/add/"; // Reemplaza con tu URL de API

    options = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formCita),
    };

    response = await fetch(url, options);
    console.log(response);
  };

  return (
    <>
      <ResponsiveAppBar />
      <div className="principalContent">
        <div className="formLogin">
          <h1 className="textPrincipal">Programa una cita</h1>

          <form onSubmit={handleSubmit}>
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
                    placeholder="Género"
                    value={formPaciente.id_genero}
                    onChange={handleChange}
                  >
                    {generos?.map((genero) => (
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
                    {colonias?.map((colonia) => (
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
                <label htmlFor="solicitud_studios" className="file">
                  Sube tu solicitud de estudios medicos:{" "}
                </label>
                <input
                  name="solicitud_studios"
                  type="file"
                  placeholder="Arrastra los archivos"
                  value={formCita.solicitud_studios}
                  onChange={handleChange}
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
                  {analisis?.map((analisis) => (
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

export default Principal;
