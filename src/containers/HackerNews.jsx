import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as Actions from "../actions";

import Header from "../components/Header";
import StoryPage from "../components/StoryPage";
import CommentsPage from "../components/CommentsPage";
import Saved from "../components/Saved";

const HackerNews = React.createClass({
  render: function() {
    let { page, type, options, savedVisible, dispatch } = this.props;
    let loggedIn = page.user.name !== undefined;
    const actions = bindActionCreators(Actions, dispatch);
    let content = null;
    switch ( type ) {
    case "submission":
      content = (
        <StoryPage loggedIn={loggedIn}
                   options={options}
                   saveStory={actions.saveStory}
                   unsaveStory={actions.unsaveStory}
                   {...page} />
      );
      break;
    case "comments":
      content = (
        <CommentsPage loggedIn={loggedIn}
                      options={options}
                      saveStory={actions.saveStory}
                      unsaveStory={actions.unsaveStory}
                      {...page} />
      );
    }
    return (
      <div className="hacker-news">
        <Header user={page.user}
                show={actions.showSaved}
                hide={actions.hideSaved}
                savedVisible={savedVisible} />
        <div>
          <Saved savedVisible={savedVisible}
                 hide={actions.hideSaved}
                 unsave={actions.unsaveStory}
                 options={options} />
          {content}
        </div>
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

function mapStateToProps(state) {
  return {
    page: state.page,
    type: state.type,
    savedVisible: state.savedVisible,
    options: state.options
  };
}

export default connect(
  mapStateToProps
)(HackerNews);
