import React from 'react';
import { observer } from 'mobx-react';
import Ingredients from './ingredients';
import Instructions from './instructions';

const Recipe = ({ recipe }) => (
  <div className='recipe'>
    <h2>{recipe.name}</h2>
    <h3>{recipe.ytID !== '' ? `https://youtu.be/${recipe.ytID}` : null}</h3>
    <Ingredients values={recipe.ingredients || []} />
    <Instructions values={recipe.instructions || []} />
  </div>
)

export default observer(Recipe);
