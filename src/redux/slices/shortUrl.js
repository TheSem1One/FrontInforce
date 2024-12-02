import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../axios';

export const fetchShortUrl = createAsyncThunk('shorturl/fetchProduct', async () => {
    const { data } = await axios.get('/api/shorturl');
    return data;
});
const initialState = {
    shortUrl: {
        items: [],
        status: 'loading',
    },
    costs: {
        items: [],
        status: 'loading',
    }
}

const shortUrlSlice = createSlice({
    name: 'shortUrl',
    initialState,
    reducers: {},
    extraReducers: (shortUrl) => {
        shortUrl
            .addCase(fetchShortUrl.pending, (state) => {
                state.shortUrl.items = [];
                state.shortUrl.status = 'loading';
            })
            .addCase(fetchShortUrl.fulfilled, (state, action) => {
                state.shortUrl.items = action.payload;
                state.shortUrl.status = 'loaded';
            })
            .addCase(fetchShortUrl.rejected, (state) => {
                state.shortUrl.items = [];
                state.shortUrl.status = 'error';
            });
    },
});


export const shortUrlReducer = shortUrlSlice.reducer;