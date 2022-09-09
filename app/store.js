import { configureStore } from "@reduxjs/toolkit";
import usersReducer from './users/usersSlice';
import categoriesReducer from './categories/categoriesSlice'
import cooperativeReducer from './cooperatives/cooperativesSlice'
import messagesReducer from './messages/messagesSlice'
import productsReducer from './products/productsSlice'
import cartReducer from './cartSlices'
import favReducer from './favSlices'

export const store = configureStore({
    reducer: {
        users: usersReducer,
        categories: categoriesReducer,
        cooperatives: cooperativeReducer ,
        messages:messagesReducer,
        products : productsReducer,
        cart: cartReducer,
        fav: favReducer
    }
})