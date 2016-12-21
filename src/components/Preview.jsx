import React from 'react';
import { connect } from 'react-redux';

import { paintArray } from '../helpers';

export default class Preview extends React.Component {

  refresh() {
    this.clear();
    this.draw();
  }

  clear() {
    const { width, height } = this.props;
    this.context.clearRect(0, 0, width, height);
  }

  draw() {
    const { pixels, width, height } = this.props;
    if (!pixels.length) {
      return;
    }
    for (let r=0; r<pixels.length; r++) {
      const row = pixels[r];
      for (let c=0; c<row.length; c++) {
        const color = row[c] || 'rgba(0, 0, 0, 0)';
        this.context.fillStyle = color;
        this.context.fillRect(c, r, 1, 1);
      }
    }
  }

  setRefs(node) {
    this.canvas = node;
  }

  render() {
    const { width, height } = this.props;
    return (
      <div>
        <p>Preview:</p>
        <canvas
          ref={node => this.canvas = node}
          width={width}
          height={height} ></canvas>
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
