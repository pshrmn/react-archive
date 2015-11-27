import React from "react";

import Vote from "./Vote";

const Comment = React.createClass({
  getInitialState: function() {
    return {
      canVote: true,
      visible: true
    };
  },
  voted: function() {
    this.setState({
      canVote: false
    });
  },
  toggle: function(event) {
    event.preventDefault();
    this.setState({
      visible: !this.state.visible
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
    if ( type === "missing" ) {
      return (
        <div className="comment">
          <div>
            <div className="message">
              <p>[comment no longer exists]</p>
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

    let hidden = this.state.visible ? "" : "hidden";
    let visText = this.state.visible ? "hide" : "show";
    let ps = paragraphs.map((p, i) => {
      if (p[0] === ">" ) {
        return (
          <blockquote key={i}>
            {p.slice(1)}
          </blockquote>
        );
      }
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
            <a href={user.url}>{user.name}</a>{" "}
            {when}{" "}
            <a href={`/item?id=${id}`}>direct</a>{" "}
            <a href={reply}>reply</a>{" "}
            <button onClick={this.toggle}>{visText}</button>
          </div>
          <div className={hidden}>
            <div className="message">
              {ps}
            </div>
            <div className="children">
              {childrenElements}
            </div>
          </div>
        </div>
      </div>
    );
  }
});

export default Comment;
