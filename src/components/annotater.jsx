import React from 'react';
import LiveEditor from './liveeditor';
import Recipe from './recipe';
import Video from './video';

export default function annotater(props) {
  const {
    name = '',
    ytID = '',
    ingredients = [],
    instructions = []
  } = props;
  return (
    <div className='annotater'>
      <div className='edit-view'>
        <Video ytID={ytID} />
        <LiveEditor name={name}
                    ingredients={ingredients}
                    instructions={instructions} />
      </div>
      <div className='print-view'>
        <Recipe name={name}
                ytID={ytID}
                ingredients={ingredients}
                instructions={instructions} />
      </div>
    </div>
  );
}

