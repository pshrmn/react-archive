import React from 'react';
import PixelCanvas from './PixelCanvas';

export default class PixelArt extends React.Component {

  static defaultProps = {
    width: 25,
    height: 25,
    pixelSize: 20,
    color: '000000',
    background: 'ffffff'
  }

  render() {
    const { width, height, pixelSize } = this.props;
    return (
      <div>
        <PixelCanvas width={width} height={height} pixelSize={pixelSize} />
      </div>
    )
  }
}
