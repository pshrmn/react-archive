import React from "react";
import Video from "./video";
import Recipe from "./recipe";

var Annotater = React.createClass({
  render: function() {
    return (
      <div className="annotater">
        <Video />
        <Recipe />
      </div>
    );
  }
});

React.render(
  <Annotater />,
  document.getElementById("content")
);
