import React from "react";

export default React.createClass({
  getInitialState: function() {
    return {
      ingredients: []
    };
  },
  addIngredient: function(value) {
    var newIngredients = this.state.ingredients.concat(value);
    this.setState({
      ingredients: newIngredients
    });
  },
  removeIngredient: function(index) {
    this.state.ingredients.splice(index, 1);
    this.setState({
      ingredients: this.state.ingredients
    });
  },
  render: function() {
    var ingredients = this.state.ingredients.map(function(value, index) {
      return (
        <Ingredient value={value}
                    key={index}
                    index={index}
                    onRemove={this.removeIngredient} />
      );
    }, this);
    return (
      <div className="ingredients">
        <h3>Ingredients</h3>
        <ul>
          {ingredients}
        </ul>
        <IngredientInput onAdd={this.addIngredient} />
      </div>
    );
  }
});

var Ingredient = React.createClass({
  shouldComponentUpdate: function(nextProps, nextState) {
    return nextProps.value !== this.props.value;
  },
  remove: function(event) {
    event.preventDefault();
    this.props.onRemove(this.props.index);
  },
  render: function() {
    return (
      <li className="ingredient">
        {this.props.value}
        <button onClick={this.remove}>{String.fromCharCode(215)}</button>
      </li>
    );
  }
});

var IngredientInput = React.createClass({
  getInitialState: function() {
    return {
      value: ""
    };
  },
  updateValue: function(event){
    this.setState({
      value: event.target.value
    });
  },
  addStep: function(event){
    event.preventDefault();
    this.props.onAdd(this.state.value);
    this.setState({
      value: ""
    });
  },
  render: function() {
    return (
      <form onSubmit={this.addStep} >
        <input type="text"
               value={this.state.value}
               onChange={this.updateValue} />
      </form>
    );
  }
})
