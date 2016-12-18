import React from 'react';

export default class PixelCanvas extends React.Component {

  constructor(props) {
    super(props)
    const { width, height } = props

    const pixels = []
    for (let h=0; h<height; h++) {
      const row = [];
      for (let w=0; w<width; w++) {
        row.push(undefined);
      }
      pixels.push(row);
    }

    this.state = {
      pixels,
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
    const { pixels } = this.state;
    const { pixelSize, background } = this.props;
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
    const { pixelSize } = this.props;
    // determine which "pixel" we are in
    const row = Math.floor(y/pixelSize);
    const column = Math.floor(x/pixelSize);

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
    const [minX, maxX] = startX < x ? [startX, x] : [x, startX];
    const [minY, maxY] = startY < y ? [startY, y] : [y, startY];
    const width = maxX - minX;
    const height = maxY - minY;
    this.refresh();
    this.context.strokeStyle = '#666';
    this.context.fillStyle = this.props.color;
    this.context.fillRect(minX, minY, width, height);
  }

  endPaint(event) {
    const { x, y} = coordinates(this.canvas, event);
    const { pixelSize, color } = this.props;

    // determine which "pixel" we are in
    const row = Math.floor(y/pixelSize);
    const column = Math.floor(x/pixelSize);

    const { pixels, startRow, startColumn } = this.state;
    const [minRow, maxRow] = startRow < row ? [startRow, row] : [row, startRow];
    const [minCol, maxCol] = startColumn < column ? [startColumn, column] : [column, startColumn];

    const copy = copy2dArray(pixels);
    for (let r=minRow; r<=maxRow; r++) {
      for (let c=minCol; c<=maxCol; c++) {
        copy[r][c] = color;
      }
    }
    this.setState({
      drawing: false,
      pixels: copy
    })
  }

  componentDidUpdate() {
    this.refresh()
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
    this.refresh()
  }
}

function copy2dArray(array) {
  const copy = []
  for (let r=0; r<array.length; r++) {
    copy.push(array[r].slice());
  }
  return copy;
}

function coordinates(canvas, event) {
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  return { x, y };
}