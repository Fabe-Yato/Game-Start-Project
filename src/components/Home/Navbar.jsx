import Lupa from '../../assets/lupa.png'
import LogoLoja from '../../assets/game-console.png'


const Navbar = () => {
    return(
      <header className="container-fluid">
        <nav>

          <a className="link-logo" href="/">
            <div className="logo">
                <img src={LogoLoja} alt="" />
                <h1 className="logo">START<span>GAMES</span> </h1>
            </div>
       
          </a>
            
          <div className="area-pesquisa">
            <input type="text" name="pesquisa" id="pesquisa" placeholder="Pesquise algo..."/>
            <img src={Lupa} className="lupa-pesquisa" alt="Lupa de pesquisa" />
          </div>
          
        </nav>
      </header>
    )
}

export default Navbar;
