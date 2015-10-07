import React from "react";

export default React.createClass({
  propTypes: {
    instructions: React.PropTypes.array.isRequired
  },
  render: function() {
    var instructions = this.props.instructions.map(function(s, i){
      return (
        <li key={i}>{s}</li>
      );
    }, this);
    return (
      <div className="instructions">
        <h3>Instructions</h3>
        <ol>
          {instructions}
        </ol>
      </div>
    );
  }
});
