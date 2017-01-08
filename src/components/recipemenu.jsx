import React from 'react';
import { observer } from 'mobx-react';

import Thumbnail from './Thumbnail';
import RecipeCreator from './RecipeCreator';

const RecipeMenu = (props) => {
  const { recipes, index } = props.recipes;
  let thumbnails = recipes.map((r, i) =>
    r === null ? null : (
      <Thumbnail
        key={i}
        index={i}
        active={i === index}
        delete={() => {
          // don't actually delete, just set to null
          // so that the other indices do not get
          // messed up. Only non-null recipes are saved
          // to localStorage, so this will not exist on the
          // next page load.
          props.recipes.recipes[i] = null
        }}
        load={() => {
          props.recipes.index = i;
        }}
        {...r} />
    )
  );
  return (
    <div className='recipe-menu'>
      Saved Recipes:
      <ul className='saved-recipes'>
        {thumbnails}
      </ul>
      <RecipeCreator recipes={props.recipes} />
    </div>
  );
}

export default observer(RecipeMenu);
