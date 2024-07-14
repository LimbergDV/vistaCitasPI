import React from "react";
import { FaCircleInfo } from "react-icons/fa6";
import '../styles/formCobroRecepcionista.css'
import TableCotizacionUser from "../Tables/tableCotizacionUser";
import TablePagoRecepcionista from "../Tables/tablePagoRecepcionista";

function FormCobroRecepcionista(){
    return(
        <>
        <div className="customPrincipalContent">
  <div className="customFormLogin">
    <form>
      <h3 className="customSecondText">
        <FaCircleInfo className="customInfoIcon" />
        Sobre el paciente
      </h3>
      <div className="customSobrePaciente">
        <div className="customInputsPrincipal">
          <div>
            <label htmlFor="nombre" className="customLabelName">
              Nombre:
            </label>
            <input
              name="nombre"
              type="text"
              placeholder="Ingrese su nombre"
              required
            />
          </div>
          <div>
            <label htmlFor="apellidoP" className="customLastName">
              Apellido Paterno:
            </label>
            <input
              name="apellidoP"
              type="text"
              placeholder="Ingrese su apellido paterno"
              required
            />
          </div>
          <div>
            <label htmlFor="apellidoM" className="customLastName2">
              Apellido Materno:
            </label>
            <input
              name="apellidoM"
              type="text"
              placeholder="Ingrese su apellido materno"
              required
            />
          </div>
        </div>
        <div className="customInputsPrincipal">
          <div>
            <label htmlFor="fecha_nacimiento" className="customBirthDate">
              Fecha de nacimiento:
            </label>
            <input
              name="fecha_nacimiento"
              id="date"
              type="date"
              placeholder="Ingrese su fecha de nacimiento"
              required
            />
          </div>
          <div>
            <label htmlFor="id_genero" className="customGender">
              Género:
            </label>
            <select
              name="id_genero"
              className="customSelect"
            >
            </select>
          </div>
          <div>
            <label htmlFor="telefono" className="customPhoneNumber">
              Teléfono:
            </label>
            <input
              name="telefono"
              type="text"
              placeholder="Ingrese su teléfono"
              maxLength={10}
              required
            />
          </div>
        </div>
        <h3 className="customDireccion">Dirección</h3>
        <div className="customInputsPrincipal">
          <div>
            <label htmlFor="calle" className="customStreet">
              Calle:
            </label>
            <input
              name="calle"
              type="text"
              placeholder="Ingrese su calle"
              required
            />
            <label htmlFor="numero" className="customNumberHouse">
              Número:
            </label>
            <input
              name="numero"
              type="number"
              placeholder="Ingrese número de su casa"
              required
            />
          </div>
          <div>
            <label htmlFor="codigo_postal" className="customPostalCode">
              Código Postal:
            </label>
            <input
              name="codigo_postal"
              type="number"
              placeholder="Ingrese el código postal"
              required
            />
          </div>
          <div>
            <label htmlFor="id_colonia" className="customNeighborhood">
              Colonia
            </label>
            <select
              name="id_colonia"
              className="customSelect"
            >
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
    <TablePagoRecepcionista />
    <div className="customCotizacionInputs">
      <div className="customCotizacionInputGroup">
        <label>Subtotal:</label>
        <input type="text" placeholder="Subtotal" disabled />
      </div>
      <div className="customCotizacionInputGroup">
        <label>Total:</label>
        <input type="text" placeholder="Total" disabled />
      </div>
      <button className="customCotizacionButton">
        Agendar Cita
      </button>
    </div>
    <br /><br />
  </div>
</div>
    </form>
  </div>
</div>
    </>
    )
}

export default FormCobroRecepcionista