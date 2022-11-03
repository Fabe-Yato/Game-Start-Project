import { useState } from 'react'
import Navbar from './components/Navbar'
import PrincipalJogos from './components/PrincipalJogos'
import Promocoes from "./components/Promocoes"
import Generos from './components/Generos'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
      <PrincipalJogos/>
      <Promocoes/>
      <Generos/>
    </div>
  )
}

export default App
