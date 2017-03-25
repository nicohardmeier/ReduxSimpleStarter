import React, { Component } from 'react';
import { connect } from 'react-redux'; // Connects REACT to REDUX
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux'; // Makes sure action from `selectBook` flows through all reducers


// CONTAINER: A component with direct access to REDUX STATE
// i.e. A component that is BONDED to APP STATE

// `render` creates a <ul> that calls `this.renderList()`
// renderList maps over an array of books and for each book creates an <li> with the book title


class BookList extends Component {

	renderList() {
		return this.props.books.map(book => {
			return (
				<li
					key={book.title}
					onClick={ () => this.props.selectBook(book) }
					className="list-group-item"
				>
					{book.title}
				</li>
			);
		});
	}

	render() {
		return (
			<ul className="list-group col-sm-4">
				{ this.renderList() }
			</ul>
		)
	}
}



function mapStateToProps(state) {
	// Takes APPLICATION's STATE as an argument
	// Returns object that becomes `BookList`'s `props`
	return {
		books: state.books
	};
	// ☝️ this function is the GLUE between React and Redux
}


// Anything this function RETURNS becomes BookList CONTAINER's PROPS
function mapDispatchToProps(dispatch) {
	return bindActionCreators({ selectBook }, dispatch); // i.e. now we can call the `this.props.selectBook()` action creator
	// ^^^^ Whenever `selectBook` is called, passes result to ALL REDUCERS
}


// `connect` takes a `function` and `component`
// creates a container -- a COMPONENT that is AWARE of REDUX STATE
// Adding `mapDispatchToProps` is what makes it availalbe as a PROP
export default connect(mapStateToProps, mapDispatchToProps)(BookList);

// ^^^^ This container will AUTOMATICALLY INTSTANTLY RE-RENDER whenever APP STATE CHANGES
// When it re-renders the object `mapStateToProps` returns will be RE-ASSIGNED as PROPS to the CONTAINER