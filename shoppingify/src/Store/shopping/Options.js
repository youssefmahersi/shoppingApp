import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = 'http://localhost:3003'

export const getOptions = createAsyncThunk('Options/getOptions', 
    async (_,{rejectWithValue}) => {
        try {
            const response = await axios.get(baseURL + '/options')
            return response.data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    })

export const postOptions = createAsyncThunk('Options/postOptions',
    async (Data,{rejectWithValue}) => {
        try {
            const response = await axios.post(baseURL + '/options', Data)
            return response.data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    })

export const updateOptions = createAsyncThunk('Options/updateOptions',
    async (Data,{rejectWithValue}) => {
        try {
            const response = await axios.put(baseURL + '/options', Data)
            return response.data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    })


const initialState = {
    Options: [],
    Search: [],
    isLoading: false,
    isError: null
}
const optionSlice = createSlice({
    name: 'Options',
    initialState,
    extraReducers: {
        [getOptions.pending]: (state,action) => {
            state.isLoading = true
            state.isError = null
        },
        [getOptions.fulfilled]: (state,action) => {
            state.isLoading = false
            state.isError = null
            state.Options = action.payload
        },
        [getOptions.rejected]: (state,action) => {
            state.isLoading = false
            state.isError = action.payload
        },

        [postOptions.pending]: (state,action) => {
            state.isLoading = true
            state.isError = null
        },
        [postOptions.fulfilled]: (state,action) => {
            state.isLoading = false
            state.isError = null
        },
        [postOptions.rejected]: (state,action) => {
            state.isLoading = false
            state.isError = action.payload
        },

        [updateOptions.pending]: (state,action) => {
            state.isLoading = true
            state.isError = null
        },
        [updateOptions.fulfilled]: (state,action) => {
            state.isLoading = false
            state.isError = null
        },
        [updateOptions.rejected]: (state,action) => {
            state.isLoading = false
            state.isError = action.payload
        },
    },
    reducers: {
        SearchBox: (state,action) => {
            state.Search = state.Options.filter(option => option.name.includes(action.payload))
        },
    }
})

export default optionSlice.reducer
export const {
    SearchBox
} = optionSlice.actions