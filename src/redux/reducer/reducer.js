let initialState = {
	num: 0,
};

function reducer(state = initialState, action) {
	console.log(action);
	// if (action.type === "INCREMENT") {
	// 	return { ...state, count: state.count + 1 };
	// } else if (action.type === "DECREASE") {
	// 	return { ...state, count: state.count - 1 };
	// }
	// return { ...state };

	switch (action.type) {
		case "INCREASE":
			return { ...state, num: state.num + action.payload.num };

		case "DECREASE": {
			return { ...state, num: state.num - action.payload.num };
		}
		default: {
			return { ...state };
		}
	}
}
export default reducer;
