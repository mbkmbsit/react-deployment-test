// const counterReducer = (state = 0, action) => {
// 	switch (action.type) {
// 		case 'INCREMENT':
// 			return state + 1;
// 		case 'DECREMENT':
// 			return state - 1;
// 		case 'ADD':
// 			return state + action.value;
// 		case 'SUB':
// 			return state - action.value;
// 		default:
// 			return state;
// 	}
// };
const counterReducer = (state = { counter: 0, results: [] }, action) => {
	switch (action.type) {
		case 'INCREMENT':
			let newState = Object.assign({}, state);
			newState.counter = state.counter + 1;
			return newState;
		case 'DECREMENT':
			return {
				...state,
				counter: state.counter - 1
			};
		case 'ADD':
			return {
				...state,
				counter: state.counter + action.value
			};
		case 'SUB':
			return {
				...state,
				counter: state.counter - action.value
			};
		case 'STORE_RESULT':
			return {
				...state,
				results: state.results.concat(state.counter)
			};
		case 'DELETE_RESULT':
			return {
				...state,
				// results: state.results.filter((item, index) => item.id !== action.id)
				results: state.results.filter((item, index) => index !== action.index)
			};
		default:
			return state;
	}
};
export default counterReducer;
