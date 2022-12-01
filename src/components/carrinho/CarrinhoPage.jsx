import { useState, useEffect } from "react"
import Navbar from "../Home/Navbar"
import axios from "axios"
import "./carrinho.css"

const CarrinhoPage = () => {
    const [carrinho, setCarrinho] = useState([])
   
    useEffect(() => {
        axios.get("https://gamepointstore.onrender.com/carrinho")
        .then(( response ) => {
            let jogos = response.data
            setCarrinho(jogos)
        })
        .catch(() => console.log("Não funcionou"))
     
   }, [])
    
    const retirarCarrinho = (retirar) => {

        console.log(retirar)
        
        if(retirar != ""){
            axios.delete(`https://gamepointstore.onrender.com/carrinho/${retirar}`)
            .then(() => "Retirado com sucesso")
            .catch(() => "Não encontramos")
        } 
        setTimeout(()=>{
            const atualizar = document.location.reload()
        }, 1000)
        
    }

    let totalPreco = 0
    carrinho.map((jogos) => {
        totalPreco += jogos.preco
    })
    return(
        <div>
            <Navbar/>
            <div className="titulo-preco-total">
               <h1>Carrinho de Compras</h1> 
               <h1 className="preco-total">Total Compras: R${totalPreco},00</h1>
            </div>
            
            <div className="jogos-carrinho">
                {carrinho.map((jogos) => {
                    return(
                        <div className="informacoes-jogos-carrinho">
                            <img src={jogos.imagem} alt="" />
                            <div className="descricao-jogos-carrinho">
                                <h1>{jogos.nome_jogo}</h1>
                                <h2>{`R$${jogos.preco},00`}</h2>

                                <h3>{jogos.descricao}</h3>
                                
                                <button onClick={() => retirarCarrinho(jogos.id_carrinho)}> 
                                    <span className="botao-span">X</span> Retirar do carrinho
                                </button>
                             
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className="finalizar-compra">
                <a href="/compra-realizada">
                   <button>Finalizar Compra</button> 
                </a>
            </div>
        </div>
    )
}

export default CarrinhoPage
