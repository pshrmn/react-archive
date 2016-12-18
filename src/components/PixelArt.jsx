import React from 'react';
import PixelCanvas from './PixelCanvas';
import ColorPicker from './ColorPicker';
import ModePicker from './ModePicker';

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

    this.setColor = this.setColor.bind(this);
    this.setMode = this.setMode.bind(this);
  }

  setColor(color) {
    this.setState({ color });
  }

  setMode(mode) {
    this.setState({ mode });
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
          mode={mode}
          color={color}
          background={background} />
        <div className='controls'>
          <ColorPicker color={color} setColor={this.setColor} />
          <ModePicker setMode={this.setMode} />
        </div>
      </div>
    )
  }
}
