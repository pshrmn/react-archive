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

	var Annotater = _react2["default"].createClass({
	  displayName: "Annotater",

	  render: function render() {
	    return _react2["default"].createElement(
	      "div",
	      null,
	      _react2["default"].createElement(_video2["default"], null)
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
	    event.preventDefault();
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
	    return this.state.vidID ? this._renderPlayer() : this._renderSetup();
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

/***/ }
/******/ ]);