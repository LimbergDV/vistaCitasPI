import React from "react";
import NavBarRecepcionista from "../NavBar/navBarRecepcionista";
import Title from "../H'S/title";
import StickyHeadTable from "../Tables/usersCitas";
import Footer from "../Footer/footer";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";

function PageCitasAgendadasRec() {
  useEffect(() => {
    if (parseInt(localStorage.getItem("id_rol")) == 1) {
      return <Navigate to="/loginA" />;
    }
  });

  return (
    <>
      <NavBarRecepcionista />
      <br /> <br />
      <Title title="Citas Agendadas" />
      <br />
      <StickyHeadTable />
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
      <Footer />
    </>
  );
}

export default PageCitasAgendadasRec;
