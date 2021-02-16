const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const ADD = 'ADD';
const SUB = 'SUB';
const STORE_RESULT = 'STORE_RESULT';
const DELETE_RESULT = 'DELETE_RESULT';
const counterReducer = (state = { counter: 0, results: [] }, action) => {
	switch (action.type) {
		case INCREMENT:
			let newState = Object.assign({}, state);
			newState.counter = state.counter + 1;
			return newState;
		case DECREMENT:
			return {
				...state,
				counter: state.counter - 1
			};
		case ADD:
			return {
				...state,
				counter: state.counter + action.value
			};
		case SUB:
			return {
				...state,
				counter: state.counter - action.value
			};
		case STORE_RESULT:
			return {
				...state,
				results: state.results.concat(state.counter)
			};
		case DELETE_RESULT:
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
