import React from 'react';
import { connect } from 'react-redux';

import { setMode } from '../actions';
import modes from '../constants/modes';

const ModePicker = ({ mode, setMode }) => {
  const modeHandler = (e) => {
    setMode(e.target.value);
  };

  const modeChoices = modes.map((m, index) => {
    return (
      <label key={index} title={m.text}>
        <i className={`fa ${m.icon}`} aria-hidden="true"></i>
        <input
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
      Mode: {modeChoices}
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
