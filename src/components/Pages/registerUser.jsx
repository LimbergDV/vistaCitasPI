import React from "react";
import '../styles/registerUser.css';
import { useNavigate } from "react-router-dom";

function RegisterUser (){
    const navigate = useNavigate();

    const handleClickLogin = () =>{
        navigate("/login");
    }

    return(
        <>
        <div className="mainContent">
        <div className="formRegister">
            <form action="">
            <h2>Si ya eres usuario ingresa <br /> a tu cuenta. <br />¿No tienes cuenta? ¡Crea una!</h2>

            <h3 className="infoPersonal">Información personal</h3>

            <div className="inputName">
            <label htmlFor="">Nombre: </label>
            <input type="text" placeholder="Ingrese su nombre" required/>
            </div>

            <div className="inputApePat">
            <label htmlFor="">Apellido Paterno: </label>
            <input type="text" placeholder="Ingrese su apellido paterno" required/>
            </div>

            <div className="inputApeMat">
            <label htmlFor="">Apellido Materno: </label>
            <input type="text" placeholder="Ingrese su apellido materno" required/>
            </div>

            <div className="inputTelefono">
            <label htmlFor=""> Teléfono: </label>
            <input type="text" placeholder="Ingrese su teléfono" maxLength={10} required/>
            </div>

            <h3 className="infoSesion">Información de iniciar sesión </h3>

            <div className="inputMail">
            <label htmlFor="">Correo Electrónico: </label>
            <input type="text" placeholder="Ingrese su correo electrónico" required/>
            </div>

            <div className="inputPassword">
            <label htmlFor="">Contraseña: </label>
            <input type="password" placeholder="Ingrese su contraseña" required/>
            </div>

            <div className="inputPassConfirm">
            <label htmlFor="">Confirmar Contraseña: </label>
            <input type="password" placeholder="Confirme su contraseña" required/>
            </div>

            <button type="submit">Registrarme</button>

            <div className="registerOpcion">
                    <p>¿Ya tienes una cuenta en nuestro sitio web? <br /> <a href="" onClick={handleClickLogin}>Inicia Sesión</a></p>
                </div>


                </form>
            </div>
        </div>
        </>
    )



}

export default RegisterUser