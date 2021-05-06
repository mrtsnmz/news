import React, {useState, useEffect} from 'react';
import NewsList from '../components/NewsList';

const Home = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
		async function fetchArticles() {
			const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=18cd1d40614f4e3aaaf5e34b7d60ad0b');
			const body = await response.json();
			setArticles(body.articles);
		}
		fetchArticles();
	}, [])
    
    return (
        <div className='home'>
            <NewsList articles={articles} title="Breaking News" showFav={false} />
        </div>
    )
}

export default Home;