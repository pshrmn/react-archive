import * as types from "../constants/ActionTypes";
import { NewRecipe } from "../helpers";

const initialState = {
  recipe: {
    name: "",
    ytID: "",
    ingredients: [],
    instructions: []
  },
  recipes: [],
  index: -1,
  editing: false
};

function recipeReducer(state={}, action) {
  switch (action.type) {
  case types.CREATE_RECIPE:
    return NewRecipe(action.ytID);
  case types.SET_NAME:
    return Object.assign({}, state, {
      name: action.name
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
    return NewRecipe();
  default:
    return state;
  }
}

function editingReducer(state, action) {
  switch (action.type) {
  case types.CREATE_RECIPE:
    return true;
  case types.RESET_RECIPE:
    return false;
  default:
    return state;
  }
}

function indexReducer(state=-1, action) {
  switch (action.type) {
  case types.CREATE_RECIPE:
  case types.RESET_RECIPE:
    return -1;
  case types.DELETE_RECIPE:
    // figure out the new index
    // if the current index is less than the deleted value, keep it the same
    // if the current index recipe was deleted, set it to -1
    // if the current index is greater than the deleter value, subtract 1
    let newIndex = state;
    if ( state === action.index ) {
      newIndex = -1;
    } else if ( state > action.index ) {
      newIndex -= 1;
    }
    return newIndex;
  default:
    return state;
  }
}

/*
 * The storage middleware does the processing andcreates the new recipes array.
 */
function recipesReducer(recipes=[], action) {
  switch (action.type) {
  case types.DELETE_RECIPE:
  case types.SAVE_RECIPES:
    return action.recipes;
  default:
    return recipes;
  }
}

function reducer(state = initialState, action) {
  //console.log("~~~~~~~~~~~\nreducer called\n", state, action, "\n~~~~~~~~~~~~~");
  /*
   * for the action LOAD_RECIPE, setting the recipe requires
   * knowlege of state.recipes
   */
  if ( action.type === types.LOAD_RECIPE ) {
    return Object.assign({}, state, {
      index: action.index,
      editing: true,
      recipe: Object.assign({}, state.recipe, state.recipes[action.index])
    });
  }
  return {
    recipes: recipesReducer(state.recipes, action),
    recipe: recipeReducer(state.recipe, action),
    index: indexReducer(state.index, action),
    editing: editingReducer(state.editing, action)
  };
}

export default reducer;
