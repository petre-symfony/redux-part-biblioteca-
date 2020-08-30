import React from 'react';
import ReactDom from 'react-dom';
import {createStore, compose} from 'redux';
import { Provider } from 'react-redux';
import App from './Components/App';
import reducers from './reducers';

const composerEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composerEnhancer());

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
)