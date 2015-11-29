import * as ActionTypes from "../constants/ActionTypes";

export const saveStory = (id, url, title) => {
  return {
    type: ActionTypes.SAVE_STORY,
    id: id,
    url: url,
    title: title
  };
};

export const unsaveStory = id => {
  return {
    type: ActionTypes.UNSAVE_STORY,
    id: id
  };
};

export const hideStory = (id, url, title) => {
  return {
    type: ActionTypes.HIDE_STORY,
    id: id,
    url: url,
    title: title
  };
};

export const unhideStory = id => {
  return {
    type: ActionTypes.UNHIDE_STORY,
    id: id,
  };
};

/*
 * show and hide the saved stories, hidden stories, and hidden domains
 */
export const showSaved = () => {
  return {
    type: ActionTypes.SHOW_SAVED
  };
};

export const hideSaved = () => {
  return {
    type: ActionTypes.HIDE_SAVED
  };
};
