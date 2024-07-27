import React from "react";
import "../styles/formAdministrarPerfil.css";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

const url = import.meta.env.VITE_URL_BASE;
const id_usuario = localStorage.getItem("id_usuario");
const token = localStorage.getItem("token");

function Principal() {
  const [formUserData, setUserData] = useState({
    nombre: "",
    apellidoP: "",
    apellidoM: "",
    telefono: "",
    correo_electronico: "",
  });

  useEffect(() => {
    const getDataUser = async () => {
      const response = await fetch(`${url}/users/profile/${id_usuario}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setUserData({
        nombre: data[0].nombre,
        apellidoP: data[0].apellidoP,
        apellidoM: data[0].apellidoM,
        telefono: data[0].telefono,
        correo_electronico: data[0].correo_electronico,
      });
    };

    getDataUser();
  }, [formUserData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (
      [
        "nombre",
        "apellidoP",
        "apellidoM",
        "correo_electronico",
        "telefono",
      ].includes(name)
    ) {
      setUserData((prevState) => ({ ...prevState, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`${url}/users/update/${id_usuario}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formUserData),
    });
    if (response.ok) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "¡Guardado Correctamente!",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "¡Ocurrió un error inesperado!",
        showConfirmButton: true,
      });
    }
  };

  const updatePassword = async () => {
    const { value: formValues } = await Swal.fire({
      title: "Actualice su contraseña",
      html: `
        <label for="password">Ingrese su nueva contraseña:</label>
        <input id="password" class="swal2-input" type="password" required> <br> <br>
        <label for="passwordConfirm">Confirme la contraseña:</label>
        <input id="passwordConfirm" class="swal2-input" type="password" required>
      `,
      focusConfirm: false,
      preConfirm: () => {
        return [
          document.getElementById("password").value,
          document.getElementById("passwordConfirm").value,
        ];
      },
    });

    if (formValues[0] === "") {
      Swal.fire({
        position: "center",
        icon: "info",
        title: "¡Llene los campos de contraseñas!",
        showConfirmButton: true,
      });
    } else if (formValues[0] === formValues[1]) {
      const password = formValues[0];

      Swal.fire({
        title: "¿Quieres guardar los cambios?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Save",
        denyButtonText: `Don't save`,
      }).then(async (result) => {
        if (result.isConfirmed) {
          const response = await fetch(
            `${url}/users/updatePass/${id_usuario}`,
            {
              method: "PUT",
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                password: password,
              }),
            }
          );
          console.log(response);
          if (response.ok) {
            Swal.fire("Guardado!", "", "success");
          } else {
            Swal.fire("Error!", "", "error");
          }
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
    } else {
      Swal.fire({
        position: "center",
        icon: "info",
        title: "¡Las contraseñas no coinciden!",
        showConfirmButton: true,
      });
    }
  };

  return (
    <>
      <div className="principal-content">
        <div className="principal-form">
          <h1 className="principal-title">Administra tu perfil</h1>
          <form onSubmit={handleSubmit}>
            <h3 className="principal-section-title">
              Vea y actualize su información personal
            </h3>

            <div className="principal-patient-details">
              <div className="principal-input-group">
                <div>
                  <label
                    htmlFor="nombre"
                    className="principal-label-first-name"
                  >
                    Nombre:{" "}
                  </label>
                  <input
                    type="text"
                    required
                    name="nombre"
                    value={formUserData.nombre}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label
                    htmlFor="apellidoP"
                    className="principal-label-father-last-name"
                  >
                    Apellido Paterno:{" "}
                  </label>
                  <input
                    type="text"
                    required
                    name="apellidoP"
                    value={formUserData.apellidoP}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label
                    htmlFor="apellidoM"
                    className="principal-label-mother-last-name"
                  >
                    Apellido Materno:{" "}
                  </label>
                  <input
                    type="text"
                    required
                    name="apellidoM"
                    value={formUserData.apellidoM}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="principal-input-group">
                <div>
                  <label
                    htmlFor="telefono"
                    className="principal-label-phone-number"
                  >
                    Número telefónico:{" "}
                  </label>
                  <input
                    id="phone"
                    type="text"
                    required
                    name="telefono"
                    value={formUserData.telefono}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label
                    htmlFor="correo_electronico"
                    className="principal-label-email"
                  >
                    Correo electrónico:{" "}
                  </label>
                  <input
                    type="text"
                    required
                    name="correo_electronico"
                    value={formUserData.correo_electronico}
                    onChange={handleChange}
                  />
                </div>
                <div></div>
              </div>
            </div>
            <div></div>
            <div className="btn-update-container">
              <button className="btn-update" type="submit">
                Actualizar mi perfil
              </button>
              <button className="changePass" onClick={() => updatePassword()}>
            Actualizar contraseña
          </button>
            </div>
          </form>
          
        </div>
      </div>
    </>
  );
}

export default Principal;
