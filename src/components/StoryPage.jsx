import React from "react";

import SubStory from "./SubStory";

import { saveStory, unsaveStory, hideStory, banDomain } from "../helpers/chrome";

export default React.createClass({
  toggleSave: function(id, url, title) {
    let saved = this.props.modded.saved;
    if ( saved[id] ) {
      delete saved[id];
      unsaveStory(id);
      this.props.unsaveStory(id);
    } else {
      saved[id] = url;
      saveStory(id, url, title);
      this.props.saveStory(id, url, title);
    }
  },
  hideStory: function(id, url, title) {
    hideStory(id, url, title);
    this.props.hideStory(id, url, title);
  },
  banDomain: function(domain) {
    banDomain(domain);
    this.props.banDomain(domain);
  },
  _nextPage: function() {
    let loc = window.location;
    let pathname = loc.pathname;
    if ( pathname === "/" ) {
      return "/news?p=2"
    }
    return pathname + "?" + loc.search.slice(1).split("&").map(pair => {
      let parts = pair.split("=");
      if ( parts[0] === "p" ) {
        let currentPage = parseInt(parts[1], 10);
        return `p=${currentPage + 1}`;
      }
    }).join("&");
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
        <a href={this._nextPage()}>more</a>
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
