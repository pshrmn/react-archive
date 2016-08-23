import React from 'react';
import { connect } from 'react-redux';

import LiveEditor from './liveeditor';
import Recipe from './recipe';
import Video from './video';

const Annotater = React.createClass({
  render: function() {
    const { recipe } = this.props;
    if ( recipe === null ) {
      return null;
    }

    const {
      name = '',
      ytID = '',
      ingredients = [],
      instructions = []
    } = recipe;
    return (
      <div className='annotater'>
        <div className='edit-view'>
          <Video ytID={ytID} />
          <LiveEditor name={name}
                      ingredients={ingredients}
                      instructions={instructions} />
        </div>
        <div className='print-view'>
          <Recipe name={name}
                  ytID={ytID}
                  ingredients={ingredients}
                  instructions={instructions} />
        </div>
      </div>
    );
    
  }
});

export default connect(
  state => {
    const { recipes, index } = state;
    return {
      recipe: index !== null ? recipes[index] : null
    }
  }
)(Annotater);