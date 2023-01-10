import { createContext, useState } from 'react'
import { toast } from 'react-toastify'

import games from '../games'

const ProductsContext = createContext()

const ProductsProvider = ({ children }) =>{

    const [productsCar, setProductsCar] = useState([])

    function addProductsInCar(id){
        const product = games.filter(game => game.id === id)
        const hasGame = productsCar.some( productCar => productCar.id === product[0].id )

        if(!hasGame){
            setProductsCar([...productsCar, product[0]])
            toast.success('Produto adicionado.')
            return
        }

        toast.warn('Este produto já está no carrinho')
    }

    function removeProductInCar(id){
        const filteredProducts = productsCar.filter(product => product.id !== id)

        setProductsCar(filteredProducts)
        toast.success('Produto deletado.')
    }

    const gamesDes = games.filter(game =>{
        return game.featured === true
    })

    return(
        <ProductsContext.Provider value={ {gamesDes, addProductsInCar, removeProductInCar, productsCar} }>
            {children}
        </ProductsContext.Provider>
    )
}

export { ProductsContext, ProductsProvider }