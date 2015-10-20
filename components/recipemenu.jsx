import React from "react";
import { VideoID } from "../helpers";

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
  handleDelete: function(event) {
    event.stopPropagation();
    this.props.actions.deleteRecipe(this.props.index);
  },
  handleClick: function(event) {
    this.props.actions.loadRecipe(this.props.index);
  },
  render: function() {
    let { ytID, name, index } = this.props;
    let { loadRecipe, deleteRecipe } = this.props.actions;
    let src = `https://i.ytimg.com/vi/${this.props.ytID}/mqdefault.jpg`;
    let thumb = this.props.ytID === "" ? (
      <div className="empty-thumb">?</div>
      ) : (<img src={src} />);
    let className = "thumbnail";
    if ( this.props.active ) {
      className += " active";
    }
    return (
      <li className={className} onClick={this.handleClick} >
        <div>
          {thumb}
        </div>
        <div className="thumb-info">
          {name}
        </div>
        <div className="thumb-controls">
          <button title="delete recipe"
                  onClick={this.handleDelete}>
            {String.fromCharCode(215)}
          </button>
        </div>
      </li>
    );
  }
});

let RecipeCreator = React.createClass({
  getInitialState: function() {
    return {
      value: ""
    }
  },
  createRecipe: function(event) {
    event.preventDefault();
    let ytID = VideoID(this.state.value);
    if ( ytID !== "" ) {
      this.props.createRecipe(ytID);
      this.setState({
        value: ""
      });
    }
  },
  handleChange: function(event) {
    this.setState({
      value: event.target.value
    });
  },
  render: function() {
    return (
      <div>
        <input placeholder="youtube url..."
               value={this.state.value}
               onChange={this.handleChange} />
        <button onClick={this.createRecipe}>Add Recipe</button>
      </div>
    );
  }
});

export default React.createClass({
  propTypes: {
    recipes: React.PropTypes.array.isRequired,
    index: React.PropTypes.number.isRequired,
    actions: React.PropTypes.object.isRequired
  },
  createRecipe: function(url) {
    this.props.actions.createRecipe(url);
  },
  render: function() {
    let recipes = this.props.recipes.map((r, i) => {
      return (
        <Thumbnail key={i}
                   index={i}
                   active={i===this.props.index}
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
        <RecipeCreator createRecipe={this.createRecipe} />
      </div>
    );
  }
});

