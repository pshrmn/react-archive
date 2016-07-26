import React from "react";
import { connect } from "react-redux";

import * as actions from "../actions";

const Saved = React.createClass({
  hideSaved: function(event) {
    event.preventDefault();
    this.props.hide();
  },
  render: function() {
    if ( !this.props.moddedVisible ) {
      return null;
    }
    const { domains, hidden, saved } = this.props.modded;
    const savedStories = Object.keys(saved).map((id, index) => {
      return (
        <SavedStory key={index}
                    id={id}
                    unsave={this.props.unsave}
                    {...saved[id]} />
      );
    });

    const hiddenStories = Object.keys(hidden).map((id, index) => {
      return (
        <HiddenStory key={index}
                     id={id}
                     unhide={this.props.unhide}
                     {...hidden[id]} />
      );
    });

    const bannedDomains = Object.keys(domains).map((id, index) => {
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
        <button className="hide"
                onClick={this.hideSaved}>
          <i className="fa fa-times"></i>
        </button>
      </div>
    );
  }
});

const SavedStory = React.createClass({
  unsaveStory: function(event) {
    event.preventDefault();
    this.props.unsave(this.props.id);
  },
  render: function() {
    const { id, url, title } = this.props;
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

const HiddenStory = React.createClass({
  unhideStory: function(event) {
    event.preventDefault();
    this.props.unhide(this.props.id);
  },
  render: function() {
    const { id, url, title } = this.props;
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

const BannedDomain = React.createClass({
  unbanDomain: function(event) {
    event.preventDefault();
    this.props.unban(this.props.domain);
  },
  render: function() {
    const { domain } = this.props;
    return (
      <li className="domain">
        <i className="fa fa-times"
           title="unban domain"
           onClick={this.unbanDomain} /> {domain}
      </li>
    );
  }
});

export default connect(
  state => ({
    moddedVisible: state.moddedVisible,
    modded: state.modded
  }),
  {
    hide: actions.hideSaved,
    unsave: actions.unsaveStory,
    unhide: actions.unhideStory,
    unban: actions.unbanDomain
  }
)(Saved);
