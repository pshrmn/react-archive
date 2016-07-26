import React from "react";
import { connect } from "react-redux";

import Header from "./Header";
import StoryPage from "./StoryPage";
import CommentsPage from "./CommentsPage";
import Saved from "./Saved";

import '../scss/base.scss';

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
