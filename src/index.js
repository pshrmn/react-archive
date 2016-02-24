import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import reducer from "./reducers";
import chromeMiddleware from "./middleware/chrome";

import HackerNews from "./components/HackerNews";

import pageType from "./data/pageType";
import { storyPage, commentsPage } from "./data/pages";
import { getStorage } from "./helpers/chrome";

switch ( pageType() ) {
case "submission":
  render("submission", storyPage());
  break;
case "comments":
  render("comments", commentsPage());
  break;
}

function addFont(href) {
  const style = document.createElement("link");
  style.rel = "stylesheet";
  style.href = href;
  document.head.appendChild(style);
}

function render(pType, page) {
  // fontawesome
  addFont("https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css");
  addFont("https://fonts.googleapis.com/css?family=Oxygen|Noto+Serif")
  let fonts = document.createElement("link");

  const holder = document.createElement("div");
  holder.classList.add("hn-react");
  document.body.appendChild(holder);

  document.querySelector("center").style.display = "none";

  getStorage(storage => {
    let store = createStore(
      reducer,
      {
        pageType: pType,
        page: page,
        moddedVisible: false,
        modded: storage
      },
      applyMiddleware(chromeMiddleware)
    );

    ReactDOM.render(
      <Provider store={store}>
        <HackerNews />
      </Provider>
      , holder
    );
    
  })

}