import React from 'react';
import { observer } from 'mobx-react';

const Video = ({ ytID }) => {
  const url = `https://www.youtube.com/embed/${ytID}`;
  const iframe = ytID === '' ? null : (
    <iframe width='560' height='315' src={url} frameBorder='0'></iframe>
  );
  return (
    <div className='yt'>
      {iframe}
    </div>
  );
}

export default observer(Video);
