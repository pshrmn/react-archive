import React from 'react'
import { connect } from 'react-redux';
import { ChromePicker } from 'react-color';

import { setBackground } from '../actions';

class BackgroundPicker extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      picking: false
    }

    this.setBackground = this.setBackground.bind(this);
    this.togglePicking = this.togglePicking.bind(this);
  }

  togglePicking() {
    this.setState({ picking: !this.state.picking });
  }

  setBackground(color) {
    const { r, g, b, a } = color.rgb;
    this.props.setBackground(`rgba(${r},${g},${b},${a})`);
  }

  render() {
    const { color } = this.props;
    const { picking } = this.state;
    return (
      <div style={{ position: 'relative' }}>
        <div
          style={{
            width: 25,
            height: 25,
            background: color,
            border: '1px solid #ccc',
            marginRight: 5
          }}
          onClick={this.togglePicking}
          title='Click to change background color' ></div>
        {
          picking ? (
            <div style={{ position: 'absolute' }}>
              <ChromePicker color={color} onChangeComplete={this.setBackground} />
            </div>
          ) : null
        }
      </div>
    )
  }
}

export default connect(
  state => ({
    color: state.background
  }),
  {
    setBackground
  }
)(BackgroundPicker);
