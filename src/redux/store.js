import { configureStore } from '@reduxjs/toolkit';
import articlesReducer from './slices/articlesSlice';
import favoritesReducer from './slices/favoritesSlice';

const store = configureStore({
    reducer: {
        articles: articlesReducer,
        favorites: favoritesReducer,
    },
});

export default store;