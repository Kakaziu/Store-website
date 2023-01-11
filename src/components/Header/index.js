import './style.css'
import { IoGameController } from 'react-icons/io5'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'
import { GrClose } from 'react-icons/gr'
import { useContext, useState } from 'react'
import { Link } from 'react-scroll'
import { ProductsContext } from '../../contexts/ProductsContext'
import Cart from '../Cart'

const Header = () =>{

    const [showMenuMobile, setShowMenuMobile] = useState(false)
    const [showCart, setShowCart] = useState(false)
    const { productsCar } = useContext(ProductsContext)
    const [headerBackground, setHeaderBackground] = useState(false) 

    window.addEventListener('scroll', () =>{
        if(window.scrollY > 0){
            setHeaderBackground(true)
        }else{
            setHeaderBackground(false)
        }
    }) 

    function handleCart(){
        if(showCart){
            setShowCart(false)
        }else{
            setShowCart(true)
        }
    }

    return(
        <header className={!headerBackground ? 'header headerInit' : 'header headerChange'}>
            <div className='container'>
                <IoGameController size='50' className={!headerBackground ? 'logo' : 'logoChange'}/>

                <nav className='menu'>
                    <ul className='menu-web'>
                        <li><a href='/' className={!headerBackground ? 'link' : 'link-change'}>Home</a></li>
                        <li><Link to='categorys' spy={true} smooth={true} duration={300} className={!headerBackground ? 'link' : 'link-change'}>Categorias</Link></li>
                        <li><Link to='destaques' spy={true} smooth={true} duration={300} className={!headerBackground ? 'link' : 'link-change'}>Destaques</Link></li>
                        <li><Link to='store' spy={true} smooth={true} offset={50} duration={300} className={!headerBackground ? 'link' : 'link-change'}>Loja</Link></li>
                        <li className='cart-icon'><AiOutlineShoppingCart size='30' onClick={handleCart}/>{productsCar.length > 0 ? <span>{productsCar.length}</span> : <></>}</li>
                    </ul>

                    <ul className={showMenuMobile ? 'menu-mobile menu-active' : 'disable-menu menu-mobile'}>
                        <li><a href='/' className='link-mobile'>Home</a></li>
                        <li><Link to='categorys' spy={true} smooth={true} duration={300} className='link-mobile' onClick={() => setShowMenuMobile(false)}>Categorias</Link></li>
                        <li><Link to='destaques' spy={true} smooth={true} duration={300} className='link-mobile' onClick={() => setShowMenuMobile(false)}>Destaques</Link></li>
                        <li><Link to='store' spy={true} smooth={true} offset={50} duration={300} className='link-mobile' onClick={() => setShowMenuMobile(false)}>Loja</Link></li>
                        <li className='cart-icon' onClick={() => setShowMenuMobile(false)}><AiOutlineShoppingCart size='30' onClick={handleCart} />{productsCar.length > 0 ? <span>{productsCar.length}</span> : <></>}</li>
                    </ul>

                    <button className={showMenuMobile ? 'none' : 'btn-mobile'} onClick={() => setShowMenuMobile(true)}><GiHamburgerMenu size='50'/></button>
                    <button onClick={() => setShowMenuMobile(false)}  className={!showMenuMobile ? 'none' : 'btn-mobile'}><GrClose size='50'/></button>
                </nav>
            </div>
            <Cart showCart={showCart} setShowCart={setShowCart}/>
        </header>
    )
}

export default Header