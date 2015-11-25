import React from "react";

import Header from "./Header";
import StoryPage from "./StoryPage";

export default React.createClass({
  render: function() {
    let { page, type } = this.props;
    let content = null;
    switch ( type ) {
    case "submission":
      content = (
        <StoryPage stories={page.stories} />
      );
      break;
    }
    return (
      <div className="hacker-news">
        <Header user={page.user} />
        {content}
      </div>
    );
  },
  componentDidMount: function() {
    // hide the regular content
    if ( this.props.type === "submission" ){
      document.querySelector("center").style.display = "none";
    }
  },
  componentWillUnmount: function() {
    document.querySelector("center").style.display = "block";
  }
});