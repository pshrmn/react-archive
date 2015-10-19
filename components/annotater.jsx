import React from "react";
import LiveEditor from "./liveeditor";
import Recipe from "./recipe";
import Video from "./video";

export default React.createClass({
  render: function() {
    return (
      <div className="annotater">
        <div className="edit-view">
          <Video ytID={this.props.ytID} />
          <LiveEditor actions={this.props.actions}
                      submit={this.submit}
                      {...this.props}/>
        </div>
        <div className="print-view">
          <Recipe {...this.props} />
        </div>
      </div>
    );
  }
});
