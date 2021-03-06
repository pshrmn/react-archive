import React from "react";
import { connect } from "react-redux";

import { showSaved, hideSaved } from "../actions";

const User = React.createClass({
  shouldComponentUpdate: function(nextProps, nextState) {
    return nextProps.moddedVisible !== this.props.moddedVisible;
  },
  toggleModded: function(event) {
    event.preventDefault();
    const { moddedVisible, showSaved, hideSaved } = this.props;
    if ( moddedVisible ) {
      hideSaved();
    } else {
      showSaved();
    }
  },
  _loggedOut: function() {
    const location = window.location;
    const loginHref = `/login?goto=${location.pathname}${location.search}`;
    return (
      <nav className="user logged-out">
        <li>
          <a href="#" onClick={this.toggleModded}>Modded Stories</a>
        </li>
        <li>
          <form method="post" action="login">
            <p>
              <a href={loginHref}>Login</a>
            </p>
            <input type="hidden" name="goto" value="/" />
            <p>
              <input type="text" name="acct" size="20"
                     placeholder="username"
                     autoCorrect="off"
                     autoCapitalize="off" />
            </p>
            <p>
              <input type="password" name="pw" size="20"
                     placeholder="password" />
            </p>
            <p>
              <button>Login</button>
            </p>
          </form>
          <form method="post" action="login">
            <p>
              <a href={loginHref}>Create account</a>
            </p>
            <input type="hidden" name="goto" value="/" />
            <input type="hidden" name="creating" value="t" />
            <p>
              <input type="text" name="acct" size="20"
                     placeholder="username"
                     autoCorrect="off"
                     autoCapitalize="off" />
            </p>
            <p>
              <input type="password" name="pw" size="20"
                     placeholder="password" />
            </p>
            <p>
              <button>Create Account</button>
            </p>
          </form>
        </li>
        <li>
          <a href={"/forgot?id="}>Forgot Password?</a>
        </li>
      </nav>
    );
  },
  _loggedIn: function() {
    const { name, url, points } = this.props;
    return (
      <nav className="user logged-in">
        <li>
          <a href={`/user?id=${name}`}>{name}</a> ({points})
        </li>
        <li>
          <a href="/submit">Submit</a>
        </li>
        <li>
          <a href={`/threads?id=${name}`}>Threads</a>
        </li>
        <li>
          <a href="#" onClick={this.toggleModded}>Modded Stories</a>
        </li>
        <li>
          <a href={`/logout?goto=${location.pathname}${location.search}`}>Logout</a>
        </li>
      </nav>
    );
  },
  render: function() {
    return this.props.name === undefined ? this._loggedOut() : this._loggedIn();
  }
});

export default connect(
  state => ({
    moddedVisible: state.moddedVisible,
    name: state.page.user.name,
    url: state.page.user.url,
    points: state.page.user.points
  }),
  {
    showSaved,
    hideSaved
  }
)(User);
