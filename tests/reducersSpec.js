import {expect} from "chai";

import reducer from "../reducers";
import * as ActionTypes from "../constants/ActionTypes";

describe("reducers", () => {
  let initialState = {
    recipe: {
      name: "",
      ytID: "",
      ingredients: [],
      instructions: []
    },
    recipes: [],
    editing: false,
    index: -1
  };

  describe("CREATE_RECIPE", () => {
    it("returns a new state with the recipe's ytID set", () => {
      let state = Object.assign({}, initialState);
      let ytID = "example_id";
      let action = {
        type: ActionTypes.CREATE_RECIPE,
        ytID: ytID
      };
      let result = reducer(state, action);
      expect(result.recipe).to.have.property("name");
      expect(result.recipe).to.have.property("ytID");
      expect(result.recipe).to.have.property("ingredients");
      expect(result.recipe).to.have.property("instructions");
      expect(result.recipe.ytID).equal(ytID);
    });
  });

  describe("SET_NAME", () => {
    it("sets the name of the recipe", () => {
      let state = Object.assign({}, initialState);
      let name = "Top Ramen";
      let action = {
        type: ActionTypes.SET_NAME,
        name: name
      };
      expect(state.recipe.name).equal("");
      let result = reducer(state, action);
      expect(result.recipe.name).equal(name);
    });
  });

  describe("SET_INGREDIENTS", () => {
    it("sets the ingredients array of the recipe", () => {
      let state = Object.assign({}, initialState);
      let ingredients = ["ramen", "water"];
      let action = {
        type: ActionTypes.SET_INGREDIENTS,
        ingredients: ingredients
      };
      let result = reducer(state, action);
      expect(result.recipe.ingredients).equal(ingredients);
    });
  });

  describe("SET_INSTRUCTIONS", () => {
    it("sets the instructions array of the recipe", () => {
      let state = Object.assign({}, initialState);
      let instructions = ["boil water", "add ramen", "wait 4 minutes"];
      let action = {
        type: ActionTypes.SET_INSTRUCTIONS,
        instructions: instructions
      };
      let result = reducer(state, action);
      expect(result.recipe.instructions).equal(instructions);
    });
  });

  /*
  // currently the middleware updates the action, but that probably shouldn't
  // actually happen, so no tests for DELETE_RECIPE or SAVE_RECIPES
  describe("DELETE_RECIPE", () => {
    it("", () => {
      let state = Object.assign({}, initialState, {
        recipes: [
          "one", "two", "three"
        ]
      });

      let action = {
        type: ActionTypes.DELETE_RECIPE,
        index: 1
      };
      let result = reducer(state, action);
      expect(result.recipes.length).equal(2);
      expect(result.recipes).equal(["one", "three"]);
    });
  });

  describe("SAVE_RECIPES", () => {
    it("", () => {
      let state = Object.assign({}, initialState);
      let action = {
        type:
      };
      let result = reducer(state, action);
    });
  });
  */

  describe("LOAD_RECIPE", () => {
    it("sets the recipe at state.recipes[index] to state.recipe", () => {
      let recipes = [
        {name: "foo", ytID: "foo", ingredients: [], instructions: []},
        {name: "bar", ytID: "bar", ingredients: [], instructions: []},
        {name: "baz", ytID: "baz", ingredients: [], instructions: []}
      ];
      let index = 1;
      let state = Object.assign({}, initialState, {
        recipes: recipes
      });
      let action = {
        type: ActionTypes.LOAD_RECIPE,
        index: index
      };
      let result = reducer(state, action);
      let currentRecipe = result.recipe;
      let matchedRecipe = recipes[index];
      expect(currentRecipe.name).equal(matchedRecipe.name);
      expect(currentRecipe.ytID).equal(matchedRecipe.ytID);
      expect(result.index).equal(index);
    });
  });

  describe("RESET_RECIPE", () => {
    it("", () => {
      let state = Object.assign({}, initialState, {
        recipe: {
          name: "foo",
          ytID: "bar",
          ingredients: ["foo", "bar", "baz"],
          instructions: ["one", "two", "three"]
        }
      });
      let action = {
        type: ActionTypes.RESET_RECIPE
      };
      let result = reducer(state, action);
      expect(result.index).equal(-1);
      expect(result.recipe.name).equal("");
      expect(result.recipe.ytID).equal("");
      expect(result.recipe.ingredients.length).equal(0);
      expect(result.recipe.instructions.length).equal(0);
    });
  });

});