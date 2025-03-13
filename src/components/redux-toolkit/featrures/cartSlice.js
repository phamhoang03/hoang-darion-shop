import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    carts: []
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers: {
        addToCard: (state, action) => {
            const {carts} = state;
            const {payload} = action
            const isCheckId = carts.some(cart => cart.id === payload.id)
            if(isCheckId){
                const upDateCart = carts.map(cart => {
                    if(cart.id === payload.id){
                        return{
                            ...cart,
                            quantity: cart.quantity + 1
                        }
                    }
                    return cart
                })
                return {
                    ...state,
                    carts: [...upDateCart]
                }
            }
            return {
                ...state,
                carts: [
                    ...carts,
                    payload
                ]
            }
        },
        decrementCart: (state, action) => {
            const carts = state.carts;
            const id = action.payload
            const upDateCart = carts.map(cart => {
                if(cart.id === id){
                    return {
                        ...cart,
                        quantity: cart.quantity - 1
                    }
                }
                return cart
            })
            return {
                ...state,
                carts: [
                    ...upDateCart
                ]
            }
        },
        removeCart: (state, action) => {
            const carts = state.carts;
            const id = action.payload
            const updateCart = carts.filter(cart => cart.id !== id).map(item => {
                return {
                    ...item,
                }
            })
            return {
                ...state,
                carts: [
                    ...updateCart
                ],
                
            }
        }
    }
})

export const {addToCard, decrementCart, removeCart } = cartSlice.actions;
export default cartSlice.reducer;

