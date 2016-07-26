import React from "react";

import vote from "../helpers/vote";

export default React.createClass({
  voteHandler: function(event) {
    event.preventDefault();
    vote(this.props.url);
    this.props.voted();
  },
  render: function() {
    const { id, type } = this.props;
    let arrow = null;
    if ( type === "up" ) {
      arrow = <i className="fa fa-arrow-up"></i>
    } else if ( type === "down" ) {
      arrow = <i className="fa fa-arrow-down"></i>
    }
    return (
      <div className="vote"
           onClick={this.voteHandler}>
        {arrow}
      </div>
    );
  }
});
