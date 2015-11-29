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
