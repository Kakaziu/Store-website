import { createContext, useState } from 'react'
import games from '../games'

const ProductsContext = createContext()

const ProductsProvider = ({ children }) =>{

    const gamesDes = games.filter(game =>{
        return game.featured === true
    })

    return(
        <ProductsContext.Provider value={ {gamesDes} }>
            {children}
        </ProductsContext.Provider>
    )
}

export { ProductsContext, ProductsProvider }