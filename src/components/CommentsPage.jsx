import React from "react";

import SubStory from "./SubStory";
import Comment from "./Comment";

export default React.createClass({
  render: function() {
    let { type, comments } = this.props;
    let commElements = comments.map((c, i) => {
      return <Comment key={i} {...c} />;
    });

    let header = null;
    switch ( type ) {
    case "single":
      header = (
        <Comment {...this.props.comment} />
      );
      break;
    case "all":
      header = (
        <SubStory  {...this.props.story} />
      );
      break;
    }

    return (
      <div>
        <div className="comments-main">
          {header}
        </div>
        <div className="comments">
          {commElements}
        </div>
      </div>
    );
  }
});
