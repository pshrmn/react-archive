import React from "react";

import vote from "../helpers/vote";

export default React.createClass({
  voteHandler: function(event) {
    event.preventDefault();
    vote(this.props.url);
    this.props.voted();
  },
  render: function() {
    let { id, type } = this.props;
    let code = 9632;
    if ( type === "up" ) {
      code = 9650;
    } else if ( type === "down" ) {
      code = 9660;
    }
    return (
      <div className="vote"
           onClick={this.voteHandler}>
        {String.fromCharCode(code)}
      </div>
    );
  }
});
