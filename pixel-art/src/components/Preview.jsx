import React from 'react';
import { connect } from 'react-redux';

import { paintArray } from '../helpers';
import { setZoom } from '../actions';

const zoomValues = [1, 2, 4, 8];

class Preview extends React.Component {

  refresh() {
    this.clear();
    this.draw();
  }

  clear() {
    const { width, height, zoom } = this.props;
    this.context.clearRect(0, 0, width*zoom, height*zoom);
  }

  draw() {
    const { pixels, zoom, background } = this.props;
    if (!pixels.length) {
      return;
    }
    for (let r=0; r<pixels.length; r++) {
      const row = pixels[r];
      for (let c=0; c<row.length; c++) {
        const color = row[c] || background;
        this.context.fillStyle = color;
        this.context.fillRect(c*zoom, r*zoom, zoom, zoom);
      }
    }
  }

  setZoom(event) {
    this.props.setZoom(parseInt(event.target.value, 10));
  }

  render() {
    const { width, height, zoom } = this.props;
    return (
      <div>
        <select onChange={this.setZoom.bind(this)} style={{ display: 'block' }}>
          {zoomValues.map(z => (
            <option key={z} value={z}>{z}x</option>
          ))}
        </select>
        <canvas
          ref={node => this.canvas = node}
          width={width*zoom}
          height={height*zoom} ></canvas>
      </div>
    );
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
  state => ({
    zoom: state.zoom,
    background: state.background
  }),
  {
    setZoom
  }
)(Preview);
