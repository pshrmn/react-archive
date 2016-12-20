import React from 'react';
import PixelCanvas from './PixelCanvas';
import Controls from './Controls';

const PixelArt = ({ pixelSize, background }) => (
  <div>
    <PixelCanvas
      pixelSize={pixelSize}
      background={background} />
    <Controls />
  </div>
)

PixelArt.defaultProps = {
  pixelSize: 20,
  background: '#ffffff'
};

export default PixelArt;
