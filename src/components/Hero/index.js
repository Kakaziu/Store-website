import './style.css'
import { Link } from 'react-scroll'

const Hero = () =>{
    return(
        <div className='hero' id='home'>
            <div className='overlay'></div>

            <div className='content-hero'>
                <h1>E-kicky</h1>
                <p>Aproveite as melhores ofertas de games no Brasil na nossa loja virtual.</p>
                <Link to='store' spy={true} smooth={true} offset={50} duration={300}>Conferir loja</Link>
            </div>
        </div>
    ) 
}

export default Hero