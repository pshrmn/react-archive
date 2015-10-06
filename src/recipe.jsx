import React from "react";
import Ingredients from "./ingredients";
import Instructions from "./instructions";

export default React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    url: React.PropTypes.string.isRequired,
    ingredients: React.PropTypes.array.isRequired,
    instructions: React.PropTypes.array.isRequired
  },
  render: function() {
    var ingredients = this.props.ingredients;
    var instructions = this.props.instructions;
    return (
      <div className="recipe">
        <h2>{this.props.name}</h2>
        <h3>{this.props.url}</h3>
        <Ingredients ingredients={ingredients} />
        <Instructions instructions={instructions} />
      </div>
    );
  }
});
