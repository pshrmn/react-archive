import * as ActionTypes from "../constants/ActionTypes";

/*
 * add the recipe to localStorage using the id of the youtube video. If there is already
 * a stored recipe with the same youtube video id, replace the existing one with the new one
 */
export const StorageSaver = store => next => action => {
  if ( action.type === ActionTypes.SAVE_RECIPE && action.recipe.ytID !== "" ) {
    let storedRecipes = JSON.parse(localStorage.getItem("recipes"));
    let recipe = action.recipe;
    let ytID = recipe.ytID;
    let index = -1;
    for ( var i=0; i<storedRecipes.length; i++ ) {
      if ( storedRecipes[i].ytID === ytID ) {
        index = i;
        break;
      }
    }
    if ( index !== -1 ) {
      storedRecipes[index] = action.recipe;
    } else {
      storedRecipes.push(recipe);
    }
    action.recipes = storedRecipes;
    localStorage.setItem("recipes", JSON.stringify(storedRecipes));
  }
  return next(action);
}

export const RecipeLoader = store => next => action => {
  if ( action.type === ActionTypes.LOAD_RECIPE ) {
    let state = store.getState();
    let recipe = state.savedRecipes[action.index]
    if ( recipe ) {
      action.recipe = recipe;
    }
  }
  return next(action);
}