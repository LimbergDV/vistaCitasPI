import React from "react";
import "../styles/registerUser.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";

const url = import.meta.env.VITE_URL_BASE;

function RegisterUser() {
  const navigate = useNavigate();

  const [formRegister, setFormRegister] = useState({
    nombre: "",
    apellidoP: "",
    apellidoM: "",
    correo_electronico: "",
    telefono: "",
    password: "",
  });

  const [passwordConfirm, setPasswordConfirm] = useState({
    passwordConfirm: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (
      [
        "nombre",
        "apellidoP",
        "apellidoM",
        "correo_electronico",
        "telefono",
        "password",
      ].includes(name)
    ) {
      setFormRegister((prevState) => ({ ...prevState, [name]: value }));
    } else if (["passwordConfirm"].includes(name)) {
      setPasswordConfirm((prevState) => ({ ...prevState, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formRegister.password === passwordConfirm.passwordConfirm) {
      const response = await fetch(`${url}/users/addUser/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formRegister,
          id_rol: 1,
        }),
      });

      if (response.ok) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "¡Registro exitoso!",
          showConfirmButton: true,
        });
      } else {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Ocurrió un error inesperado",
          showConfirmButton: true,
        });
      }
    } else {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Las contraseñas no coinciden",
        showConfirmButton: true,
      });
    }
  };

  const handleClickLogin = () => {
    navigate("/login");
  };

  return (
    <>
      <div className="mainContent">
        <div className="formRegister">
          <form onSubmit={handleSubmit}>
            <h2>
              Si ya eres usuario ingresa <br /> a tu cuenta. <br />
              ¿No tienes cuenta? ¡Crea una!
            </h2>

            <h3 className="infoPersonal">Información personal</h3>

            <div className="inputName">
              <label htmlFor="nombre">Nombre: </label>
              <input
                name="nombre"
                type="text"
                placeholder="Ingrese su nombre"
                required
                value={formRegister.nombre}
                onChange={handleChange}
              />
            </div>

            <div className="inputApePat">
              <label htmlFor="apellidoP">Apellido Paterno: </label>
              <input
                name="apellidoP"
                type="text"
                placeholder="Ingrese su apellido paterno"
                required
                value={formRegister.apellidoP}
                onChange={handleChange}
              />
            </div>

            <div className="inputApeMat">
              <label htmlFor="apellidoM">Apellido Materno: </label>
              <input
                name="apellidoM"
                type="text"
                placeholder="Ingrese su apellido materno"
                required
                value={formRegister.apellidoM}
                onChange={handleChange}
              />
            </div>

            <div className="inputTelefono">
              <label htmlFor="telefono"> Teléfono: </label>
              <input
                name="telefono"
                type="text"
                placeholder="Ingrese su teléfono"
                maxLength={10}
                required
                value={formRegister.telefono}
                onChange={handleChange}
              />
            </div>

            <h3 className="infoSesion">Información de iniciar sesión </h3>

            <div className="inputMail">
              <label htmlFor="correo_electronico">Correo Electrónico: </label>
              <input
                name="correo_electronico"
                type="text"
                placeholder="Ingrese su correo electrónico"
                required
                value={formRegister.correo_electronico}
                onChange={handleChange}
              />
            </div>

            <div className="inputPassword">
              <label htmlFor="password">Contraseña: </label>
              <input
                name="password"
                type="password"
                placeholder="Ingrese su contraseña"
                required
                value={formRegister.password}
                onChange={handleChange}
              />
            </div>

            <div className="inputPassConfirm">
              <label htmlFor="passwordConfirm">Confirmar Contraseña: </label>
              <input
                name="passwordConfirm"
                type="password"
                placeholder="Confirme su contraseña"
                required
                value={passwordConfirm.passwordConfirm}
                onChange={handleChange}
              />
            </div>

            <button type="submit">Registrarme</button>

            <div className="registerOpcion">
              <p>
                ¿Ya tienes una cuenta en nuestro sitio web? <br />{" "}
                <a href="" onClick={handleClickLogin}>
                  Inicia Sesión
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default RegisterUser;
