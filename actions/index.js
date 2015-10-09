import * as types from "../constants/ActionTypes"

export function setName(name) {
  return {
    type: types.SET_NAME,
    name: name
  };
}

export function setURL(url) {
  return {
    type: types.SET_URL,
    url: url
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

export function resetRecipe() {
  return {
    type: types.RESET_RECIPE
  };
}

export function saveRecipe() {
  return {
    type: types.SAVE_RECIPE
  };
}
