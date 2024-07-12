import React from "react";
import Swal from "sweetalert2";
import "../styles/formCotizacionUser.css";
import TableHistorialResultados from "../Tables/tableHistorialResultados";
import TableCotizacionUser from "../Tables/tableCotizacionUser";

function FormCotizacionUser(){
    return(
        <>
        <div className="form-cotizacion-container">
            <div className="form-cotizacion-search">
                <h2>Análisis escogidos</h2>
                <TableCotizacionUser/>
                <div className="form-cotizacion-inputs">
                    <div className="form-cotizacion-input-group">
                        <label>Subtotal:</label>
                        <input type="text" placeholder="Subtotal" disabled/>
                    </div>
                    <div className="form-cotizacion-input-group">
                        <label>Total:</label>
                        <input type="text" placeholder="Total" disabled/>
                    </div>
                    <button className="form-cotizacion-button">
                    Agendar Cita
                    </button>
                </div>
                <br /> <br />
                
            </div>
        </div>
        </>
    )
}

export default FormCotizacionUser;
