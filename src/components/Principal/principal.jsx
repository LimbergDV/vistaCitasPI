import React from "react";
import ResponsiveAppBar from "../NavBar/navBar";
import "../styles/principal.css";
import { FaCircleInfo } from "react-icons/fa6";
import { useFetch } from "../../useFetch";
import { useFetchPOST } from "../../useFetch";
import { useFetchBLOB } from "../../useFetch";
import { useState } from "react";

function Principal() {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MjAzMjIyNTYsImV4cCI6MTcyMDMyNTg1Nn0.gDU5Mz_MKCR6Kkfp_pRu1Fc_M5YELw0X7o1UnD5uLVs";

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

  //Valores predefinidos pensados para pasarse como parámetros
  let direccion = 1;
  let genero = 1;
  const [formPaciente, setFormPaciente] = useState({
    nombre: "",
    apellidoP: "",
    apellidoM: "",
    fecha_nacimiento: "",
    id_genero: genero,
    id_direccion: direccion,
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
  let usuario = 1;
  let paciente = 4;
  let horario_inicio = 1;
  let analisisN = 1;
  let cotizacion = 1;
  const [formCita, setFormCita] = useState({
    id_usuario: usuario,
    id_paciente: paciente,
    id_horario_atencion: horario_inicio,
    id_analisis: analisisN,
    id_cotizacion: cotizacion,
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

    //Insertar en la tabla direcciones
    useFetchPOST("http://localhost:3000/direcciones/add/", formDireccion, token);
    
    //Insertar en la tabla horarios
    useFetchPOST("http://localhost:3000/horarios/add/", formHorario, token);
    
    //Insertar en la tabla pacientes
    useFetchPOST("http://localhost:3000/patients/add/", formPaciente, token);
    
    //Insertar en la tabla citas
    const formData = new FormData();
    formData.append('id_usuario', formCita.id_usuario);
    formData.append('id_paciente', formCita.id_paciente);
    formData.append('id_horario_atencion', formCita.id_horario_atencion);
    formData.append('id_analisis', formCita.id_analisis);
    formData.append('solicitud_estudios', file);
    formData.append('id_cotizacion', formCita.id_cotizacion);

    useFetchBLOB("http://localhost:3000/appointments/add/", formData, token);
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
