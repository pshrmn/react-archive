import React from 'react';
import { connect } from 'react-redux';

import { setMode } from '../actions';
import modes from '../constants/modes';
console.log(modes);
const ModePicker = ({ mode, setMode }) => {
  const modeHandler = (e) => {
    setMode(e.target.value);
  };

  const modeChoices = modes.map((m, index) => {
    return (
      <label key={index}>
        {m.text} <input
          type='radio'
          name='mode'
          value={m.type}
          checked={mode === m.type}
          onChange={modeHandler} />
      </label>
    )
  });

  return (
    <div>
      <p>Mode</p>
      {modeChoices}
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
