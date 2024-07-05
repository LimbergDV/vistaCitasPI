import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import NavBar from './components/NavBar/navBar'
import PageCitaUser from './components/Pages/pageCitaUser'
import PageCitaRecepcionista from './components/Pages/pageCitaRecepcionista'
import PageCitasAgendadasRec from './components/Pages/pageCitasAgendadas'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<NavBar/>}/>
        <Route path='/consulta' element={<PageCitaUser/>}/>
        <Route path='/consultaRecepcionista' element={<PageCitaRecepcionista/>}/>
        <Route path='/citasAgendadas' element={<PageCitasAgendadasRec/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
