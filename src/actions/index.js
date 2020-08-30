import { BOOK_LIST } from './types';

export const fetchBooks = () => {
  return {
    type: BOOK_LIST,
    payload: [
      {
        id: 7,
        name: 'Poezii'
      },
      {
        id: 8,
        name: 'Teatru'
      }
    ]
  }
}