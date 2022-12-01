import "./explorarJogos.css"
import RE7 from "../../assets/resident-evil-7.jpg"
import Navbar from "../Home/Navbar"

const ExplorarJogos = () => {
    return(
        <div className="explorar-jogos">
            <Navbar/>

            <h1 className="titulo-explorar-jogos">Explorar jogos</h1>

            <div className="todos-os-jogos">
                <h2 id="terror">Terror</h2>
                <div className="todos-terror">
                    <img src={RE7} alt="" />

                    <img src="https://sm.ign.com/t/ign_it/screenshot/default/resident-evil-village-147562_7w5b.1200.jpg" alt="" />

                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-UvBKP7cFIzRmMH2MXiXT0ftRiu3OoJFXKvHTmVeHi6aD2ALVcS7i8rmAn3ElwXA9FAk&usqp=CAU" alt="" />

                    <img src="https://1.bp.blogspot.com/-anYOFu0L3ec/WPe_Io5uklI/AAAAAAAAA2U/FsZ6ueaQSiUTJEWB_gNpcDfcLUbEhHLFgCLcB/s1600/YnXZtkc.png" alt="" />

                    <img src="https://meups.com.br/wp-content/uploads/2022/10/Silent-Hill-2-3-900x503.jpg" alt="" />

                    <img src="https://store-images.s-microsoft.com/image/apps.61444.14362558931724774.37f43c0c-c8ea-416b-9b9a-ec2cd8aea963.cfbcfb08-518b-46b3-9145-726c2b7dfffb?q=90&w=480&h=270" alt="" />
                </div>

                <h2 id="fps">FPS</h2>
                <div className="todos-fps">

                    <img src="https://cdn1.epicgames.com/offer/52f57f57120c440fad9bfa0e6c279317/EGS_Battlefield2042_DICE_S1_2560x1440-36f16374c9c29a18a46872795b483d72_2560x1440-36f16374c9c29a18a46872795b483d72" alt="" />

                    <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/1172470/header.jpg?t=1667588841" alt="" />

                    <img src="https://imgs.callofduty.com/content/dam/atvi/callofduty/cod-touchui/mw2/meta-images/reveal/mw2-reveal-meta-share.jpg" alt="" />

                    <img src="https://s3.gaming-cdn.com/images/products/2135/orig/wolfenstein-ii-the-new-colossus-pc-game-steam-cover.jpg?v=1657699153" alt="" />

                    <img src="https://compass-ssl.xbox.com/assets/23/b6/23b6f32d-f359-43f3-a595-399cb019c603.jpg?n=DOOM-Eternal_GLP-Page-Hero-0_1083x609_02.jpg" alt="" />

                    <img src="https://sm.ign.com/ign_br/screenshot/default/apps3469651709691328310111a6969c2-c209-441f-86d0-c320c947d7b_xnpc.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default ExplorarJogos
