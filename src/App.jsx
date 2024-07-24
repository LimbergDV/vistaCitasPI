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

export default function App() {
  const [isAuthenticated, setAuthen] = useState(
    localStorage.getItem("isAuthenticated") === "true"
  );

  useEffect(() => {
    localStorage.setItem("isAuthenticated", isAuthenticated);
  }, [isAuthenticated]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProtectedUser element={PageCatalogoServicios} isAuthenticated={isAuthenticated} />,
    },
    {
      path: "/consulta",
      element: <ProtectedUser element={PageCitaUser} isAuthenticated={isAuthenticated} />,
    },
    {
      path: "/consultaRecepcionista",
      element: <ProtectedRecep element={PageCitaRecepcionista} isAuthenticated={isAuthenticated} />,
    },
    {
      path: "/citasAgendadasR",
      element: <ProtectedRecep element={PageCitasAgendadasRec} isAuthenticated={isAuthenticated} />,
    },
    {
      path: "/citasAgendadasA",
      element: <ProtectedAdmin element={PageCitasAgendadasRec} isAuthenticated={isAuthenticated} />,
    },
    {
      path: "/catalogo",
      element: <ProtectedUser element={PageCatalogoServicios} isAuthenticated={isAuthenticated} />,
    },
    {
      path: "/catalogoA",
      element: <ProtectedAdmin element={PageCatalogoServicios} isAuthenticated={isAuthenticated} />,
    },
    {
      path: "/catalogoR",
      element: <ProtectedRecep element={PageCatalogoServicios} isAuthenticated={isAuthenticated} />,
    },
    {
      path: "/quimicaClinica",
      element: <ProtectedUser element={PageQuimicaClinica} isAuthenticated={isAuthenticated} />,
    },
    {
      path: "/biologiaMolecular",
      element: <ProtectedUser element={PageBiologiaMolecular} isAuthenticated={isAuthenticated} />,
    },
    {
      path: "/alergenos",
      element: <ProtectedUser element={PageAlergenos} isAuthenticated={isAuthenticated} />,
    },
    {
      path: "/microbiologiaMedica",
      element: <ProtectedUser element={PageMicrobiologiaMedica} isAuthenticated={isAuthenticated} />,
    },
    {
      path: "/microbiologiaSanitaria",
      element: <ProtectedUser element={PageMicrobiologiaSanitaria} isAuthenticated={isAuthenticated} />,
    },
    {
      path: "/citologia&histopatologia",
      element: <ProtectedUser element={PageCitologia} isAuthenticated={isAuthenticated} />,
    },
    {
      path: "/quimicaClinicaR",
      element: <ProtectedRecep element={PageQuimicaClinica} isAuthenticated={isAuthenticated} />,
    },
    {
      path: "/biologiaMolecularR",
      element: <ProtectedRecep element={PageBiologiaMolecular} isAuthenticated={isAuthenticated} />,
    },
    {
      path: "/alergenosR",
      element: <ProtectedRecep element={PageAlergenos} isAuthenticated={isAuthenticated} />,
    },
    {
      path: "/microbiologiaMedicaR",
      element: <ProtectedRecep element={PageMicrobiologiaMedica} isAuthenticated={isAuthenticated} />,
    },
    {
      path: "/microbiologiaSanitariaR",
      element: <ProtectedRecep element={PageMicrobiologiaSanitaria} isAuthenticated={isAuthenticated} />,
    },
    {
      path: "/citologia&histopatologiaR",
      element: <ProtectedRecep element={PageCitologia} isAuthenticated={isAuthenticated} />,
    },
    {
      path: "/quimicaClinicaA",
      element: <ProtectedAdmin element={PageQuimicaClinica} isAuthenticated={isAuthenticated} />,
    },
    {
      path: "/biologiaMolecularA",
      element: <ProtectedAdmin element={PageBiologiaMolecular} isAuthenticated={isAuthenticated} />,
    },
    {
      path: "/alergenosA",
      element: <ProtectedAdmin element={PageAlergenos} isAuthenticated={isAuthenticated} />,
    },
    {
      path: "/microbiologiaMedicaA",
      element: <ProtectedAdmin element={PageMicrobiologiaMedica} isAuthenticated={isAuthenticated} />,
    },
    {
      path: "/microbiologiaSanitariaA",
      element: <ProtectedAdmin element={PageMicrobiologiaSanitaria} isAuthenticated={isAuthenticated} />,
    },
    {
      path: "/citologia&histopatologiaA",
      element: <ProtectedAdmin element={PageCitologia} isAuthenticated={isAuthenticated} />,
    },
    {
      path: "/cargarResultados",
      element: <ProtectedAdmin element={PageCargarResultados} isAuthenticated={isAuthenticated} />,
    },
    {
      path: "/historialResultados",
      element: <ProtectedUser element={PageHistorialResultados} isAuthenticated={isAuthenticated} />,
    },
    {
      path: "/cotizacion",
      element: <ProtectedUser element={PageCotizacionUser} isAuthenticated={isAuthenticated} />,
    },
    {
      path: "/cotizacionRecepcionista",
      element: <ProtectedRecep element={PageCotizacionRecepcionista} isAuthenticated={isAuthenticated} />,
    },
    {
      path: "/historialPagosA",
      element: <ProtectedAdmin element={PageHistorialPagosRep} isAuthenticated={isAuthenticated} />,
    },
    {
      path: "/historialPagosR",
      element: <ProtectedRecep element={PageHistorialPagosRep} isAuthenticated={isAuthenticated} />,
    },
    {
      path: "/generarPago",
      element: <ProtectedRecep element={PageCobroRecepcionista} isAuthenticated={isAuthenticated} />,
    },
    {
      path: "/analisis",
      element: <ProtectedAdmin element={PageAnalisis} isAuthenticated={isAuthenticated} />,
    },
    {
      path: "/login",
      element: <Login authen={setAuthen} />,
    },
    {
      path: "/registrate",
      element: <RegisterUser />,
    },
    {
      path: "/administrarPerfil",
      element: <ProtectedUser element={PageAdministrarPerfil} isAuthenticated={isAuthenticated} />,
    },
    {
      path: "/loginA",
      element: <LoginAdmin />,
    },
    {
      path: "/loginR",
      element: <LoginRecepcionista />,
    },
  ]);

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}