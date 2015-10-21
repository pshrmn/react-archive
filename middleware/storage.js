import * as ActionTypes from "../constants/ActionTypes";
import { StoreRecipes } from "../helpers";

/*
 * StorageAPI responds to storage related actions, updating the localStorage.
 * A recipes array should be added to the action element so that the reducer can
 * just use the updated recipes array that is created by storage.
 * SAVE_RECIPES:
 *    If the action index !== -1, replace the recipe at index with the one being saved
 *    If the action index === -1, append the recipe at the end of the recipes array
 * DELETE_RECIPE:
 *    Filter out the recipe at action.index
 */
export const StorageAPI = store => next => action => {
  switch ( action.type ) {
  case ActionTypes.SAVE_RECIPES:
    var { recipes, recipe, index } = store.getState();
    let newRecipes = recipes.slice();
    if ( index !== -1 ) {
      newRecipes[index] = recipe;
    } else {
      newRecipes = newRecipes.concat(recipe);
    }
    action.recipes = newRecipes;
    StoreRecipes(newRecipes);
    break;
  case ActionTypes.DELETE_RECIPE:
    var { recipes } = store.getState();
    var keptRecipes = recipes.filter((v, i) => {
      return i !== action.index;
    })
    action.recipes = keptRecipes;
    StoreRecipes(keptRecipes);
    break;
  }
  return next(action);
}
