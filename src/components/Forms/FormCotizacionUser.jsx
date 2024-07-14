import React from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import "../styles/formCotizacionUser.css";
import TableHistorialResultados from "../Tables/tableHistorialResultados";
import TableCotizacionUser from "../Tables/tableCotizacionUser";
import { useState } from "react";

function FormCotizacionUser({ user }) {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (user === "Agendar") {
      navigate("/consulta");
    } else if (user === "Cobrar") {
      navigate("/citasAgendadas");
    }
  };

  const [total, setTotal] = useState(null);
  const [totalData, setTotalData] = useState({ subTotal: "0", total: "0" });

  const handleTotal = (t) => {
    setTotal(t);
    setTotalData({ subTotal: total, total: total });
  };

  return (
    <>
      <div className="form-cotizacion-container">
        <div className="form-cotizacion-search">
          <h2>Análisis escogidos</h2>
          <TableCotizacionUser onTotal={handleTotal} />
          <div className="form-cotizacion-inputs">
            <div className="form-cotizacion-input-group">
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
            <button
              className="form-cotizacion-button"
              onClick={handleButtonClick}
            >
              {user}
            </button>
          </div>
          <br /> <br />
        </div>
      </div>
    </>
  );
}

export default FormCotizacionUser;
