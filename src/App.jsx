import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import ResponsiveAppBar from './components/NavBar/navBar'
import Principal from './components/Principal/principal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<ResponsiveAppBar/>}/>
        <Route path='/home' element={<Principal/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
