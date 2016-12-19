import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { copy2dArray, coordinates, minMax } from '../helpers';
import { setPixels, setColor } from '../actions';
import { PICK } from '../constants/modes';

class PixelCanvas extends React.Component {

  static propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    pixelSize: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    background: PropTypes.string.isRequired,
    mode: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props)

    this.state = {
      drawing: false
    };

    this.startPaint = this.startPaint.bind(this);
    this.midPaint = this.midPaint.bind(this);
    this.endPaint = this.endPaint.bind(this);
  }

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
    const { pixels, pixelSize, background } = this.props;
    if (!pixels.length) {
      return;
    }
    for (let r=0; r<pixels.length; r++) {
      const row = pixels[r];
      for (let c=0; c<row.length; c++) {
        const color = row[c] || background;
        this.context.fillStyle = color;
        this.context.fillRect(c*pixelSize, r*pixelSize, pixelSize, pixelSize);
      }
    }
  }

  drawGrid() {
    const { width, height, pixelSize } = this.props;
    this.context.strokeStyle = '#efefef';
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

  startPaint(event) {
    const { x, y} = coordinates(this.canvas, event);
    const { pixelSize, mode } = this.props;
    // determine which "pixel" we are in
    const row = Math.floor(y/pixelSize);
    const column = Math.floor(x/pixelSize);

    if ( mode === 'PICK' ) {
      const { pixels, setColor, background } = this.props;
      // default to background color if pixel is undefined
      setColor(pixels[row][column] || background);
      return;
    }

    this.setState({
      drawing: true,
      startX: x,
      startY: y,
      startRow: row,
      startColumn: column
    })
  }

  midPaint(event) {
    const { x, y} = coordinates(this.canvas, event);
    const { drawing, startX, startY } = this.state;
    if (!drawing) {
      return;
    }
    const { color, background, mode } = this.props;

    const [minX, maxX] = minMax(startX, x);
    const [minY, maxY] = minMax(startY, y);
    const width = maxX - minX;
    const height = maxY - minY;
    this.refresh();
    this.context.strokeStyle = '#666';
    this.context.fillStyle = mode === 'DRAW' ? color : background;
    this.context.fillRect(minX, minY, width, height);
  }

  endPaint(event) {
    const { x, y} = coordinates(this.canvas, event);
    const { mode, pixelSize, color, pixels } = this.props;
    const { drawing, startRow, startColumn } = this.state;
    if (!drawing) {
      return;
    }

    // determine which "pixel" we are in
    const row = Math.floor(y/pixelSize);
    const column = Math.floor(x/pixelSize);

    const [minRow, maxRow] = minMax(startRow, row);
    const [minCol, maxCol] = minMax(startColumn, column);

    const pixelValue = mode === 'DRAW' ? color : undefined;
    const copy = copy2dArray(pixels);
    for (let r=minRow; r<=maxRow; r++) {
      for (let c=minCol; c<=maxCol; c++) {
        copy[r][c] = pixelValue;
      }
    }
    this.props.setPixels(copy)
    this.setState({
      drawing: false
    })
  }

  render() {
    const { width, height, pixelSize } = this.props;
    return (
      <canvas
        ref={node => this.canvas = node}
        width={width*pixelSize}
        height={height*pixelSize}
        onMouseDown={this.startPaint}
        onMouseMove={this.midPaint}
        onMouseUp={this.endPaint} >
      </canvas>
    )
  }

  componentDidMount() {
    this.context = this.canvas.getContext('2d')
    this.refresh()
  }

  componentDidUpdate() {
    this.context = this.canvas.getContext('2d')
    this.refresh()
  }
}

export default connect(
  state => ({
    mode: state.mode,
    color: state.color,
    pixels: state.pixels.current
  }),
  {
    setPixels,
    setColor
  }
)(PixelCanvas);
