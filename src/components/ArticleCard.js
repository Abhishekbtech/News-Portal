import React from 'react';
import { Link } from 'react-router-dom';
import FavoriteButton from './FavoriteButton';

const ArticleCard = ({ article }) => (
    <div className="article-card">
        <img src={article.urlToImage} alt={article.title} height={200} width={295}/>
        <h2>{article.title}</h2>
        <p>{article.description}</p>
        <Link to={`/article/${encodeURIComponent(article.title)}`}>Read more</Link>
        <FavoriteButton article={article} />
    </div>
);

export default ArticleCard;