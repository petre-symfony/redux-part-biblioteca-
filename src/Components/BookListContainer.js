import React from 'react';
import { connect } from 'react-redux';
import BookList from './BookList';
import { fetchBooksList, bookListSetPage } from '../actions';
import Paginator from "./Paginator";
import Spinner from "./Spinner";

class BookListContainer extends React.Component{
  componentDidMount() {
    this.props.fetchBooksList(this.getQueryParamPage());
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const {currentPage, fetchBooksList, bookListSetPage } = this.props;

    if (prevProps.currentPage !== currentPage){
      fetchBooksList(currentPage);
    }

    if(prevProps.match.params.page !== this.getQueryParamPage()){
      bookListSetPage(this.getQueryParamPage());
    }
  }

  getQueryParamPage = () => {
    return Number(this.props.match.params.page) || 1;
  }

  changePage = (page) => {
    const {history, bookListSetPage} = this.props;

    bookListSetPage(page);
    history.push(`/${page}`);
  }

  onNextPageClick = () => {
    const {currentPage, pageCount} = this.props;
    const newPage =  Math.min(currentPage+1, pageCount);

    this.changePage(newPage);
  }

  onPrevPageClick = () => {
    const {currentPage, pageCount} = this.props;
    const newPage = Math.max(currentPage-1, 1);

    this.changePage(newPage)
  }

  onFirstPageClick = () => {
    this.changePage(1)
  }

  onLastPageClick = () => {
    const {pageCount} = this.props;

    this.changePage(pageCount)
  }

  render() {
    const { books, isFetching, currentPage, pageCount, bookListSetPage } = this.props;

    if (isFetching){
      return <Spinner />
    }
    
    return (
      <React.Fragment>
        <BookList books={books} />
        <Paginator
          currentPage={currentPage}
          pageCount={pageCount}
          setPage={this.changePage}
          nextPage={this.onNextPageClick}
          prevPage={this.onPrevPageClick}
          firstPage={this.onFirstPageClick}
          lastPage={this.onLastPageClick}
        />
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state.bookListReducer
})

export default connect(
  mapStateToProps,
  { fetchBooksList, bookListSetPage }
)(BookListContainer);