import React from 'react';
import { observer } from 'mobx-react';

const Ingredients = (props) => (
  <div className='ingredients'>
    <h3>Ingredients</h3>
    <ul>
      { props.values
        .filter(l => l !== '')
        .map((s,i) => <li key={i}>{s}</li>)
      }
    </ul>
  </div>
);

export default observer(Ingredients);
