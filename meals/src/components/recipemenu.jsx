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
          props.recipes.removeRecipe(i);
        }}
        load={() => {
          props.recipes.index = index === i ? null : i;
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
