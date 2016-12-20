import React from 'react';
import ColorPicker from './ColorPicker';
import ModePicker from './ModePicker';
import TimeTravel from './TimeTravel';
import ClearButton from './ClearButton';
import SizePicker from './SizePicker';

export default () => (
  <div className='controls'>
    <ColorPicker />
    <SizePicker />
    <ModePicker />
    <TimeTravel />
    <ClearButton />
  </div>
);
