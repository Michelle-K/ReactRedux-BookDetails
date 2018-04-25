import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li
                    onClick={() => this.props.selectBook(book)}
                    key={book.title}
                    className="list-group-item">
                    {book.title}
                </li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
            )
    }
}

function mapStateToProps(state) {
    //Whatever is returned here will show up as props inside of BookList
    return {
        books: state.books
    };
}

//anything returned from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
    //whenever selectBook is called, the result should be passed to all of our reducers 
    //or- the result of selectBook will get dispatched or flows through all of the reducers
    return bindActionCreators({ selectBook: selectBook }, dispatch)
}

//Promote BookList from a component to a container - it needs to know about his new dispatch methdod, SelectBook. Make it available as a prop.
//look up redux docs for ways to use connect
export default connect(mapStateToProps, mapDispatchToProps)(BookList);