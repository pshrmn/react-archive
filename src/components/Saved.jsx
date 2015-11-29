import React from "react";

import { unsaveStory, unhideStory, unbanDomain } from "../helpers/chrome";

export default React.createClass({
  hideSaved: function(event) {
    event.preventDefault();
    this.props.hide();
  },
  render: function() {
    if ( !this.props.moddedVisible ) {
      return null;
    }
    let { domains, hidden, saved } = this.props.modded;
    let savedStories = Object.keys(saved).map((id, index) => {
      return (
        <SavedStory key={index}
                    id={id}
                    unsave={this.props.unsave}
                    {...saved[id]} />
      );
    });

    let hiddenStories = Object.keys(hidden).map((id, index) => {
      return (
        <HiddenStory key={index}
                     id={id}
                     unhide={this.props.unhide}
                     {...hidden[id]} />
      );
    });

    let bannedDomains = Object.keys(domains).map((id, index) => {
      return (
        <BannedDomain key={index}
                      domain={id}
                      unban={this.props.unban} />
      );
    });

    return (
      <div className="saved-stories">
        <section>
          <h2>Saved Stories</h2>
          <ul>
            {savedStories}
          </ul>
        </section>
        <section>
          <h2>Hidden Stories</h2>
          <p>
            Hidden stories are removed after 48 hours since by then the story will be off the main page.
          </p>
          <ul>
            {hiddenStories}
          </ul>
        </section>
        <section>
          <h2>Banned Domains</h2>
          <p>
            Stories from these domains won't be shown.
          </p>
          <ul>
            {bannedDomains}
          </ul>
        </section>
        <button onClick={this.hideSaved}>Hide</button>
      </div>
    );
    /*
    not yet implemented
    */
  }
});

let SavedStory = React.createClass({
  unsaveStory: function(event) {
    event.preventDefault();
    unsaveStory(this.props.id);
    this.props.unsave(this.props.id);
  },
  render: function() {
    let { id, url, title } = this.props;
    return (
      <li className="story">
        <i className="fa fa-star"
           title="unsave story"
           onClick={this.unsaveStory} />
        <a href={url}>{title}</a>{" "}
        <a className="comments" href={`https://news.ycombinator.com/item?id=${id}`}>comments</a>
      </li>
    );
  }
});

let HiddenStory = React.createClass({
  unhideStory: function(event) {
    event.preventDefault();
    unhideStory(this.props.id);
    this.props.unhide(this.props.id);
  },
  render: function() {
    let { id, url, title } = this.props;
    return (
      <li className="story">
        <i className="fa fa-times"
           title="unhide story"
           onClick={this.unhideStory} />
        <a href={url}>{title}</a>{" "}
        <a className="comments" href={`https://news.ycombinator.com/item?id=${id}`}>comments</a>
      </li>
    );
  }
});

let BannedDomain = React.createClass({
  unbanDomain: function(event) {
    event.preventDefault();
    unbanDomain(this.props.domain);
    this.props.unban(this.props.domain);
  },
  render: function() {
    let { domain } = this.props;
    return (
      <li className="domain">
        <i className="fa fa-times"
           title="unban domain"
           onClick={this.unbanDomain} /> {domain}
      </li>
    );
  }
});
