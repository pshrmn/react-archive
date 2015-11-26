import React from "react";

import Vote from "./Vote";

const Comment = React.createClass({
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
    let { user, votes, when, paragraphs, parent, children, direct, reply, type, id } = this.props;
    let { canVote } = this.state;
    let childrenElements = children.map((c, i) => {
      return (
        <Comment key={i} {...c} />
      );
    })

    if ( type === "flagged" ) {
      return (
        <div className="comment">
          <div>
            <div className="message">
              <p>[flagged]</p>
            </div>
            <div className="children">
              {childrenElements}
            </div>
          </div>
        </div>
      );
    }

    let upVote = canVote && votes.up !== undefined ? (
      <Vote id={id} type="up" url={votes.up} voted={this.voted} />
    ) : <div className="filler"></div>;
    let downVote = canVote && votes.down !== undefined ? (
      <Vote id={id} type="down" url={votes.down} voted={this.voted} />
    ) : <div className="filler"></div>;

    let ps = paragraphs.map((p, i) => {
      return (
        <p key={i}>
          {p}
        </p>
      );
    });
    return (
      <div className="comment">
        <div className="votes">
          {upVote}
          {downVote}
        </div>
        <div>
          <div className="user">
            <a href={user.url}>{user.name}</a> {when} <a href={`/item?id=${id}`}>direct</a>
          </div>
          <div className="message">
            {ps}
          </div>
          <div className="children">
            {childrenElements}
          </div>
        </div>
      </div>
    );
  }
});

export default Comment;
