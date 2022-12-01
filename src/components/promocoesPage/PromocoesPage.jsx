import Navbar from "../Home/Navbar"
import "./promocoes.css"

const PromocoesPage = () => {
    return(
        <div>
            <Navbar/>

            <h1 className="titulo-promocoes-jogos">Promoções</h1>

            <div className="promocoes-jogos">
                <h2 className="titulo-promocoes">Terror</h2>
                <div className="todos-terror">

                    <div className="jogos">
                         <img src="https://1.bp.blogspot.com/-5V574h_GPrg/Vei62ISkDJI/AAAAAAAACAM/ms3Uo7mmork/s1600/capa.jpg" alt="" />

                         <h2>Until Dawn</h2>
                         <div className="preco-jogos">
                            <del>R$100,000</del>
                            <h3>R$69,99</h3>
                         </div>
                    </div>
                   
                    <div className="jogos">
                        <img src="https://sm.ign.com/t/ign_it/screenshot/default/resident-evil-village-147562_7w5b.1200.jpg" alt="" />

                        <h2>Resident Evil 8: Village</h2>
                        <div className="preco-jogos">
                           <del>R$250,000</del>
                           <h3>R$199,99</h3>
                        </div>      
                   </div>
                   
                   <div className="jogos">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-UvBKP7cFIzRmMH2MXiXT0ftRiu3OoJFXKvHTmVeHi6aD2ALVcS7i8rmAn3ElwXA9FAk&usqp=CAU" alt="" />

                        <h2>The Evil Within 2</h2>
                        <div className="preco-jogos">
                           <del>R$150,00</del>
                           <h3>R$70,00</h3>
                        </div>
                   </div>
                </div>

                <h2 className="titulo-promocoes">Indie</h2>
                <div className="todos-indie">

                    
                <div className="jogos">
                        <img src="https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/pt_BR/games/switch/c/cuphead-switch/hero" alt="" />

                        <h2>Cuphead</h2>
                        <div className="preco-jogos">
                           <del>R$100,00</del>
                           <h3>R$50,00</h3>
                        </div>
                   </div>
                    
                   <div className="jogos">
                        <img src="https://cdn.akamai.steamstatic.com/steam/apps/367520/capsule_616x353.jpg?t=1667006028" alt="" />

                        <h2>Hollow Knight</h2>
                        <div className="preco-jogos">
                           <del>R$120,00</del>
                           <h3>R$80,00</h3>
                        </div>
                   </div>
                    
                   <div className="jogos">
                        <img src="https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/pt_BR/games/switch/c/celeste-switch/hero" alt="" />

                        <h2>Celeste</h2>
                        <div className="preco-jogos">
                           <del>R$80,00</del>
                           <h3>R$39,99</h3>
                        </div>
                   </div>
                  
                </div>

                <h2 className="titulo-promocoes">Ação</h2>
                <div className="todos-indie">    

                <div className="jogos">
                        <img src="https://cdn1.epicgames.com/offer/4b5461ca8d1c488787b5200b420de066/egs-shadowofthetombraiderdefinitiveedition-eidosmontralcrystaldynamicsnixxessoftware-s1-2560x1440-eca6506e95a1_2560x1440-193582a5fd76a593804e0171d6395cf4" alt="" />

                        <h2>Shadow of The Tomb Raider</h2>
                        <div className="preco-jogos">
                           <del>R$159,99</del>
                           <h3>R$129,99</h3>
                        </div>
                   </div>
                    
                   <div className="jogos">
                        <img src="https://3.bp.blogspot.com/-hx7AjflL5os/XAXh9RQdacI/AAAAAAAAMts/W_uX-PdqKG0cBU8bRExw5k0WUliLP4U8gCLcBGAs/s1600/wp2614338.jpg" alt="" />

                        <h2>Red Dead Redemption 2</h2>
                        <div className="preco-jogos">
                           <del>R$230,00</del>
                           <h3>R$170,00</h3>
                        </div>
                   </div>
                    
                   <div className="jogos">
                        <img src="https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/pt_BR/games/switch/d/dark-souls-remastered-switch/hero" alt="" />

                        <h2>Dark Souls Remastered</h2>
                        <div className="preco-jogos">
                           <del>R$150,00</del>
                           <h3>R$120,00</h3>
                        </div>
                   </div>
                  
                </div>
                
            </div>
        </div>
    )
}

export default PromocoesPage
