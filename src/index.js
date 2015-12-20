import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import reducer from './reducers';

import HackerNews from "./containers/HackerNews";

import pageType from "./data/pageType";
import { storyPage, commentsPage } from "./data/pages";
import { getStorage } from "./helpers/chrome";

let type = pageType();
let page;
switch ( type ) {
case "submission":
  render(type, storyPage());
  break;
case "comments":
  render(type, commentsPage());
  break;
}

function addFont(href) {
  let style = document.createElement("link");
  style.rel = "stylesheet";
  style.href = href;
  document.head.appendChild(style);
}

function render(type, page) {
  // fontawesome
  addFont("https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css");
  addFont("https://fonts.googleapis.com/css?family=Oxygen|Noto+Serif")
  let fonts = document.createElement("link");

  let holder = document.createElement("div");
  holder.classList.add("hn-react");
  document.body.appendChild(holder);

  getStorage(storage => {
    let initialState = {
      type: type,
      page: page,
      moddedVisible: false,
      modded: storage
    };
    let store = createStore(reducer, initialState);

    ReactDOM.render(
      <Provider store={store}>
        <HackerNews />
      </Provider>
      , holder
    );
    
  })

}