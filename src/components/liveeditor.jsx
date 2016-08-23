import React from 'react';
import { connect } from 'react-redux';

import {
  saveRecipes,
  resetRecipe,
  setName,
  setIngredients,
  setInstructions
} from '../actions';

const LiveEditor = React.createClass({
  getDefaultProps: function() {
    return {
      name: "",
      ytID: "",
      ingredients: [],
      instructions: [],
    };
  },
  propTypes: {
    name: React.PropTypes.string.isRequired,
    ytID: React.PropTypes.string.isRequired,
    ingredients: React.PropTypes.array.isRequired,
    instructions: React.PropTypes.array.isRequired
  },
  save: function(event) {
    event.preventDefault();
    this.props.saveRecipes();
  },
  render: function() {
    //<button onClick={() => this.props.reset()}>Reset</button>
    return (
      <div className="live-editor">
        <p>
          <button onClick={this.save}>Save</button>
          <button onClick={() => this.props.resetRecipe() }>Cancel</button>
        </p>
        <UserInput name="name"
                   submit={ (val) => {this.props.setName(val);} }
                   value={this.props.name} />
        <UserTextarea name="ingredients"
                      submit={ (val) => {this.props.setIngredients(val);} }
                      value={this.props.ingredients.join("\n")} />
        <UserTextarea name="instructions"
                      submit={ (val) => {this.props.setInstructions(val);} }
                      value={this.props.instructions.join("\n")} />
      </div>
    );
  }
});

export default connect(
  null,
  {
    saveRecipes,
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
