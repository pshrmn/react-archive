import * as types from "../constants/ActionTypes";

import modded from "./modded";
import moddedVisible from "./moddedVisible";

function reducer(state, action) {
  return Object.assign({}, state, {
    modded: modded(state.modded, action),
    moddedVisible: moddedVisible(state.moddedVisible, action)
  });
}

export default reducer;
