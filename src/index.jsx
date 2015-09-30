import React from "react";
import Video from "./video";

var Annotater = React.createClass({
  render: function() {
    return (
      <div>
        <Video />
      </div>
    );
  }
});

React.render(
  <Annotater />,
  document.getElementById("content")
);
