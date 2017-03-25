// ALL reducers get TWO default args: STATE and ACTION
// STATE arg is *NOT* APP state, but *THIS REDUCER'S* STATE


export default function(state = null, action) {
	// ^^^^ DEFAULT `state` to `null` bc YOU CAN'T RETURN `undefined` from REDUCER

	switch(action.type) {
		case 'BOOK_SELECTED': return action.payload;
	}

	return state;
}
