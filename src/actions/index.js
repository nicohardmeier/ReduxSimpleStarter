// `selectBook` is an ACTION CREATOR => must RETURN an ACTION
// ACTION: An object with a TYPE property and often a PAYLOAD
// e.g. { type: BOOK_SELECTED, payload: payload }

export function selectBook(book) {
	return {
		type: 'BOOK_SELECTED',
		payload: book
	};
}
