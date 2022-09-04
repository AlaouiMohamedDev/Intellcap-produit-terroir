import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getCookie } from "cookies-next";

const URL = 'http://127.0.0.1:5000/cooperatives';

const initialState = []

export const fetchCooperatives= createAsyncThunk('cooperatives/fetchCooperatives', async () => {
    const response = await axios.get(URL);
    return response.data
})


const cooperativesSlice = createSlice({
    name: 'cooperatives',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchCooperatives.fulfilled, (state, action) => {
            return action.payload;
        })
    }
})

export const selectAllCooperatives = (state) => state.cooperatives;

//export const selectUserById = (state, userId) =>state.users.find(user => user.id === userId)

export default cooperativesSlice.reducer