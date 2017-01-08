import React from 'react';
import { observer } from 'mobx-react';

import { parseVidID } from '../helpers';

class RecipeCreator extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.createRecipe = this.createRecipe.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  createRecipe(event) {
    // try to find the id of the url, otherwise create a recipe
    // that doesn't have an associated youtube video
    let ytID = parseVidID(this.state.value);
    this.props.recipes.addRecipe(ytID)
    this.setState({
      value: ''
    });
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  render() {
    return (
      <div>
        <input
          placeholder='YouTube URL...'
          value={this.state.value}
          onChange={this.handleChange} />
        <button type='button' onClick={this.createRecipe}>Add Recipe</button>
      </div>
    );
  }
}

export default observer(RecipeCreator);
