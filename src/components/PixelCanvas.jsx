import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Preview from './Preview';
import { coordinates, minMax, paintArray } from '../helpers';
import { addMove, setColor } from '../actions';
import { PICK } from '../constants/modes';

class PixelCanvas extends React.Component {

  static propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    pixelSize: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    mode: PropTypes.string.isRequired,
    pixels: PropTypes.array
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
    const { pixels, pixelSize, width, height } = this.props;
    if (!pixels.length) {
      return;
    }
    for (let r=0; r<pixels.length; r++) {
      const row = pixels[r];
      for (let c=0; c<row.length; c++) {
        const color = row[c] || 'rgba(0, 0, 0, 0)';
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
      const x = w*pixelSize - 0.5;
      this.context.beginPath();
      this.context.moveTo(x, 0);
      this.context.lineTo(x, height*pixelSize);
      this.context.stroke()
    }
    // horizontal
    for (let h=1; h<height; h++) {
      const y = h*pixelSize - 0.5;
      this.context.beginPath();
      this.context.moveTo(0, y);
      this.context.lineTo(width*pixelSize, y);
      this.context.stroke()
    }
  }

  startPaint(event) {
    // don't draw on right clicks
    if (event.button == 2) {
      return;
    }
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
    // setMove
    this.props.addMove({
      type: mode,
      color: pixelValue,
      x: minCol,
      y: minRow,
      width: maxCol - minCol,
      height: maxRow - minRow
    })

    this.setState({
      drawing: false
    })
  }

  render() {
    const { width, height, pixelSize, pixels, background } = this.props;
    return (
      <div>
        <canvas
          ref={node => this.canvas = node}
          width={width*pixelSize}
          height={height*pixelSize}
          style={{ background }}
          onMouseDown={this.startPaint}
          onMouseMove={this.midPaint}
          onMouseUp={this.endPaint} >
        </canvas>
        <Preview width={width} height={height} pixels={pixels} />
      </div>
    )
  }

  componentDidMount() {
    this.context = this.canvas.getContext('2d');
    this.refresh();
  }

  componentDidUpdate() {
    this.context = this.canvas.getContext('2d');
    this.refresh();
  }
}

export default connect(
  state => {
    const { width, height } = state.size;
    return {
      mode: state.mode,
      color: state.color,
      background: state.background,
      width: width !== '' && !isNaN(width) ? width : 0,
      height: height !== '' && !isNaN(height) ? height : 0,
      // generate the pixels array using the past moves
      pixels: paintArray(width, height, state.moves.past),
    };
  },
  {
    addMove,
    setColor
  }
)(PixelCanvas);
