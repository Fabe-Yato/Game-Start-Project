import Promocoes from '../assets/promocao.png'
import Carrinho from '../assets/carrinho-de-compras.png'
import Configuracoes from '../assets/configuracoes.png'
import Estrela from '../assets/estrela.png'
import Usuario from  '../assets/usuario.png'
import axios from 'axios'
import Playstation from '../assets/Playstation_logo.png'
import { useState, useEffect } from 'react'

const PrincipalJogos = () => {

    const [jogos, setJogos] = useState([])
    const [GodOfWar, setGodOfWar] = useState("")
    const [TLOU2, setTLOU2] = useState("")
    const [SpiderMan, setSpiderMan] = useState("")
    const [TEW, setTEW] = useState("")
    const [avaliacao, setAvaliacao] = useState([{}, {}, {}, {}, {}])

   useEffect(() => {
        axios.get("https://gamepointstore.onrender.com/jogos")
        .then(( response ) => {
            setJogos(response.data)  
            setGodOfWar(response.data[1])
            setTLOU2(response.data[2])
            setSpiderMan(response.data[3])
            setTEW(response.data[4])
            mostrarAvaliacao()
        })
        .catch(() => {
            console.log("Não funcionou")
        })
   }, [])

   
    return(
        <main>
            <div className="jogos-principais">
                <img src={GodOfWar.imagem} className="jogo-principal" alt="God of War game" />
                <div className="dados-usuario">
                    <div className="dados-usuario-principal">
                        <p>Fabiano Ferreira</p>
                        <img src={Usuario} alt="foto-usuario" />
                    </div>
                    <div className="navegacao-usuario">
                        <div className="opcoes-navegacao">
                            <a href="#">Promoções</a>
                            <img src={Promocoes} className="promocoes" alt="icone-promoções" />
                        </div>
                        <div className="opcoes-navegacao">
                            <a href="#">Carrinho</a>
                            <img src={Carrinho} className= "carrinho" alt="icone-promoções" />
                        </div>    
                        <div className="opcoes-navegacao">
                            <a href="#">Explorar Jogos</a>
                            <img src={Promocoes} alt="icone-promoções" />
                        </div>    
                        <div className="opcoes-navegacao">
                            <a href="#">Configurações</a>
                            <img src={Configuracoes} className="configuracoes" alt="icone-promoções" />
                        </div>         
                    </div>
                </div>
            </div>

            <div className="informacoes-jogo-principal">
                <div className="nome-preco-jogo-principal">
                    <h1>{GodOfWar.nome}</h1>
                    <div className="avaliacao">
                        {avaliacao.map(avaliacao => {
                            return (
                                <img className="estrelas" src={Estrela} alt="" />
                            )
                        })}
                    </div>
                    
                </div>
                <h1 className="preco">R${GodOfWar.preco},00</h1>
                <p className="sinopse">{GodOfWar.descricao}</p>
            </div>

            <div className="jogos-em-alta">
                <div>
                    <img src={TLOU2.imagem} alt="the-last-of-us" />
                    <p>{TLOU2.nome}</p>
                    <div className="preco-plataforma">
                         <p>R${TLOU2.preco},00</p>
                         <img className="plataforma" src={Playstation} alt="" />
                    </div>
                   
                </div>
                <div>
                    <img src={SpiderMan.imagem} alt="Spiderman" />
                    <p>{SpiderMan.nome}</p>
                    <div className="preco-plataforma">
                         <p>R${SpiderMan.preco},00</p>
                         <img className="plataforma" src={Playstation} alt="" />
                    </div>
                   
                </div>
                <div>
                    <img src={TEW.imagem} alt="The Evil Within 2" />
                    <p>{TEW.nome}</p>
                    <div className="preco-plataforma">
                         <p>R${TEW.preco},00</p>
                         <img className="plataforma" src={Playstation} alt="" />
                    </div>
                    
                </div>
            </div>
        </main>
    )
}

export default PrincipalJogos;