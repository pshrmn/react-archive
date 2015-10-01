import React from "react";

export default React.createClass({
  getInitialState: function() {
    return {
      steps: []
    }
  },
  addStep: function(step) {
    var newSteps = this.state.steps.concat(step);
    this.setState({
      steps: newSteps
    });
  },
  removeStep: function(index) {
    this.state.steps.splice(index, 1);
    this.setState({
      steps: this.state.steps
    });
  },
  render: function() {
    var steps = this.state.steps.map(function(s, i){
      return (
        <Step key={i}
              value={s}
              index={i}
              onRemove={this.removeStep}/>
      );
    }, this);
    return (
      <div className="steps">
        <h3>Instructions</h3>
        <ol>
          {steps}
        </ol>
        <StepInput onAdd={this.addStep} />
      </div>
    );
  }
});

var Step = React.createClass({
  removeStep: function() {
    this.props.onRemove(this.props.index);
  },
  render: function() {
    return (
      <li className="step">
        {this.props.value}
        <button onClick={this.removeStep}>Remove</button>
      </li>
    );
  }
});

var StepInput = React.createClass({
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
