import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../redux/slices/articlesSlice';

const Pagination = () => {
    const dispatch = useDispatch();
    const { page } = useSelector((state) => state.articles);

    const handlePageChange = (newPage) => {
        dispatch(setPage(newPage));
    };

    return (
        <div className="pagination">
            <button disabled={page === 1} onClick={() => handlePageChange(page - 1)}>
                Previous
            </button>
            <span style={{marginTop:5, padding:10}}>Page {page}</span>
            <button onClick={() => handlePageChange(page + 1)}>Next</button>
        </div>
    );
};

export default Pagination;