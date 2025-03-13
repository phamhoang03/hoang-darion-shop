import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    hearts: []
}

const heartSlice = createSlice({
    name:'heart',
    initialState,
    reducers: {
        addToHeart: (state, action) => {
            const {hearts} = state;
            const {payload} = action
            return {
                ...state,
                hearts: [
                    ...hearts,
                    payload,
                ]
            }
        },
        removeHeart: (state, action) => {
            const hearts = state.hearts;
            const id = action.payload
            const updateHeart = hearts.filter(heart => heart.id !== id).map(item => {
                return {
                    ...item,
                }
            })
            return {
                ...state,
                hearts: [
                    ...updateHeart
                ]
            }
        }
    }
})

export const {addToHeart, removeHeart} = heartSlice.actions;
export default heartSlice.reducer;

