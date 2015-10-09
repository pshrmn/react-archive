import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./containers/app";
import recipeReducer from './reducers';

var store = createStore(recipeReducer);

React.render(
  <Provider store={store}>
    {() => <App />}
  </Provider>,
  document.getElementById("content")
);
