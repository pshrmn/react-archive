import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Annotater from "../components/annotater";
import RecipeMenu from "../components/recipemenu";
import * as RecipeActions from "../actions";

let HowTo = React.createClass({
  getInitialState: function() {
    return {
      visible: true
    };
  },
  shouldComponentUpdate: function(nextProps, nextState) {
    return nextState.visible !== this.state.visible;
  },
  toggleVisible: function(event) {
    event.preventDefault();
    this.setState({
      visible: !this.state.visible
    });
  },
  render: function() {
    let buttonText = this.state.visible ? "Hide Help" : "Show Help";
    let visibleClass = this.state.visible ? "" : "hidden";
    return (
      <div className="help">
        <h3>
          How to: 
        </h3>
        <button onClick={this.toggleVisible}>{buttonText}</button>
        <ol className={visibleClass}>
          <li>
            Go to the YouTube page for the recipe you would like to make and copy the url from the address bar.
          </li>
          <li>
            Paste the url into the "YouTube URL..." box below, then click "Add Recipe"
          </li>
          <li>
            An embedded copy of the video will appear in the page.
          </li>
          <li>
            Type in the name of the recipe.
          </li>
          <li>
            Press play on the video and write down the ingredients and instructions while you watch the video, pausing to catch up whenever the chef is moving faster than you can type.
          </li>
          <li>
            When you've written everything down, click the "Save" button.
          </li>
          <li>
            If you would like a paper copy, print the recipe. Only your input will be printed, everything else will be hidden.
          </li>
        </ol>
      </div>
    );
  }
});

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
          <div>
            Did you see a recipe on YouTube that you'd like to make, but don't want to constantly pause the video while you're cooking?
            Annotated Meals lets you quickly type up a recipe from a video.
            <HowTo />
            For a quick test, try pasting this link <strong>https://www.youtube.com/watch?v=bjmYkPkjnVo</strong> into the "YouTube URL..." input below.
          </div>
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
