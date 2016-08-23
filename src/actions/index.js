import * as types from "../constants/ActionTypes"

export function createRecipe(ytID) {
  return {
    type: types.CREATE_RECIPE,
    ytID: ytID
  };
}

export function setName(name) {
  return {
    type: types.SET_NAME,
    name: name
  };
}

export function setIngredients(ingredients) {
  return {
    type: types.SET_INGREDIENTS,
    ingredients: ingredients
  };
}

export function setInstructions(instructions) {
  return {
    type: types.SET_INSTRUCTIONS,
    instructions: instructions
  };
}

export function deleteRecipe(index) {
  return {
    type: types.DELETE_RECIPE,
    index: index
  };
}

export function loadRecipe(index) {
  return {
    type: types.LOAD_RECIPE,
    index: index
  };
}
