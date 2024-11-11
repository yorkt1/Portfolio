import React from 'react'
import Sobrenos from './componentes/Sobrenos/Sobrenos.jsx'
import Navbar from './componentes/Navbar/Navbar.jsx'
import Habilidades from './componentes/habilidades/Habilidades.jsx'
import Home from './componentes/Home/Home.jsx'

import './App.css'

function App() {


  return (
    <>
      <Navbar />
      <Home />
      <Habilidades />
      <Sobrenos />
    </>
  )
}

export default App
