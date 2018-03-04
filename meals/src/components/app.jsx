import React from 'react';
import { observer, inject } from 'mobx-react';

import Annotater from './Annotater';
import RecipeMenu from './RecipeMenu';
import Header from './Header';

const App = (props) => {
  const { recipes, index } = props.recipes
  const recipe = index !== null ? recipes[index] : null;
  return (
    <div className='app'>
      <Header />
      <div>
        <RecipeMenu recipes={props.recipes} />
        <Annotater recipe={recipe} />
      </div>
    </div>
  );
}

export default observer(App);
