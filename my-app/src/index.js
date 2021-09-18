import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app';
//component made by React-redux library and it is a component that is why capital P
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';


//we are wrapping App with Provider to give access to "Store" That has all the reducers function combined
ReactDom.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>
,
  document.querySelector('#root'));
