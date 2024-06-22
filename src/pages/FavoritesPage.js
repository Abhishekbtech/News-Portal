import React from 'react';
import { useSelector } from 'react-redux';
import ArticleList from '../components/ArticleList';

const FavoritesPage = () => {
    const favoriteArticles = useSelector((state) => state.favorites.articles);

    return (
        <div className="favorites-page">
            <h1>Your Favorites</h1>
            <ArticleList articles={favoriteArticles} />
        </div>
    );
};

export default FavoritesPage;