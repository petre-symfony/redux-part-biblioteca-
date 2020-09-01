import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './css/BookList.css';

class BookList extends React.Component {
  render(){
    const { books } = this.props;

    return (
      <React.Fragment>
          {books && books.map(book => (
            <div className="card m-2 book">
              <p>{book.name}</p>
              {book.subject && <p>{book.subject}</p>}
              <div className="card-body d-flex flex-column content">
                <div className="book-location-editors-details-container">
                  <div className="card book-location-editors-container">
                    { book.location && (
                      <div className="card book-location">
                        <p>Locatie</p>
                        <div className="card-body">
                          <p>{book.location}</p>
                        </div>
                      </div>
                    )}
                    {book.publishers.length !== 0 && (
                      <div className="card book-editors">
                        <p>Editori</p>
                        <div className="card-body">
                          <ul className="list-group list-group-flush">
                            {book.publishers.map(publisher => (
                              <li className="list-group-item">{publisher.Name}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                    { book.Content ?
                      <a href="#" className="btn btn-success">Vezi detalii de continut</a> :
                      <div className="btn btn-primary">Nu are detalii de continut</div>
                    }
                  </div>
                  <div className="card book-details">
                    <p>Detalii</p>
                    <div className="card-body">
                      <ul className="list-group">
                        {book.firstPublishedYear &&
                          <li className="list-group-item">Prima aparitie: {book.firstPublishedYear}</li>
                        }
                        {book.bookPublishedYear &&
                          <li className="list-group-item">Carte publicata in anul: {book.bookPublishedYear}</li>
                        }
                        {book.volume &&
                          <li className="list-group-item">Volum: {book.volume} --- {book.complete ? ' Avem toate volumele' : ' Nu avem toate volumele'}</li>
                        }
                        {book.pages &&
                        <li className="list-group-item">{book.pages} pagini</li>
                        }
                        {(() => {
                          if (book.missingPages && book.missingPages === 'NONE'){
                            return (<li className="list-group-item">Nu lipseste nici o pagina</li>)
                          } else if( book.missingPages && book.missingPages === 'n/a') {
                            return (<li className="list-group-item">Nu cunosc cate pagini lipsesc</li>)
                          } else if (book.missingPages){
                            return (<li className="list-group-item">Lipses {book.missingPages} pagini</li>)
                          }
                        })()}
                        {book.format &&
                          <li className="list-group-item">Format: {book.format}</li>
                        }
                        {book.ISBN &&
                          <li className="list-group-item">ISBN: {book.ISBN}</li>
                        }
                        {book.other &&
                          <li className="list-group-item">{book.other}</li>
                        }
                        {book.language &&
                          <li className="list-group-item">Scrisa in limba {book.language}</li>
                        }
                      </ul>
                    </div>
                  </div>
                </div>
                {book.authors.length !== 0 && (
                  <div className="card book-authors">
                    <p>Authors</p>
                    <div className="card-body">
                      <ul className="list-group">
                        {book.authors.map(author => <li className="list-group-item">{author.fullName}</li>)}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
      </React.Fragment>
    );
  }
}

export default BookList;