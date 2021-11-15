import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './feature/CartSlice'
import UserRedu from './singIn/User'

const store = configureStore({
    reducer: {
        cart: cartReducer,
        User: UserRedu
    }
})
console.log(store.getState())

export default store