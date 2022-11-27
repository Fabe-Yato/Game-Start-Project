import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../components/Home'
import ExplorarJogos from '../components/ExplorarJogos'
import JogosPage from '../components/Jogos'
import PromocoesPage from '../components/PromocoesPage'
import { useState } from 'react'
import { useEffect } from 'react'


const Rotas = () => {
 
     const [jogos, setJogos] = useState({nome: "Resident Evil 7: Biohazard"})
     

     
    return(
        <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/explorar-jogos" element={<ExplorarJogos/>} />
                <Route path="/jogos-page/:nome"  
                element={<JogosPage jogos={jogos}/>}/>
                <Route path="/Promocoes"  
                element={<PromocoesPage/>}/>
                    
                
            </Routes>
        </BrowserRouter>
        </div>
    )
}

export default Rotas
