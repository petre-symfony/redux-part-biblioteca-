import React from 'react';

class BookList extends React.Component {
  render(){
    const { books } = this.props;

    return (
      <div>
        <ul>
          {books && books.map(book => <li key={book.id}>{book.name}</li>)}
        </ul>
      </div>
    );
  }
}

export default BookList;