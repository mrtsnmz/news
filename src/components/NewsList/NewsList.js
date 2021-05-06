import React, {useEffect, useState} from 'react';
import NewsCard from '../NewsCard';
import * as MdIcons from 'react-icons/md';

const NewsList = (props) => {
	const [fav, setFav] = useState(false);

	const changeFav = () => {
		if (fav) {
			setFav(!fav);
			localStorage.removeItem(`${props.companyId}`);
		} else {
			setFav(!fav);
			localStorage.setItem(`${props.companyId}`, `${props.companyId}`);
		}
	}

	useEffect(() => {
		if (props.isFav) {
			setFav(true);
		} else {
			setFav(false);
		};
	}, [props.isFav])

	return (
		<>
			{props.showFav ?
				<h1>{props.title} <span onClick={changeFav}>{fav ? <MdIcons.MdFavorite /> : <MdIcons.MdFavoriteBorder />}</span></h1> :
				<h1>{props.title}</h1>}
			<div className="article-list">
				{props.articles ? props.articles.map((article, index) => {
					return (
						<NewsCard key={index} article={article}/>
					)
				}): ''}
			</div>
		</>
	)
}

export default NewsList;