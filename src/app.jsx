import React from "react";
import LiveEditor from "./liveeditor";
import Recipe from "./recipe";

var Annotater = React.createClass({
  getInitialState: function() {
    return {
      recipe: {
        name: "",
        url: "",
        ingredients: [],
        instructions: []
      }
    };
  },
  submit: function(obj) {
    console.log(obj);
    this.setState({
      recipe: obj
    });
  },
  render: function() {
    return (
      <div className="annotater">
        <LiveEditor submit={this.submit}
                    url={this.state.recipe.url} />
        <Recipe {...this.state.recipe} />
      </div>
    );
  }
});

React.render(
  <Annotater />,
  document.getElementById("content")
);
