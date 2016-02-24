import React from "react";
import { connect } from "react-redux";

import Header from "../components/Header";
import StoryPage from "../components/StoryPage";
import CommentsPage from "../components/CommentsPage";
import Saved from "../components/Saved";

const HackerNews = React.createClass({
  renderContent: function() {
    let content = null;
    switch ( this.props.pageType ) {
    case "submission":
      content = (
        <StoryPage />
      );
      break;
    case "comments":
      content = (
        <CommentsPage />
      );
    }
    return content;
  },
  render: function() {
    return (
      <div className="hacker-news">
        <Header />
        <div className="content">
          <Saved />
          {this.renderContent()}
        </div>
      </div>
    );
  }
});

export default connect(
  state => ({
    pageType: state.pageType
  })
)(HackerNews);
