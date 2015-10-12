import React from "react";
import LiveEditor from "./liveeditor";
import Recipe from "./recipe";

export default React.createClass({
  render: function() {
    return (
      <div className="annotater">
        <LiveEditor actions={this.props.actions}
                    submit={this.submit}
                    {...this.props}/>
        <Recipe {...this.props} />
      </div>
    );
  }
});
