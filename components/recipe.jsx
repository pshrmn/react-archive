import React from "react";
import Ingredients from "./ingredients";
import Instructions from "./instructions";

export default React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    ytID: React.PropTypes.string.isRequired,
    ingredients: React.PropTypes.array.isRequired,
    instructions: React.PropTypes.array.isRequired
  },
  getDefaultProps: function() {
    return {
      name: "",
      ytID: "",
      ingredients: [],
      instructions: [],
    };
  },
  render: function() {
    var ingredients = this.props.ingredients;
    var instructions = this.props.instructions;
    var url = this.props.ytID !== "" ? `https://youtu.be/${this.props.ytID}` : null;
    return (
      <div className="recipe">
        <h2>{this.props.name}</h2>
        <h3>{url}</h3>
        <Ingredients ingredients={ingredients} />
        <Instructions instructions={instructions} />
      </div>
    );
  }
});
