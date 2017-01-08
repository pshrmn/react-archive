import React from 'react';
import { observer } from 'mobx-react';

const Thumbnail = (props) => {
  const {
    ytID,
    name,
    active
  } = props;

  const thumb = ytID === '' ? (
    <div className='empty-thumb'>?</div>
  ) : (
    <img src={`https://i.ytimg.com/vi/${ytID}/mqdefault.jpg`} />
  );

  const className = 'thumbnail' + (active ? ' active' : '');

  return (
    <li className={className} onClick={() => props.load(props.index) } >
      <div>
        {thumb}
      </div>
      <div className='thumb-info'>
        {name}
      </div>
      <div className='thumb-controls'>
        <button
          title='delete recipe'
          type='button'
          onClick={() => props.delete(props.index) }>
          {String.fromCharCode(215)}
        </button>
      </div>
    </li>
  );
};

export default observer(Thumbnail);
