import * as types from "../constants/ActionTypes"

const initialState = {
  name: "",
  ytID: "",
  url: "",
  ingredients: [],
  instructions: []
};

export default function recipeReducer(state = initialState, action) {
  switch (action.type) {
  case types.SET_NAME:
    return Object.assign({}, state, {
      name: action.name
    });
  case types.SET_URL:
    return Object.assign({}, state, {
      url: action.url,
      ytID: action.ytID
    });
  case types.SET_INGREDIENTS:
    return Object.assign({}, state, {
      ingredients: action.ingredients
    });
  case types.SET_INSTRUCTIONS:
    return Object.assign({}, state, {
      instructions: action.instructions
    });
  case types.RESET_RECIPE:
    return Object.assign({}, state, {
      name: "",
      url: "",
      ytID: "",
      ingredients: [],
      instructions: []
    });
  case types.SAVE_RECIPE:
    return state;
  default:
    return state;
  };
}
