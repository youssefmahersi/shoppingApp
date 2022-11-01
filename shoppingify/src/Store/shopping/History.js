import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = 'http://localhost:3003'

export const getHistory = createAsyncThunk('History/getHistory',
    async (_,{rejectWithValue}) => {
        try {
            const response = await axios.get(baseURL + '/history')
            return response.data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    })

export const postHistory = createAsyncThunk('History/postHistory',
    async (Data,{rejectWithValue}) => {
        try {
            const response = await axios.post(baseURL + '/history', Data)
            return response.data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    })

const initialState = {
    History: [],
    isLoading: false,
    isError: null
}
const historySlice = createSlice({
    name: 'History',
    initialState,
    extraReducers: {
        [getHistory.pending]: (state,action) => {
            state.isLoading = true
            state.isError = null
        },
        [getHistory.fulfilled]: (state,action) => {
            state.isLoading = false
            state.isError = null
            state.History = action.payload
        },
        [getHistory.rejected]: (state,action) => {
            state.isLoading = false
            state.isError = action.payload
        }
    }
})

export default historySlice.reducer