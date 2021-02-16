import React, { Component, Fragment } from 'react';
import Routing from './components/routing';
// import TodoApps from './components/todo/todos';
//import MoviesIndex from './components/movies';
//import Ecommerce from './components/eCommerse3';
import ReduxBasic from './components/reduxBasics';
import ReduxBasicThunk from './components/reduxBasicsThunk';

// import logger from './services/logService';
// logger.init();

export default class App extends Component {
	render() {
		return (
			<Fragment>
				{/* <Routing />
				<TodoApps /> */}
				{/* <MoviesIndex /> */}
				{/* <Ecommerce /> */}
				 <ReduxBasic /> 
      {/* <ReduxBasicThunk /> */}
			</Fragment>
		);
	}
}
