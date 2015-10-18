import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Annotater from "../components/annotater";
import * as RecipeActions from "../actions";

var App = React.createClass({
  propTypes: {
    recipe: React.PropTypes.object.isRequired,
    savedRecipes: React.PropTypes.array.isRequired,
    dispatch: React.PropTypes.func.isRequired
  },
  render() {
    const { recipe, savedRecipes, dispatch } = this.props;
    const actions = bindActionCreators(RecipeActions, dispatch);
    return (
      <div>
        <header>
          <h1>Annotated Meals</h1>
          <p>
            Quickly write down the ingredients and instructions for a recipe. When you are done you can print the recipe and a simple version of the page listing the recipe title, ingredients, and instructions will be printed. For a quick test, try pasting this link <strong>https://www.youtube.com/watch?v=bjmYkPkjnVo</strong> into the Url input below.
          </p>
        </header> 
        <Annotater actions={actions}
                   {...recipe} />
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    recipe: state.recipe,
    savedRecipes: state.savedRecipes
  };
}

export default connect(mapStateToProps)(App);
