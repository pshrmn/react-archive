import React from 'react';
import ReactDOM from 'react-dom';
import { extendObservable, autorun } from 'mobx';
import { Provider } from 'mobx-react';

import App from './components/App';
import { load, save } from './helpers';

class Recipes {
  constructor() {
    extendObservable(this, {
      index: null,
      recipes: load('recipes') || [],
      removeRecipe(index) {
        if (this.recipes[index]) {
          this.recipes[index] = null;
        }
        if (this.index === index) {
          this.index = null;
        }
      },
      addRecipe(id) {
        const count = this.recipes.push({
          name: '',
          ytID: id,
          ingredients: [],
          instructions: []
        });
        this.index = count - 1;
      }
    });
  }
}

const recipes = new Recipes();

// write all recipe changes to localStorage
autorun(() => {
  save('recipes', recipes.recipes.filter(r => r !== null))
})


ReactDOM.render((
  <App recipes={recipes} />
), document.getElementById('content'));
