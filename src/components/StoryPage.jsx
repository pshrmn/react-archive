import React from "react";

import SubStory from "./SubStory";

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
      <div className="story-page">
        {submissions}
      </div>
    );
  }
});

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
