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
  render: function() {
    let { url, title, id, points, comments, user, votes, when, domain } = this.props;
    let { canVote } = this.state;

    let upVote = canVote && votes.up !== undefined ? (
      <Vote id={id} type="up" url={votes.up} voted={this.voted} />
    ) : <div className="filler"></div>;
    let downVote = canVote && votes.down !== undefined ? (
      <Vote id={id} type="down" url={votes.down} voted={this.voted} />
    ) : <div className="filler"></div>;
    let more =  domain !== undefined ? (
      <div className="more">
        more from <a href={`/from?site=${domain}`}>{domain}</a>
      </div>
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
          </div>
          <div className="byline">
            <a href={comments.url} target="_blank">{comments.count} comments</a>{" "}
            submitted by <a href={user.url} target="_blank">{user.name}</a>{" "}
            {when}
          </div>
          {more}
        </div>
      </div>
    );
  }
});

export default SubStory;