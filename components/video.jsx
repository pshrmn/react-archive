import React from "react";

export default React.createClass({
  propTypes: {
    ytID: React.PropTypes.string.isRequired
  },
  shouldComponentUpdate: function(nextProps, nextState) {
    return nextProps.ytID !== this.props.ytID;
  },
  render: function() {
    var url = `https://www.youtube.com/embed/${this.props.ytID}`;
    var iframe = this.props.ytID === "" ? null : (
      <iframe width="560" height="315" src={url} frameBorder="0"></iframe>
    );
    return (
      <div className="yt">
        {iframe}
      </div>
    );
  }
});
