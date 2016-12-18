import React from 'react'
import { ChromePicker } from 'react-color';

export default class ColorPicker extends React.Component {

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
    this.props.setColor(color.hex);
  }

  render() {
    const { color } = this.props;
    const { picking } = this.state;
    return (
      <div>
        Color: <div
          style={{ width: 25, height: 25, background: color, border: '1px solid #ccc'}}
          onClick={this.togglePicking}
          title='Click to change colors' ></div>
        {
          picking ? (
            <ChromePicker color={color} onChangeComplete={this.setColor} />
          ) : null
        }
      </div>
    )
  }
}