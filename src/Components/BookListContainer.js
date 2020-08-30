import React from 'react';
import { connect } from 'react-redux';
import BookList from './BookList';
import { fetchBooks } from '../actions';
import requests from "../agent";

class BookListContainer extends React.Component{
  componentDidMount() {
    requests.get('/books').then(response => console.log(response));
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