import React from 'react';
import { useNavigate } from 'react-router-dom';
import FavoriteButton from './FavoriteButton';

const ArticleCard = ({ article }) => {
    const navigate = useNavigate();

    const handleReadMore = () => {
        navigate(`/article/${encodeURIComponent(article.title)}`, { state: { article } });
    };

    return (
        <div className="article-card">
            <img src={article.urlToImage} alt={article.title} height={200} width={295}/>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <button onClick={handleReadMore}>Read more</button>
            <FavoriteButton article={article} />
        </div>
    );
};

export default ArticleCard;
