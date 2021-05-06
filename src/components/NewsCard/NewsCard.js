import React from 'react';
import './NewsCard.css';
import logo from '../../assets/default_img.png';

const NewsCard = (props) => {

    const truncateString = (str, num) =>
        str && str.length > num ? str.slice(0, num > 3 ? num - 3 : num) + '...' : str;

    return (
        <div className="news-card">
            <img src={props.article.urlToImage} onError={(e) => {e.target.src = logo}} alt="cover"></img>
            <div className="container">
                <h4><b>{truncateString(props.article.title, 50)}</b></h4>
                <p>{truncateString(props.article.description, 100)}</p>
            </div>
        </div>
    )
}

export default NewsCard;