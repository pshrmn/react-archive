import * as ActionTypes from "../constants/ActionTypes";

/*
 * add the recipe to localStorage using the id of the youtube video
 */
export const storageSaver = store => next => action => {
  if ( action.type === ActionTypes.SAVE_RECIPE && action.recipe.ytID !== "" ) {
    let storedRecipes = JSON.parse(localStorage.getItem("recipes"));
    let recipe = action.recipe;
    storedRecipes.push(recipe);
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
