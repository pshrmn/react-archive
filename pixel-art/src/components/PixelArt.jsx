import React from 'react';
import PixelCanvas from './PixelCanvas';
import Controls from './Controls';

const PixelArt = ({ pixelSize }) => (
  <div className='pixel-art'>
    <PixelCanvas pixelSize={pixelSize} />
    <Controls />
  </div>
)

PixelArt.defaultProps = {
  pixelSize: 20,
};

export default PixelArt;
