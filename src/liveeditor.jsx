import React from "react";
import Video from "./video";
import RecipeForm from "./recipeform";

export default React.createClass({
  submit: function(obj){
    this.props.submit(obj);
  },
  render: function() {
    return (
      <div className="live-editor">
        <Video url={this.props.url} />
        <RecipeForm submit={this.submit} />
      </div>
    );
  }
})