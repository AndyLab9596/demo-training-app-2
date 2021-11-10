import { createSlice } from "@reduxjs/toolkit";


const productSlice = createSlice({
    name: 'product',
    initialState: '',
    reducers: {

    }
})

// Actiions
export const productActions = productSlice.actions;

// Selectors

// Reducers
const productReducer = productSlice.reducer;
export default productReducer;