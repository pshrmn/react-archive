import React from "react";

import User from "./User";

export default React.createClass({
  render: function() {
    let { user, show, hide, moddedVisible } = this.props;
    return (
      <header>
        <nav>
          <li className="home"><a href="/">HN</a></li>
          <li>
            <form method="get" action="//hn.algolia.com">
              <input type="text" placeholder="Search..." name="q" />
            </form>
          </li>
        </nav>
        <User show={show}
              hide={hide}
              moddedVisible={moddedVisible}
              {...user} />
        <nav className="general">
          <li><a href="/newest">New</a></li>
          <li><a href="/newcomments">Comments</a></li>
          <li><a href="/show">Show</a></li>
          <li><a href="/ask">Ask</a></li>
          <li><a href="/jobs">Jobs</a></li>
        </nav>
        <nav>
          <li><a href="/newsguidelines.html">Guidelines</a></li>
          <li><a href="/newsfaq.html">FAQ</a></li>
          <li><a href="mailto:hn@ycombinator.com">Support</a></li>
          <li><a href="https://github.com/HackerNews/API">API</a></li>
          <li><a href="/security.html">Security</a></li>
          <li><a href="/lists">Lists</a></li>
          <li><a href="/bookmarklet.html">Bookmarklet</a></li>
          <li><a href="/dmca.html">DMCA</a></li>
          <li><a href="/apply">Apply to YC</a></li>
          <li><a href="mailto:hn@ycombinator.com">Contact</a></li>
        </nav>
      </header>
    );
  }
});
