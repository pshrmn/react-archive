import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./containers/app";
import configureStore from "./store/configureStore";

let store = configureStore();

React.render(
  <Provider store={store}>
    {() => <App />}
  </Provider>,
  document.getElementById("content")
);
