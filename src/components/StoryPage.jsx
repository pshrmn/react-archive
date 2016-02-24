import React from "react";
import { connect } from "react-redux";

import * as actions from "../actions";

import SubStory from "./SubStory";

const StoryPage = React.createClass({
  toggleSave: function(id, url, title) {
    const { modded, saveStory, unsaveStory } = this.props;
    if ( modded.saved[id] ) {
      unsaveStory(id);
    } else {
      saveStory(id, url, title);
    }
  },
  hideStory: function(id, url, title) {
    this.props.hideStory(id, url, title);
  },
  banDomain: function(domain) {
    this.props.banDomain(domain);
  },
  _nextPage: function() {
    let loc = window.location;
    let pathname = loc.pathname;
    if ( pathname === "/" ) {
      return "/news?p=2"
    } else if ( loc.search === "" ) {
      return pathname + "?p=2";
    } else {
      let nextPage = 2;
      loc.search.slice(1).split("&").some(query => {
        let parts = query.split("=");
        if ( parts[0] === "p" ) {
          nextPage = parseInt(parts[1], 10) + 1;
          return true;
        } 
        return false;
      });
      return pathname + "?p=" + nextPage;
    }
  },
  render: function() {
    let { stories, loggedIn, modded } = this.props;
    let { saved, hidden, domains } = modded;
    let submissions = stories.map((s, i) => {
      if ( hidden[s.id] || domains[s.domain] ) {
        return null;
      }
      return s.type === "sub" ? (
        <SubStory key={i}
                  saved={saved[s.id] !== undefined }
                  toggleSave={this.toggleSave}
                  hideStory={this.hideStory}
                  banDomain={this.banDomain}
                  loggedIn={loggedIn}
                  {...s} />
      ) : (
        <JobStory key={i}
                  saved={saved[s.id] === true}
                  {...s} />
      );
    });
    return (
      <div className="story-page">
        {submissions}
        <div className="more">
          <a href={this._nextPage()}>more</a>
        </div>
      </div>
    );
  }
});

const JobStory = React.createClass({
  render: function() {
    let { url, title } = this.props;
    return (
      <div className="story job">
        <div className="voting">(job)</div>
        <div className="info">
          <a href={url} target="_blank">{title}</a>
        </div>
      </div>
    );
  }
});

export default connect(
  state => ({
    loggedIn: state.page.user.name !== undefined,
    modded: state.modded,
    stories: state.page.stories
  }),
  {
    saveStory: actions.saveStory,
    unsaveStory: actions.unsaveStory,
    hideStory: actions.hideStory,
    banDomain: actions.banDomain
  }
)(StoryPage);
