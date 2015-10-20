import React from "react";
import LiveEditor from "./liveeditor";
import Recipe from "./recipe";
import Video from "./video";

export default React.createClass({
  propTypes: {
    // action dispatching functions
    actions: React.PropTypes.object,
    // recipe props
    name: React.PropTypes.string.isRequired,
    ytID: React.PropTypes.string.isRequired,
    ingredients: React.PropTypes.array.isRequired,
    instructions: React.PropTypes.array.isRequired
  },
  getDefaultProps: function() {
    return {
      index: -1,
      name: "",
      ytID: "",
      ingredients: [],
      instructions: []
    };
  },
  render: function() {
    let { actions, name, ytID, ingredients, instructions } = this.props;
    return (
      <div className="annotater">
        <div className="edit-view">
          <Video ytID={ytID} />
          <LiveEditor actions={actions}
                      name={name}
                      ingredients={ingredients}
                      instructions={instructions} />
        </div>
        <div className="print-view">
          <Recipe name={name}
                  ytID={ytID}
                  ingredients={ingredients}
                  instructions={instructions} />
        </div>
      </div>
    );
  }
});
