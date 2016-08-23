import React from 'react';
import { connect } from 'react-redux';
import Annotater from './annotater';
import RecipeMenu from './recipemenu';
import Header from './header';

var App = React.createClass({
  render() {
    const { recipes, recipe, index, editing } = this.props;
    // only render the annotater while editing
    const annotater = editing ? <Annotater {...recipe} /> : null;
    return (
      <div className='app'>
        <Header />
        <div>
          <RecipeMenu recipes={recipes}
                      index={index} />
          {annotater}
        </div>
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    recipes: state.recipes,
    recipe: state.recipe,
    index: state.index,
    editing: state.editing
  };
}

export default connect(mapStateToProps)(App);
