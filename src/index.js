import React from "react";
import ReactDOM from "react-dom";
import { observable, asMap, autorun } from "mobx";
import { Provider } from "mobx-react";

import App from "./components/App";
import { load, save } from "./helpers";

let recipes = load('recipes');
if (recipes === null) {
  recipes = [];
}

const store = observable({
  recipes,
  index: null
});

// write all recipe changes to localStorage
autorun(() => {
  save('recipes', store.recipes.filter(r => r !== null))
})

ReactDOM.render((
  <App recipes={store} />
), document.getElementById("content"));
