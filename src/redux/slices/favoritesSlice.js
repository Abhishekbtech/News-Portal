import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    articles: JSON.parse(localStorage.getItem('favorites')) || [],
};

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        toggleFavorite: (state, action) => {
            const existingIndex = state.articles.findIndex(
                (article) => article.title === action.payload.title
            );

            if (existingIndex >= 0) {
                state.articles.splice(existingIndex, 1);
            } else {
                state.articles.push(action.payload);
            }

            localStorage.setItem('favorites', JSON.stringify(state.articles));
        },
    },
});

export const { toggleFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;