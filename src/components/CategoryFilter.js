import React from 'react';
import { useDispatch } from 'react-redux';
import { setCategory } from '../redux/slices/articlesSlice';

const categories = ['general', 'business', 'technology', 'entertainment'];

const CategoryFilter = () => {
    const dispatch = useDispatch();

    const handleCategoryChange = (category) => {
        dispatch(setCategory(category));
    };

    return (
        <div className="category-filter">
            {categories.map((category) => (
                <button key={category} onClick={() => handleCategoryChange(category)}>
                    {category}
                </button>
            ))}
        </div>
    );
};

export default CategoryFilter;