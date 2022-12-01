import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom'
import Home from '../components/Home'
import ExplorarJogos from '../components/explorarJogos/ExplorarJogos'
import JogosPage from '../components/jogos/Jogos'
import PromocoesPage from '../components/promocoesPage/PromocoesPage'
import CarrinhoPage from '../components/carrinho/CarrinhoPage'
import CompraSucesso from '../components/compraSucesso/CompraSucesso'

const Rotas = () => {
    return(
        <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/explorar-jogos" element={<ExplorarJogos/>} />
                <Route path="/jogos-page/:nome" element={<JogosPage />}/>
                <Route path="/promocoes" element={<PromocoesPage/>}/>
                <Route path="/carrinho" element={<CarrinhoPage/>}/>
                <Route path="/compra-realizada" element={<CompraSucesso/>}/>
            </Routes>
        </BrowserRouter>
        </div>
    )
}

export default Rotas
