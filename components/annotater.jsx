import React from "react";
import LiveEditor from "./liveeditor";
import Recipe from "./recipe";

export default React.createClass({
  submit: function(name, value) {
    switch (name) {
    case "name":
      this.props.actions.setName(value);
      break;
    case "url":
      this.props.actions.setURL(value);
      break;
    case "ingredients":
      this.props.actions.setIngredients(value);
      break;
    case "instructions":
      this.props.actions.setInstructions(value);
      break;
    }
  },
  render: function() {
    return (
      <div className="annotater">
        <LiveEditor url={this.props.url}
                    submit={this.submit} />
        <Recipe {...this.props} />
      </div>
    );
  }
});
