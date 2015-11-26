import React from "react";

export default React.createClass({
  shouldComponentUpdate: function(nextProps, nextState) {
    return false;
  },
  render: function() {
    let { user } = this.props;
    return (
      <header>
        <nav className="general">
          <li>
            <a href="/" className="home">Hacker News</a>
          </li>
          <li>
            <a href="/newest">new</a>
          </li>
          <li>
            <a href="/newcomments">comments</a>
          </li>
          <li>
            <a href="/show">show</a>
          </li>
          <li>
            <a href="/ask">ask</a>
          </li>
          <li>
            <a href="/jobs">jobs</a>
          </li>
          <li>
            <a href="/submit">submit</a>
          </li>
        </nav>
        <User {...user} />
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
            <a href={`/user?id=${name}`}>{name}</a>
          </li>
          <li className="points">
            {points}
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
