import React from 'react';
import ReactDOM from 'react-dom/client';
import { legacy_createStore, applyMiddleware } from "redux";

import './index.css';
import App from './components/App';
import rootReducer from './reducers';

// const logger = function({ dispatch, getState }) {
//   return function(next) {
//     return function(action) {
//       //middleware code

//       console.log('ACTION_TYPE = ', action.type);
//       next(action);
//     }
//   }
// }

const logger = ({dispatch, getState}) => (next) => (action) => {
  console.log("ACTION_TYPE = ", action.type);
  next(action);
}

const store = legacy_createStore(rootReducer, applyMiddleware(logger ));
console.log('store:',store);
// console.log('Prev State: ', store.getState());

// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies: [{name: 'Superman'}]
// });

// console.log("After State: ", store.getState());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>
);

