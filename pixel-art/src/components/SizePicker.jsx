import React from 'react';
import { connect } from 'react-redux';

import { setWidth, setHeight } from '../actions';

class SizePicker extends React.Component {

  setWidth(event) {
    let width = parseInt(event.target.value, 10);
    if (isNaN(width)) {
      width = '';
    }
    this.props.setWidth(width);
  }

  setHeight(event) {
    let height = parseInt(event.target.value, 10);
    if (isNaN(height)) {
      height = '';
    }
    this.props.setHeight(height);
  }

  render() {
    const { width, height} = this.props;
    return (
      <div>
        <input
          type='text'
          title='set width (default 25)'
          value={width}
          onChange={this.setWidth.bind(this)} />
        {' by '}
        <input
          type='text'
          title='set height (default 25)'
          value={height}
          onChange={this.setHeight.bind(this)} />
      </div>
    );
  }
}

export default connect(
  state => ({
    width: state.size.width,
    height: state.size.height
  }),
  {
    setWidth,
    setHeight
  }
)(SizePicker);
