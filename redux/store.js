import { configureStore } from '@reduxjs/toolkit'
import itemsReducer from './items/itemsReducer'
import ProductReducer from './products/ProductReducer'
import productActions from './product/productActions'

export const store = configureStore({
  reducer: {
    items: itemsReducer,
    allProducts: ProductReducer,
    productActions: productActions
  }
})
