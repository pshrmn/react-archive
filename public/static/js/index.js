//import React from "react";

"use strict";

var Annotater = React.createClass({
  displayName: "Annotater",

  render: function render() {
    return React.createElement(
      "div",
      null,
      React.createElement(Video, null)
    );
  }
});

var Video = React.createClass({
  displayName: "Video",

  getInitialState: function getInitialState() {
    return {
      vidID: ""
    };
  },
  shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
    return nextState.vidID !== this.state.vidID;
  },
  updateURL: function updateURL(fullURL) {
    event.preventDefault();
    var parts = fullURL.split("/");
    var vidID = parts[parts.length - 1];
    this.setState({
      vidID: vidID
    });
  },
  removePlayer: function removePlayer() {
    this.setState({
      vidID: ""
    });
  },
  _renderSetup: function _renderSetup() {
    return React.createElement(YTForm, { onSubmit: this.updateURL });
  },
  _renderPlayer: function _renderPlayer() {
    return React.createElement(YTPlayer, { id: this.state.vidID,
      onRemove: this.removePlayer });
  },
  render: function render() {
    return this.state.vidID ? this._renderPlayer() : this._renderSetup();
  }
});

var YTForm = React.createClass({
  displayName: "YTForm",

  getInitialState: function getInitialState() {
    return {
      url: ""
    };
  },
  reset: function reset() {
    this.setState({
      url: ""
    });
  },
  getVideo: function getVideo(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.url);
  },
  _handleURL: function _handleURL(event) {
    this.setState({
      url: event.target.value
    });
  },
  render: function render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "form",
        null,
        React.createElement("input", { type: "text",
          value: this.state.url,
          onChange: this._handleURL }),
        React.createElement(
          "button",
          { onClick: this.getVideo },
          "Load Video"
        )
      )
    );
  }
});

var YTPlayer = React.createClass({
  displayName: "YTPlayer",

  shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
    return nextProps.id !== this.props.id;
  },
  render: function render() {
    var url = "https://www.youtube.com/embed/" + this.props.id;
    return React.createElement(
      "div",
      { className: "yt-player" },
      React.createElement("iframe", { width: "560", height: "315", src: url, frameBorder: "0" }),
      React.createElement(
        "button",
        { onClick: this.props.onRemove },
        "Remove"
      )
    );
  }
});

React.render(React.createElement(Annotater, null), document.getElementById("content"));