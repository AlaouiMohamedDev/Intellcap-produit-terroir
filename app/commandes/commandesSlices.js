import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getCookie } from "cookies-next";

const URL = 'http://127.0.0.1:5000/commandes';

const initialState = []

export const fetchCommandes  = createAsyncThunk('commandes/fetchCommandes', async () => {
    const response = await axios.get(URL);
    return response.data
})


const commandesSlice = createSlice({
    name: 'commandes',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchCommandes.fulfilled, (state, action) => {
            return action.payload;
        })
    }
})

export const selectAllCommandes = (state) => state.commandes;

export const selectCommandesByUserId = (state, commandeUserId) =>state.commandes.filter(commande=> commande.id_user === commandeUserId)

export default commandesSlice.reducer