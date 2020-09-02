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

  render() {
    const { books, isFetching, currentPage, pageCount, bookListSetPage } = this.props;

    if (isFetching){
      return <Spinner />
    }
    
    return (
      <React.Fragment>
        <BookList books={books} />
        <Paginator currentPage={currentPage} pageCount={pageCount} setPage={this.changePage}/>
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