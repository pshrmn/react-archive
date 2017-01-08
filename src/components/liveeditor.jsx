import React from 'react';
import { observer } from 'mobx-react';

const LiveEditor = React.createClass({
  render: function() {
    const {
      name = '',
      ingredients = [],
      instructions = [],
      setName,
      setIngredients,
      setInstructions
    } = this.props.recipe;
    return (
      <div className="live-editor">
        <UserInput
          name="name"
          change={(val) => {
            this.props.recipe.name = val;
          }}
          value={name} />
        <UserTextarea
          name="ingredients"
          change={(val) => {
            this.props.recipe.ingredients = val;
          }}
          value={ingredients.join("\n")} />
        <UserTextarea
          name="instructions"
          change={(val) => {
            this.props.recipe.instructions = val;
          }}
          value={instructions.join("\n")} />
      </div>
    );    
  }
});

export default observer(LiveEditor);

var UserInput = observer(React.createClass({
  propTypes: {
    value: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    change: React.PropTypes.func.isRequired
  },
  handleChange: function(event) {
    this.props.change(event.target.value);
  },
  handleBlur: function(event) {
    this.props.change(event.target.value);
  },
  handleSubmit: function(event) {
    if ( event.which === 13 ) {
      this.props.change(event.target.value);
    }
  },
  render: function() {
    return (
      <div>
        <label>
          {this.props.name}
          <input type="text"
                 value={this.props.value}
                 onChange={this.handleChange}
                 onBlur={this.handleBlur}
                 onKeyDown={this.handleSubmit} />
        </label>
      </div>
    );
  }
}));

const splitLines = text => text.split('\n');

var UserTextarea = observer(React.createClass({
  handleChange: function(event) {
    this.set(event.target.value);
  },
  handleSubmit: function(event) {
    if ( event.which === 13 ) {
      this.set(event.target.value);
    }
  },
  set: function(text) {
    this.props.change(splitLines(text));
  },
  render: function() {
    return (
      <div>
        <label>
          {this.props.name}
          <textarea value={this.props.value}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                    onKeyDown={this.handleSubmit} />
        </label>
      </div>
    );
  }
}));
