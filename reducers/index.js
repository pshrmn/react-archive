import * as types from "../constants/ActionTypes"

const initialState = {
  id: 0,
  name: "",
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
      url: action.url
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
      ingredients: [],
      instructions: []
    });
  default:
    return state;
  };
}
