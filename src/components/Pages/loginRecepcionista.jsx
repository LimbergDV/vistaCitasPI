import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";
import { MdMail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { useState } from "react";
import Swal from "sweetalert2";

const url = import.meta.env.VITE_URL_BASE;

function Login() {
  const navigate = useNavigate();

  const [formLogin, setFormLogin] = useState({
    correo_electronico: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (["correo_electronico", "password"].includes(name)) {
      setFormLogin((prevState) => ({ ...prevState, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`${url}/users/login/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formLogin),
    });

    if (response.status == 401) {
      Swal.fire({
        position: "center",
        icon: "info",
        title: "Tus credenciales de acceso no concuerdan",
        text: "Revisa tu usuario y contraseña",
        showConfirmButton: true,
      });
    } else {
      const res = await response.json();

      if (res.id_rol == 2) {
        if (res.access) {
          localStorage.setItem("token", res.token);
          localStorage.setItem("id_usuario", res.id_usuario);
          localStorage.setItem("id_rol", res.id_rol);
        }
      } else {
        Swal.fire({
          position: "center",
          icon: "info",
          title: "Usted no es recepcionista",
          text: "Revisa tu usuario y contraseña",
          showConfirmButton: true,
        });
      }
    }
  };

  const handleButtonAdmin = () => {
    navigate("/loginA");
  };

  return (
    <>
      <div className="main-content">
        <div className="login-form">
          <form onSubmit={handleSubmit}>
            <h1>¡Bienvenido!</h1>
            <h2>Por favor, inicie sesión.</h2>

            <div className="input-email">
              <label htmlFor="">Correo Electrónico:</label>
              <input
                name="correo_electronico"
                type="text"
                placeholder="Ingrese su correo electrónico"
                required
                value={formLogin.correo_electronico}
                onChange={handleChange}
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
                name="password"
                value={formLogin.password}
                onChange={handleChange}
              />
              <FaLock className="icon-lock" />
            </div>

            <button type="submit">Ingresar</button>
            <br />
            <br />

            <div className="admin-option">
              <button type="button" onClick={handleButtonAdmin}>
                Administrador
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
