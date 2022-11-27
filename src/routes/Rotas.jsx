import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom'
import Home from '../components/Home'
import ExplorarJogos from '../components/ExplorarJogos'
import JogosPage from '../components/Jogos'
import PromocoesPage from '../components/PromocoesPage'

const Rotas = () => {
    return(
        <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/explorar-jogos" element={<ExplorarJogos/>} />
                <Route path="/jogos-page/:nome" element={<JogosPage />}/>
                <Route path="/promocoes" element={<PromocoesPage/>}/>
            </Routes>
        </BrowserRouter>
        </div>
    )
}

export default Rotas
