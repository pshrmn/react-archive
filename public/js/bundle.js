webpackJsonp([0],{

/***/ 179:
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(20);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(32);

var _PixelArt = __webpack_require__(81);

var _PixelArt2 = _interopRequireDefault(_PixelArt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactDom.render)(_react2.default.createElement(_PixelArt2.default, null), document.getElementById('root'));

/***/ },

/***/ 81:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(20);

var _react2 = _interopRequireDefault(_react);

var _PixelCanvas = __webpack_require__(82);

var _PixelCanvas2 = _interopRequireDefault(_PixelCanvas);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PixelArt = function (_React$Component) {
  _inherits(PixelArt, _React$Component);

  function PixelArt() {
    _classCallCheck(this, PixelArt);

    return _possibleConstructorReturn(this, (PixelArt.__proto__ || Object.getPrototypeOf(PixelArt)).apply(this, arguments));
  }

  _createClass(PixelArt, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          width = _props.width,
          height = _props.height,
          pixelSize = _props.pixelSize;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_PixelCanvas2.default, { width: width, height: height, pixelSize: pixelSize })
      );
    }
  }]);

  return PixelArt;
}(_react2.default.Component);

PixelArt.defaultProps = {
  width: 25,
  height: 25,
  pixelSize: 20,
  color: '000000',
  background: 'ffffff'
};
exports.default = PixelArt;

/***/ },

/***/ 82:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(20);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PixelCanvas = function (_React$Component) {
  _inherits(PixelCanvas, _React$Component);

  function PixelCanvas() {
    _classCallCheck(this, PixelCanvas);

    return _possibleConstructorReturn(this, (PixelCanvas.__proto__ || Object.getPrototypeOf(PixelCanvas)).apply(this, arguments));
  }

  _createClass(PixelCanvas, [{
    key: 'refresh',
    value: function refresh() {
      this.clear();
      this.draw();
      this.drawGrid();
    }
  }, {
    key: 'clear',
    value: function clear() {
      var _props = this.props,
          width = _props.width,
          height = _props.height,
          pixelSize = _props.pixelSize;

      this.context.clearRect(0, 0, width * pixelSize, height * pixelSize);
    }
  }, {
    key: 'draw',
    value: function draw() {
      // tbd
    }
  }, {
    key: 'drawGrid',
    value: function drawGrid() {
      var _props2 = this.props,
          width = _props2.width,
          height = _props2.height,
          pixelSize = _props2.pixelSize;

      this.context.strokeStyle = '#ccc';
      this.context.lineWidth = 1;
      // vertical
      for (var w = 1; w < width; w++) {
        this.context.beginPath();
        this.context.moveTo(w * pixelSize, 0);
        this.context.lineTo(w * pixelSize, height * pixelSize);
        this.context.stroke();
      }
      // horizontal
      for (var h = 1; h < height; h++) {
        this.context.beginPath();
        this.context.moveTo(0, h * pixelSize);
        this.context.lineTo(width * pixelSize, h * pixelSize);
        this.context.stroke();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props3 = this.props,
          width = _props3.width,
          height = _props3.height,
          pixelSize = _props3.pixelSize;

      return _react2.default.createElement('canvas', {
        ref: function ref(node) {
          return _this2.canvas = node;
        },
        width: width * pixelSize,
        height: height * pixelSize });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.context = this.canvas.getContext('2d');
      this.refresh();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.refresh();
    }
  }]);

  return PixelCanvas;
}(_react2.default.Component);

exports.default = PixelCanvas;

/***/ }

},[179]);