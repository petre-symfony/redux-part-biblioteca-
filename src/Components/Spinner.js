import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import './css/Spinner.css';

class Spinner extends React.Component {
  render() {
    const element = <FontAwesomeIcon icon={faSpinner} size="10x" spin/>;

    return (
      <div className="card">
        <div className="card-body">
          {element}
        </div>
      </div>
    )
  }
}

export default Spinner;