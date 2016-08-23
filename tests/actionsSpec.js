import {expect} from "chai";
import { createRecipe, setName, setIngredients, setInstructions,
  deleteRecipe, loadRecipe } from "../src/actions";
import * as ActionTypes from "../src/constants/ActionTypes";

describe("actions", () => {
  describe("createRecipe(ytID)", () => {
    it("returns an action with expected type", () => {
      let action = createRecipe();
      expect(action.type).equal(ActionTypes.CREATE_RECIPE);
    });

    it("takes a ytID argument and sets it in the action", () => {
      let id = "example_id";
      let action = createRecipe(id);
      expect(action.ytID).equal(id);
    });
  });

  describe("setName(name)", () => {
    it("returns an action with expected type", () => {
      let action = setName();
      expect(action.type).equal(ActionTypes.SET_NAME);
    });

    it("takes a name argument and sets it in the action", () => {
      let name = "Rocky";
      let action = setName(name);
      expect(action.name).equal(name);
    })
  });

  describe("setIngredients(ingredients)", () => {
    it("returns an action with expected type", () => {
      let action = setIngredients();
      expect(action.type).equal(ActionTypes.SET_INGREDIENTS);
    });

    it("takes an ingredients array argument and sets it in the action", () => {
      let ingredients = ["egg", "flour"];
      let action = setIngredients(ingredients);
      expect(action.ingredients).equal(ingredients);
    });
  });

  describe("setInstructions(instructions)", () => {
    it("returns an action with expected type", () => {
      let action = setInstructions();
      expect(action.type).equal(ActionTypes.SET_INSTRUCTIONS);
    });

    it("takes an instructions array argument and sets it in the action", () => {
      let instructions = ["make a well in the flour", "crack egg into the well", "mix"];
      let action = setInstructions(instructions);
      expect(action.instructions).equal(instructions);
    });
  });

  describe("deleteRecipe(index)", () => {
    it("returns an action with expected type", () => {
      let action = deleteRecipe();
      expect(action.type).equal(ActionTypes.DELETE_RECIPE);
    });

    it("takes an index argument and sets it in the action", () => {
      let action = deleteRecipe(1);
      expect(action.index).equal(1);
    });
  });

  describe("loadRecipe(index)", () => {
    it("returns an action with expected type", () => {
      let action = loadRecipe();
      expect(action.type).equal(ActionTypes.LOAD_RECIPE);
    });

    it("takes an index argument and sets it in the action", () => {
      let action = loadRecipe(0);
      expect(action.index).equal(0);
    });
  });

});