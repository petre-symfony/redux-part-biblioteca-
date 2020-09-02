import {
  BOOK_LIST_REQUEST,
  BOOK_LIST_RECEIVED,
  BOOK_LIST_ERROR,
  BOOK_LIST_SET_PAGE,
  BOOK_LIST_SET_AUTHOR
}from '../actions/types';
import { hydraPageCount } from '../apiUtils';

export default (state = {
  books: null,
  isFetching: true,
  currentPage: 1,
  pageCount: null,
  author: 'All'
}, action) => {
  switch (action.type) {
    case BOOK_LIST_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case BOOK_LIST_RECEIVED:
      console.log('From reducer:', action.books['hydra:member']);
      return {
        ...state,
        books: action.books['hydra:member'],
        pageCount: hydraPageCount(action.books),
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
    case BOOK_LIST_SET_AUTHOR:
      return {
        ...state,
        author: action.author
      }
    default:
      return state;
  }
}