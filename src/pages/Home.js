import React, {useState, useEffect} from 'react';
import NewsList from '../components/NewsList';

const Home = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
		async function fetchArticles() {
			const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=ae9b9dc051ee4b0fa9867ba0521e8852');
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