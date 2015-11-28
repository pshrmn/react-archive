import React from "react";

import SubStory from "./SubStory";

import { getStorage, saveStory, unsaveStory, hideStory, hideDomain } from "../helpers/chrome";

export default React.createClass({
  getInitialState: function() {
    return {
      "saved": {},
      "hidden": {},
      "domains": {}
    };
  },
  toggleSave: function(id, url) {
    let saved = this.state.saved;
    if ( saved[id] ) {
      delete saved[id];
      unsaveStory(id);
    } else {
      saved[id] = url;
      saveStory(id, url);
    }
    this.setState({
      saved: saved
    });
  },
  hideStory: function(id) {
    let hidden = this.state.hidden;
    hidden[id] = true;
    hideStory(id);
    this.setState({
      hidden: hidden
    });
  },
  hideDomain: function(domain) {
    let domains = this.state.domains;
    domains[domain] = true;
    hideDomain(domain);
    this.setState({
      domains: domains
    });
  },
  render: function() {
    let { stories, loggedIn } = this.props;
    let { saved, hidden, domains } = this.state;
    let submissions = stories.map((s, i) => {
      if ( hidden[s.id] || domains[s.domain] ) {
        return null;
      }
      return s.type === "sub" ? (
        <SubStory key={i}
                  saved={saved[s.id] !== undefined }
                  toggleSave={this.toggleSave}
                  hideStory={this.hideStory}
                  hideDomain={this.hideDomain}
                  loggedIn={loggedIn}
                  {...s} />
      ) : (
        <JobStory key={i}
                  saved={saved[s.id] === true}
                  {...s} />
      );
    })
    return (
      <div className="story-page">
        {submissions}
      </div>
    );
  },
  componentDidMount: function() {
    getStorage(storage => {
      this.setState({
        saved: storage.saved,
        hidden: storage.hidden,
        domains: storage.domains
      });
    });
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
