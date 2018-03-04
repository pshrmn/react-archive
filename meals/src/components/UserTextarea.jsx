import React from 'react';
import { observer } from 'mobx-react';

const UserTextarea = ({ change, name, value }) => (
  <div>
    <label>
      {name}
      <textarea
        value={value}
        onChange={(event) => {
          change(event.target.value.split('\n'));
        }} />
    </label>
  </div>
);

export default observer(UserTextarea);
