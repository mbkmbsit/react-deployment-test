import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import ProductDetails from './productDetails';

const Products = () => {
	return (
		<div>
			products
			<ul>
				<li>
					<Link to="/products/1">Product 1</Link>
				</li>
				<li>
					<Link to="/products/2">Product 2</Link>
				</li>
				<li>
					<Link to="/products/3">Product 3</Link>
				</li>
				<li>
					<Link to="/products/4">Product 4</Link>
				</li>
			</ul>
		</div>
	);
};
export default Products;
