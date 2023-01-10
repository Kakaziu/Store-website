import { useContext } from 'react'
import { ProductsContext } from '../../contexts/ProductsContext'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import './style.css'

const Destaques = () =>{

    const { gamesDes, addProductsInCar} = useContext(ProductsContext)

    return(
        <section id="destaques">
           <Swiper pagination={{
            clickable: true
           }} modules={[Pagination]}>
                { gamesDes.map(game =>{
                    return (
                        <SwiperSlide className='des-game' key={game.id}>
                            <img src={game.urlImgDes} alt={game.description}/>
                            <div className='overlay-des'></div>
                            <div className='content-des'>
                                <h2>{game.name}</h2>
                                <p>{game.description}</p>
                                <span>R${game.price}</span>
                                <button onClick={() => addProductsInCar(game.id)}>Adicionar ao carrinho</button>
                            </div>
                        </SwiperSlide>
                    )
                }) }
           </Swiper>
        </section>
    )
}

export default Destaques