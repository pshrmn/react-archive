import * as ActionTypes from "../constants/ActionTypes";

export const saveStory = (id, url) => {
  return {
    type: ActionTypes.SAVE_STORY,
    id: id,
    url: url
  };
};

export const unsaveStory = id => {
  return {
    type: ActionTypes.UNSAVE_STORY,
    id: id
  };
};
