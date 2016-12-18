webpackJsonp([0],{

/***/ 152:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _PixelCanvas = __webpack_require__(154);

var _PixelCanvas2 = _interopRequireDefault(_PixelCanvas);

var _ColorPicker = __webpack_require__(153);

var _ColorPicker2 = _interopRequireDefault(_ColorPicker);

var _ModePicker = __webpack_require__(421);

var _ModePicker2 = _interopRequireDefault(_ModePicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PixelArt = function (_React$Component) {
  _inherits(PixelArt, _React$Component);

  function PixelArt(props) {
    _classCallCheck(this, PixelArt);

    var _this = _possibleConstructorReturn(this, (PixelArt.__proto__ || Object.getPrototypeOf(PixelArt)).call(this, props));

    _this.state = {
      color: props.color,
      background: props.background,
      mode: 'DRAW'
    };

    _this.setColor = _this.setColor.bind(_this);
    _this.setMode = _this.setMode.bind(_this);
    return _this;
  }

  _createClass(PixelArt, [{
    key: 'setColor',
    value: function setColor(color) {
      this.setState({ color: color });
    }
  }, {
    key: 'setMode',
    value: function setMode(mode) {
      this.setState({ mode: mode });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          width = _props.width,
          height = _props.height,
          pixelSize = _props.pixelSize;
      var _state = this.state,
          color = _state.color,
          background = _state.background,
          mode = _state.mode;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_PixelCanvas2.default, {
          width: width,
          height: height,
          pixelSize: pixelSize,
          mode: mode,
          color: color,
          background: background }),
        _react2.default.createElement(
          'div',
          { className: 'controls' },
          _react2.default.createElement(_ColorPicker2.default, { color: color, setColor: this.setColor }),
          _react2.default.createElement(_ModePicker2.default, { setMode: this.setMode })
        )
      );
    }
  }]);

  return PixelArt;
}(_react2.default.Component);

PixelArt.defaultProps = {
  width: 25,
  height: 25,
  pixelSize: 20,
  color: '#000000',
  background: '#ffffff'
};
exports.default = PixelArt;

/***/ },

/***/ 153:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactColor = __webpack_require__(89);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ColorPicker = function (_React$Component) {
  _inherits(ColorPicker, _React$Component);

  function ColorPicker(props) {
    _classCallCheck(this, ColorPicker);

    var _this = _possibleConstructorReturn(this, (ColorPicker.__proto__ || Object.getPrototypeOf(ColorPicker)).call(this, props));

    _this.state = {
      picking: false
    };

    _this.setColor = _this.setColor.bind(_this);
    _this.togglePicking = _this.togglePicking.bind(_this);
    return _this;
  }

  _createClass(ColorPicker, [{
    key: 'togglePicking',
    value: function togglePicking() {
      this.setState({ picking: !this.state.picking });
    }
  }, {
    key: 'setColor',
    value: function setColor(color) {
      this.props.setColor(color.hex);
    }
  }, {
    key: 'render',
    value: function render() {
      var color = this.props.color;
      var picking = this.state.picking;

      return _react2.default.createElement(
        'div',
        null,
        'Color: ',
        _react2.default.createElement('div', {
          style: { width: 25, height: 25, background: color, border: '1px solid #ccc' },
          onClick: this.togglePicking,
          title: 'Click to change colors' }),
        picking ? _react2.default.createElement(_reactColor.ChromePicker, { color: color, onChangeComplete: this.setColor }) : null
      );
    }
  }]);

  return ColorPicker;
}(_react2.default.Component);

exports.default = ColorPicker;

/***/ },

/***/ 154:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _helpers = __webpack_require__(422);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PixelCanvas = function (_React$Component) {
  _inherits(PixelCanvas, _React$Component);

  function PixelCanvas(props) {
    _classCallCheck(this, PixelCanvas);

    var _this = _possibleConstructorReturn(this, (PixelCanvas.__proto__ || Object.getPrototypeOf(PixelCanvas)).call(this, props));

    var width = props.width,
        height = props.height;


    var pixels = [];
    for (var h = 0; h < height; h++) {
      var row = [];
      for (var w = 0; w < width; w++) {
        row.push(undefined);
      }
      pixels.push(row);
    }

    _this.state = {
      pixels: pixels,
      drawing: false
    };

    _this.startPaint = _this.startPaint.bind(_this);
    _this.midPaint = _this.midPaint.bind(_this);
    _this.endPaint = _this.endPaint.bind(_this);
    return _this;
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
      var pixels = this.state.pixels;
      var _props2 = this.props,
          pixelSize = _props2.pixelSize,
          background = _props2.background;

      for (var r = 0; r < pixels.length; r++) {
        var row = pixels[r];
        for (var c = 0; c < row.length; c++) {
          var color = row[c] || background;
          this.context.fillStyle = color;
          this.context.fillRect(c * pixelSize, r * pixelSize, pixelSize, pixelSize);
        }
      }
    }
  }, {
    key: 'drawGrid',
    value: function drawGrid() {
      var _props3 = this.props,
          width = _props3.width,
          height = _props3.height,
          pixelSize = _props3.pixelSize;

      this.context.strokeStyle = '#efefef';
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
    key: 'startPaint',
    value: function startPaint(event) {
      var _coordinates = (0, _helpers.coordinates)(this.canvas, event),
          x = _coordinates.x,
          y = _coordinates.y;

      var pixelSize = this.props.pixelSize;
      // determine which "pixel" we are in

      var row = Math.floor(y / pixelSize);
      var column = Math.floor(x / pixelSize);

      this.setState({
        drawing: true,
        startX: x,
        startY: y,
        startRow: row,
        startColumn: column
      });
    }
  }, {
    key: 'midPaint',
    value: function midPaint(event) {
      var _coordinates2 = (0, _helpers.coordinates)(this.canvas, event),
          x = _coordinates2.x,
          y = _coordinates2.y;

      var _state = this.state,
          drawing = _state.drawing,
          startX = _state.startX,
          startY = _state.startY;

      if (!drawing) {
        return;
      }
      var _props4 = this.props,
          color = _props4.color,
          background = _props4.background,
          mode = _props4.mode;

      var _minMax = (0, _helpers.minMax)(startX, x),
          _minMax2 = _slicedToArray(_minMax, 2),
          minX = _minMax2[0],
          maxX = _minMax2[1];

      var _minMax3 = (0, _helpers.minMax)(startY, y),
          _minMax4 = _slicedToArray(_minMax3, 2),
          minY = _minMax4[0],
          maxY = _minMax4[1];

      var width = maxX - minX;
      var height = maxY - minY;
      this.refresh();
      this.context.strokeStyle = '#666';
      this.context.fillStyle = mode === 'DRAW' ? color : background;
      this.context.fillRect(minX, minY, width, height);
    }
  }, {
    key: 'endPaint',
    value: function endPaint(event) {
      var _coordinates3 = (0, _helpers.coordinates)(this.canvas, event),
          x = _coordinates3.x,
          y = _coordinates3.y;

      var _props5 = this.props,
          mode = _props5.mode,
          pixelSize = _props5.pixelSize,
          color = _props5.color;

      // determine which "pixel" we are in

      var row = Math.floor(y / pixelSize);
      var column = Math.floor(x / pixelSize);

      var _state2 = this.state,
          pixels = _state2.pixels,
          startRow = _state2.startRow,
          startColumn = _state2.startColumn;

      var _minMax5 = (0, _helpers.minMax)(startRow, row),
          _minMax6 = _slicedToArray(_minMax5, 2),
          minRow = _minMax6[0],
          maxRow = _minMax6[1];

      var _minMax7 = (0, _helpers.minMax)(startColumn, column),
          _minMax8 = _slicedToArray(_minMax7, 2),
          minCol = _minMax8[0],
          maxCol = _minMax8[1];

      var pixelValue = mode === 'DRAW' ? color : undefined;
      var copy = (0, _helpers.copy2dArray)(pixels);
      for (var r = minRow; r <= maxRow; r++) {
        for (var c = minCol; c <= maxCol; c++) {
          copy[r][c] = pixelValue;
        }
      }
      this.setState({
        drawing: false,
        pixels: copy
      });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.refresh();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props6 = this.props,
          width = _props6.width,
          height = _props6.height,
          pixelSize = _props6.pixelSize;

      return _react2.default.createElement('canvas', {
        ref: function ref(node) {
          return _this2.canvas = node;
        },
        width: width * pixelSize,
        height: height * pixelSize,
        onMouseDown: this.startPaint,
        onMouseMove: this.midPaint,
        onMouseUp: this.endPaint });
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

PixelCanvas.propTypes = {
  width: _react.PropTypes.number.isRequired,
  height: _react.PropTypes.number.isRequired,
  pixelSize: _react.PropTypes.number.isRequired,
  color: _react.PropTypes.string.isRequired,
  background: _react.PropTypes.string.isRequired,
  mode: _react.PropTypes.string.isRequired
};
exports.default = PixelCanvas;

/***/ },

/***/ 419:
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(53);

var _PixelArt = __webpack_require__(152);

var _PixelArt2 = _interopRequireDefault(_PixelArt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactDom.render)(_react2.default.createElement(_PixelArt2.default, null), document.getElementById('root'));

/***/ },

/***/ 421:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ModePicker = function (_React$Component) {
  _inherits(ModePicker, _React$Component);

  function ModePicker(props) {
    _classCallCheck(this, ModePicker);

    var _this = _possibleConstructorReturn(this, (ModePicker.__proto__ || Object.getPrototypeOf(ModePicker)).call(this, props));

    _this.state = {
      mode: 'DRAW'
    };

    _this.setMode = _this.setMode.bind(_this);
    return _this;
  }

  _createClass(ModePicker, [{
    key: 'setMode',
    value: function setMode(event) {
      this.props.setMode(event.target.value);
      this.setState({ mode: event.target.value });
    }
  }, {
    key: 'render',
    value: function render() {
      var mode = this.state.mode;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'p',
          null,
          'Mode'
        ),
        _react2.default.createElement(
          'label',
          null,
          'Draw ',
          _react2.default.createElement('input', {
            type: 'radio',
            name: 'mode',
            value: 'DRAW',
            checked: mode === 'DRAW',
            onChange: this.setMode })
        ),
        _react2.default.createElement(
          'label',
          null,
          'Erase ',
          _react2.default.createElement('input', {
            type: 'radio',
            name: 'mode',
            value: 'ERASE',
            checked: mode === 'ERASE',
            onChange: this.setMode })
        )
      );
    }
  }]);

  return ModePicker;
}(_react2.default.Component);

exports.default = ModePicker;

/***/ },

/***/ 422:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.copy2dArray = copy2dArray;
exports.coordinates = coordinates;
exports.minMax = minMax;
function copy2dArray(array) {
  var copy = [];
  for (var r = 0; r < array.length; r++) {
    copy.push(array[r].slice());
  }
  return copy;
}

function coordinates(canvas, event) {
  var rect = canvas.getBoundingClientRect();
  var x = event.clientX - rect.left;
  var y = event.clientY - rect.top;
  return { x: x, y: y };
}

function minMax(one, two) {
  return one < two ? [one, two] : [two, one];
}

/***/ }

},[419]);