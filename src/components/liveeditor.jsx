import React from 'react';
import { connect } from 'react-redux';

import {
  resetRecipe,
  setName,
  setIngredients,
  setInstructions
} from '../actions';

const LiveEditor = React.createClass({
  render: function() {
    const {
      name = '',
      ingredients = [],
      instructions = [],
      setName,
      setIngredients,
      setInstructions
    } = this.props;
    return (
      <div className="live-editor">
        <UserInput name="name"
                   submit={ (val) => { setName(val); } }
                   value={name} />
        <UserTextarea name="ingredients"
                      submit={ (val) => { setIngredients(val); } }
                      value={ingredients.join("\n")} />
        <UserTextarea name="instructions"
                      submit={ (val) => { setInstructions(val); } }
                      value={instructions.join("\n")} />
      </div>
    );    
  }
});


export default connect(
  null,
  {
    resetRecipe,
    setName,
    setIngredients,
    setInstructions
  }
)(LiveEditor);

var UserInput = React.createClass({
  propTypes: {
    value: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    submit: React.PropTypes.func.isRequired
  },
  getInitialState: function() {
    return {
      value: this.props.value || ""
    };
  },
  componentWillReceiveProps: function(nextProps) {
    this.setState({
      value: nextProps.value
    });
  },
  handleChange: function(event) {
    this.setState({
      value: event.target.value
    });
  },
  handleBlur: function(event) {
    this.props.submit(this.state.value);
  },
  handleSubmit: function(event) {
    if ( event.which === 13 ) {
      this.props.submit(this.state.value);
    }
  },
  render: function() {
    return (
      <div>
        <label>
          {this.props.name}
          <input type="text"
                 value={this.state.value}
                 onChange={this.handleChange}
                 onBlur={this.handleBlur}
                 onKeyDown={this.handleSubmit} />
        </label>
      </div>
    );
  }
});

function nonBlankLines(text) {
  return text.split("\n").filter((line) => {
    return line !== "";
  });
}

var UserTextarea = React.createClass({
  getInitialState: function() {
    return {
      value: this.props.value || ""
    };
  },
  componentWillReceiveProps: function(nextProps) {
    this.setState({
      value: nextProps.value
    });
  },
  handleChange: function(event) {
    this.setState({
      value: event.target.value
    });
  },
  handleBlur: function(event) {
    this.props.submit(nonBlankLines(this.state.value));
  },
  handleSubmit: function(event) {
    if ( event.which === 13 ) {
      this.props.submit(nonBlankLines(this.state.value));
    }
  },
  render: function() {
    return (
      <div>
        <label>
          {this.props.name}
          <textarea value={this.state.value}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                    onKeyDown={this.handleSubmit} />
        </label>
      </div>
    );
  }
});
