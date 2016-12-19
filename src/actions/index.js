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

export const setMode = mode => ({
  type: types.SET_MODE,
  mode
});

export const setColor = color => ({
  type: types.SET_COLOR,
  color
});
