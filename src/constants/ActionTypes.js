// create a new recipe given an id for a youtube video
export const CREATE_RECIPE = "CREATE_RECIPE";
// set the name of the recipe being edited
export const SET_NAME = "SET_NAME";
// set the ingredients of the recipe being edited
export const SET_INGREDIENTS = "SET_INGREDIENTS";
// set the instructions of the recipe being edited
export const SET_INSTRUCTIONS = "SET_INSTRUCTIONS";
// delete a recipe given its index in the saved array
export const DELETE_RECIPE = "DELETE_RECIPE";
// save a recipe, either replacing the one being edited
// or adding it to the recipes array if new
export const SAVE_RECIPES = "SAVE_RECIPES";
// start viewing/editing a recipe
export const LOAD_RECIPE = "LOAD_RECIPE";
// cancel editing and reset the recipe view
export const RESET_RECIPE = "RESET_RECIPE";
