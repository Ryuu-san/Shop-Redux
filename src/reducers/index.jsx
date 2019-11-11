import { combineReducers } from 'redux'

import products from './products'
import filterProduct from './filterProduct'
import productsBasket from './productsBasket'

export default combineReducers({
    products,
    productsBasket,
    filterProduct
})