import {
  BOOK_LIST_REQUEST,
  BOOK_LIST_RECEIVED,
  BOOK_LIST_ERROR,
  BOOK_LIST_SET_PAGE
}from '../actions/types';

export default (state = {
  books: null,
  isFetching: true,
  currentPage: 1,
  pageCount: null
}, action) => {
  switch (action.type) {
    case BOOK_LIST_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case BOOK_LIST_RECEIVED:
      return {
        ...state,
        books: action.books['hydra:member'],
        isFetching: false
      }
    case BOOK_LIST_ERROR:
      return {
        ...state,
        books: null,
        isFetching: false
      }
    case BOOK_LIST_SET_PAGE:
      return {
        ...state,
        currentPage: action.page,
      }
    default:
      return state;
  }
}