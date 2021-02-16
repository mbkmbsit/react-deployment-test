import React, { Component } from 'react';

export default class NavBar extends Component {
	render() {
		return (
			<div>
				{console.log(this.props.totalCounters)}
				<nav className="navbar navbar-dark bg-dark">
					<a href="#" className="navbar-brand">
						NavBar
						<span className="badge badge-pill badge-secondary">{this.props.totalCounters}</span>
					</a>
					<a href="#" className="navbar-brand">
						<h1>mohd bilal</h1>
					</a>
				</nav>
			</div>
		);
	}
}
