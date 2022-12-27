import './style.css'
import { IoGameController } from 'react-icons/io5'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useState } from 'react'

const Header = () =>{

    const [headerBackground, setHeaderBackground] = useState(false)

    window.addEventListener('scroll', () =>{
        if(window.scrollY > 0){
            setHeaderBackground(true)
        }else{
            setHeaderBackground(false)
        }
    }) 

    return(
        <header className={!headerBackground ? 'header headerInit' : 'header headerChange'}>
            <div className='container'>
                <IoGameController size='50' className={!headerBackground ? 'logo' : 'logoChange'}/>

                <nav className='menu'>
                    <ul>
                        <li>Home</li>
                        <li>Categorias</li>
                        <li>Destaques</li>
                        <li>Loja</li>
                        <li className='cart-icon'><AiOutlineShoppingCart size='30'/></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header