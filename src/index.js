import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import PixelArt from './components/PixelArt';
import reducers from './reducers';

const store = createStore(reducers, {
  size: {
    width: 25,
    height: 25
  },
  mode: 'DRAW',
  color: '#000',
  moves: {
    past: [],
    future: []
  },
  zoom: 1
});

render((
  <Provider store={store}>
    <PixelArt />
  </Provider>
), document.getElementById('root'));
