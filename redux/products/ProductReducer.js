import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getProductsFromServer = createAsyncThunk(
  'ProductSlicer/getProductsFromServer',
  async () => {
    try {
      const response = await axios
        .get('https://backend-api-nine-nu.vercel.app/allProducts')
        .then(res => {
          return res.data
        })
      return response
    } catch (error) {
      console.error('Error fetching products:', error)
    }
  }
)
export const getImageFromServer = createAsyncThunk(
  'ProductSlicer/getImageFromServer',
  async () => {
    try {
      const response = await axios
        .get('https://backend-api-nine-nu.vercel.app/cardWarpper')
        .then(res => {
          return res.data
        })
      return response
    } catch (error) {
      console.error('Error fetching products:', error)
    }
  }
)

const ProductReducer = createSlice({
  name: 'ProductSlicer',
  initialState: {
    allProducts: [],
    imageWarpers: [],
    sortedProducts: [],
    filtredProducts: '',
    currentPageNumber: 1,
    pageSizeIndex: 6
  },
  reducers: {
    setCurrentPageNumber: (state, action) => {
      state.currentPageNumber = action.payload.currentPage
    },
    searchItems: (state, action) => {
      let text = action.payload
      const findedItem = state.allProducts.filter(item =>
        item.title.toLocaleLowerCase().includes(text.toLocaleLowerCase())
      )
      state.filtredProducts = findedItem
    },
    findedInputItems: (state, action) => {
      state.filtredProducts = action.payload
    },
    sortedProducts: (state, action) => {
      console.log(action.payload)
      let sorted = state.allProducts.sort(action.payload)
      state.allProducts = sorted
    }
  },
  extraReducers: builder => {
    builder.addCase(getProductsFromServer.fulfilled, (state, action) => {
      state.allProducts = action.payload
    })
    builder.addCase(getImageFromServer.fulfilled, (state, action) => {
      state.imageWarpers = action.payload
    })
  }
})

export const {
  setCurrentPageNumber,
  findedInputItems,
  sortedProducts,
  searchItems
} = ProductReducer.actions
export default ProductReducer.reducer
