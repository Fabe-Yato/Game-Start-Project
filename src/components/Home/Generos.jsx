import RE7 from '../../assets/resident-evil-7.jpg'
import MW2 from '../../assets/modern-warfare-2.jpg'
import Rayman from '../../assets/rayman-legends.jpg'
import Crash from '../../assets/crash.jpg'
import FallGuys from '../../assets/fall-guys.jpg'
import TombRaider from '../../assets/tomb-raider.jpg'

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
            setAcao(response.data[0])  
            setAventura(response.data[1])
            setTerror(response.data[2])  
            setFPS(response.data[3])
            setPlataforma(response.data[4])
            setGratis(response.data[5])  
        })
        .catch(() => {
            console.log("Não funcionou")
        })
   }, [])


    return(
        <div className="genero-secao">
            <h1>Gêneros</h1>
            <div className="genero-jogos">
                <a href="/explorar-jogos#aventura">
                    <div>
                        <img src={Rayman} alt="" />
                        <p>{aventura.nome_genero}</p>
                    </div>
                </a>

                <a href="/explorar-jogos#acao">
                    <div>
                        <img src={TombRaider} alt="" />
                     <p>{Acao.nome_genero}</p>
                    </div>
                </a>
                
                <a href="/explorar-jogos#fps">
                   <div>
                        <img src={MW2} alt="" />
                        <p>{FPS.nome_genero}</p>
                    </div> 
                </a>
                
                <a href="/explorar-jogos#gratis">
                    <div>
                        <img src={FallGuys} alt="" />
                        <p>{Gratis.nome_genero}</p>
                    </div>
                </a>
                
                <a href="/explorar-jogos#plataforma">
                    <div>
                        <img src={Crash} alt="" />
                        <p>{Plataforma.nome_genero}</p>
                    </div>
                </a>
                
                <a href="/explorar-jogos#terror">
                    <div>
                        <img src={RE7} alt="" />
                        <p>{Terror.nome_genero}</p>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Generos
