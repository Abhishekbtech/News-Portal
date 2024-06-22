import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const ArticleDetail = () => {
    const location = useLocation();
    const { article } = location.state || {};

    if (!article) {
        return (
            <div className="error-message">
                <h2>Article not found</h2>
                <p>We couldn't find the article you were looking for.</p>
                <Link to="/">Go back to the homepage</Link>
            </div>
        );
    }

    return (
        <div className="article-detail">
            <h1>{article.title}</h1>
            <img src={article.urlToImage} alt={'No Image Found'} style={{ width: '100%', height: '100%' }} />
            <p>Author Name: {article.author}</p>
            <p>{article.description}</p>
            <p>{article.content}</p>
            <p>Detail News Link : <a href={article.url} target='_blank'>{article.source.name}</a></p>
        </div>
    );
};

export default ArticleDetail;