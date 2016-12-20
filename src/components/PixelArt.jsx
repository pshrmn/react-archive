import React from 'react';
import PixelCanvas from './PixelCanvas';
import Controls from './Controls';

export default class PixelArt extends React.Component {

  static defaultProps = {
    width: 25,
    height: 25,
    pixelSize: 20,
    color: '#000000',
    background: '#ffffff'
  }

  constructor(props) {
    super(props);

    this.state = {
      color: props.color,
      background: props.background,
      mode: 'DRAW'
    };
  }

  render() {
    const { width, height, pixelSize } = this.props;
    const { color, background, mode } = this.state;
    return (
      <div>
        <PixelCanvas
          width={width}
          height={height}
          pixelSize={pixelSize}
          background={background} />
        <Controls />
      </div>
    )
  }
}
