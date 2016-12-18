import React from 'react';

export default class PixelCanvas extends React.Component {

  refresh() {
    this.clear();
    this.draw();
    this.drawGrid();
  }

  clear() {
    const { width, height, pixelSize } = this.props;
    this.context.clearRect(0, 0, width*pixelSize, height*pixelSize);
  }

  draw() {
    // tbd
  }

  drawGrid() {
    const { width, height, pixelSize } = this.props;
    this.context.strokeStyle = '#ccc';
    this.context.lineWidth = 1;
    // vertical
    for (let w=1; w<width; w++) {
      this.context.beginPath();
      this.context.moveTo(w*pixelSize, 0);
      this.context.lineTo(w*pixelSize, height*pixelSize);
      this.context.stroke()
    }
    // horizontal
    for (let h=1; h<height; h++) {
      this.context.beginPath();
      this.context.moveTo(0, h*pixelSize);
      this.context.lineTo(width*pixelSize, h*pixelSize);
      this.context.stroke()
    }
  }

  render() {
    const { width, height, pixelSize } = this.props;
    return (
      <canvas
        ref={node => this.canvas = node}
        width={width*pixelSize}
        height={height*pixelSize}>
      </canvas>
    )
  }

  componentDidMount() {
    this.context = this.canvas.getContext('2d')
    this.refresh()
  }

  componentDidUpdate() {
    this.refresh()
  }
}
