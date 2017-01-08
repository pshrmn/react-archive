import React from 'react';
import { observer } from 'mobx-react';

import { VideoID } from '../helpers';

const RecipeMenu = (props) => {
  const { recipes, index } = props.recipes;
  let thumbnails = recipes.map((r, i) =>
    r === null ? null : (
      <Thumbnail
        key={i}
        index={i}
        active={i===index}
        delete={() => {
          // don't actually delete, just set to null
          // so that the other indices do not get
          // messed up. Only non-null recipes are saved
          // to localStorage, so this will not exist on the
          // next page load.
          props.recipes.recipes[i] = null
        }}
        load={() => { props.recipes.index = i; }}
        {...r} />
    )
  );
  return (
    <div className='recipe-menu'>
      Saved Recipes:
      <ul className='saved-recipes'>
        {thumbnails}
      </ul>
      <RecipeCreator recipes={props.recipes} />
    </div>
  );
}

export default observer(RecipeMenu);

const Thumbnail = observer(React.createClass({
  handleDelete: function(event) {
    event.stopPropagation();
    this.props.delete(this.props.index);
  },
  handleClick: function(event) {
    this.props.load(this.props.index);
  },
  render: function() {
    let { ytID, name, active } = this.props;
    let src = `https://i.ytimg.com/vi/${ytID}/mqdefault.jpg`;
    let thumb = ytID === '' ? (
      <div className='empty-thumb'>?</div>
      ) : (<img src={src} />);
    let className = 'thumbnail';
    if ( active ) {
      className += ' active';
    }
    return (
      <li className={className} onClick={this.handleClick} >
        <div>
          {thumb}
        </div>
        <div className='thumb-info'>
          {name}
        </div>
        <div className='thumb-controls'>
          <button title='delete recipe'
                  onClick={this.handleDelete}>
            {String.fromCharCode(215)}
          </button>
        </div>
      </li>
    );
  }
}));

let RecipeCreator = observer(React.createClass({
  getInitialState: function() {
    return {
      value: ''
    }
  },
  createRecipe: function(event) {
    event.preventDefault();
    // try to find the id of the url, otherwise create a recipe
    // that doesn't have an associated youtube video
    let ytID = VideoID(this.state.value);
    
    let { recipes, index } = this.props.recipes;
    recipes.push({
      name: '',
      ytID: ytID,
      ingredients: [],
      instructions: []
    });
    index = recipes.length - 1;
    this.setState({
      value: ''
    });
  },
  handleChange: function(event) {
    this.setState({
      value: event.target.value
    });
  },
  render: function() {
    return (
      <div>
        <input placeholder='YouTube URL...'
               value={this.state.value}
               onChange={this.handleChange} />
        <button onClick={this.createRecipe}>Add Recipe</button>
      </div>
    );
  }
}));
