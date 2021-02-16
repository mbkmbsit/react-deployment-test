import { Link } from 'react-router-dom';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import Navbar from './navbar';
import Home from './home';
import Products from './products';
import ProductDetails from './productDetails';
import Posts from './posts';
import Dashboard from './dashboard';
import NotFound from './notFound';

const Routing = () => {
	return (
		<Router>
			<Navbar />
			<Switch>
				{/* <Route path="/products" component={Products} /> */}
				{/*  */}
				{/* <Route path="/products" render={() => <Products sortBy="newest" />} /> */}
				{/* custom prop with default pass: */}
				<Route path="/products" exact render={(props) => <Products sortBy="newest" {...props} />} />
				{/* pragmatic redirect */}
				<Route path="/products/:id?" render={(props) => <ProductDetails sortBy="newest" {...props} />} />

				{/* <Route path="/post" component={Posts} /> */}
				{/* optional parameters */}
				<Route path="/post/:year?/:month?" component={Posts} />

				<Route path="/admin" component={Dashboard} />
				<Route path="/" exact component={Home} />
				<Route path="/not-found" component={NotFound} />
				<Redirect to="/not-found" />
			</Switch>
		</Router>
	);
};
export default Routing;
