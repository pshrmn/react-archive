import React from "react";
import ReactDOM from "react-dom";

import pageType from "./data/pageType";
import { storyPage, commentsPage, replyPage, noopPage } from "./data/pages";
import HackerNews from "./components/HackerNews";

let type = pageType();
let page;
switch ( type ) {
case "submission":
  page = storyPage();
  break;
case "comments":
  page = commentsPage();
  break;
case "reply":
  page = replyPage();
  break; 
default:
  page = noopPage();
  break;
}

let holder = document.createElement("div");
holder.classList.add("hn-react");
document.body.appendChild(holder);

ReactDOM.render(
  <HackerNews type={type}
              page={page} />
  , holder
);