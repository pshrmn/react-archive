import React from 'react';
import { connect } from 'react-redux';

import { setMode } from '../actions';

const ModePicker = ({ mode, setMode }) => {
  const modeHandler = (e) => {
    setMode(e.target.value);
  };

  const modes = ['DRAW', 'ERASE'].map((name, index) => {
    return (
      <label key={index}>
        {name} <input
          type='radio'
          name='mode'
          value={name}
          checked={mode === name}
          onChange={modeHandler} />
      </label>
    )
  });

  return (
    <div>
      <p>Mode</p>
      {modes}
    </div>
  );
}

export default connect(
  state => ({
    mode: state.mode
  }),
  {
    setMode
  }
)(ModePicker);
