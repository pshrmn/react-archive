import * as types from "../constants/ActionTypes";

export default function(state=false, action) {
  switch ( action.type ) {
  case types.SHOW_SAVED:
    return true;
  case types.HIDE_SAVED:
    return false;
  default:
    return state;
  }
}