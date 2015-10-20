import React from "react";

export default React.createClass({
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
    this.props.actions.saveRecipes();
  },
  render: function() {
    //<button onClick={() => this.props.reset()}>Reset</button>
    return (
      <div className="live-editor">
        <p>
          <button onClick={this.save}>Save</button>
          <button onClick={() => this.props.actions.resetRecipe() }>Cancel</button>
        </p>
        <UserInput name="name"
                   submit={ (val) => {this.props.actions.setName(val);} }
                   value={this.props.name} />
        <UserTextarea name="ingredients"
                      submit={ (val) => {this.props.actions.setIngredients(val);} }
                      value={this.props.ingredients.join("\n")} />
        <UserTextarea name="instructions"
                      submit={ (val) => {this.props.actions.setInstructions(val);} }
                      value={this.props.instructions.join("\n")} />
      </div>
    );
  }
});

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

var UserTextarea = React.createClass({
  getInitialState: function() {
    return {
      value: ""
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
    this.props.submit(this.state.value.split("\n"));
  },
  handleSubmit: function(event) {
    if ( event.which === 13 ) {
      this.props.submit(this.state.value.split("\n"));
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
