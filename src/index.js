import React from "react";
import ReactDOM from "react-dom";

import pageType from "./data/pageType";
import { storyPage, commentsPage, replyPage } from "./data/pages";
import HackerNews from "./components/HackerNews";

let type = pageType();
let page;
switch ( type ) {
case "submission":
  render(type, storyPage());
  break;
case "comments":
  render(type, commentsPage());
  break;
/*
case "reply":
  page = replyPage();
  break; 
*/
default:
  render(type);
  break;
}


function render(type, page) {
  if ( type !== "no-op" ) {
    // fontawesome
    let style = document.createElement("link");
    style.rel = "stylesheet";
    style.href = "https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css";
    document.head.appendChild(style);

    let holder = document.createElement("div");
    holder.classList.add("hn-react");
    document.body.appendChild(holder);

    ReactDOM.render(
      <HackerNews type={type}
                  page={page} />
      , holder
    );
  }
}