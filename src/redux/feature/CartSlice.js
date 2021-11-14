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
                total: action.payload.total
            })

        }
    }
})
export const getCartItem = state => state.cart.cartItem
export const { addItemCart } = slice.actions;
export default slice.reducer;