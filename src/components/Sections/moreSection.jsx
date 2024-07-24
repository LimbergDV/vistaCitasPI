import React from 'react';
import '../styles/moreSection.css'; 
import imgregister from "../images/registrarse.png"

function MoreSection() {
    return (
        <section className="more-section" id="more-section">
            <div className="more-container">
                <article className="more-texts">
                    <h1 className="more-subtitle">¡Registrate en nuestro sitio!</h1>
                    <p className="more-paragraph">¿Quieres hacer una cita de un análisis clínico y tener en tu cuenta el historial de tus análisis? <br /> ó ¿Simplemente tener tu propio perfil?</p>
                    <a href="" className="more-cta">Registrate</a>
                </article>
                <figure className="more-figure">
                    <img src={imgregister} className="more-img" alt="" />
                </figure>
            </div>
        </section>
    );
}

export default MoreSection;
