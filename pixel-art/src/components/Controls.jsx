import React from 'react';
import ColorPicker from './ColorPicker';
import BackgroundPicker from './BackgroundPicker';
import ModePicker from './ModePicker';
import TimeTravel from './TimeTravel';
import ClearButton from './ClearButton';
import SizePicker from './SizePicker';

const Label = ({ title, children }) => (
  <div>
    <h3>{title}</h3>
    {children}
  </div>
)

export default () => (
  <div className='controls'>
    <h2>Controls</h2>
    <Label title='Colors'>
      <ColorPicker />
      <BackgroundPicker />
    </Label>
    <Label title='Size'>
      <SizePicker />
    </Label>
    <Label title='Mode'>
      <ModePicker />
    </Label>
    <Label title='Undo/Redo'>
      <TimeTravel />
    </Label>
    <Label title='Clear'>
      <ClearButton />
    </Label>
  </div>
);
