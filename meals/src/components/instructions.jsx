import React from 'react';
import { observer } from 'mobx-react';

const Instructions = (props) => (
  <div className='instructions'>
    <h3>Instructions</h3>
    <ol>
      { props.values
        .filter(l => l !== '')
        .map((s,i) => <li key={i}>{s}</li>)
      }
    </ol>
  </div>
);

export default observer(Instructions);
