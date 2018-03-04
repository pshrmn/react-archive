import * as types from '../constants/ActionTypes';
import { combineReducers } from 'redux';

const sizeReducer = (state = { width: 50, height: 50 }, action) => {
  switch (action.type) {
  case types.SET_WIDTH:
    return {
      width: action.width,
      height: state.height
    };
  case types.SET_HEIGHT:
    return {
      width: state.width,
      height: action.height
    };
  default:
    return state;
  }
}

const modeReducer = (state = 'DRAW' , action) => {
  switch (action.type) {
  case types.SET_MODE:
    return action.mode;
  default:
    return state;
  }
}

const colorReducer = (state = 'rgba(0, 0, 0, 1)', action) => {
  switch (action.type) {
  case types.SET_COLOR:
    return action.color;
  default:
    return state;
  }
}

const backgroundReducer = (state = 'rgba(0, 0, 0, 0)', action) => {
  switch (action.type) {
  case types.SET_BACKGROUND:
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

const zoomReducer = (state = 1, action) => {
  switch (action.type) {
  case types.SET_ZOOM:
    return action.zoom;
  default:
    return state;
  }
}

export default combineReducers({
  size: sizeReducer,
  mode: modeReducer,
  color: colorReducer,
  background: backgroundReducer,
  moves: movesReducer,
  zoom: zoomReducer
});
