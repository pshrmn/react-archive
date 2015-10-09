import React from "react";
import LiveEditor from "./liveeditor";
import Recipe from "./recipe";

export default React.createClass({
  render: function() {
    return (
      <div className="annotater">
        <LiveEditor url={this.props.url}
                    actions={this.props.actions}
                    submit={this.submit} />
        <Recipe {...this.props} />
      </div>
    );
  }
});
