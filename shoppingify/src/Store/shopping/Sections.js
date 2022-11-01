import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = 'http://localhost:3003'

export const getSections = createAsyncThunk('Sections/getSections', 
    async (_,thunkAPI) => {
        try {
            const response = await axios.get(baseURL + '/sections')
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    })

const initialState = {
    Sections: [],
    isLoading: false,
    isError: null
}
const sectionSlice = createSlice({
    name: 'Sections',
    initialState,
    extraReducers: {
        [getSections.pending]: (state,action) => {
            state.isLoading = true
            state.isError = null
        },
        [getSections.fulfilled]: (state,action) => {
            state.isLoading = false
            state.isError = null
            state.Sections = action.payload
        },
        [getSections.rejected]: (state,action) => {
            state.isLoading = false
            state.isError = action.payload
        },
    }
})

export default sectionSlice.reducer