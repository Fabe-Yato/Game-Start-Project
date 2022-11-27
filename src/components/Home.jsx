import '../App.css'
import Navbar from './Home/Navbar'
import PrincipalJogos from './Home/PrincipalJogos'
import Promocoes from "./Home/Promocoes"
import Generos from './Home/Generos'
import { useState } from 'react'
import { useEffect } from 'react'
import Rotas from '../routes/Rotas'

const Home = (props) => {
   
  
    return(
        <div >
            <Navbar/>
            <PrincipalJogos /> 
            <Promocoes />
            <Generos/>
        </div>
    )
}

export default Home
