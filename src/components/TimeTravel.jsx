import React from 'react';
import { connect } from 'react-redux';

import { undo, redo } from '../actions';

const TimeTravel = ({ undo, redo, canUndo, canRedo }) => (
  <div>
    <button type='button' disabled={!canUndo} onClick={undo}>Undo</button>
    <button type='button' disabled={!canRedo} onClick={redo}>Redo</button>
  </div>
)


export default connect(
  state => ({
    canUndo: state.pixels.before.length !== 0,
    canRedo: state.pixels.after.length !== 0
  }),
  {
    undo,
    redo
  }
)(TimeTravel);
