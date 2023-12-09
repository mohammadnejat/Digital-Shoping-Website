import { createSlice, AsyncThunk } from '@reduxjs/toolkit'

const productSlicer = createSlice({
  name: 'product',
  initialState: {
    productNumber: 1,
    basket: []
  },
  reducers: {
    addProduct: (state, action) => {
      const existProduct = state.basket.find(
        basket => basket.id === action.payload.id
      )

      if (existProduct) {
        const product = [
          existProduct,
          (existProduct.count = existProduct.count + 1),
          existProduct.count >= 2
            ? (existProduct.newPrice = existProduct.price * existProduct.count)
            : existProduct.price
        ]
      } else {
        state.basket = [...state.basket, action.payload]
      }
    },
    addtoBasket: (state, action) => {
      const existProduct = state.basket.find(
        basket => basket.id === action.payload.id
      )
      if (existProduct) {
        const product = [
          existProduct,
          (existProduct.count = existProduct.count + 1),
          existProduct.count >= 2
            ? (existProduct.newPrice = existProduct.price * existProduct.count)
            : existProduct.price
        ]
      } else {
        state.basket = [...state.basket, action.payload]
      }
    },
    decreaseProduct: (state, action) => {
      state.basket = state.basket.filter(item => item.id != action.payload.id)
    }
  },
  extraReducers: {}
})

export const { addProduct, decreaseProduct, addtoBasket } =
  productSlicer.actions
export default productSlicer.reducer
