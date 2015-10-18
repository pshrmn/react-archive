import * as ActionTypes from "../constants/ActionTypes";

/*
 * add the recipe to localStorage using the id of the youtube video
 */
export const StorageSaver = store => next => action => {
  if ( action.type === ActionTypes.SAVE_RECIPE && action.recipe.ytID !== "" ) {
    let storedRecipes = JSON.parse(localStorage.getItem("recipes"));
    let recipe = action.recipe;
    storedRecipes.push(recipe);
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