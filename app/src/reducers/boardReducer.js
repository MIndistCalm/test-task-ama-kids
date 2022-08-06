const defaultState = {
	board: [
		[0, 2, 3, 0],
		[2, 2, 1, 0],
		[0, 0, 0, 0],
	],
};

const boardReducer = (state = defaultState, action) => {
	switch (action.type) {
		case "GET_BOARD":
			return { ...state };
		default:
			return state;
	}
};

export default boardReducer;
