import { createStore } from 'redux';
import recipeReducer from '../reducers';

export default function configureStore(initialState) {
  const store = createStore(recipeReducer, initialState);

  /*
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }
  */

  return store;
}