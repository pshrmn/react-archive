import * as types from '../constants/ActionTypes';

export const setPixels = pixels => ({
  type: types.SET_PIXELS,
  pixels
});

export const undo = () => ({
  type: types.UNDO
});

export const redo = () => ({
  type: types.REDO
});

export const setMode = mode => ({
  type: types.SET_MODE,
  mode
});

export const setColor = color => ({
  type: types.SET_COLOR,
  color
});
