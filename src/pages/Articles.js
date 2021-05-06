import React, {useState, useEffect} from 'react';
import NewsList from '../components/NewsList';
import { useParams } from "react-router-dom";

const Articles = () => {
    let { id } = useParams();
    const [articles, setArticles] = useState([]);
    const [title, setTitle] = useState("");
    const [coId, setCoId] = useState("");

    useEffect(() => {
        async function fetchArticles() {
            const response = await fetch(`https://newsapi.org/v2/everything?sources=${id}&apiKey=18cd1d40614f4e3aaaf5e34b7d60ad0b`);
            const body = await response.json();
            if (body.articles.length > 0) {
                setArticles(body.articles);
                setTitle(body.articles[0].source.name);
                setCoId(body.articles[0].source.id);
            }
        }
		fetchArticles();
	}, [id])
    
    return (
        <div className='home'>
            <NewsList articles={articles} title={`${title} - News`} showFav={true}
            isFav={localStorage.getItem(coId) === null ? false : true} companyId={id}/>
        </div>
    )
}

export default Articles;