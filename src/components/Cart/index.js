import './style.css'
import { IoMdClose } from 'react-icons/io'
import { AiFillDelete } from 'react-icons/ai'
import { useContext, useState } from 'react'
import { ProductsContext } from '../../contexts/ProductsContext'

const Cart = (props) =>{

    const { productsCar, removeProductInCar } = useContext(ProductsContext)
    
    function totalPrice(){
        let total = 0

        productsCar.forEach(product => total += product.price)

        return total.toFixed(2)
    }

    if(productsCar.length <= 0){
        return <div className={!props.showCart ? 'none' : 'cart cart-empty'}>
            <div className='cart-title'>
                <h3>Carrinho</h3>
                <IoMdClose size='35' className='close-icon close-icon-cart' onClick={() => props.setShowCart(false)}/>
            </div>
            <p>Seu carrinho está vazio</p>
        </div>
    }

    return(
        <div className={!props.showCart ? 'none' : 'cart'}>
            <div className='cart-title'>
                <h3>Carrinho</h3>
                <IoMdClose size='35' className='close-icon close-icon-cart' onClick={() => props.setShowCart(false)}/>
            </div>
            <div className='store-cart'>
            {productsCar.map(product => {
                return(
                    <div className='product-in-car' key={product.name}>
                        <strong>{product.name}   <AiFillDelete size='22' className='close-icon' onClick={() => removeProductInCar(product.id)}/></strong>
                        <div>
                            <img src={product.urlImgStore} alt={product.name}/>
                            <span>R${product.price}</span>
                        </div>
                    </div>
                )
            })}
            </div>
            <div className='finish-cart'>
                <span>R${totalPrice()}</span>
                <button>Finalizar pedido</button>
            </div>
        </div>
    )
}

export default Cart