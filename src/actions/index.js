import {
  BOOK_LIST_RECEIVED,
  BOOK_LIST_ERROR,
  BOOK_LIST_SET_PAGE
} from './types';
import requests from "../agent";


export const fetchBooksList = () => dispatch => (
  requests.get('/books')
    .then(response => dispatch(bookListReceived(response)))
    .catch(error => dispatch(bookListError(error)))
)

export const bookListReceived = (books) => ({
  type: BOOK_LIST_RECEIVED,
  books
})

export const bookListError = (error) => ({
  type: BOOK_LIST_ERROR,
  error
})

export const fetchBookListPage = (page) => ({
  type: BOOK_LIST_SET_PAGE,
  page
})