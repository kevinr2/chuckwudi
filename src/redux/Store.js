import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './feature/CartSlice'


const store = configureStore({
    reducer: {
        cart: cartReducer,
    }
})
console.log(store.getState())

export default store