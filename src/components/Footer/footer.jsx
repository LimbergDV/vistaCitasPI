import React from "react";
import "../styles/footer.css";
import img from "../images/WhatsApp Image 2024-06-12 at 06.38-Photoroom.jpg"

function Footer(){
    return(
        <>
   <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Ubicación:</h3>
          <p>Diag. Ramon Larrainzar 65 A,<br />
             San Ramon, 29265 San Cristóbal<br />
             de las Casas, Chiapas.</p>
        </div>
        <div className="footer-section">
          <h3>Horario de servicio:</h3>
          <p>Lunes a Sábado<br />
             7:30 am - 2:00 pm<br />
             4:30 pm - 7:00 pm</p>
        </div>
        <div className="footer-section">
          <h3>Teléfono:</h3>
          <p>967 631 7266</p>
        </div>
        <div className="footer-logo">
          <img src={img}/>
        </div>
      </div>
      <p className="footer-bottom-text">LABORATORIO CLÍNICO AMBER</p>
    </footer>
        </>
    )
}

export default Footer