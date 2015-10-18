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

let Thumbnail = React.createClass({
  render: function() {
    let { ytID, name, index } = this.props;
    let { loadRecipe, deleteRecipe } = this.props.actions;
    let src = `https://i.ytimg.com/vi/${this.props.ytID}/mqdefault.jpg`;
    return (
      <li>
        <div>
          <img src={src} width="196" height="110"/>
        </div>
        <div>
          {name}
        </div>
        <div>
          <button onClick={() => { loadRecipe(index);} }>Edit</button>
          <button onClick={() => { deleteRecipe(index);} }>Delete</button>
        </div>
      </li>
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
        <Thumbnail key={i}
                   index={i}
                   actions={this.props.actions}
                   {...r} />
      );
    }, this);
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

