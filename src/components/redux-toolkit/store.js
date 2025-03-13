import { configureStore } from "@reduxjs/toolkit";

import authenSlice from './featrures/authenSilce'
import cartSlice from './featrures/cartSlice'
import searchSlice from './featrures/searchSlice'
import heartSlice from './featrures/heartSlice'
import blogSlice from './featrures/blogSlice'


const store = configureStore({
    reducer:{
        authenSlice,
        cartSlice,
        searchSlice,
        heartSlice,
        blogSlice,
    },
})

export default store