import React from "react";
import { FaCircleInfo } from "react-icons/fa6";
import "../styles/formCobroRecepcionista.css";
import TableCotizacionUser from "../Tables/tableCotizacionUser";
import TablePagoRecepcionista from "../Tables/tablePagoRecepcionista";
import { useState } from "react";
import { fetchData } from "../../fetchData";
import Swal from "sweetalert2";

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

function FormCobroRecepcionista() {
  const [total, setTotal] = useState(null);
  const [totalData, setTotalData] = useState({ subTotal: "0", total: "0" });

  const handleTotal = (t) => {
    setTotal(t);
    setTotalData({ subTotal: total, total: total });
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
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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

    //POST en la tabla ventas
    const respo = await fetch(`${url}/sales/add/`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        monto: total,
        id_paciente: resPacientes.id_paciente,
      }),
    });
    if (respo.ok) {
      const options = {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await fetch(
        `${url}/price/deleteAll/${id_usuario}`,
        options
      );

      if (response.ok) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Cobro registrado",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };

  return (
    <>
      <div className="customPrincipalContent">
        <div className="customFormLogin">
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
              <br />
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
            <h3 className="customSecondText">
              <FaCircleInfo className="customInfoIcon" />
              Sobre el pago
            </h3>
            <div className="customCotizacionContainer">
              <div className="customCotizacionSearch">
                <h2>Análisis escogidos</h2>
                <TablePagoRecepcionista onTotal={handleTotal} />
                <div className="form-cotizacion-inputs1">
                  <div className="form-cotizacion-input-group1">
                    <label>Subtotal:</label>
                    <input
                      type="text"
                      placeholder="Subtotal"
                      disabled
                      value={totalData.subTotal}
                    />
                  </div>
                  <div className="form-cotizacion-input-group">
                    <label>Total:</label>
                    <input
                      type="text"
                      placeholder="Total"
                      disabled
                      value={totalData.total}
                    />
                  </div>
                  <button className="form-cotizacion-button1" type="submit">
                    Cobrar
                  </button>
                </div>
                <br />
                <br />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default FormCobroRecepcionista;
