import React from 'react';
import { observer } from 'mobx-react';

import UserInput from './UserInput';
import UserTextarea from './UserTextarea';

const LiveEditor = ({ recipe }) => (
  <div className="live-editor">
    <UserInput
      name="name"
      change={(val) => {
        recipe.name = val;
      }}
      value={recipe.name} />
    <UserTextarea
      name="ingredients"
      change={(val) => {
        recipe.ingredients = val;
      }}
      value={recipe.ingredients.join("\n")} />
    <UserTextarea
      name="instructions"
      change={(val) => {
        recipe.instructions = val;
      }}
      value={recipe.instructions.join("\n")} />
  </div>
)

export default observer(LiveEditor);
