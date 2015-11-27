import React from "react";

export default React.createClass({
  shouldComponentUpdate: function(nextProps, nextState) {
    return false;
  },
  render: function() {
    let { user } = this.props;
    return (
      <header>
        <nav>
          <li className="home">
            <a href="/" >Hacker News</a>
          </li>
          <li>
            <form method="get" action="//hn.algolia.com">
              <input type="text" placeholder="Search" name="q" />
            </form>
          </li>
        </nav>
        <User {...user} />
        <nav className="general">
          <li>
            <a href="/newest">New</a>
          </li>
          <li>
            <a href="/newcomments">Comments</a>
          </li>
          <li>
            <a href="/show">Show</a>
          </li>
          <li>
            <a href="/ask">Ask</a>
          </li>
          <li>
            <a href="/jobs">Jobs</a>
          </li>
          <li>
            <a href="/submit">Submit</a>
          </li>
        </nav>
        <nav>
          <li>
            <a href="/newsguidelines.html">Guidelines</a>
          </li>
          <li>
            <a href="/newsfaq.html">FAQ</a>
          </li>
          <li>
            <a href="mailto:hn@ycombinator.com">Support</a>
          </li>
          <li>
            <a href="https://github.com/HackerNews/API">API</a>
          </li>
          <li>
            <a href="/security.html">Security</a>
          </li>
          <li>
            <a href="/lists">Lists</a>
          </li>
          <li>
            <a href="/bookmarklet.html">Bookmarklet</a>
          </li>
          <li>
            <a href="/dmca.html">DMCA</a>
          </li>
          <li>
            <a href="/apply">Apply to YC</a>
          </li>
          <li>
            <a href="mailto:hn@ycombinator.com">Contact</a>
          </li>
        </nav>
      </header>
    );
  }
});

const User = React.createClass({
  render: function() {
    if ( this.props.name === undefined ) {
      let location = window.location;
      let nextURL = ``
      return (
        <nav className="user">  
          <li>
            <a href={`/login?goto=${location.pathname}${location.search}`}>Login</a>
          </li>
        </nav>
      );
    } else {
      let { name, url, points } = this.props;
      return (
        <nav className="user">
          <li>
            <a href={`/user?id=${name}`}>{name}</a> ({points})
          </li>
          <li>
            <a href={`/threads?id=${name}`}>Threads</a>
          </li>
          <li>
            <a href={`/logout?goto=${location.pathname}${location.search}`}>Logout</a>
          </li>
        </nav>
      );
    }
  }
});
