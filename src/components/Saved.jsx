import React from "react";

import { unsaveStory } from "../helpers/chrome";

export default React.createClass({
  hideSaved: function(event) {
    event.preventDefault();
    this.props.hide();
  },
  render: function() {
    if ( !this.props.savedVisible ) {
      return null;
    }
    let { domains, hidden, saved } = this.props.options;
    let savedStories = Object.keys(saved).map((id, index) => {
      return (
        <SavedStory key={index}
                    id={id}
                    unsave={this.props.unsave}
                    {...saved[id]} />
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
        <button onClick={this.hideSaved}>Hide</button>
      </div>
    );
    /*
    not yet implemented
    <section>
      <h2>Hidden Stories</h2>
      <p>
        Hidden stories are removed after 48 hours since by then the story will be off the main page.
      </p>
    </section>
    <section>
      <h2>Hidden Domains</h2>
    </section>
    */
  }
});

let SavedStory = React.createClass({
  unsaveStory: function(event) {
    event.preventDefault();
    this.props.unsave(this.props.id);
    unsaveStory(this.props.id);
  },
  render: function() {
    let { id, url, title } = this.props;
    return (
      <li className="saved-story">
        <i className="fa fa-star"
           title="unsave story"
           onClick={this.unsaveStory} />
        <a href={url}>{title}</a>{" "}
        <a className="comments" href={`https://news.ycombinator.com/item?id=${id}`}>comments</a>
      </li>
    );
  }
});
