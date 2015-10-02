/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _video = __webpack_require__(2);

	var _video2 = _interopRequireDefault(_video);

	var _recipe = __webpack_require__(3);

	var _recipe2 = _interopRequireDefault(_recipe);

	var Annotater = _react2["default"].createClass({
	  displayName: "Annotater",

	  render: function render() {
	    return _react2["default"].createElement(
	      "div",
	      { className: "annotater" },
	      _react2["default"].createElement(_video2["default"], null),
	      _react2["default"].createElement(_recipe2["default"], null)
	    );
	  }
	});

	_react2["default"].render(_react2["default"].createElement(Annotater, null), document.getElementById("content"));

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	exports["default"] = _react2["default"].createClass({
	  displayName: "video",

	  getInitialState: function getInitialState() {
	    return {
	      vidID: ""
	    };
	  },
	  shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
	    return nextState.vidID !== this.state.vidID;
	  },
	  updateURL: function updateURL(fullURL) {
	    var parts = fullURL.split("/");
	    var vidID = parts[parts.length - 1];
	    this.setState({
	      vidID: vidID
	    });
	  },
	  removePlayer: function removePlayer() {
	    this.setState({
	      vidID: ""
	    });
	  },
	  _renderSetup: function _renderSetup() {
	    return _react2["default"].createElement(YTForm, { onSubmit: this.updateURL });
	  },
	  _renderPlayer: function _renderPlayer() {
	    return _react2["default"].createElement(YTPlayer, { id: this.state.vidID,
	      onRemove: this.removePlayer });
	  },
	  render: function render() {
	    var value = this.state.vidID ? this._renderPlayer() : this._renderSetup();
	    return _react2["default"].createElement(
	      "div",
	      { className: "yt" },
	      _react2["default"].createElement(
	        "h3",
	        null,
	        "Video"
	      ),
	      value,
	      _react2["default"].createElement(YTHelp, null)
	    );
	  }
	});

	var YTHelp = _react2["default"].createClass({
	  displayName: "YTHelp",

	  getInitialState: function getInitialState() {
	    return {
	      show: false
	    };
	  },
	  shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
	    return nextState.show !== this.state.show;
	  },
	  toggleHelp: function toggleHelp(event) {
	    event.preventDefault();
	    this.setState({
	      show: !this.state.show
	    });
	  },
	  render: function render() {
	    var msg;
	    var title;
	    if (this.state.show) {
	      title = "Hide Help";
	      msg = "To get the correct url for a YouTube video, click on the \"Share\" button beneath the video's " + "description. This will give you a url that begins with \"https://youtu.be/\" and ends with " + "the video's ID. Copy this url and paste it into the text box below";
	    } else {
	      title = "Show Help";
	      msg = "";
	    }
	    return _react2["default"].createElement(
	      "div",
	      null,
	      _react2["default"].createElement(
	        "button",
	        { onClick: this.toggleHelp },
	        title
	      ),
	      _react2["default"].createElement(
	        "p",
	        null,
	        msg
	      )
	    );
	  }
	});

	var YTForm = _react2["default"].createClass({
	  displayName: "YTForm",

	  getInitialState: function getInitialState() {
	    return {
	      url: ""
	    };
	  },
	  reset: function reset() {
	    this.setState({
	      url: ""
	    });
	  },
	  getVideo: function getVideo(event) {
	    event.preventDefault();
	    this.props.onSubmit(this.state.url);
	  },
	  _handleURL: function _handleURL(event) {
	    this.setState({
	      url: event.target.value
	    });
	  },
	  render: function render() {
	    return _react2["default"].createElement(
	      "div",
	      null,
	      _react2["default"].createElement(
	        "form",
	        null,
	        _react2["default"].createElement("input", { type: "text",
	          placeholder: "https://youtu.be/...",
	          value: this.state.url,
	          onChange: this._handleURL }),
	        _react2["default"].createElement(
	          "button",
	          { onClick: this.getVideo },
	          "Load Video"
	        )
	      )
	    );
	  }
	});

	var YTPlayer = _react2["default"].createClass({
	  displayName: "YTPlayer",

	  shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
	    return nextProps.id !== this.props.id;
	  },
	  render: function render() {
	    var url = "https://www.youtube.com/embed/" + this.props.id;
	    return _react2["default"].createElement(
	      "div",
	      { className: "yt-player" },
	      _react2["default"].createElement("iframe", { width: "560", height: "315", src: url, frameBorder: "0" }),
	      _react2["default"].createElement(
	        "button",
	        { onClick: this.props.onRemove },
	        "Remove"
	      )
	    );
	  }
	});
	module.exports = exports["default"];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _ingredients = __webpack_require__(4);

	var _ingredients2 = _interopRequireDefault(_ingredients);

	var _steps = __webpack_require__(5);

	var _steps2 = _interopRequireDefault(_steps);

	exports["default"] = _react2["default"].createClass({
	  displayName: "recipe",

	  render: function render() {
	    return _react2["default"].createElement(
	      "div",
	      { className: "recipe" },
	      _react2["default"].createElement(
	        "h2",
	        null,
	        "Recipe"
	      ),
	      _react2["default"].createElement("input", { className: "recipe-name", type: "text", placeholder: "Recipe Name..." }),
	      _react2["default"].createElement(_ingredients2["default"], null),
	      _react2["default"].createElement(_steps2["default"], null)
	    );
	  }
	});
	module.exports = exports["default"];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	exports["default"] = _react2["default"].createClass({
	  displayName: "ingredients",

	  getInitialState: function getInitialState() {
	    return {
	      ingredients: []
	    };
	  },
	  addIngredient: function addIngredient(value) {
	    var newIngredients = this.state.ingredients.concat(value);
	    this.setState({
	      ingredients: newIngredients
	    });
	  },
	  removeIngredient: function removeIngredient(index) {
	    this.state.ingredients.splice(index, 1);
	    this.setState({
	      ingredients: this.state.ingredients
	    });
	  },
	  render: function render() {
	    var ingredients = this.state.ingredients.map(function (value, index) {
	      return _react2["default"].createElement(Ingredient, { value: value,
	        key: index,
	        index: index,
	        onRemove: this.removeIngredient });
	    }, this);
	    return _react2["default"].createElement(
	      "div",
	      { className: "ingredients" },
	      _react2["default"].createElement(
	        "h3",
	        null,
	        "Ingredients"
	      ),
	      _react2["default"].createElement(
	        "ul",
	        null,
	        ingredients
	      ),
	      _react2["default"].createElement(IngredientInput, { onAdd: this.addIngredient })
	    );
	  }
	});

	var Ingredient = _react2["default"].createClass({
	  displayName: "Ingredient",

	  shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
	    return nextProps.value !== this.props.value;
	  },
	  remove: function remove(event) {
	    event.preventDefault();
	    this.props.onRemove(this.props.index);
	  },
	  render: function render() {
	    return _react2["default"].createElement(
	      "li",
	      { className: "ingredient" },
	      this.props.value,
	      _react2["default"].createElement(
	        "button",
	        { onClick: this.remove },
	        String.fromCharCode(215)
	      )
	    );
	  }
	});

	var IngredientInput = _react2["default"].createClass({
	  displayName: "IngredientInput",

	  getInitialState: function getInitialState() {
	    return {
	      value: ""
	    };
	  },
	  updateValue: function updateValue(event) {
	    this.setState({
	      value: event.target.value
	    });
	  },
	  addStep: function addStep(event) {
	    event.preventDefault();
	    this.props.onAdd(this.state.value);
	    this.setState({
	      value: ""
	    });
	  },
	  render: function render() {
	    return _react2["default"].createElement(
	      "form",
	      { onSubmit: this.addStep },
	      _react2["default"].createElement("input", { type: "text",
	        value: this.state.value,
	        onChange: this.updateValue })
	    );
	  }
	});
	module.exports = exports["default"];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	exports["default"] = _react2["default"].createClass({
	  displayName: "steps",

	  getInitialState: function getInitialState() {
	    return {
	      steps: []
	    };
	  },
	  addStep: function addStep(step) {
	    var newSteps = this.state.steps.concat(step);
	    this.setState({
	      steps: newSteps
	    });
	  },
	  removeStep: function removeStep(index) {
	    this.state.steps.splice(index, 1);
	    this.setState({
	      steps: this.state.steps
	    });
	  },
	  render: function render() {
	    var steps = this.state.steps.map(function (s, i) {
	      return _react2["default"].createElement(Step, { key: i,
	        value: s,
	        index: i,
	        onRemove: this.removeStep });
	    }, this);
	    return _react2["default"].createElement(
	      "div",
	      { className: "steps" },
	      _react2["default"].createElement(
	        "h3",
	        null,
	        "Instructions"
	      ),
	      _react2["default"].createElement(
	        "ol",
	        null,
	        steps
	      ),
	      _react2["default"].createElement(StepInput, { onAdd: this.addStep })
	    );
	  }
	});

	var Step = _react2["default"].createClass({
	  displayName: "Step",

	  removeStep: function removeStep() {
	    this.props.onRemove(this.props.index);
	  },
	  render: function render() {
	    return _react2["default"].createElement(
	      "li",
	      { className: "step" },
	      this.props.value,
	      _react2["default"].createElement(
	        "button",
	        { onClick: this.removeStep },
	        "Remove"
	      )
	    );
	  }
	});

	var StepInput = _react2["default"].createClass({
	  displayName: "StepInput",

	  getInitialState: function getInitialState() {
	    return {
	      value: ""
	    };
	  },
	  updateValue: function updateValue(event) {
	    this.setState({
	      value: event.target.value
	    });
	  },
	  addStep: function addStep(event) {
	    event.preventDefault();
	    this.props.onAdd(this.state.value);
	    this.setState({
	      value: ""
	    });
	  },
	  render: function render() {
	    return _react2["default"].createElement(
	      "form",
	      { onSubmit: this.addStep },
	      _react2["default"].createElement("input", { type: "text",
	        value: this.state.value,
	        onChange: this.updateValue })
	    );
	  }
	});
	module.exports = exports["default"];

/***/ }
/******/ ]);