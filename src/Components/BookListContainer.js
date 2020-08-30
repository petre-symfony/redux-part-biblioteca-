import React from 'react';
import { connect } from 'react-redux';
import BookList from './BookList';
import { fetchBooks } from '../actions';

class BookListContainer extends React.Component{
  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const { books } = this.props;

    return (
      <BookList books={books} />
    )
  }
}

const mapStateToProps = (state) => ({
  ...state.bookListReducer
})

export default connect(
  mapStateToProps,
  { fetchBooks }
)(BookListContainer);