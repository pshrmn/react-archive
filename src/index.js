import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import App from "./containers/app";
import reducer from './reducers';
import { StorageAPI } from "./middleware/storage";
import { SetupStorage } from "./helpers";

let initialState = SetupStorage();
var store = applyMiddleware(
  StorageAPI
)(createStore)(reducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("content")
);
