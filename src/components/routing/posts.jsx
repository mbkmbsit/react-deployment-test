import React from 'react';
import queryString from 'query-string';
const Posts = ({ match, location }) => {
	const res = queryString.parse(location.search);
	console.log(res);
	// const resp = queryString.parseUrl(location.search);
	// console.log(resp);
	return (
		<div>
			<div>Posts: http://localhost:3000/post/45/12?sortBy=newest&test=testing&eee=1234</div>
			<div>year:{match.params.year}</div>
			month:{match.params.month}
			<div>res:{JSON.stringify(res)}</div>
		</div>
	);
};
export default Posts;
