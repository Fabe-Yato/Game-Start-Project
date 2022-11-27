const Promocoes = () => {

    return(
        <div className="promocoes-secao">
            <div className="promocoes-imagens">

                <div className="outras-promocoes">
                    <img src="https://psverso.com.br/wp-content/uploads/2022/09/melhores-jogos-de-acao-768x432.webp" alt="" />
                </div>
            
                <div className="promocoes-imagem">
                    <img src="https://dropsdejogos.uai.com.br/wp-content/uploads/sites/10/2022/04/reproducao-indiegames-divulgacao-950x534.jpg" alt="" />
                </div>
                <div className="outras-promocoes">
                    <img src="http://pixelnerd.com.br/wp-content/uploads/2022/03/Os-melhores-jogos-de-terror.jpg" alt="" />
                </div>   

            </div>
            <div className="promocoes-textos">
                <h1>PROMOÇÃO DE PRIMAVERA</h1>
                <h2>50% DE DESCONTO EM JOGOS INDIES</h2>
            </div>
            <a href="/promocoes">
                <button>Confira mais +</button>
            </a>
            
        </div>
    )
}

export default Promocoes
