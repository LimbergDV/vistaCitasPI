import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageCitaUser from "./components/Pages/pageCitaUser.jsx";
import PageCitaRecepcionista from "./components/Pages/pageCitaRecepcionista.jsx";
import PageCitasAgendadasRec from "./components/Pages/pageCitasAgendadas.jsx";
import PageCatalogoServicios from "./components/Pages/pageCatalogoServicios.jsx";
import PageQuimicaClinica from "./components/Pages/pageQuimicaClinica.jsx";
import PageBiologiaMolecular from "./components/Pages/pageBiologiaMolecular.jsx";
import PageAlergenos from "./components/Pages/pageAlergenos.jsx";
import PageMicrobiologiaMedica from "./components/Pages/pageMicrobiologiaMedica.jsx";
import PageMicrobiologiaSanitaria from "./components/Pages/pageMicrobiologiaSanitaria.jsx";
import PageCitologia from "./components/Pages/pageCitologia.jsx";
import PageCargarResultados from "./components/Pages/pageCargarResultados.jsx";
import PageHistorialResultados from "./components/Pages/pageHistorialResultados.jsx";
import PageCotizacionUser from "./components/Pages/pageCotizacionUser.jsx";
import PageCotizacionRecepcionista from "./components/Pages/pageCotizacionRecepcionista.jsx";
import PageHistorialPagosRep from "./components/Pages/pageHistorialPagosRep.jsx";
import PageCobroRecepcionista from "./components/Pages/pageCobroRecepcionista.jsx";
import PageAnalisis from "./components/Pages/pageAnalisis.jsx";
import Login from "./components/Pages/login.jsx";
import RegisterUser from "./components/Pages/registerUser.jsx";
import PageAdministrarPerfil from "./components/Pages/pageAdminstrarPerfil.jsx";
import LoginAdmin from "./components/Pages/loginAdmin.jsx";
import LoginRecepcionista from "./components/Pages/loginRecepcionista.jsx";
import ProtectedUser from "./components/utils/ProtectedUser.jsx";
import ProtectedAdmin from "./components/utils/ProtectedAdmin.jsx";
import ProtectedRecep from "./components/utils/ProtectedRecep.jsx";
import PageInicio from "./components/Pages/pageInicio.jsx";

export default function App() {
  const [isLoggedAdmin, setLoggedAdmin] = useState(
    localStorage.getItem("isLoggedAdmin") === "true"
  );
  const [isLoggedRecep, setLoggedRecep] = useState(
    localStorage.getItem("isLoggedRecep") === "true"
  );
  const [isLoggedUser, setLoggedUser] = useState(
    localStorage.getItem("isLoggedUser") === "true"
  );

  useEffect(() => {
    localStorage.setItem("isLoggedAdmin", isLoggedAdmin);
    localStorage.setItem("isLoggedRecep", isLoggedRecep);
    localStorage.setItem("isLoggedUser", isLoggedUser);
  }, [isLoggedAdmin, isLoggedRecep, isLoggedUser]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <PageInicio></PageInicio>,
    },
    {
      path: "/consulta",
      element: <ProtectedUser element={PageCitaUser} isAuthenticated={isLoggedUser} />,
    },
    {
      path: "/consultaRecepcionista",
      element: <ProtectedRecep element={PageCitaRecepcionista} isAuthenticated={isLoggedRecep} />,
    },
    {
      path: "/citasAgendadasR",
      element: <ProtectedRecep element={PageCitasAgendadasRec} isAuthenticated={isLoggedRecep} />,
    },
    {
      path: "/citasAgendadasA",
      element: <ProtectedAdmin element={PageCitasAgendadasRec} isAuthenticated={isLoggedAdmin} />,
    },
    {
      path: "/catalogo",
      element: <ProtectedUser element={PageCatalogoServicios} isAuthenticated={isLoggedUser} />,
    },
    {
      path: "/catalogoA",
      element: <ProtectedAdmin element={PageCatalogoServicios} isAuthenticated={isLoggedAdmin} />,
    },
    {
      path: "/catalogoR",
      element: <ProtectedRecep element={PageCatalogoServicios} isAuthenticated={isLoggedRecep} />,
    },
    {
      path: "/quimicaClinica",
      element: <ProtectedUser element={PageQuimicaClinica} isAuthenticated={isLoggedUser} />,
    },
    {
      path: "/biologiaMolecular",
      element: <ProtectedUser element={PageBiologiaMolecular} isAuthenticated={isLoggedUser} />,
    },
    {
      path: "/alergenos",
      element: <ProtectedUser element={PageAlergenos} isAuthenticated={isLoggedUser} />,
    },
    {
      path: "/microbiologiaMedica",
      element: <ProtectedUser element={PageMicrobiologiaMedica} isAuthenticated={isLoggedUser} />,
    },
    {
      path: "/microbiologiaSanitaria",
      element: <ProtectedUser element={PageMicrobiologiaSanitaria} isAuthenticated={isLoggedUser} />,
    },
    {
      path: "/citologia&histopatologia",
      element: <ProtectedUser element={PageCitologia} isAuthenticated={isLoggedUser} />,
    },
    {
      path: "/quimicaClinicaR",
      element: <ProtectedRecep element={PageQuimicaClinica} isAuthenticated={isLoggedRecep} />,
    },
    {
      path: "/biologiaMolecularR",
      element: <ProtectedRecep element={PageBiologiaMolecular} isAuthenticated={isLoggedRecep} />,
    },
    {
      path: "/alergenosR",
      element: <ProtectedRecep element={PageAlergenos} isAuthenticated={isLoggedRecep} />,
    },
    {
      path: "/microbiologiaMedicaR",
      element: <ProtectedRecep element={PageMicrobiologiaMedica} isAuthenticated={isLoggedRecep} />,
    },
    {
      path: "/microbiologiaSanitariaR",
      element: <ProtectedRecep element={PageMicrobiologiaSanitaria} isAuthenticated={isLoggedRecep} />,
    },
    {
      path: "/citologia&histopatologiaR",
      element: <ProtectedRecep element={PageCitologia} isAuthenticated={isLoggedRecep} />,
    },
    {
      path: "/quimicaClinicaA",
      element: <ProtectedAdmin element={PageQuimicaClinica} isAuthenticated={isLoggedAdmin} />,
    },
    {
      path: "/biologiaMolecularA",
      element: <ProtectedAdmin element={PageBiologiaMolecular} isAuthenticated={isLoggedAdmin} />,
    },
    {
      path: "/alergenosA",
      element: <ProtectedAdmin element={PageAlergenos} isAuthenticated={isLoggedAdmin} />,
    },
    {
      path: "/microbiologiaMedicaA",
      element: <ProtectedAdmin element={PageMicrobiologiaMedica} isAuthenticated={isLoggedAdmin} />,
    },
    {
      path: "/microbiologiaSanitariaA",
      element: <ProtectedAdmin element={PageMicrobiologiaSanitaria} isAuthenticated={isLoggedAdmin} />,
    },
    {
      path: "/citologia&histopatologiaA",
      element: <ProtectedAdmin element={PageCitologia} isAuthenticated={isLoggedAdmin} />,
    },
    {
      path: "/cargarResultados",
      element: <ProtectedAdmin element={PageCargarResultados} isAuthenticated={isLoggedAdmin} />,
    },
    {
      path: "/historialResultados",
      element: <ProtectedUser element={PageHistorialResultados} isAuthenticated={isLoggedUser} />,
    },
    {
      path: "/cotizacion",
      element: <ProtectedUser element={PageCotizacionUser} isAuthenticated={isLoggedUser} />,
    },
    {
      path: "/cotizacionRecepcionista",
      element: <ProtectedRecep element={PageCotizacionRecepcionista} isAuthenticated={isLoggedRecep} />,
    },
    {
      path: "/historialPagosA",
      element: <ProtectedAdmin element={PageHistorialPagosRep} isAuthenticated={isLoggedAdmin} />,
    },
    {
      path: "/historialPagosR",
      element: <ProtectedRecep element={PageHistorialPagosRep} isAuthenticated={isLoggedRecep} />,
    },
    {
      path: "/generarPago",
      element: <ProtectedRecep element={PageCobroRecepcionista} isAuthenticated={isLoggedRecep} />,
    },
    {
      path: "/analisis",
      element: <ProtectedAdmin element={PageAnalisis} isAuthenticated={isLoggedAdmin} />,
    },
    {
      path: "/login",
      element: <Login authen={setLoggedUser} />,
    },
    {
      path: "/registrate",
      element: <RegisterUser/>,
    },
    {
      path: "/administrarPerfil",
      element: <ProtectedUser element={PageAdministrarPerfil} isAuthenticated={isLoggedUser} />,
    },
    {
      path: "/administrarPerfilA",
      element: <ProtectedAdmin element={PageAdministrarPerfil} isAuthenticated={isLoggedUser} />,
    },
    {
      path: "/administrarPerfilR",
      element: <ProtectedRecep element={PageAdministrarPerfil} isAuthenticated={isLoggedUser} />,
    },
    {
      path: "/loginA",
      element: <LoginAdmin authen={setLoggedAdmin}/>,
    },
    {
      path: "/loginR",
      element: <LoginRecepcionista authen={setLoggedRecep}/>,
    },
  ]);

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}
