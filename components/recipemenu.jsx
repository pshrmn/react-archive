import React from "react";

let AddARecipe = React.createClass({
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
  handleSubmit: function(event) {
    if ( event.which === 13 ) {
      this.props.onSubmit(event.target.value);
    }
  },
  render: function() {
    return (
      <div>
        <p>Add A Recipe</p>
        <input type="text"
               onChange={this.handleChange}
               onKeyDown={this.handleSubmit} />
      </div>
    );
  }
});

export default React.createClass({
  propTypes: {
    savedRecipes: React.PropTypes.array.isRequired
  },
  render: function() {
    let recipes = this.props.savedRecipes.map((r, i) => {
      return (
        <li key={i}>
          {r.name}
          <button onClick={() => { this.props.actions.loadRecipe(i);} }>Edit</button>
        </li>
      );
    });
    // not including this yet
    //<AddARecipe onSubmit={this.props.actions.makeRecipe} />
    return (
      <div className="recipe-menu">
        Saved Recipes:
        <ul className="saved-recipes">
          {recipes}
        </ul>
      </div>
    );
  }
});

