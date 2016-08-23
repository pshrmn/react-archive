import React from 'react';

export default function ingredients(props) {
  return (
    <div className='ingredients'>
      <h3>Ingredients</h3>
      <ul>
        { props.values.map((s,i) => <li key={i}>{s}</li>) }
      </ul>
    </div>
  );
}
/*
export default React.createClass({
  propTypes: {
    values: React.PropTypes.array.isRequired
  },
  render: function() {
    var values = this.props.values.map(function(v, i) {
      return (
        <li key={i}>{v}</li>
      );
    }, this);
    return (
      <div className="ingredients">
        <h3>Ingredients</h3>
        <ul>
          {values}
        </ul>
      </div>
    );
  }
});
*/