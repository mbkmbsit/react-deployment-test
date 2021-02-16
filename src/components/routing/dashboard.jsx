import React from 'react';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import Posts from './posts';
import Users from './users';
const Dashboard = () => {
	return (
		<div>
			Dashboard
			<ul>
				<li>
					<Link to="/admin/posts">Post</Link>
				</li>
				<li>
					<Link to="/admin/users">Users</Link>
				</li>
			</ul>
			<Route path="/admin/users" component={Users} />
			<Route path="/admin/posts" component={Posts} />
		</div>
	);
};

export default Dashboard;
