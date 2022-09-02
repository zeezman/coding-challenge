import { createSlice } from '@reduxjs/toolkit'

type InitialState = {
  result: object
}
const initialState: InitialState = {
  result: {}
}

const classSlice = createSlice({
  name: 'class',
  initialState,
  reducers: {
    ordered: state => {
      state.result
    }, 
  }
})

export default classSlice.reducer
export const { ordered } = classSlice.actions
