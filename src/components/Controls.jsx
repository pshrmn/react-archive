import React from 'react';
import ColorPicker from './ColorPicker';
import ModePicker from './ModePicker';
import TimeTravel from './TimeTravel';
import ClearButton from './ClearButton';

export default () => (
  <div className='controls'>
    <ColorPicker />
    <ModePicker />
    <TimeTravel />
    <ClearButton />
  </div>
);
