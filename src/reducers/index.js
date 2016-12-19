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

const initialPixelsState = {
  before: [],
  current: undefined,
  after: []
};

/*
 * the pixelsReducer allows for "time travel" by maintaining an array
 * of past and future states.
 */
const pixelsReducer = (state = initialPixelsState, action) => {
  switch (action.type) {
  case types.SET_PIXELS:
    // move current to before, set current, erase any after
    var before = state.before.concat([state.current]);
    var current = action.pixels;
    var after = []
    return Object.assign({}, state, {
      before,
      current,
      after
    });

  case types.UNDO:
    if (!state.before.length) {
      return state;
    }

    // move the last item in before to current, move current to after
    var current = state.before.pop();
    var before = state.before;
    var after = [state.current].concat(state.after);
    return Object.assign({}, state, {
      before,
      current,
      after
    });

  case types.REDO:
    // cannot redo if there are no forward states
    if (!state.after.length) {
      return state;
    }
    // move the first item in after to current, move current to before
    var current = state.after.shift()
    var before = state.before.concat([state.current]);
    var after = state.after;

    return Object.assign({}, state, {
      before,
      current,
      after
    });

  default:
    return state;
  }
}

export default combineReducers({
  mode: modeReducer,
  color: colorReducer,
  pixels: pixelsReducer
});
