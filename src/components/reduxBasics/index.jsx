// STORE : global state
// ACTION : increment, decrement
// REDUCE : transform store based on action selected
// DISPATCH : execute the action to reducer
/*
import { createStore } from 'redux';

// ACTION
const increment = () => {
	return { type: 'INCREMENT' };
};
const decrement = () => {
	return { type: 'DECREMENT' };
};

//REDUCER
const counter = (state = 0, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return state + 1;
		case 'DECREMENT':
			return state - 1;
		default:
			return state;
	}
};

let store = createStore(counter);

//DISPLAY
store.subscribe(() => console.log('store.getState():', store.getState()));

//DISPATCH
store.dispatch(increment());

*/

import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import allReducers from './reducers';
import MyApp from './myApp';

let store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
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
