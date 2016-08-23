import React from 'react';
import Ingredients from './ingredients';
import Instructions from './instructions';

export default function recipe(props) {
  const {
    name = '',
    ytID = '',
    ingredients = [],
    instructions = []
  } = props;
  const url = ytID !== '' ? `https://youtu.be/${ytID}` : null;
  return (
    <div className='recipe'>
      <h2>{name}</h2>
      <h3>{url}</h3>
      <Ingredients values={ingredients} />
      <Instructions values={instructions} />
    </div>
  );
}
/*
export default React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    ytID: React.PropTypes.string.isRequired,
    ingredients: React.PropTypes.array.isRequired,
    instructions: React.PropTypes.array.isRequired
  },
  getDefaultProps: function() {
    return {
      name: '',
      ytID: '',
      ingredients: [],
      instructions: [],
    };
  },
  render: function() {
    let { name, ytID, ingredients, instructions } = this.props;
    var url = ytID !== '' ? `https://youtu.be/${ytID}` : null;
    return (
      <div className='recipe'>
        <h2>{name}</h2>
        <h3>{url}</h3>
        <Ingredients values={ingredients} />
        <Instructions values={instructions} />
      </div>
    );
  }
});
*/