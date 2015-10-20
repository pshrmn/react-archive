import React from "react";
import { VideoID } from "../helpers";

let Thumbnail = React.createClass({
  shouldComponentUpdate: function(nextProps, nextState) {
    return (
      this.props.ytID !== nextProps.ytID ||
      this.props.name !== nextProps.name ||
      this.props.index !== nextProps.index ||
      this.props.active !== nextProps.active
    )
  },
  handleDelete: function(event) {
    event.stopPropagation();
    this.props.actions.deleteRecipe(this.props.index);
  },
  handleClick: function(event) {
    this.props.actions.loadRecipe(this.props.index);
  },
  render: function() {
    let { ytID, name, active } = this.props;
    let src = `https://i.ytimg.com/vi/${ytID}/mqdefault.jpg`;
    let thumb = ytID === "" ? (
      <div className="empty-thumb">?</div>
      ) : (<img src={src} />);
    let className = "thumbnail";
    if ( active ) {
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
        <input placeholder="YouTube URL..."
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

