import React, {useState, useEffect} from 'react';
import NewsList from '../components/NewsList';
import { useParams } from "react-router-dom";

const SearchResult = () => {
    let { value } = useParams();
    const [articles, setArticles] = useState([]);

    useEffect(() => {
		async function fetchArticles() {
			const response = await fetch(`https://newsapi.org/v2/everything?q=${value}&apiKey=18cd1d40614f4e3aaaf5e34b7d60ad0b`);
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