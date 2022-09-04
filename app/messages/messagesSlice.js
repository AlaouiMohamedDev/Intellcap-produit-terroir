import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getCookie } from "cookies-next";

const URL = 'http://127.0.0.1:5000/messages';

const initialState = []

export const fetchMessages= createAsyncThunk('messages/fetchMessages', async () => {
    const response = await axios.get(URL);
    return response.data
})


const messagesSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchMessages.fulfilled, (state, action) => {
            return action.payload;
        })
    }
})

export const selectAllMessages = (state) => state.messages;

//export const selectUserById = (state, userId) =>state.users.find(user => user.id === userId)

export default messagesSlice.reducer