import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import StoryPage from "./StoryPage";
import CommentsPage from "./CommentsPage";

export default React.createClass({
  render: function() {
    let { page, type } = this.props;
    let content = null;
    switch ( type ) {
    case "submission":
      content = (
        <StoryPage {...page} />
      );
      break;
    case "comments":
      content = (
        <CommentsPage {...page} />
      );
    }
    return (
      <div className="hacker-news">
        <Header user={page.user} />
        {content}
        <Footer />
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