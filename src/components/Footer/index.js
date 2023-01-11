import './style.css'
import { Link } from 'react-scroll'
import { IoGameController } from 'react-icons/io5'
import { BsPeopleFill, BsTelephoneFill, BsPhoneFill } from 'react-icons/bs'
import { AiFillCar, AiFillMail, AiFillCreditCard, AiFillHeart} from 'react-icons/ai'
import { MdPrivacyTip } from 'react-icons/md'
import { FaTicketAlt } from 'react-icons/fa'

const Footer = () =>{
    return(
        <footer className="footer">
            <h2>E-kicky <IoGameController size='35' className='icon-footer-title'/></h2>

            <div className='footer-categorys'>
                <div>
                    <h3>Institucional</h3>
                    <ul>
                        <li><BsPeopleFill className='icon-footer'/>Quem somos</li>
                        <li><AiFillCar className='icon-footer'/>Entregas e prazos</li>
                        <li><MdPrivacyTip className='icon-footer'/>Políticas de privacidade</li>
                    </ul>
                </div>

                <div>
                    <h3>Contato</h3>
                    <ul>
                        <li><BsTelephoneFill className='icon-footer'/>{'(21) 99992-8635'}</li>
                        <li><AiFillMail className='icon-footer'/>E-kicky@suporte.com</li>
                    </ul>
                </div>

                <div>
                    <h3>Pagamento</h3>
                    <ul>
                        <li><AiFillCreditCard className='icon-footer'/>Cartão de crédito e débito</li>
                        <li><FaTicketAlt className='icon-footer'/>Boleto</li>
                        <li><BsPhoneFill className='icon-footer'/>Pix</li>
                    </ul>
                </div>
            </div>

            <hr></hr>

            <div className='container'>
                <IoGameController size='50'/>

                <nav className='menu'>
                    <ul className='menu-web'>
                    <li><a href='/' className='home-footer'>Home</a></li>
                        <li><Link to='categorys' spy={true} smooth={true} duration={300}>Categorias</Link></li>
                        <li><Link to='destaques' spy={true} smooth={true} duration={300}>Destaques</Link></li>
                        <li><Link to='store' spy={true} smooth={true} offset={50} duration={300}>Loja</Link></li>
                    </ul>
                </nav>
            </div>

            <p className='message-creator'>Desenvolvido por Kauã<AiFillHeart className='message-icon'/></p>
        </footer>
    )
}

export default Footer