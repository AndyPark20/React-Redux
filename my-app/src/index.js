//Main index file is going to allow the Redux and React to communicate
import React from 'react';
import ReactDom from 'react-dom';

//Named export is going to be in the curly braces
import {App} from './components/app';


ReactDom.render(<App />, document.querySelector('#root'));








































// import React from 'react';
// import ReactDom from 'react-dom';
// import App from './components/app';
// //component made by React-redux library and it is a component that is why capital P
// import {Provider} from 'react-redux';
// import {createStore} from 'redux';
// import reducers from './reducers';


// //we are wrapping App with Provider to give access to "Store" That has all the reducers function combined
// ReactDom.render(
//   <Provider store={createStore(reducers)}>
//     <App />
//   </Provider>
// ,
//   document.querySelector('#root'));
