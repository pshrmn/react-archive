import {expect} from 'chai';

import reducer from '../src/reducers';
import * as ActionTypes from '../src/constants/ActionTypes';

describe('reducers', () => {
  let initialState = {
    recipes: [{
      name: 'Noodles',
      ytID: 'fakeurlid',
      ingredients: [],
      instructions: []
    }],
    index: 0
  };
  var state;
  beforeEach(() => {
    state = Object.assign({}, initialState);
  });

  describe('CREATE_RECIPE', () => {
    it('adds a new recipe to the recipes array and sets the corret index', () => {
      const ytID = 'example_id';
      const action = {
        type: ActionTypes.CREATE_RECIPE,
        ytID: ytID
      };
      const result = reducer(state, action);
      expect(result.index).to.equal(1);
      const newRecipe = result.recipes[result.index];
      expect(newRecipe).to.have.property('name');
      expect(newRecipe).to.have.property('ytID');
      expect(newRecipe).to.have.property('ingredients');
      expect(newRecipe).to.have.property('instructions');
      expect(newRecipe.ytID).equal(ytID);
    });
  });

  describe('SET_NAME', () => {
    it('sets the name of the current recipe', () => {
      const name = 'Top Ramen';
      const action = {
        type: ActionTypes.SET_NAME,
        name: name
      };
      expect(state.recipes[state.index].name).equal('Noodles');
      const result = reducer(state, action);
      expect(result.recipes[result.index].name).equal(name);
    });
  });

  describe('SET_INGREDIENTS', () => {
    it('sets the ingredients array of the recipe', () => {
      const ingredients = ['ramen', 'water'];
      const action = {
        type: ActionTypes.SET_INGREDIENTS,
        ingredients: ingredients
      };
      const { recipes, index } = reducer(state, action);
      expect(recipes[index].ingredients).equal(ingredients);
    });
  });

  describe('SET_INSTRUCTIONS', () => {
    it('sets the instructions array of the recipe', () => {
      const instructions = ['boil water', 'add ramen', 'wait 4 minutes'];
      const action = {
        type: ActionTypes.SET_INSTRUCTIONS,
        instructions: instructions
      };
      const { recipes, index } = reducer(state, action);
      expect(recipes[index].instructions).equal(instructions);
    });
  });

  describe('DELETE_RECIPE', () => {
    it('sets the recipe at the current index to null', () => {
      const startIndex = 0;
      const action = {
        type: ActionTypes.DELETE_RECIPE,
        index: startIndex
      };
      const { recipes, index } = reducer(state, action);
      expect(index).to.equal(null);
      expect(recipes[startIndex]).to.equal(null);
    });
  });

  describe('LOAD_RECIPE', () => {
    it('sets the index value', () => {
      const recipes = [
        {name: 'foo', ytID: 'foo', ingredients: [], instructions: []},
        {name: 'bar', ytID: 'bar', ingredients: [], instructions: []},
        {name: 'baz', ytID: 'baz', ingredients: [], instructions: []}
      ];
      const index = 1;
      const state = Object.assign({}, state, {
        recipes: recipes,
        index: null
      });
      let action = {
        type: ActionTypes.LOAD_RECIPE,
        index: index
      };
      const result = reducer(state, action);
      expect(result.index).to.equal(index);
    });

    it('sets the value to null for index values outside of the size of the recipes array', () => {
      const recipes = [
        {name: 'foo', ytID: 'foo', ingredients: [], instructions: []},
        {name: 'bar', ytID: 'bar', ingredients: [], instructions: []},
        {name: 'baz', ytID: 'baz', ingredients: [], instructions: []}
      ];
      const state = Object.assign({}, state, {
        recipes: recipes,
        index: null
      });

      // too small
      const lowResult = reducer(state, {
        type: ActionTypes.LOAD_RECIPE,
        index: -1
      });
      expect(lowResult.index).to.equal(null);

      // too big
      const highResult = reducer(state, {
        type: ActionTypes.LOAD_RECIPE,
        index: 100
      });
      expect(highResult.index).to.equal(null);
    });
  });
});
