import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCategory } from '../redux/slices/articlesSlice';

const categories = ['general', 'business', 'technology', 'entertainment'];

const CategoryFilter = () => {
    const dispatch = useDispatch();
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleCategoryChange = (category) => {
        dispatch(setCategory(category));
        setSelectedCategory(category);
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="category-filter">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => handleCategoryChange(category)}
                        className={`category-button ${selectedCategory === category ? 'selected' : ''}`}
                    >
                        {category}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default CategoryFilter;