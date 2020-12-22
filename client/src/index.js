import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { reducers } from './reducers'
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// import composeWithDevTools from 'redux-devtools-extension';
import reducer from './reducers'
// const store = createStore(reducers, compose(applyMiddleware(thunk)));

import store from './redux/store';
import Pricing from './components/Pricing';
import './index.css'

ReactDOM.render(
  // <Provider store={
  // createStore(reducer,
  // composeWithDevTools(
  // applyMiddleware()
  // )
  // )}>
  <Provider store={store}>
    <App />
  </Provider>
  //   <Provider store={store}>
  //     <App />
  //  </Provider> 
  ,
  document.getElementById('root')
);

