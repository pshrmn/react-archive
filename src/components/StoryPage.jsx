import React from "react";

import vote from "../helpers/vote";

export default React.createClass({
  render: function() {
    let { stories } = this.props;
    let submissions = stories.map((s, i) => {
      return s.type === "sub" ? (
        <SubStory key={i} {...s} />
      ) : (
        <JobStory key={i} {...s} />
      );
    })
    return (
      <div>
        {submissions}
      </div>
    );
  }
});

const SubStory = React.createClass({
  getInitialState: function() {
    return {
      canVote: true
    };
  },
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

const Vote = React.createClass({
  voteHandler: function(event) {
    event.preventDefault();
    vote(this.props.url);
    this.props.voted();
  },
  render: function() {
    let { id, type } = this.props;
    let code = 9632;
    if ( type === "up" ) {
      code = 9650;
    } else if ( type === "down" ) {
      code = 9660;
    }
    return (
      <div className="vote"
           onClick={this.voteHandler}>
        {String.fromCharCode(code)}
      </div>
    );
  }
})

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
