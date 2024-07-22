import React from "react";
import '../styles/formAdministrarPerfil.css';

function Principal() {
  return (
    <>
      <div className="principal-content">
        <div className="principal-form">
          <h1 className="principal-title">Administra tu perfil</h1>
          <form action="">
            <h3 className="principal-section-title">
              Vea y actualize su información personal
            </h3>

            <div className="principal-patient-details">
              <div className="principal-input-group">
                <div>
                  <label htmlFor="" className="principal-label-first-name">
                    Nombre:{" "}
                  </label>
                  <input type="text" required />
                </div>
                <div>
                  <label htmlFor="" className="principal-label-father-last-name">
                    Apellido Paterno:{" "}
                  </label>
                  <input type="text" required />
                </div>

                <div>
                  <label htmlFor="" className="principal-label-mother-last-name">
                    Apellido Materno:{" "}
                  </label>
                  <input type="text" required />
                </div>
              </div>

              <div className="principal-input-group">
                <div>
                  <label htmlFor="" className="principal-label-phone-number">
                    Número telefónico:{" "}
                  </label>
                  <input id="phone" type="number" required />
                </div>

                <div>
                  <label htmlFor="" className="principal-label-email">
                    Correo electrónico:{" "}
                  </label>
                  <input type="text" required />
                </div>

                <div>
                  <label htmlFor="" className="principal-label-password">
                    Contraseña:{" "}
                  </label>
                  <input type="password" maxLength={10} required />
                </div>
              </div>
            </div>

            <div className="btn-update-container">
              <button className="btn-update">Actualizar mi perfil</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Principal;
