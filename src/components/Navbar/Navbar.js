import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import './Navbar.css';
import { IconContext } from 'react-icons';


const Navbar = () => {
	const history = useHistory();
	const [sidebar, setSidebar] = useState(false);
	const [sidebarData, setSidebarData] = useState([]);

	const showSidebar = () => setSidebar(!sidebar);

	useEffect(() => {
		async function fetchSources() {
			const response = await fetch('https://newsapi.org/v2/sources?apiKey=18cd1d40614f4e3aaaf5e34b7d60ad0b');
			const body = await response.json();
			for (const item of body.sources) {
				let minFavIndex = 1;
				let maxFavIndex = 999;
				if (localStorage.getItem(item.id) === null) {
					item.favIndex = maxFavIndex--;
				} else {
					item.favIndex = minFavIndex++;
				}
			}
			setSidebarData(body.sources);
		}
		fetchSources();
	}, [])

	const sortArray = (array) => {
		return array.sort((a, b) => (a.favIndex > b.favIndex) ? 1 : -1);
	}

	return (
		<IconContext.Provider value={{ color: '#fff' }}>
			<div className='navbar'>
				<Link to='#' className='menu-bars'>
					<FaIcons.FaBars onClick={showSidebar} />
				</Link>
				<input placeholder="Type and hit enter for search..." onKeyDown={(event) => {
					if (event.key === 'Enter') {
						history.push(`/search/${event.target.value}`)
					}
				}
				}></input>
			</div>
			<nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
				<ul className='nav-menu-items' onClick={showSidebar}>
					<li className='navbar-toggle'>
						<Link to='#' className='menu-bars'>
							<AiIcons.AiOutlineClose />
						</Link>
					</li>
					<li className='nav-text'>
						<Link to='/'>
							<AiIcons.AiFillHome />
							<span>Home Page</span>
						</Link>
					</li>
					{sortArray(sidebarData).map((item, index) => {
						return (
							<li key={index} className='nav-text'>
								<Link to={`/news/${item.id}`}>
									<IoIcons.IoIosPaper />
									<span>{item.name}</span>
								</Link>
							</li>
						)
					})}
				</ul>
			</nav>
		</IconContext.Provider>
	)
}

export default Navbar;