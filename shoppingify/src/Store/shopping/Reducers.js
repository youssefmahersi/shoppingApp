import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Selected: [], 
    checkSelected: [], 
    checkBox: [], 
    SaveCategory: [],
    checkSaveCategory: [],
}

const reducerSlice = createSlice({
    name: 'Reducer',
    initialState,
    reducers: {
        // Add items to cart
        Select: (state,action) => {
            state.checkSelected.push(action.payload._id)
            state.Selected = state.checkSelected.filter((name, index) => {
                return state.checkSelected.indexOf(name) === index
            })
        },
        // Remove items to cart
        deleteSelect: (state,action) => {
            state.checkSelected = state.checkSelected.filter(item => item !== action.payload)
            state.Selected = state.Selected.filter(item => item !== action.payload)
        },
        // Delete the selected items from the shopping cart
        Checkbox: (state,action) => {
            action.payload.map(id => {
                state.checkSelected = state.checkSelected.filter(item => item !== id)
                state.Selected = state.Selected.filter(item => item !== id)
            })
        },
        // Recent purchases
        saveHistory: (state,action) => {
            state.checkSaveCategory.push(action.payload.category.Type)
            state.SaveCategory = state.checkSaveCategory.filter((name, index) => {
                return state.checkSaveCategory.indexOf(name) === index
            })
        },
    }
})

export default reducerSlice.reducer
export const {
    Select,
    deleteSelect,
    Checkbox,
    saveHistory
} = reducerSlice.actions