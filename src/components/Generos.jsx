import RE7 from '../assets/resident-evil-7.jpg'
import MW2 from '../assets/modern-warfare-2.jpg'
import Rayman from '../assets/rayman-legends.jpg'
import Crash from '../assets/crash.jpg'
import FallGuys from '../assets/fall-guys.jpg'
import TombRaider from '../assets/tomb-raider.jpg'

import { useState, useEffect } from 'react'
import axios from 'axios'

const Generos = () => {
    const [aventura, setAventura] = useState("")
    const [Acao, setAcao] = useState("")
    const [FPS, setFPS] = useState("")
    const [Terror, setTerror] = useState("")
    const [Plataforma, setPlataforma] = useState("")
    const [Gratis, setGratis] = useState("")


   useEffect(() => {
        axios.get("https://gamepointstore.onrender.com/genero")
        .then(( response ) => { 
            setTerror(response.data[0])  
            setAcao(response.data[1])
            setFPS(response.data[2])  
            setAventura(response.data[3])
            setGratis(response.data[5])
            setPlataforma(response.data[6])  
        })
        .catch(() => {
            console.log("Não funcionou")
        })
   }, [])


    return(
        <div className="genero-secao">
            <h1>Gêneros</h1>
            <div className="genero-jogos">
                <div>
                    <img src={Rayman} alt="" />
                    <p>{aventura.nome_genero}</p>
                </div>
                <div>
                    <img src={TombRaider} alt="" />
                    <p>{Acao.nome_genero}</p>
                </div>
                <div>
                    <img src={MW2} alt="" />
                    <p>{FPS.nome_genero}</p>
                </div>
                <div>
                    <img src={FallGuys} alt="" />
                    <p>{Gratis.nome_genero}</p>
                </div>
                <div>
                    <img src={Crash} alt="" />
                    <p>{Plataforma.nome_genero}</p>
                </div>
                <div>
                    <img src={RE7} alt="" />
                    <p>{Terror.nome_genero}</p>
                </div>
            </div>
            
        </div>
    )
}

export default Generos