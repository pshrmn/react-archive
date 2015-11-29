import React from "react";

import SubStory from "./SubStory";
import Comment from "./Comment";

import { saveStory, unsaveStory } from "../helpers/chrome";

export default React.createClass({
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
  render: function() {
    let { type, comments, replyForm, user, loggedIn, options } = this.props;
    let { saved, hidden, domains } = options;
    let commElements = comments.map((c, i) => {
      return <Comment key={i}
                      loggedIn={loggedIn}
                      {...c} />;
    });

    let header = null;
    switch ( type ) {
    case "single":
      header = (
        <Comment loggedIn={loggedIn}
                 {...this.props.comment} />
      );
      break;
    case "all":
      header = (
        <SubStory loggedIn={loggedIn}
                  saved={saved[this.props.story.id] !== undefined }
                  toggleSave={this.toggleSave}
                  {...this.props.story} />
      );
      break;
    }

    return (
      <div>
        <div className="comments-main">
          {header}
          {this.replyElement(replyForm)}
        </div>
        <div className="comments">
          {commElements}
        </div>
      </div>
    );
  }
});
