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

	var _liveeditor = __webpack_require__(2);

	var _liveeditor2 = _interopRequireDefault(_liveeditor);

	var _recipe = __webpack_require__(5);

	var _recipe2 = _interopRequireDefault(_recipe);

	var Annotater = _react2["default"].createClass({
	  displayName: "Annotater",

	  getInitialState: function getInitialState() {
	    return {
	      recipe: {
	        name: "",
	        url: "",
	        ingredients: [],
	        instructions: []
	      }
	    };
	  },
	  submit: function submit(obj) {
	    console.log(obj);
	    this.setState({
	      recipe: obj
	    });
	  },
	  render: function render() {
	    return _react2["default"].createElement(
	      "div",
	      { className: "annotater" },
	      _react2["default"].createElement(_liveeditor2["default"], { submit: this.submit,
	        url: this.state.recipe.url }),
	      _react2["default"].createElement(_recipe2["default"], this.state.recipe)
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

	var _video = __webpack_require__(3);

	var _video2 = _interopRequireDefault(_video);

	var _recipeform = __webpack_require__(4);

	var _recipeform2 = _interopRequireDefault(_recipeform);

	exports["default"] = _react2["default"].createClass({
	  displayName: "liveeditor",

	  submit: function submit(obj) {
	    this.props.submit(obj);
	  },
	  render: function render() {
	    return _react2["default"].createElement(
	      "div",
	      { className: "live-editor" },
	      _react2["default"].createElement(_video2["default"], { url: this.props.url }),
	      _react2["default"].createElement(_recipeform2["default"], { submit: this.submit })
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

	exports["default"] = _react2["default"].createClass({
	  displayName: "video",

	  propTypes: {
	    url: _react2["default"].PropTypes.string.isRequired
	  },
	  getInitialState: function getInitialState() {
	    return {
	      vidID: ""
	    };
	  },
	  shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
	    return nextState.vidID !== this.state.vidID;
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    var vidID = getVideoID(nextProps.url) || "";
	    this.setState({
	      vidID: vidID
	    });
	  },
	  render: function render() {
	    var url = "https://www.youtube.com/embed/" + this.state.vidID;
	    var iframe = this.state.vidID === "" ? null : _react2["default"].createElement("iframe", { width: "560", height: "315", src: url, frameBorder: "0" });
	    return _react2["default"].createElement(
	      "div",
	      { className: "yt" },
	      iframe
	    );
	  }
	});

	function getVideoID(url) {
	  /*
	  * This can take either a youtube.com url and look for the v parameter
	  * or a youtu.be url and use the last part of the url
	  */
	  var id = "";
	  var a = document.createElement("a");
	  a.href = url;
	  switch (a.hostname) {
	    case "www.youtube.com":
	      if (a.search === "") {
	        break;
	      }
	      var parts = a.search.slice(1).split("&");
	      parts.some(function (p) {
	        var keyVal = p.split("=");
	        if (keyVal[0] === "v") {
	          id = keyVal[1];
	          return true;
	        }
	        return false;
	      });
	      break;
	    case "youtu.be":
	      var parts = url.split("/");
	      id = parts[parts.length - 1];
	      break;
	  }

	  if (id === "") {
	    return;
	  }

	  return id;
	}
	module.exports = exports["default"];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	exports["default"] = _react2["default"].createClass({
	  displayName: "recipeform",

	  getInitialState: function getInitialState() {
	    return {
	      name: "",
	      url: "",
	      ingredients: [],
	      instructions: []
	    };
	  },
	  submit: function submit(name, value) {
	    if (name === "ingredients" || name === "instructions") {
	      value = value.split("\n");
	    }
	    this.state[name] = value;
	    this.props.submit(this.state);
	    this.setState(_defineProperty({}, name, value));
	  },
	  render: function render() {
	    return _react2["default"].createElement(
	      "div",
	      { className: "recipe-form" },
	      _react2["default"].createElement(UserInput, { name: "name",
	        submit: this.submit }),
	      _react2["default"].createElement(UserInput, { name: "url",
	        submit: this.submit }),
	      _react2["default"].createElement(UserTextarea, { name: "ingredients",
	        submit: this.submit }),
	      _react2["default"].createElement(UserTextarea, { name: "instructions",
	        submit: this.submit })
	    );
	  }
	});

	var UserInput = _react2["default"].createClass({
	  displayName: "UserInput",

	  getInitialState: function getInitialState() {
	    return {
	      value: ""
	    };
	  },
	  handleChange: function handleChange(event) {
	    this.setState({
	      value: event.target.value
	    });
	  },
	  handleBlur: function handleBlur(event) {
	    this.props.submit(this.props.name, this.state.value);
	  },
	  handleSubmit: function handleSubmit(event) {
	    if (event.which === 13) {
	      this.props.submit(this.props.name, this.state.value);
	    }
	  },
	  render: function render() {
	    return _react2["default"].createElement(
	      "div",
	      null,
	      _react2["default"].createElement(
	        "label",
	        null,
	        this.props.name,
	        _react2["default"].createElement("input", { type: "text",
	          value: this.state.value,
	          onChange: this.handleChange,
	          onBlur: this.handleBlur,
	          onKeyDown: this.handleSubmit })
	      )
	    );
	  }
	});

	var UserTextarea = _react2["default"].createClass({
	  displayName: "UserTextarea",

	  getInitialState: function getInitialState() {
	    return {
	      value: ""
	    };
	  },
	  handleChange: function handleChange(event) {
	    //this.props.submit(this.props.name, event.target.value);
	    this.setState({
	      value: event.target.value
	    });
	  },
	  handleBlur: function handleBlur(event) {
	    this.props.submit(this.props.name, this.state.value);
	  },
	  handleSubmit: function handleSubmit(event) {
	    if (event.which === 13) {
	      this.props.submit(this.props.name, this.state.value);
	    }
	  },
	  render: function render() {
	    return _react2["default"].createElement(
	      "div",
	      null,
	      _react2["default"].createElement(
	        "label",
	        null,
	        this.props.name,
	        _react2["default"].createElement("textarea", { value: this.state.value,
	          onChange: this.handleChange,
	          onBlur: this.handleBlur,
	          onKeyDown: this.handleSubmit })
	      )
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

	var _ingredients = __webpack_require__(6);

	var _ingredients2 = _interopRequireDefault(_ingredients);

	var _instructions = __webpack_require__(7);

	var _instructions2 = _interopRequireDefault(_instructions);

	exports["default"] = _react2["default"].createClass({
	  displayName: "recipe",

	  propTypes: {
	    name: _react2["default"].PropTypes.string.isRequired,
	    url: _react2["default"].PropTypes.string.isRequired,
	    ingredients: _react2["default"].PropTypes.array.isRequired,
	    instructions: _react2["default"].PropTypes.array.isRequired
	  },
	  render: function render() {
	    var ingredients = this.props.ingredients;
	    var instructions = this.props.instructions;
	    return _react2["default"].createElement(
	      "div",
	      { className: "recipe" },
	      _react2["default"].createElement(
	        "h2",
	        null,
	        this.props.name
	      ),
	      _react2["default"].createElement(
	        "h3",
	        null,
	        this.props.url
	      ),
	      _react2["default"].createElement(_ingredients2["default"], { ingredients: ingredients }),
	      _react2["default"].createElement(_instructions2["default"], { instructions: instructions })
	    );
	  }
	});
	module.exports = exports["default"];

/***/ },
/* 6 */
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

	  propTypes: {
	    ingredients: _react2["default"].PropTypes.array.isRequired
	  },
	  render: function render() {
	    var ingredients = this.props.ingredients.map(function (v, i) {
	      return _react2["default"].createElement(
	        "li",
	        { key: i },
	        v
	      );
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
	      )
	    );
	  }
	});
	module.exports = exports["default"];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	exports["default"] = _react2["default"].createClass({
	  displayName: "instructions",

	  propTypes: {
	    instructions: _react2["default"].PropTypes.array.isRequired
	  },
	  render: function render() {
	    var instructions = this.props.instructions.map(function (s, i) {
	      return _react2["default"].createElement(
	        "li",
	        { key: i },
	        s
	      );
	    }, this);
	    return _react2["default"].createElement(
	      "div",
	      { className: "instructions" },
	      _react2["default"].createElement(
	        "h3",
	        null,
	        "Instructions"
	      ),
	      _react2["default"].createElement(
	        "ol",
	        null,
	        instructions
	      )
	    );
	  }
	});
	module.exports = exports["default"];

/***/ }
/******/ ]);