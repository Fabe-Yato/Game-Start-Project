import Navbar from "../Home/Navbar"
import './jogos.css'
import Carrinho from '../../assets/carrinho-de-compras.png'
import Estrela from '../../assets/estrela.png'
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"


const JogosPage = (props) => {
   const { nome } = useParams()
   const [jogos, setJogos] = useState("")
   const [genero, setGenero] = useState("")

   const[adicionado, setAdcionado] = useState("Carrinho")
   useEffect(() => {
            axios.get("https://gamepointstore.onrender.com/jogos")
            .then(( response ) => {
                let jogos = response.data

                const trocarDados = () => {
                    if(nome == "god-of-war"){
                        setJogos(jogos[6]) 
                        setGenero("Ação")
                    }
                    else if(nome == "spiderman"){
                        setJogos(jogos[2])
                        setGenero("Ação")
                    }
                    else if(nome == "red-dead-redemption"){
                        setJogos(jogos[4])
                        setGenero("Ação")
                    }
                    else if(nome == "the-last-of-us"){
                        setJogos(jogos[1])
                        setGenero("Terror")
                    }
                }
                trocarDados()
                
            })
            .catch(() => {
                console.log("Não funcionou")
            })
             
   }, [])

   const adicionarCarrinho = () => {
        axios.post("https://gamepointstore.onrender.com/carrinho", {
            nome_jogo: jogos.nome,
            descricao: jogos.descricao,
            preco: jogos.preco,
            avaliacao: jogos.avaliacao,
            imagem: jogos.imagem
        })
        .then((response) => {
            console.log("Deu certo o post")
            setAdcionado("Adicionado")
        })
        .catch((error) => {
            console.log("Deu tudo errado o post")
        })
   }

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
                        <h3>{genero}</h3>
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
                            <a href="/compra-realizada">
                                <button>Comprar</button>
                            </a>
                            
                            <button onClick={adicionarCarrinho}>
                                <img className="carrinho" src={Carrinho} alt="" /> 
                                {adicionado}
                            </button>
                    
                        </div> 
                    </div>
               </div>
            </div>
        </div>
    )
}
export default JogosPage
