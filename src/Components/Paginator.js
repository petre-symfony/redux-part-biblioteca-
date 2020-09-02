import React from 'react';
import classNames from 'classnames';

class Paginator extends React.Component {
  paginatorRange(start, end){
    const range = [];
    for(let i=start; i<=end; i++){
      range.push(i);
    }
    return range;
  }

  render(){
    const { currentPage, setPage, pageCount, prevPage, nextPage, firstPage, lastPage } = this.props;

    return (
      <nav>
        <ul className="pagination">
          <li className="page-item">
            <button className="page-link" onClick={firstPage} disabled={currentPage <= 1}>First</button>
          </li>
          <li className="page-item">
            <button className="page-link" onClick={prevPage} disabled={currentPage <= 1}>Previous</button>
          </li>
          {this.paginatorRange(currentPage, currentPage+10).map(page => {
            const onClick = (event) => {
              event.preventDefault();
              setPage(page);
            }
            if (page <= pageCount){
              return (
                <li key={page} className={classNames('page-item', {active: currentPage === page})}>
                  <button className="page-link" onClick={onClick}>{page}</button>
                </li>
              )
            }
          })}
          <li className="page-item">
            <button className="page-link" onClick={nextPage} disabled={currentPage >= pageCount}>Next</button>
          </li>
          <li className="page-item">
            <button className="page-link" onClick={lastPage} disabled={currentPage >= pageCount}>Last</button>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Paginator;