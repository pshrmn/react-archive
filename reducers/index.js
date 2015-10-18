import * as types from "../constants/ActionTypes"
import { combineReducers } from 'redux';

const initialState = {
  recipe: {
    name: "",
    ytID: "",
    url: "",
    ingredients: [],
    instructions: []
  },
  savedRecipes: []
};

function recipe(state = {
  name: "",
  ytID: "",
  url: "",
  ingredients: [],
  instructions: []
}, action) {
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
  case types.LOAD_RECIPE:
    return Object.assign({}, state, action.recipe);
  case types.RESET_RECIPE:
    return Object.assign({}, state, {
      name: "",
      url: "",
      ytID: "",
      ingredients: [],
      instructions: []
    });
  default:
    return state;
  }
}

function savedRecipes(state = [], action) {
  switch (action.type) {
  case types.SAVE_RECIPE:
    // the middleware will take the action.recipe and either append it to the array
    // if it doesn't already exist, or replace the existing version (based on ytID)
    return action.recipes;
  default:
    return state;
  }
}

const recipeApp = combineReducers({
  recipe,
  savedRecipes
});

export default recipeApp;
