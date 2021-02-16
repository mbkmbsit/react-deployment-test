import React, { Component } from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import allReducers from './reducers';
import MyApp from './myApp';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(allReducers, composeEnhancers(applyMiddleware(thunk)));
store.subscribe(() => console.log('store.getState():', store.getState()));

class ReduxBasic extends Component {
	render() {
		return (
			<Provider store={store}>
				<MyApp />
			</Provider>
		);
	}
}

export default ReduxBasic;
