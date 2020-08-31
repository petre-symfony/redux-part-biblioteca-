import React from 'react';
import { connect } from 'react-redux';
import BookList from './BookList';
import { fetchBooksList, fetchBookListPage } from '../actions';
import Paginator from "./Paginator";

class BookListContainer extends React.Component{
  componentDidMount() {
    this.props.fetchBooksList();
  }

  render() {
    const { books, currentPage, fetchBookListPage } = this.props;

    return (
      <React.Fragment>
        <BookList books={books} />
        <Paginator currentPage={currentPage} pageCount={10} setPage={fetchBookListPage}/>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state.bookListReducer
})

export default connect(
  mapStateToProps,
  { fetchBooksList, fetchBookListPage }
)(BookListContainer);