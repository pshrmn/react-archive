import React from "react";

export default React.createClass({
  render: function() {
    return (
      <footer>
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
          <li>
            <form method="get" action="//hn.algolia.com">
              <input type="text" placeholder="Search" name="q" />
            </form>
          </li>
        </nav>
        <div>

        </div>
      </footer>
    );
  }
});
