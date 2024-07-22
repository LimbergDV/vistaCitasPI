import React from "react";
import { useNavigate } from "react-router-dom";
import '../styles/login.css';
import { MdMail } from "react-icons/md";
import { FaLock } from "react-icons/fa";

function Login (){

        const navigate = useNavigate();
      
        const handleButtonRegister = () => {
          navigate("/registrate");
        };

    return(
        <>
  <div className="main-content">
    <div className="login-form">
      <form action="">
        <h1>¿Ya estás registrado?</h1>
        <h2>Si ya tienes una cuenta con <br />nosotros, por favor, inicie sesión.</h2>

        <div className="input-email">
          <label htmlFor="">Correo Electrónico:</label>
          <input type="text" placeholder="Ingrese su correo electrónico" required />
          <MdMail className="icon" />
        </div>

        <div className="input-password">
          <label htmlFor="">Contraseña:</label>
          <br />
          <input type="password" placeholder="Ingrese su contraseña" required />
          <FaLock className="icon-lock" />
        </div>

        <button type="submit">Ingresar</button>
        <br />
        <br />

        <div className="register-option">
          <p>¿No tienes una cuenta en nuestro sitio web? <a href="" onClick={handleButtonRegister}>Regístrate</a></p>
        </div>

        {/*<div className="admin-option">
            <p>¿Eres administrador? <br /><a href="">Inicia Sesión Aquí</a></p>
          </div>

          <div className="receptionist-option">
            <p>¿Eres recepcionista? <br /><a href="#">Inicia Sesión Aquí</a></p>
          </div>
        */}
      </form>
    </div>
  </div>
</>

    )
}

export default Login