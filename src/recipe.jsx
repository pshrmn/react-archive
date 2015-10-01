import React from "react";
import Ingredients from "./ingredients";
import Steps from "./steps";

export default React.createClass({
  render: function() {
    return (
      <div className="recipe">
        <h2>Recipe</h2>
        <input type="text" placeholder="Recipe Name..." />
        <Ingredients />
        <Steps />
      </div>
    );
  }
});
