import * as actionTypes from './actionTypes';

export const increament = () => {
	return { type: actionTypes.INCREMENT };
};

export const decreament = () => {
	return {
		type: actionTypes.DECREMENT
	};
};

export const add = (value) => {
	return {
		type: actionTypes.ADD,
		value: value
	};
};

export const sub = (value) => {
	return {
		type: actionTypes.SUB,
		value: value
	};
};

export const saveResult = (res) => {
	return {
		type: actionTypes.STORE_RESULT,
		result: res
	};
};
export const storeResult = (res) => {
	return (dispatch, getState) => {
		setTimeout(() => {
			const oldValue = getState().storedResults; //need to verify
			dispatch(saveResult(res));
		}, 2000);
	};
};

export const deleteResult = (index) => {
	return {
		type: actionTypes.DELETE_RESULT,
		index: index
	};
};
