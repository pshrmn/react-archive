import React from 'react';
import PixelCanvas from './PixelCanvas';
import ColorPicker from './ColorPicker';

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
      background: props.background
    };

    this.setColor = this.setColor.bind(this);
  }

  setColor(color) {
    this.setState({ color: color });
  }

  render() {
    const { width, height, pixelSize } = this.props;
    const { color, background } = this.state;
    return (
      <div>
        <PixelCanvas
          width={width}
          height={height}
          pixelSize={pixelSize}
          color={color}
          background={background} />
        <ColorPicker color={color} setColor={this.setColor} />
      </div>
    )
  }
}
