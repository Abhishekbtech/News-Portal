import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchArticles } from '../../api';

export const getArticles = createAsyncThunk(
    'articles/getArticles',
    async ({ category, page }) => {
        const articles = await fetchArticles(category, page);
        return articles;
    }
);

const articlesSlice = createSlice({
    name: 'articles',
    initialState: {
        articles: [],
        status: 'idle',
        error: null,
        category: 'general',
        page: 1,
        searchQuery: '',
    },
    reducers: {
        setCategory: (state, action) => {
            state.category = action.payload;
            state.page = 1;
        },
        setPage: (state, action) => {
            state.page = action.payload;
        },
        setSearchQuery: (state, action) => {
            state.searchQuery = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getArticles.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getArticles.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.articles = action.payload;
            })
            .addCase(getArticles.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const { setCategory, setPage, setSearchQuery } = articlesSlice.actions;

export const selectFilteredArticles = (state) => {
    const { articles, searchQuery } = state.articles;
    if (!searchQuery) return articles;
    return articles.filter((article) =>
        article.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
};

export default articlesSlice.reducer;