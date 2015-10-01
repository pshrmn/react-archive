import React from "react";
import Video from "./video";
import Recipe from "./recipe";

var Annotater = React.createClass({
  render: function() {
    return (
      <div className="annotater">
        <Description />
        <Video />
        <Recipe />
      </div>
    );
  }
});

var Description = React.createClass({
  render: function() {
    return (
      <div className="description">
        Quickly write down the ingredients and instructions for a recipe.
      </div>
    );
  }
});

React.render(
  <Annotater />,
  document.getElementById("content")
);
