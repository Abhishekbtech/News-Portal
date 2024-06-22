import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../redux/slices/articlesSlice';

const SearchBar = () => {
    const dispatch = useDispatch();

    const handleSearch = (e) => {
        dispatch(setSearchQuery(e.target.value));
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search for articles..."
                onChange={handleSearch}
            />
        </div>
    );
};

export default SearchBar;