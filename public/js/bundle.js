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

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(20);

var _react2 = _interopRequireDefault(_react);

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
      var pixelSize = this.props.pixelSize;

      for (var r = 0; r < pixels.length; r++) {
        var row = pixels[r];
        for (var c = 0; c < row.length; c++) {
          var color = row[c] || 'transparent';
          this.context.fillStyle = color;
          this.context.fillRect(c * pixelSize, r * pixelSize, pixelSize, pixelSize);
        }
      }
    }
  }, {
    key: 'drawGrid',
    value: function drawGrid() {
      var _props2 = this.props,
          width = _props2.width,
          height = _props2.height,
          pixelSize = _props2.pixelSize;

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
      var _coordinates = coordinates(this.canvas, event),
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
      var _coordinates2 = coordinates(this.canvas, event),
          x = _coordinates2.x,
          y = _coordinates2.y;

      var _state = this.state,
          drawing = _state.drawing,
          startX = _state.startX,
          startY = _state.startY;

      if (!drawing) {
        return;
      }

      var _ref = startX < x ? [startX, x] : [x, startX],
          _ref2 = _slicedToArray(_ref, 2),
          minX = _ref2[0],
          maxX = _ref2[1];

      var _ref3 = startY < y ? [startY, y] : [y, startY],
          _ref4 = _slicedToArray(_ref3, 2),
          minY = _ref4[0],
          maxY = _ref4[1];

      var width = maxX - minX;
      var height = maxY - minY;
      this.refresh();
      this.context.strokeStyle = '#666';
      this.context.fillStyle = '#abcdef';
      this.context.fillRect(minX, minY, width, height);
    }
  }, {
    key: 'endPaint',
    value: function endPaint(event) {
      var _coordinates3 = coordinates(this.canvas, event),
          x = _coordinates3.x,
          y = _coordinates3.y;

      var pixelSize = this.props.pixelSize;

      // determine which "pixel" we are in

      var row = Math.floor(y / pixelSize);
      var column = Math.floor(x / pixelSize);

      var _state2 = this.state,
          pixels = _state2.pixels,
          startRow = _state2.startRow,
          startColumn = _state2.startColumn;

      var _ref5 = startRow < row ? [startRow, row] : [row, startRow],
          _ref6 = _slicedToArray(_ref5, 2),
          minRow = _ref6[0],
          maxRow = _ref6[1];

      var _ref7 = startColumn < column ? [startColumn, column] : [column, startColumn],
          _ref8 = _slicedToArray(_ref7, 2),
          minCol = _ref8[0],
          maxCol = _ref8[1];

      var copy = copy2dArray(pixels);
      for (var r = minRow; r <= maxRow; r++) {
        for (var c = minCol; c <= maxCol; c++) {
          copy[r][c] = '#abcdef';
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

      var _props3 = this.props,
          width = _props3.width,
          height = _props3.height,
          pixelSize = _props3.pixelSize;

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

exports.default = PixelCanvas;


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

/***/ }

},[179]);