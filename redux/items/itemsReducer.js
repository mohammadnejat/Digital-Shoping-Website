import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getItemsFromServer = createAsyncThunk(
  'itemsSlicer/getItemsFromServer',
  async url => {
    return fetch(url)
      .then(response => response.json())
      .then(res => res)
  }
)

const items = createSlice({
  name: 'itemsSlicer',
  initialState: [],
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getItemsFromServer.fulfilled, (state, action) => {
      return action?.payload
    })
  }
})

export default items.reducer
