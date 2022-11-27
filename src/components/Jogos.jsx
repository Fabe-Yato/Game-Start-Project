import Navbar from "./Home/Navbar"
import '../jogos.css'
import Carrinho from '../assets/carrinho-de-compras.png'
import Estrela from '../assets/estrela.png'
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"


const JogosPage = (props) => {
   const { nome } = useParams()

   console.log(nome)

   const [jogos, setJogos] = useState("")

   useEffect(() => {
            axios.get("https://gamepointstore.onrender.com/jogos")
            .then(( response ) => {
                let jogos = response.data

                const trocarDados = () => {
                    if(nome == "god-of-war"){
                        setJogos(jogos[3]) 
                    }
                    else if(nome == "spiderman"){
                        setJogos(jogos[2])
                    }
                    else if(nome == "red-dead-redemption"){
                        setJogos(jogos[4])
                    }
                    else if(nome == "the-last-of-us"){
                        setJogos(jogos[1])
                    }
                }
                trocarDados()
                
            })
            .catch(() => {
                console.log("Não funcionou")
            })
        }, [])

    return(
        <div >
            <Navbar/>
            <div className="jogos-page">
                <div className="imagem-jogo">
                    <img src={jogos.imagem} alt="" /> 
                </div>
               <div className="informacoes-jogo">
                    <h1 className="nome-jogo">{jogos.nome}</h1>
                    <div className="genero-avaliacao">
                        <h3>Terror</h3>
                        <div className="avaliacao">
                            <img src={Estrela} alt="" />
                            <img src={Estrela} alt="" />
                            <img src={Estrela} alt="" />
                            <img src={Estrela} alt="" />
                            <img src={Estrela} alt="" />
                        </div>
                    </div>
                    
                    <h2 className="descricao-jogo">{jogos.descricao}</h2>

                    <div className="comprar-carrinho">
                        <div className="preco">
                            <h1>R${jogos.preco},00</h1>
                            <p>12x no cartão</p>
                        </div>
                        <div>
                            <button>Comprar</button>
                            <button>
                                <img className="carrinho" src={Carrinho} alt="" /> 
                                Carrinho
                            </button>
                        </div> 
                    </div>
               </div>
            </div>

            <div className="capturas-tela">
                <h1>Capturas de Tela</h1>
                <div className="imagens-captura-tela">
                    <img src="https://s2.glbimg.com/uVgESZRf29Bv_sS98o6mzzNP9bM=/0x0:1200x765/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2017/A/D/x9GxjjRWqLxrhSbWFuNA/residentevil7-3.jpg" alt="" />

                    <img src="https://4.bp.blogspot.com/-ZzBxMroQj2g/WI-Q-HI9MYI/AAAAAAAAMfM/FcmTtBeqY9sulKQDd3Lw97wG022U7FpygCLcB/s1600/resident-evil-7-video.jpg" alt="" />
                </div>
            </div>
           
        </div>
    )
}
export default JogosPage
