import './style.css'
import { useContext } from 'react'
import games from '../../games'
import { ProductsContext } from '../../contexts/ProductsContext'

const Store = () =>{

    const { addProductsInCar } = useContext(ProductsContext)

    return(
        <section id='store'>
            <hr className='line'/>
            <h2 className='sub-title'>Loja</h2>

            <div className="store-area">
                {/* <div className="game-store">
                    <strong>God of war Ragnarok</strong>
                    <img src="./assets/images/store_gow.webp"/>
                    <div>
                        <span>R$200.00</span>
                        <button>+</button>
                    </div>
                </div> */}
                {games.map(game =>{
                    return(
                        <div key={game.id} className="game-store">
                            <strong>{game.name}</strong>
                            <img src={game.urlImgStore} alt={game.name}/>
                            <div>
                                <span>R${game.price}</span>
                                <button onClick={() => addProductsInCar(game.id)}>+</button>
                            </div>
                        </div> 
                    )
                })}            
            </div>
        </section>
    )
}

export default Store