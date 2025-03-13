import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    limit: 5,
    page: 1,
};

const blogSlice = createSlice({
    name:'blogSlice',
    initialState,
    reducers: {
        toPages: (state, action) => {
            return {
                ...state,
                page: action.payload.page
            }
        },
    }
})

export const { toPages} = blogSlice.actions

export default blogSlice.reducer