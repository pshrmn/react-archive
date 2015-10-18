import * as ActionTypes from "../constants/ActionTypes";

/*
 * add the recipe to localStorage using the id of the youtube video
 */
export const storageSaver = store => next => action => {
  if ( action.type === ActionTypes.SAVE_RECIPE ) {
    let recipe = store.getState();
    let storedRecipes = JSON.parse(localStorage.getItem("recipes"));
    storedRecipes[recipe.ytID] = recipe;
    localStorage.setItem("recipes", JSON.stringify(storedRecipes));
  }
  return next(action);
}

/*
 * load saved recipes. not yet implemented
 */
export const storageFetcher = store => next => action => {
  return next(action);
}
