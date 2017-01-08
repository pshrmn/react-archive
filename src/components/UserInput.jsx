import React from 'react';
import { observer } from 'mobx-react';

const UserInput = ({ change, name, value }) => (
  <div>
    <label>
      {name}
      <input
        type="text"
        value={value}
        onChange={(event) => {
          change(event.target.value);
        }} />
    </label>
  </div>
)

export default observer(UserInput);
