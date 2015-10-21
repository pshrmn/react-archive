import {expect} from "chai";
import { LoadRecipes, StoreRecipes, SetupStorage,
  NewRecipe, VideoID } from "../helpers";

describe("helpers", () => {
  describe("SetupStorage()", () => {
    /*
    need a way to mock localStorage for this to work*/
    /*

    it("returns an initial state with recipe, recipes, index, and editing", () => {
      let storage = SetupStorage();
      expect(storage).to.have.property("recipes");
      expect(storage).to.have.property("recipe");
      expect(storage).to.have.property("index");
      expect(storage).to.have.property("editing");
    });
  */
  });

  describe("NewRecipe(ytID)", () => {
    it("return an object representing a recipe", () => {
      let recipe = NewRecipe();
      expect(recipe).to.have.property("name");
      expect(recipe).to.have.property("ytID");
      expect(recipe).to.have.property("ingredients").with.length(0);
      expect(recipe).to.have.property("instructions").with.length(0);
      expect(recipe.name).equal("");
      expect(recipe.ytID).equal("");
    });

    it("sets ytID property when passed as argument", () => {
      let id = "example_id";
      let recipe = NewRecipe(id);
      expect(recipe.ytID).equal(id);
    });
  });

  describe("VideoID(url)", () => {
    /*
    // need to mock document
    it("returns the video id from a youtube.com url", () => {
      let url = "https://www.youtube.com/watch?v=bjmYkPkjnVo";
      let id = VideoID(url);
      expect(id).equal("bjmYkPkjnVo");
    });

    it("returns the video id from a youtu.be url", () => {
      let url = "https://youtu.be/bjmYkPkjnVo";
      let id = VideoID(url);
      expect(id).equal("bjmYkPkjnVo");
    });

    it("returns an empty string for any other input", () => {
      ["", "https://www.example.com/test", "bjmYkPkjnVo"].forEach((val) => {
        let id = VideoID(val);
        expect(id).equal("");
      })
    });
    */
  });
});
