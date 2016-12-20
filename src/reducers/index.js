import * as types from '../constants/ActionTypes';
import { combineReducers } from 'redux';

const modeReducer = (state = 'DRAW' , action) => {
  switch (action.type) {
  case types.SET_MODE:
    return action.mode;
  default:
    return state;
  }
}

const colorReducer = (state = '#000000', action) => {
  switch (action.type) {
  case types.SET_COLOR:
    return action.color;
  default:
    return state;
  }
}

const initialMovesState = {
  past: [],
  future: []
};


const movesReducer = (state = initialMovesState, action) => {
  switch (action.type) {
  case types.ADD_MOVE:
    return {
      past: state.past.concat(action.move),
      future: []
    };
  case types.UNDO_MOVE:
    if (!state.past.length) {
      return state;
    }
    var last = state.past.pop();
    return {
      past: state.past,
      future: [last].concat(state.future)
    }
  case types.REDO_MOVE:
    if (!state.future.length) {
      return state;
    }
    var first = state.future.shift()
    return {
      past: state.past.concat(first),
      future: state.future
    };
  case types.CLEAR:
    return {
      past: [],
      future: []
    };
  default:
    return state;
  }
}

export default combineReducers({
  mode: modeReducer,
  color: colorReducer,
  moves: movesReducer
});
