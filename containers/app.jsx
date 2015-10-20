import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Annotater from "../components/annotater";
import RecipeMenu from "../components/recipemenu";
import * as RecipeActions from "../actions";

var App = React.createClass({
  render() {
    const { recipes, recipe, index, editing, dispatch } = this.props;
    // bind the action creators to automatically dispatch when called
    const actions = bindActionCreators(RecipeActions, dispatch);
    // only render the annotater while editing
    let annotater = editing ? (
      <Annotater actions={actions}
                   {...recipe} />
      ) : null;
    return (
      <div>
        <header>
          <h1>Annotated Meals</h1>
          <p>
            Quickly write down the ingredients and instructions for a recipe from a YouTube video.
            When you are done you can print the recipe and a simple version showing
            only the name, link, and list of ingredients and instructions will be printed.
            For a quick test, try pasting this link <strong>https://www.youtube.com/watch?v=bjmYkPkjnVo</strong> into the Url input below.
          </p>
        </header> 
        <RecipeMenu actions={actions}
                    recipes={recipes}
                    index={index} />
        {annotater}
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
