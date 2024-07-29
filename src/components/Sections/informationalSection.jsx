//Molécula
import React from "react";
import '../styles/informationalSection.css'
import imglab from "../images/laboratorista.png"
import imgprice from "../images/oferta.png"
import imgatencion from "../images/atencion.png"

function InformationalSection (){
    return(
        <>
        <section className="container_section_main" id="section_main">
      <h2 className="subtitle">¿Por qué elegirnos?</h2>
      <div className="information_articles">
        <article className="subinformation_article">
          <img src={imgprice} className="learn__img" alt="" />
          <h2 className="subinformation_title">Precios accesibles</h2>
          <p className="paragraph">Ofrecemos los mejores precios del mercado sin comprometer la calidad de nuestros análisis clínicos, para cuidarte siempre.</p>
        </article>
        <article className="subinformation_article">
          <img src={imglab} className="learn__img" alt="" />
          <h2 className="subinformation_title">¡Los mejores laboristas clínicos!</h2>
          <p className="paragraph"> Nuestro equipo está compuesto por profesionales altamente calificados y con amplia experiencia en el campo de la laboratoria clínica.</p>
        </article>
        <article className="subinformation_article">
          <img src={imgatencion} className="learn__img" alt="" />
          <h2 className="subinformation_title">Atención de calidad</h2>
          <p className="paragraph">Brindamos una atención en la que cada cliente se sienta cómodo y bien atendido desde el primer contacto hasta la entrega de resultados.</p>
        </article>
      </div>
    </section>
        </>
    )
}

export default InformationalSection