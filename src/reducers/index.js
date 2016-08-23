import * as types from "../constants/ActionTypes";
import { NewRecipe } from "../helpers";

const initialState = {
  recipes: [],
  index: null
};

export default function reducer(state = initialState, action) {
  const {
    index = null,
    recipes = []
  } = state;

  switch ( action.type ) {
  case types.CREATE_RECIPE:
    var currentCount = recipes.length;
    return Object.assign({}, {
      index: currentCount,
      recipes: recipes.concat({
        name: '',
        ytID: action.ytID,
        ingredients: [],
        instructions: []
      })
    });

  case types.LOAD_RECIPE:
    return Object.assign({}, state, {
      index: action.index
    });

  case types.DELETE_RECIPE:
    // this sets the deleted recipe to null so that indices do not need
    // to be recalculated.
    return Object.assign({}, state, {
      recipes: recipes.map((r,i) => i !== action.index ? r : null),
      index: action.index === index ? null : index
    });

  case types.SET_NAME:
    return Object.assign({}, state, {
      recipes: recipes.map((r,i) => {
        if ( i === index ) {
          return Object.assign({}, r, {name: action.name});
        } else {
          return r;
        }
      })
    });
  case types.SET_INGREDIENTS:
    return Object.assign({}, state, {
      recipes: recipes.map((r,i) => {
        if ( i === index ) {
          return Object.assign({}, r, {ingredients: action.ingredients});
        } else {
          return r;
        }
      })
    });
  case types.SET_INSTRUCTIONS:
    return Object.assign({}, state, {
      recipes: recipes.map((r,i) => {
        if ( i === index ) {
          return Object.assign({}, r, {instructions: action.instructions});
        } else {
          return r;
        }
      })
    });

  default:
    return state;
  }
}
