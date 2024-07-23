import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";
import { MdMail } from "react-icons/md";
import { FaLock } from "react-icons/fa";

function Login() {
  const navigate = useNavigate();

  const handleButtonRecepcionista = () => {
    navigate("/loginR");
  };

  return (
    <>
      <div className="main-content">
        <div className="login-form">
          <form action="">
            <h1>¡Bienvenido!</h1>
            <h2>
              Por favor, inicie sesión.
            </h2>

            <div className="input-email">
              <label htmlFor="">Correo Electrónico:</label>
              <input
                type="text"
                placeholder="Ingrese su correo electrónico"
                required
              />
              <MdMail className="icon" />
            </div>

            <div className="input-password">
              <label htmlFor="">Contraseña:</label>
              <br />
              <input
                type="password"
                placeholder="Ingrese su contraseña"
                required
              />
              <FaLock className="icon-lock" />
            </div>

            <button type="submit">Ingresar</button>
            <br />
            <br />

            <div className="admin-option">
             <button type="button" onClick={handleButtonRecepcionista}>Recepcionista</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
