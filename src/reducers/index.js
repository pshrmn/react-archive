import * as types from "../constants/ActionTypes";

import options from "./options";
import savedVisible from "./savedVisible";

function reducer(state, action) {
  return Object.assign({}, state, {
    options: options(state.options, action),
    savedVisible: savedVisible(state.savedVisible, action)
  });
}

export default reducer;
