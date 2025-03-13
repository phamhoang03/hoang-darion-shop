import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    limit: 12,
    q: "",
    sortBy: localStorage.getItem("sortBy") || "",
    order: localStorage.getItem("order") || "",
    skip: 0,
};

const searchSlice = createSlice({
    name:'searchSlice',
    initialState,
    reducers: {
        searchSortByProducts: (state, action) => {
            const { sortBy, order } = action.payload;
            localStorage.setItem("sortBy", sortBy);
            localStorage.setItem("order", order);
            
            return {
                ...state,
                sortBy,
                order,
            }
        },
        skipPages: (state, action) => {
            return {
                ...state,
                skip: action.payload.skip
            }
        },
        searchTitle: (state, action) => {
            return {
                ...state,
                q: action.payload.q,
            }
        }
    }
})

export const {searchSortByProducts, skipPages, searchTitle} = searchSlice.actions

export default searchSlice.reducer