import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
    name: 'cart',
    initialState: {
        cartItem: []
    },
    reducers: {
        addItemCart: (state, action) => {
            state.cartItem.push({
                id: action.payload.id,
                name: action.payload.name,
                image: action.payload.image,
                qualification: action.payload.qualification,
                price: action.payload.price,
                time: action.payload.time,
                amount: action.payload.amount,
                totalPrice: action.payload.total
            })
        },
        removeItemCart: (state, action) => {
            state.cartItem = state.cartItem.filter(
                cartItem => cartItem.id !== action.payload.id
            )
        }
    }
})
export const getCartItem = state => state.cart.cartItem
export const getTotal = state => {
    return state.cart.cartItem.reduce((total, cartItem) => {
        return cartItem.totalPrice + total;
    }, 0)
}
console.log(getTotal)
export const { addItemCart } = slice.actions;
export default slice.reducer;