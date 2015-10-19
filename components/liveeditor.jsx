import React from "react";

export default React.createClass({
  getDefaultProps: function() {
    return {
      name: "",
      url: "",
      ytID: "",
      ingredients: [],
      instructions: [],
    };
  },
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
      this.props.actions.setVideoID(value);
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
  save: function(event) {
    event.preventDefault();
    this.props.actions.saveRecipe({
      name: this.props.name,
      url: this.props.url,
      ytID: this.props.ytID,
      ingredients: this.props.ingredients,
      instructions: this.props.instructions
    });
  },
  render: function() {
    return (
      <div className="live-editor">
        <p>
          <button onClick={this.save}>Save</button>
          <button onClick={() => this.props.actions.resetRecipe()}>Reset</button>
        </p>
        <UserInput name="name"
                   submit={this.submit}
                   value={this.props.name} />
        <UserInput name="url"
                   submit={this.submit}
                   value={this.props.url} />
        <UserTextarea name="ingredients"
                      submit={this.submit}
                      value={this.props.ingredients.join("\n")} />
        <UserTextarea name="instructions"
                      submit={this.submit}
                      value={this.props.instructions.join("\n")} />
      </div>
    );
  }
});

var UserInput = React.createClass({
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
  componentWillReceiveProps: function(nextProps) {
    this.setState({
      value: nextProps.value
    });
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
