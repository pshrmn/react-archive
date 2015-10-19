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
  shouldComponentUpdate: function(nextProps, nextState) {
    return (
      nextProps.ytID !== this.props.ytID ||
      nextProps.name !== this.props.name ||
      nextProps.index !== this.props.index
    );
  },
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
    return (
      <li className="thumbnail" onClick={this.handleClick} >
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

