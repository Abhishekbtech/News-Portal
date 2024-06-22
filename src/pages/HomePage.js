import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getArticles, selectFilteredArticles } from '../redux/slices/articlesSlice';
import ArticleList from '../components/ArticleList';
import CategoryFilter from '../components/CategoryFilter';
import Pagination from '../components/Pagination';
import SearchBar from '../components/SearchBar';
import { Link } from 'react-router-dom';

const HomePage = () => {
    const dispatch = useDispatch();
    const { category, page, status, error } = useSelector((state) => state.articles);
    const articles = useSelector(selectFilteredArticles);

    useEffect(() => {
        dispatch(getArticles({ category, page }));
    }, [dispatch, category, page]);

    return (
        <div className="home-page">
            <SearchBar />
            <button><Link to={'/favorites'}>Your Favorite News</Link></button>
            <CategoryFilter />
            {status === 'loading' && <p>Loading...</p>}
            {status === 'succeeded' && <ArticleList articles={articles} />}
            {status === 'failed' && <p>{error}</p>}
            <Pagination />
        </div>
    );
};

export default HomePage;
