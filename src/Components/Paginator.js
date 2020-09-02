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
    const { currentPage, setPage, pageCount } = this.props;

    return (
      <nav>
        <ul className="pagination">
          <li className="page-item">
            <button className="page-link">Previous</button>
          </li>
          {this.paginatorRange(currentPage, currentPage+9).map(page => {
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
            <button className="page-link">Next</button>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Paginator;