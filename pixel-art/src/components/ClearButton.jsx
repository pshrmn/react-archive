import React from 'react';
import { connect } from 'react-redux';

import { clear } from '../actions';

const ClearButton = ({ clear }) => (
  <button type='button' onClick={clear} title='Clear'>
    <i className='fa fa-trash-o' aria-hidden="true"></i>
  </button>
);

export default connect(
  null,
  {
    clear
  }
)(ClearButton);
