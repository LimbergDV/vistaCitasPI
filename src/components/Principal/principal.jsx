import React from "react";
import ResponsiveAppBar from "../NavBar/navBar";
import '../styles/principal.css'
import { FaCircleInfo } from "react-icons/fa6";

function Principal(){
    return(
        <>
        <ResponsiveAppBar/>
        <div className="principalContent">
            <div className="formLogin">
                <form action="">
                    <h1 className="textPrincipal">Programa una cita</h1>
                    <h3 className="secondText"><FaCircleInfo className="infoIcon" /> Sobre el paciente</h3>
                    
                    <div className="inputsPrincipal">
                        
                    <label htmlFor="" className="labelName">Nombre: </label>
                    <input type="text" placeholder="Ingrese su nombre" required/>

                    <label htmlFor="" className="lastName">Apellido Paterno: </label>
                    <input type="text" placeholder="Ingrese su apellido paterno" required/>

                    <label htmlFor="" className="lastName2">Apellido Materno: </label>
                    <input type="text" placeholder="Ingrese su apellido materno" required/>
                    </div>

                    <div className="inputsSecundary">
                    <label htmlFor="" className="birthDate">Fecha de nacimiento: </label>
                    <input type="date" placeholder="Ingrese su fecha de nacimiento" required/>

                    <label htmlFor="" className="gender">Género: </label>
                    <select> <option value="masculino">Masculino</option>  <option value="femenino">Femenino</option> </select>

                    <label htmlFor="" className="phoneNumber">Teléfono: </label>
                    <input type="text" placeholder="Ingrese su teléfono" maxLength={10} required/>
                    </div>

                    <h3 className="thirdText"><FaCircleInfo className="infoIcon" />Sobre la dirección</h3>

                    <div className="inputsTertiary">
                    <label htmlFor="" className="street">Calle: </label>
                    <input type="text" placeholder="Ingrese su calle" required/>

                    <label htmlFor="" className="numberHouse">Número: </label>
                    <input type="number" placeholder="Ingrese número de su casa" required/>

                    <label htmlFor="" className="postalCode">Código Postal: </label>
                    <input type="text" placeholder="Ingrese su calle" required/>

                    <label htmlFor="" className="neighborhood">Colonia: </label>
                    <input type="text" placeholder="Ingrese su calle" required/>
                    


                    </div>

                </form>
            </div>
        </div>
            



        </>
    )
}

export default Principal