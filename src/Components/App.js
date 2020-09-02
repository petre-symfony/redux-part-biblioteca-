import React from 'react';
import {Router, Route} from 'react-router-dom';
import history from '../history';
import BookListContainer from './BookListContainer';

class App extends React.Component {
  render(){
    return (
      <Router history={history}>
        <Route path="/:page(\d+)?/:author?" exact component={BookListContainer}/>
      </Router>
    )
  }
}

export default App;