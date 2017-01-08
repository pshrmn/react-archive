import React from 'react';
import { observer } from 'mobx-react';

import LiveEditor from './liveeditor';
import Recipe from './recipe';
import Video from './video';

const Annotater = (props) => {
  const { recipe } = props;
  if ( !recipe ) {
    return null;
  }

  return (
    <div className='annotater'>
      <div className='edit-view'>
        <Video ytID={props.recipe.ytID} />
        <LiveEditor recipe={props.recipe} />
      </div>
      <div className='print-view'>
        <Recipe recipe={props.recipe} />
      </div>
    </div>
  );
}

export default observer(Annotater);
