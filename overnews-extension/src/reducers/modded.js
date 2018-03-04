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
  case types.HIDE_STORY:
    var hidden = state.hidden;
    hidden[action.id] = {
      url: action.url,
      title: action.title,
      when: (new Date).getTime()
    };
    return Object.assign({}, state, {
      hidden: hidden
    });
  case types.UNHIDE_STORY:
    var hidden = state.hidden;
    delete hidden[action.id];
    return Object.assign({}, state, {
      hidden: hidden
    });
  case types.BAN_DOMAIN:
    var domains = state.domains;
    domains[action.domain] = true;
    return Object.assign({}, state, {
      domains: domains
    });
  case types.UNBAN_DOMAIN:
    var domains = state.domains;
    delete domains[action.domain];
    return Object.assign({}, state, {
      domains: domains
    });
  default:
    return state;
  }
}
