import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.module.css';
const Navbar = () => {
	return (
		<div>
			<ul className="nav nav-tabs">
				<li className="nav-item">
					<NavLink className="nav-link" to="/">
						Home
					</NavLink>
				</li>
				<li className="nav-item">
					<NavLink className="nav-link" to="/products">
						Products
					</NavLink>
				</li>
				<li className="nav-item">
					<NavLink className="nav-link" to="/post/:id">
						Posts
					</NavLink>
				</li>
				<li className="nav-item">
					<NavLink className="nav-link" to="/admin">
						Admin
					</NavLink>
				</li>
				<li className="nav-item">
					<a className="nav-link disabled" href="#">
						Disabled
					</a>
				</li>
				<li className="nav-item">
					<div className="div">
						<a className="nav-link" href="#">
							testing
						</a>
					</div>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
