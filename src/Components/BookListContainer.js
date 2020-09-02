import React from 'react';
import { connect } from 'react-redux';
import BookList from './BookList';
import { fetchBooksList, bookListSetPage, bookListSetAuthor } from '../actions';
import Paginator from "./Paginator";
import Spinner from "./Spinner";

class BookListContainer extends React.Component{
  componentDidMount() {
    if (typeof this.getQueryParamsAuthor() !== 'undefined'){
      this.props.bookListSetAuthor(this.getQueryParamsAuthor());
    } else {
      this.props.fetchBooksList(this.getQueryParamPage())
    };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const {currentPage, fetchBooksList, bookListSetPage, author } = this.props;

    console.log('Prev props author: ', prevProps.author);
    if (prevProps.currentPage !== currentPage){
      fetchBooksList(currentPage);
    }

    if(prevProps.match.params.page !== this.getQueryParamPage()){
      bookListSetPage(this.getQueryParamPage());
    }

    if(prevProps.author !== author){
      this.props.fetchBooksList(1, {
        author: this.getQueryParamsAuthor()}
      );
    }
  }

  getQueryParamPage = () => {
    return Number(this.props.match.params.page) || 1;
  }

  getQueryParamsAuthor = () => {
    return this.props.match.params.author;
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
    const { books, isFetching, currentPage, pageCount, bookListSetPage, author } = this.props;
    console.log(this.getQueryParamsAuthor(), author);
    console.log('From render:', this.props);
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
  { fetchBooksList, bookListSetPage, bookListSetAuthor }
)(BookListContainer);