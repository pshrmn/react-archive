import React from "react";
import Video from "./video";

export default React.createClass({
  getInitialState: function() {
    return {
      name: "",
      url: "",
      ingredients: [],
      instructions: []
    }
  },
  submit: function(name, value) {
    switch (name) {
    case "name":
      this.props.actions.setName(value);
      break;
    case "url":
      this.props.actions.setURL(value);
      break;
    case "ingredients":
      value = value.split("\n").filter(function(line){
        return line !== "";
      });
      this.props.actions.setIngredients(value);
      break;
    case "instructions":
      value = value.split("\n").filter(function(line){
        return line !== "";
      });
      this.props.actions.setInstructions(value);
      break;
    }
    this.setState({
      [name]: value
    });
  },
  render: function() {
    return (
      <div className="live-editor">
        <p>
          <button onClick={() => this.props.actions.saveRecipe()}>Save</button>
          <button onClick={() => this.props.actions.resetRecipe()}>Reset</button>
        </p>
        <UserInput name="name"
                   submit={this.submit} />
        <UserInput name="url"
                   submit={this.submit} />
        <Video url={this.props.url} />
        <UserTextarea name="ingredients"
                      submit={this.submit} />
        <UserTextarea name="instructions"
                      submit={this.submit} />
      </div>
    );
  }
});

var UserInput = React.createClass({
  getInitialState: function() {
    return {
      value: ""
    };
  },
  handleChange: function(event) {
    this.setState({
      value: event.target.value
    });
  },
  handleBlur: function(event) {
    this.props.submit(this.props.name, this.state.value);
  },
  handleSubmit: function(event) {
    if ( event.which === 13 ) {
      this.props.submit(this.props.name, this.state.value);
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
  handleChange: function(event) {
    //this.props.submit(this.props.name, event.target.value);
    this.setState({
      value: event.target.value
    });
  },
  handleBlur: function(event) {
    this.props.submit(this.props.name, this.state.value);
  },
  handleSubmit: function(event) {
    if ( event.which === 13 ) {
      this.props.submit(this.props.name, this.state.value);
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
