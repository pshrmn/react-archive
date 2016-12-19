import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import PixelArt from './components/PixelArt';
import reducers from './reducers';

const width = 25;
const height = 25;
const store = createStore(reducers, {
  mode: 'DRAW',
  color: '#000',
  moves: {
    past: [],
    future: []
  }
});

render((
  <Provider store={store}>
    <PixelArt />
  </Provider>
), document.getElementById('root'));
