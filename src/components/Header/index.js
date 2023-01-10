import './style.css'
import { IoGameController } from 'react-icons/io5'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useContext, useState } from 'react'
import { Link } from 'react-scroll'
import { ProductsContext } from '../../contexts/ProductsContext'
import Cart from '../Cart'

const Header = () =>{

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
                    <ul>
                        <li><a href='/' className={!headerBackground ? 'link' : 'link-change'}>Home</a></li>
                        <li><Link to='categorys' spy={true} smooth={true} duration={300} className={!headerBackground ? 'link' : 'link-change'}>Categorias</Link></li>
                        <li><Link to='destaques' spy={true} smooth={true} duration={300} className={!headerBackground ? 'link' : 'link-change'}>Destaques</Link></li>
                        <li><Link to='store' spy={true} smooth={true} offset={50} duration={300} className={!headerBackground ? 'link' : 'link-change'}>Loja</Link></li>
                        <li className='cart-icon'><AiOutlineShoppingCart size='30' onClick={handleCart}/>{productsCar.length > 0 ? <span>{productsCar.length}</span> : <></>}</li>
                    </ul>
                </nav>
            </div>
            <Cart showCart={showCart}/>
        </header>
    )
}

export default Header