import './style.css'

const Hero = () =>{
    return(
        <div className='hero' id='home'>
            <div className='overlay'></div>

            <div className='content-hero'>
                <h1>E-kicky</h1>
                <p>Aproveite as melhores ofertas de games no Brasil na nossa loja virtual.</p>
                <button>Conferir a loja</button>
            </div>
        </div>
    )
}

export default Hero