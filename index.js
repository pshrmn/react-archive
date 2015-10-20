import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import App from "./containers/app";
import recipeReducer from './reducers';
import { StorageAPI } from "./middleware/storage";
import { SetupStorage } from "./helpers";

let initialState = SetupStorage();
var store = applyMiddleware(
  StorageAPI
)(createStore)(recipeReducer, initialState);

React.render(
  <Provider store={store}>
    {() => <App />}
  </Provider>,
  document.getElementById("content")
);
