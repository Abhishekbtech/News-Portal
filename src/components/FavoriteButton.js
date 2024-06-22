import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../redux/slices/favoritesSlice';

const FavoriteButton = ({ article }) => {
    const dispatch = useDispatch();
    const isFavorite = useSelector((state) =>
        state.favorites.articles.find((fav) => fav.title === article.title)
    );

    const handleFavorite = () => {
        dispatch(toggleFavorite(article));
    };

    return (
        <button onClick={handleFavorite}
            style={{
                backgroundColor: isFavorite ? 'red' : 'blue'
            }}
        >
            {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        </button>
    );
};

export default FavoriteButton;