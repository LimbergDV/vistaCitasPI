import React from "react";

import "../styles/principal.css";
import { FaCircleInfo } from "react-icons/fa6";

function FormCitaUser() {
  return (
    <>
      <div className="principalContent">
        <div className="formLogin">
          <h1 className="textPrincipal">Programa una cita</h1>
          <form action="">
            <h3 className="secondText">
              {" "}
              <FaCircleInfo className="infoIcon" />
              Sobre el paciente
            </h3>

            <div className="sobre-paciente">
              <div className="inputsPrincipal">
                <div>
                  <label htmlFor="" className="labelName">
                    Nombre:{" "}
                  </label>
                  <input type="text" placeholder="Ingrese su nombre" required />
                </div>
                <div>
                  <label htmlFor="" className="lastName">
                    Apellido Paterno:{" "}
                  </label>
                  <input
                    type="text"
                    placeholder="Ingrese su apellido paterno"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="" className="lastName2">
                    Apellido Materno:{" "}
                  </label>
                  <input
                    type="text"
                    placeholder="Ingrese su apellido materno"
                    required
                  />
                </div>
              </div>

              <div className="inputsPrincipal">
                <div>
                  <label htmlFor="" className="birthDate">
                    Fecha de nacimiento:{" "}
                  </label>
                  <input
                    id="date"
                    type="date"
                    placeholder="Ingrese su fecha de nacimiento"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="" className="gender">
                    Género:{" "}
                  </label>
                  <select className="select">
                    {"Hola"}
                    <option value="masculino">Masculino</option>{" "}
                    <option value="femenino">Femenino</option>{" "}
                  </select>
                </div>

                <div>
                  <label htmlFor="" className="phoneNumber">
                    Teléfono:{" "}
                  </label>
                  <input
                    type="text"
                    placeholder="Ingrese su teléfono"
                    maxLength={10}
                    required
                  />
                </div>
              </div>

              <h3 className="direccion">Dirección</h3>

              <div className="inputsPrincipal">
                <div>
                  <label htmlFor="" className="street">
                    Calle:{" "}
                  </label>
                  <input type="text" placeholder="Ingrese su calle" required />

                  <label htmlFor="" className="numberHouse">
                    Número:{" "}
                  </label>
                  <input
                    type="number"
                    placeholder="Ingrese número de su casa"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="" className="postalCode">
                    Código Postal:{" "}
                  </label>
                  <input type="text" placeholder="Ingrese su calle" required />
                </div>
                <div>
                  <label htmlFor="" className="neighborhood">
                    Colonia:{" "}
                  </label>
                  <select className="select">
                    {"Hola"}
                    <option value="default">San Ramón</option>{" "}
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
                <label htmlFor="" className="birthDate">
                  Fecha:{" "}
                </label>
                <input id="date2" type="date" required />
                <label htmlFor="" className="birthDate">
                  Hora:{" "}
                </label>
                <input
                  id="date3"
                  type="time"
                  placeholder="Ingrese su fecha de nacimiento"
                  required
                /> <br />
                <button className="btn">Agendar</button>
              </div>

              <div className="motivos">
                <h3 className="motivosh3">Añadir motivos</h3>
                <label htmlFor="" className="file">
                  Sube tu solicitud de estudios medicos:{" "}
                </label>
                <input type="file" placeholder="Arrastra los archivos" />
                <label htmlFor="" className="">
                  Elige tus análisis:{" "}
                </label>
                <select className="select">
                  {"Hola"}
                  <option value="default">Ninguno</option>{" "}
                </select>
              </div>

            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default FormCitaUser;
