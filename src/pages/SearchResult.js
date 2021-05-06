import React, {useState, useEffect} from 'react';
import NewsList from '../components/NewsList';
import { useParams } from "react-router-dom";

const SearchResult = () => {
    let { value } = useParams();
    const [articles, setArticles] = useState([]);

    useEffect(() => {
		async function fetchArticles() {
			const response = await fetch(`https://newsapi.org/v2/everything?q=${value}&apiKey=ae9b9dc051ee4b0fa9867ba0521e8852`);
			const body = await response.json();
			setArticles(body.articles);
		}
		fetchArticles();
	}, [value])
    
    return (
        <div className='home'>
            <NewsList articles={articles} title={`Search Results for '${value}' :`} showFav={false}/>
        </div>
    )
}

export default SearchResult;