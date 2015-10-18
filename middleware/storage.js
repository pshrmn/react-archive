import * as ActionTypes from "../constants/ActionTypes";

function saveRecipes(recipes) {
  localStorage.setItem("recipes", JSON.stringify(recipes));
}

function loadRecipes(){
  return JSON.parse(localStorage.getItem("recipes"));
}

function recipeIndex(ytID, recipes) {
  let index = -1;
  for ( var i=0; i<recipes.length; i++ ) {
    if ( recipes[i].ytID === ytID ) {
      index = i;
      break;
    }
  }
  return index;
}

/*
 * add the recipe to localStorage using the id of the youtube video. If there is already
 * a stored recipe with the same youtube video id, replace the existing one with the new one
 */
export const StorageAPI = store => next => action => {
  switch ( action.type ) {
  case ActionTypes.SAVE_RECIPE:
    if ( action.recipe.ytID !== "" ) {
      let storedRecipes = loadRecipes();
      let index = recipeIndex(action.recipe.ytID, storedRecipes);
      if ( index !== -1 ) {
        storedRecipes[index] = action.recipe;
      } else {
        storedRecipes.push(action.recipe);
      }
      action.recipes = storedRecipes;
      saveRecipes(storedRecipes);
    }
    break;
  case ActionTypes.DELETE_RECIPE:
    let storedRecipes = loadRecipes();
    storedRecipes.splice(action.index);
    action.recipes = storedRecipes;
    saveRecipes(storedRecipes);
    break;
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
