import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import PageCitaUser from './components/Pages/pageCitaUser.jsx'
import PageCitaRecepcionista from './components/Pages/pageCitaRecepcionista.jsx'
import PageCitasAgendadasRec from './components/Pages/pageCitasAgendadas.jsx'
import PageCatalogoServicios from './components/Pages/pageCatalogoServicios.jsx'

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


])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
