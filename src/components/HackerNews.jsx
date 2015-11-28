import React from "react";

import Header from "./Header";
import StoryPage from "./StoryPage";
import CommentsPage from "./CommentsPage";

export default React.createClass({
  render: function() {
    let { page, type } = this.props;
    let content = null;
    let loggedIn = page.user.name !== undefined;
    switch ( type ) {
    case "submission":
      content = (
        <StoryPage loggedIn={loggedIn} {...page} />
      );
      break;
    case "comments":
      content = (
        <CommentsPage loggedIn={loggedIn} {...page} />
      );
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
    if ( this.props.type === "submission" || this.props.type === "comments"){
      document.querySelector("center").style.display = "none";
    }
  },
  componentWillUnmount: function() {
    document.querySelector("center").style.display = "block";
  }
});