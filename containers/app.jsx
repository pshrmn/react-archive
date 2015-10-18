import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Annotater from "../components/annotater";
import * as RecipeActions from "../actions";

var App = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    url: React.PropTypes.string.isRequired,
    ytID: React.PropTypes.string.isRequired,
    ingredients: React.PropTypes.array.isRequired,
    instructions: React.PropTypes.array.isRequired,
    dispatch: React.PropTypes.func.isRequired
  },
  render() {
    const { name, url, ingredients, instructions, ytID, dispatch } = this.props;
    const actions = bindActionCreators(RecipeActions, dispatch);
    return (
      <div>
        <Annotater name={name}
                   url={url}
                   ytID={ytID}
                   ingredients={ingredients}
                   instructions={instructions}
                   actions={actions} />
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    name: state.name,
    url: state.url,
    ytID: state.ytID,
    ingredients: state.ingredients,
    instructions: state.instructions
  };
}

export default connect(mapStateToProps)(App);
