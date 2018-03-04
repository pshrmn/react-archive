import * as types from "../constants/ActionTypes";
import * as chrome from "../helpers/chrome";

export default state => next => action => {
  switch (action.type) {
  case types.SAVE_STORY:
    chrome.saveStory(action.id, action.url, action.title);
    break;
  case types.UNSAVE_STORY:
    chrome.unsaveStory(action.id);
    break;
  case types.HIDE_STORY:
    chrome.hideStory(action.id, action.url, action.title);
    break;
  case types.UNHIDE_STORY:
    chrome.unhideStory(action.id);
    break;
  case types.BAN_DOMAIN:
    chrome.banDomain(action.domain);
    break;
  case types.UNBAN_DOMAIN:
    chrome.unbanDomain(action.domain);
    break;
  }
  return next(action);
}
