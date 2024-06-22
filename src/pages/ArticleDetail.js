import React from 'react';
import { useParams } from 'react-router-dom';

const ArticleDetail = () => {
    const { title } = useParams();

    return (
        <div className="article-detail">
            <h1>{title}</h1>
            {/* Implement the detailed view of the article */}
        </div>
    );
};

export default ArticleDetail;