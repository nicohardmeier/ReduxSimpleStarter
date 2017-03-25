import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book.js';


// Everything inside below obj goes on the APPLICATION STATE
const rootReducer = combineReducers({
	books: BooksReducer,
	activeBook: ActiveBook
});

export default rootReducer;
