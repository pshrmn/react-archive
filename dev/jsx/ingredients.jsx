import React from "react";

export default React.createClass({
  propTypes: {
    ingredients: React.PropTypes.array.isRequired
  },
  render: function() {
    var ingredients = this.props.ingredients.map(function(v, i) {
      return (
        <li key={i}>{v}</li>
      );
    }, this);
    return (
      <div className="ingredients">
        <h3>Ingredients</h3>
        <ul>
          {ingredients}
        </ul>
      </div>
    );
  }
});
