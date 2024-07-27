import React from "react";
import Title from "../H'S/title";
import StickyHeadTable from "../Tables/usersCitas";
import Footer from "../Footer/footer";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";
import NavBar from "../NavBar/navBar";
import NavBarInvited from "../NavBar/navBarInvited";
import NavBarRecepcionista from "../NavBar/navBarRecepcionista";
import NavBarAdmin from "../NavBar/navBarAdmin";


function PageCitasAgendadasRec() {

  const id_rol = localStorage.getItem("id_rol")

  useEffect(() => {
    if (parseInt(localStorage.getItem("id_rol")) == 1) {
      return <Navigate to="/loginA" />;
    }
  });

  return (
    <>
      {id_rol == 1? <NavBar/> : id_rol == 2? <NavBarRecepcionista/> : id_rol == 3? <NavBarAdmin /> : <NavBarInvited/>}
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
