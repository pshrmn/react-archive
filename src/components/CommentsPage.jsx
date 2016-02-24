import React from "react";
import { connect } from "react-redux";

import * as actions from "../actions";

import SubStory from "./SubStory";
import Comment from "./Comment";

const CommentsPage = React.createClass({
  replyElement: function(form) {
    return (
      <form method="post" action={form.action}>
        <input type="hidden" name="parent" value={form.parent} />
        <input type="hidden" name="goto" value={form.goto} />
        <input type="hidden" name="hmac" value={form.hmac} />
        <textarea name="text" rows="6" cols="60"></textarea>
        <button>Add Comment</button>
      </form>
    );
  },
  toggleSave: function(id, url, title) {
    let saved = this.props.modded.saved;
    if ( saved[id] ) {
      this.props.unsaveStory(id);
    } else {
      this.props.saveStory(id, url, title);
    }
  },
  hideStory: function(id, url, title) {
    this.props.hideStory(id, url, title);
  },
  banDomain: function(domain) {
    this.props.banDomain(domain);
  },
  render: function() {
    const { loggedIn, modded,
      headerType, comments, replyForm, user, story } = this.props;
    const { saved, hidden, domains } = modded;
    const commElements = comments.map((c, i) => {
      return <Comment key={i}
                      loggedIn={loggedIn}
                      {...c} />;
    });

    let header = null;
    switch ( headerType ) {
    case "single":
      header = (
        <Comment loggedIn={loggedIn}
                 {...this.props.comment} />
      );
      break;
    case "all":
      header = (
        <SubStory loggedIn={loggedIn}
                  saved={saved[story.id] !== undefined }
                  toggleSave={this.toggleSave}
                  hideStory={this.hideStory}
                  banDomain={this.banDomain}
                  {...story} />
      );
      break;
    }
    return (
      <div>
        <div className="comments-main">
          {header}
          {replyForm !== null ? this.replyElement(replyForm) : null}
        </div>
        <div className="comments">
          {commElements}
        </div>
      </div>
    );
  }
});

export default connect(
  state => Object.assign({},
    {
      loggedIn: state.page.user.name !== undefined,
      modded: state.modded,
    }, state.page),
  {
    saveStory: actions.saveStory,
    unsaveStory: actions.unsaveStory,
    hideStory: actions.hideStory,
    banDomain: actions.banDomain
  }
)(CommentsPage);
