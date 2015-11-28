import * as types from "../constants/ActionTypes";

import options from "./options";

function reducer(state, action) {
  return Object.assign({}, state, {
    options: options(state.options, action)
  });
}

export default reducer;
