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


])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
