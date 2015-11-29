import React from "react";

import SubStory from "./SubStory";

import { saveStory, unsaveStory, hideStory, hideDomain } from "../helpers/chrome";

export default React.createClass({
  toggleSave: function(id, url, title) {
    let saved = this.props.options.saved;
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
  hideStory: function(id) {
    let hidden = this.props.options.hidden;
    hidden[id] = true;
    hideStory(id);
  },
  hideDomain: function(domain) {
    let domains = this.props.options.domains;
    domains[domain] = true;
    hideDomain(domain);
  },
  render: function() {
    let { stories, loggedIn, options } = this.props;
    let { saved, hidden, domains } = options;
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
