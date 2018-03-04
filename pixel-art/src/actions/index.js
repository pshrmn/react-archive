import * as types from '../constants/ActionTypes';

export const addMove = move => ({
  type: types.ADD_MOVE,
  move
})

export const undo = () => ({
  type: types.UNDO_MOVE
});

export const redo = () => ({
  type: types.REDO_MOVE
});

export const clear = () => ({
  type: types.CLEAR
});

export const setMode = mode => ({
  type: types.SET_MODE,
  mode
});

export const setColor = color => ({
  type: types.SET_COLOR,
  color
});

export const setBackground = color => ({
  type: types.SET_BACKGROUND,
  color
});

export const setWidth = width => ({
  type: types.SET_WIDTH,
  width
});

export const setHeight = height => ({
  type: types.SET_HEIGHT,
  height
});

export const setZoom = zoom => ({
  type: types.SET_ZOOM,
  zoom
});
