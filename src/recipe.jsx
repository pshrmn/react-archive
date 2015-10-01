import React from "react";
import Ingredients from "./ingredients";
import Steps from "./steps";

export default React.createClass({
  render: function() {
    return (
      <div className="recipe">
        <Ingredients />
        <Steps />
      </div>
    );
  }
});
