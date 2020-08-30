import React from 'react';
import { connect } from 'react-redux';
import BookList from './BookList';
import { fetchBooksList } from '../actions';

class BookListContainer extends React.Component{
  componentDidMount() {
    this.props.fetchBooksList();
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
  { fetchBooksList }
)(BookListContainer);