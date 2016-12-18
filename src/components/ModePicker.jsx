import React from 'react';

export default class ModePicker extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      mode: 'DRAW'
    };

    this.setMode = this.setMode.bind(this);
  }

  setMode(event) {
    this.props.setMode(event.target.value);
    this.setState({ mode: event.target.value });
  }

  render() {
    const { mode } = this.state
    return (
      <div>
        <p>Mode</p>
        <label>
          Draw <input
            type='radio'
            name='mode'
            value='DRAW'
            checked={mode === 'DRAW'}
            onChange={this.setMode} />
        </label>
        <label>
          Erase <input
            type='radio'
            name='mode'
            value='ERASE'
            checked={mode === 'ERASE' }
            onChange={this.setMode} />
        </label>
      </div>
    );
  }
}
