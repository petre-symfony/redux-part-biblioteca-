import { BOOK_LIST }from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case BOOK_LIST:
      return {
        ...state,
        books: action.payload
      }
    default:
      return state;
  }
}