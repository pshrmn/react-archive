import * as types from "../constants/ActionTypes";

export default function(state={}, action) {
  switch ( action.type ) {
  case types.SAVE_STORY:
    var saved = state.saved;
    saved[action.id] = {
      url: action.url,
      title: action.title
    };
    return Object.assign({}, state, {
      saved: saved
    });
  case types.UNSAVE_STORY:
    var saved = state.saved;
    delete saved[action.id];
    return Object.assign({}, state, {
      saved: saved
    });
  default:
    return state;
  }
}
