import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  change: [],
  Dark: true,  
}

const firstSlice = createSlice({
  name: 'darks',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.Dark = !state.Dark; 
    }
  }
})

export const { toggleDarkMode } = firstSlice.actions; 
export default firstSlice.reducer; 
