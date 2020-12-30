import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import "antd/dist/antd.css";

import { createStore } from "redux";
import { Provider } from 'react-redux'
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from './reducers';
import { BrowserRouter } from "react-router-dom";
// store
const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
      </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

