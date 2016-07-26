import React from "react";

import Vote from "./Vote";

const SubStory = React.createClass({
  getInitialState: function() {
    return {
      canVote: this.props.loggedIn || false
    };
  },
  /*
   * once a submission has been voted on, it cannot be changed
   */
  voted: function() {
    this.setState({
      canVote: false
    });
  },
  saveStory: function() {
    this.props.toggleSave(this.props.id, this.props.url, this.props.title);
  },
  hideStory: function() {
    this.props.hideStory(this.props.id, this.props.url, this.props.title);
  },
  banDomain: function() {
    this.props.banDomain(this.props.domain);
  },
  render: function() {
    const { url, title, id, points, comments, user, votes, when, domain, self, saved } = this.props;
    const { canVote } = this.state;
    const upVote = canVote && votes.up !== undefined ? (
      <Vote id={id} type="up" url={votes.up} voted={this.voted} />
    ) : <div className="filler"></div>;
    const downVote = canVote && votes.down !== undefined ? (
      <Vote id={id} type="down" url={votes.down} voted={this.voted} />
    ) : <div className="filler"></div>;
    const more = domain !== "" ? (
        <a className="more" href={`/from?site=${domain}`}>{domain}</a>
    ) : null;
    const selfText = self !== undefined ? (
      <div dangerouslySetInnerHTML={self} />
    ) : null;

    return (
      <div className="story sub">
        <div className="voting">
          {upVote}
          <div className="points">{points}</div>
          {downVote}
        </div>
        <div className="info">
          <div>
            <a href={url} target="_blank">{title}</a>
            {more}
          </div>
          <div className="byline">
            <a href={comments.url} target="_blank">{comments.count} comments</a>{" "}
            submitted by <a href={user.url} target="_blank">{user.name}</a>{" "}
            {when}
          </div>
          {selfText}
        </div>
        <div className="story-controls">
          <i className={saved ? "fa fa-star" : "fa fa-star-o"}
             title={saved ? "unsave story" : "save story"}
             onClick={this.saveStory} />
          <i className="fa fa-times"
             title="hide story"
             onClick={this.hideStory} />
          <i className="fa fa-ban"
             title="ban domain"
             onClick={this.banDomain} />
        </div>
      </div>
    );
  }
});

export default SubStory;