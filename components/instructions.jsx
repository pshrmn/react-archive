import React from "react";

export default React.createClass({
  propTypes: {
    values: React.PropTypes.array.isRequired
  },
  render: function() {
    var values = this.props.values.map(function(s, i){
      return (
        <li key={i}>{s}</li>
      );
    }, this);
    return (
      <div className="instructions">
        <h3>Instructions</h3>
        <ol>
          {values}
        </ol>
      </div>
    );
  }
});
