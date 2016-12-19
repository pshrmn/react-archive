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

const pixelsReducer = (state = [], action) => {
  switch (action.type) {
  case types.SET_PIXELS:
    return action.pixels;
  default:
    return state;
  }
}

export default combineReducers({
  mode: modeReducer,
  color: colorReducer,
  pixels: pixelsReducer
});
