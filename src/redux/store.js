import { configureStore } from '@reduxjs/toolkit'
import { shortUrlReducer } from './slices/shortUrl';
 
const store = configureStore({
    reducer: {
        shortUrl :shortUrlReducer,
    }
})

export default store;