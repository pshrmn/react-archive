import React from 'react'
import { connect } from 'react-redux';
import { ChromePicker } from 'react-color';

import { setColor } from '../actions';
import { colorAsRgba } from '../helpers';

class ColorPicker extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      picking: false
    }

    this.setColor = this.setColor.bind(this);
    this.togglePicking = this.togglePicking.bind(this);
  }

  togglePicking() {
    this.setState({ picking: !this.state.picking });
  }

  setColor(color) {
    this.props.setColor(colorAsRgba(color));
  }

  render() {
    const { color } = this.props;
    const { picking } = this.state;
    return (
      <div className='color-picker' style={{ position: 'relative' }}>
        <div
          style={{
            width: 25,
            height: 25,
            background: color,
            border: '1px solid #ccc',
            marginRight: 5
          }}
          onClick={this.togglePicking}
          title={`Click to change colors (currently ${color})`} ></div>
        {
          picking ? (
            <div style={{ position: 'absolute' }}>
              <ChromePicker color={color} onChangeComplete={this.setColor} />
            </div>
          ) : null
        }
      </div>
    )
  }
}

export default connect(
  state => ({
    color: state.color
  }),
  {
    setColor
  }
)(ColorPicker);
