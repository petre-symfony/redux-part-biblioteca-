import React from 'react';
import { connect } from 'react-redux';
import BookList from './BookList';
import { fetchBooksList } from '../actions';
import Paginator from "./Paginator";

class BookListContainer extends React.Component{
  componentDidMount() {
    this.props.fetchBooksList();
  }

  render() {
    const { books } = this.props;

    return (
      <React.Fragment>
        <BookList books={books} />
        <Paginator currentPage={1} pageCount={10}/>
      </React.Fragment>
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