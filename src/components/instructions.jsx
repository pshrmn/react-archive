import React from 'react';

export default function instructions(props) {
  return (
    <div className='instructions'>
      <h3>Instructions</h3>
      <ol>
        { props.values.map((s,i) => <li key={i}>{s}</li>) }
      </ol>
    </div>
  );
}
/*
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
*/