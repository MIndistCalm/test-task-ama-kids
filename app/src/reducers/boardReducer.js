const defaultState = {
	board: [
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0],
	],
};

const boardReducer = (state = defaultState, action) => {
	switch (action.type) {
		case "SHOW_BOARD":
			return { ...state, board: state.board = action.payload };
		// case "START_BOARD":
		// 	return { ...state, board: state.board = action.payload };
		default:
			return state;
	}
};

export default boardReducer;
