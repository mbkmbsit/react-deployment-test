import counterReducer from './counterReducer';
import loggedReducer from './logedInReducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
	counterR: counterReducer,
	isLoggedR: loggedReducer
});

export default allReducers;
