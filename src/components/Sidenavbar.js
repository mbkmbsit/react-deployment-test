import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { sidebarData } from './sidebarData';
import './sidenavbar.css';
import { IconContext } from 'react-icons';

function Sidenavbar() {
	const [ sidebar, setSidebar ] = useState(false);
	const showSidebar = () => setSidebar(!sidebar);
	return (
		<div>
			<IconContext.Provider value={{ color: '#fff' }}>
				<div className="navbar">
					<Link to="#" className="menu-bar">
						<FaIcons.FaBars onClick={showSidebar} />
					</Link>
				</div>
				<nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
					<ul className="nav-menu-items" onClick={showSidebar}>
						<li className="navbar-toggle">
							<Link to="#" className="menu-bars">
								<AiIcons.AiOutlineClose />
							</Link>
						</li>
						{sidebarData.map((item, index) => {
							return (
								<li key={index} className={item.cName}>
									<Link to={item.path}>
										{item.icon}
										<span>{item.title}</span>
									</Link>
								</li>
							);
						})}
					</ul>
				</nav>
			</IconContext.Provider>
		</div>
	);
}

export default Sidenavbar;

rfc;
