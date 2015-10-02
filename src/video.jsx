import React from "react";

export default React.createClass({
  getInitialState: function() {
    return {
      vidID: ""
    };
  },
  shouldComponentUpdate: function(nextProps, nextState) {
    return nextState.vidID !== this.state.vidID;
  },
  updateURL: function(fullURL) {
    var parts = fullURL.split("/");
    var vidID = parts[parts.length-1];
    this.setState({
      vidID: vidID
    });
  },
  removePlayer: function() {
    this.setState({
      vidID: ""
    });
  },
  _renderSetup: function() {
    return (
      <YTForm onSubmit={this.updateURL}/>
    );
  },
  _renderPlayer: function() {
    return (
      <YTPlayer id={this.state.vidID}
                onRemove={this.removePlayer} />
    );
  },
  render: function() {
    var value = this.state.vidID ? this._renderPlayer() : this._renderSetup();
    return (
      <div className="yt">
        <h3>Video</h3>
        {value}
        <YTHelp />
      </div>
    );
  }
});

var YTHelp = React.createClass({
  getInitialState: function() {
    return {
      show: false
    };
  },
  shouldComponentUpdate: function(nextProps, nextState) {
    return nextState.show !== this.state.show;
  },
  toggleHelp: function(event) {
    event.preventDefault();
    this.setState({
      show: !this.state.show
    });
  },
  render: function() {
    var msg;
    var title;
    if ( this.state.show ) {
      title = "Hide Help";
      msg = "To get the correct url for a YouTube video, click on the \"Share\" button beneath the video's " + 
        "description. This will give you a url that begins with \"https://youtu.be/\" and ends with " +
        "the video's ID. Copy this url and paste it into the text box below";
    } else {
      title = "Show Help";
      msg = "";
    }
    return (
      <div>
        <button onClick={this.toggleHelp}>{title}</button>
        <p>
          {msg}
        </p>
      </div>
    );
  }
})

var YTForm = React.createClass({
  getInitialState: function() {
    return {
      url: ""
    };
  },
  reset: function() {
    this.setState({
      url: ""
    });
  },
  getVideo: function(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.url);
  },
  _handleURL: function(event) {
    this.setState({
      url: event.target.value
    });
  },
  render: function() {
    return (
      <div>
        <form>
          <input type="text"
                 placeholder="https://youtu.be/..."
                 value={this.state.url}
                 onChange={this._handleURL} />
          <button onClick={this.getVideo}>Load Video</button>
        </form>
      </div>
    );
  }
});

var YTPlayer = React.createClass({
  shouldComponentUpdate: function(nextProps, nextState) {
    return nextProps.id !== this.props.id;
  },
  render: function() {
    var url = `https://www.youtube.com/embed/${this.props.id}`;
    return (
      <div className="yt-player">
        <iframe width="560" height="315" src={url} frameBorder="0"></iframe>
        <button onClick={this.props.onRemove}>Remove</button>
      </div>
    );
  }
});