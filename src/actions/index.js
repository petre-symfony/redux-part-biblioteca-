import {
  BOOK_LIST_RECEIVED,
  BOOK_LIST_ERROR,
  BOOK_LIST_SET_PAGE,
  BOOK_LIST_SET_AUTHOR
} from './types';
import requests from "../agent";


export const fetchBooksList = (page = 1, options = {
  author: 'All'
}) => dispatch => {
  let url;
  if(options.author === 'All'){
    url = `/books?page=${page}`;
  } else {
    url = encodeURI(`/books?page=${page}&authors.fullName=${options.author}`);
  }
  return requests.get(url)
    .then(response => dispatch(bookListReceived(response)))
    .catch(error => dispatch(bookListError(error)))
}

export const bookListReceived = (books) => ({
  type: BOOK_LIST_RECEIVED,
  books
})

export const bookListError = (error) => ({
  type: BOOK_LIST_ERROR,
  error
})

export const bookListSetPage = (page) => ({
  type: BOOK_LIST_SET_PAGE,
  page
})

export const bookListSetAuthor = (author) => ({
  type: BOOK_LIST_SET_AUTHOR,
  author
})