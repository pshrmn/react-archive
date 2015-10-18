import * as types from "../constants/ActionTypes"
import { VideoID } from "../helpers";

export function setName(name) {
  return {
    type: types.SET_NAME,
    name: name
  };
}

export function setVideoID(url) {
  return {
    type: types.SET_URL,
    url: url,
    ytID: VideoID(url)
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

export function saveRecipe(recipe) {
  return {
    type: types.SAVE_RECIPE,
    recipe: recipe
  };
}
