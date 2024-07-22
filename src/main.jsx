import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import PageCitaUser from './components/Pages/pageCitaUser.jsx'
import PageCitaRecepcionista from './components/Pages/pageCitaRecepcionista.jsx'
import PageCitasAgendadasRec from './components/Pages/pageCitasAgendadas.jsx'
import PageCatalogoServicios from './components/Pages/pageCatalogoServicios.jsx'
import PageEstudios1 from './components/Pages/pageQuimicaClinica.jsx'
import PageQuimicaClinica from './components/Pages/pageQuimicaClinica.jsx'
import PageBiologiaMolecular from './components/Pages/pageBiologiaMolecular.jsx'
import PageAlergenos from './components/Pages/pageAlergenos.jsx'
import PageMicrobiologiaMedica from './components/Pages/pageMicrobiologiaMedica.jsx'
import PageMicrobiologiaSanitaria from './components/Pages/pageMicrobiologiaSanitaria.jsx'
import PageCitologia from './components/Pages/pageCitologia.jsx'
import PageCargarResultados from './components/Pages/pageCargarResultados.jsx'
import PageHistorialResultados from './components/Pages/pageHistorialResultados.jsx'
import PageCotizacionUser from './components/Pages/pageCotizacionUser.jsx'
import PageCotizacionRecepcionista from './components/Pages/pageCotizacionRecepcionista.jsx'
import PageHistorialPagosRep from './components/Pages/pageHistorialPagosRep.jsx'
import PageCobroRecepcionista from './components/Pages/pageCobroRecepcionista.jsx'
import PageAnalisis from './components/Pages/pageAnalisis.jsx'
import Login from './components/Pages/login.jsx'
import RegisterUser from './components/Pages/registerUser.jsx'
import PageAdministrarPerfil from './components/Pages/pageAdminstrarPerfil.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/consulta',
    element: <PageCitaUser/>
  },
  {
    path: '/consultaRecepcionista',
    element: <PageCitaRecepcionista/>
  },
  {
    path: '/citasAgendadas',
    element: <PageCitasAgendadasRec/>
  },

  {
    path: '/catalogo',
    element: <PageCatalogoServicios/>
  },

  {
    path: '/quimicaClinica',
    element: <PageQuimicaClinica/>
  },

  {
    path: '/biologiaMolecular',
    element: <PageBiologiaMolecular/>
  },

  {
    path: '/alergenos',
    element: <PageAlergenos/>
  },

  {
    path: '/microbiologiaMedica',
    element: <PageMicrobiologiaMedica/>
  },

  {
    path: '/microbiologiaSanitaria',
    element: <PageMicrobiologiaSanitaria/>
  },

  {
    path: '/citologia&histopatologia',
    element: <PageCitologia/>
  },
  {
    path: '/cargarResultados',
    element: <PageCargarResultados/>
  },
  {
    path: '/historialResultados',
    element: <PageHistorialResultados/>
  },
  {
    path: '/cotizacion',
    element: <PageCotizacionUser/>
  },
  {
    path: '/cotizacionRecepcionista',
    element: <PageCotizacionRecepcionista/>
  },
  {
    path: '/historialPagos',
    element: <PageHistorialPagosRep/>
  },
  {
    path: '/generarPago',
    element: <PageCobroRecepcionista/>
  },
  {
    path: '/analisis',
    element: <PageAnalisis/>
  },
  {
    path: '/login',
    element: <Login/>

  },
  {
    path: '/registrate',
    element: <RegisterUser/>

  },
  {
    path: '/administrarPerfil',
    element: <PageAdministrarPerfil/>

  },

])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
