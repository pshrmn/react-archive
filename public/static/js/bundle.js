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

	var _redux = __webpack_require__(2);

	var _reactRedux = __webpack_require__(12);

	var _containersApp = __webpack_require__(22);

	var _containersApp2 = _interopRequireDefault(_containersApp);

	var _reducers = __webpack_require__(33);

	var _reducers2 = _interopRequireDefault(_reducers);

	var _middlewareStorage = __webpack_require__(34);

	var _helpers = __webpack_require__(32);

	var initialState = (0, _helpers.SetupStorage)();
	var store = (0, _redux.applyMiddleware)(_middlewareStorage.StorageAPI, _middlewareStorage.RecipeLoader)(_redux.createStore)(_reducers2["default"], initialState);

	_react2["default"].render(_react2["default"].createElement(
	  _reactRedux.Provider,
	  { store: store },
	  function () {
	    return _react2["default"].createElement(_containersApp2["default"], null);
	  }
	), document.getElementById("content"));

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _createStore = __webpack_require__(3);

	var _createStore2 = _interopRequireDefault(_createStore);

	var _utilsCombineReducers = __webpack_require__(5);

	var _utilsCombineReducers2 = _interopRequireDefault(_utilsCombineReducers);

	var _utilsBindActionCreators = __webpack_require__(9);

	var _utilsBindActionCreators2 = _interopRequireDefault(_utilsBindActionCreators);

	var _utilsApplyMiddleware = __webpack_require__(10);

	var _utilsApplyMiddleware2 = _interopRequireDefault(_utilsApplyMiddleware);

	var _utilsCompose = __webpack_require__(11);

	var _utilsCompose2 = _interopRequireDefault(_utilsCompose);

	exports.createStore = _createStore2['default'];
	exports.combineReducers = _utilsCombineReducers2['default'];
	exports.bindActionCreators = _utilsBindActionCreators2['default'];
	exports.applyMiddleware = _utilsApplyMiddleware2['default'];
	exports.compose = _utilsCompose2['default'];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = createStore;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _utilsIsPlainObject = __webpack_require__(4);

	var _utilsIsPlainObject2 = _interopRequireDefault(_utilsIsPlainObject);

	/**
	 * These are private action types reserved by Redux.
	 * For any unknown actions, you must return the current state.
	 * If the current state is undefined, you must return the initial state.
	 * Do not reference these action types directly in your code.
	 */
	var ActionTypes = {
	  INIT: '@@redux/INIT'
	};

	exports.ActionTypes = ActionTypes;
	/**
	 * Creates a Redux store that holds the state tree.
	 * The only way to change the data in the store is to call `dispatch()` on it.
	 *
	 * There should only be a single store in your app. To specify how different
	 * parts of the state tree respond to actions, you may combine several reducers
	 * into a single reducer function by using `combineReducers`.
	 *
	 * @param {Function} reducer A function that returns the next state tree, given
	 * the current state tree and the action to handle.
	 *
	 * @param {any} [initialState] The initial state. You may optionally specify it
	 * to hydrate the state from the server in universal apps, or to restore a
	 * previously serialized user session.
	 * If you use `combineReducers` to produce the root reducer function, this must be
	 * an object with the same shape as `combineReducers` keys.
	 *
	 * @returns {Store} A Redux store that lets you read the state, dispatch actions
	 * and subscribe to changes.
	 */

	function createStore(reducer, initialState) {
	  if (typeof reducer !== 'function') {
	    throw new Error('Expected the reducer to be a function.');
	  }

	  var currentReducer = reducer;
	  var currentState = initialState;
	  var listeners = [];
	  var isDispatching = false;

	  /**
	   * Reads the state tree managed by the store.
	   *
	   * @returns {any} The current state tree of your application.
	   */
	  function getState() {
	    return currentState;
	  }

	  /**
	   * Adds a change listener. It will be called any time an action is dispatched,
	   * and some part of the state tree may potentially have changed. You may then
	   * call `getState()` to read the current state tree inside the callback.
	   *
	   * @param {Function} listener A callback to be invoked on every dispatch.
	   * @returns {Function} A function to remove this change listener.
	   */
	  function subscribe(listener) {
	    listeners.push(listener);

	    return function unsubscribe() {
	      var index = listeners.indexOf(listener);
	      listeners.splice(index, 1);
	    };
	  }

	  /**
	   * Dispatches an action. It is the only way to trigger a state change.
	   *
	   * The `reducer` function, used to create the store, will be called with the
	   * current state tree and the given `action`. Its return value will
	   * be considered the **next** state of the tree, and the change listeners
	   * will be notified.
	   *
	   * The base implementation only supports plain object actions. If you want to
	   * dispatch a Promise, an Observable, a thunk, or something else, you need to
	   * wrap your store creating function into the corresponding middleware. For
	   * example, see the documentation for the `redux-thunk` package. Even the
	   * middleware will eventually dispatch plain object actions using this method.
	   *
	   * @param {Object} action A plain object representing “what changed”. It is
	   * a good idea to keep actions serializable so you can record and replay user
	   * sessions, or use the time travelling `redux-devtools`. An action must have
	   * a `type` property which may not be `undefined`. It is a good idea to use
	   * string constants for action types.
	   *
	   * @returns {Object} For convenience, the same action object you dispatched.
	   *
	   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
	   * return something else (for example, a Promise you can await).
	   */
	  function dispatch(action) {
	    if (!_utilsIsPlainObject2['default'](action)) {
	      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
	    }

	    if (typeof action.type === 'undefined') {
	      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
	    }

	    if (isDispatching) {
	      throw new Error('Reducers may not dispatch actions.');
	    }

	    try {
	      isDispatching = true;
	      currentState = currentReducer(currentState, action);
	    } finally {
	      isDispatching = false;
	    }

	    listeners.slice().forEach(function (listener) {
	      return listener();
	    });
	    return action;
	  }

	  /**
	   * Replaces the reducer currently used by the store to calculate the state.
	   *
	   * You might need this if your app implements code splitting and you want to
	   * load some of the reducers dynamically. You might also need this if you
	   * implement a hot reloading mechanism for Redux.
	   *
	   * @param {Function} nextReducer The reducer for the store to use instead.
	   * @returns {void}
	   */
	  function replaceReducer(nextReducer) {
	    currentReducer = nextReducer;
	    dispatch({ type: ActionTypes.INIT });
	  }

	  // When a store is created, an "INIT" action is dispatched so that every
	  // reducer returns their initial state. This effectively populates
	  // the initial state tree.
	  dispatch({ type: ActionTypes.INIT });

	  return {
	    dispatch: dispatch,
	    subscribe: subscribe,
	    getState: getState,
	    replaceReducer: replaceReducer
	  };
	}

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = isPlainObject;
	var fnToString = function fnToString(fn) {
	  return Function.prototype.toString.call(fn);
	};

	/**
	 * @param {any} obj The object to inspect.
	 * @returns {boolean} True if the argument appears to be a plain object.
	 */

	function isPlainObject(obj) {
	  if (!obj || typeof obj !== 'object') {
	    return false;
	  }

	  var proto = typeof obj.constructor === 'function' ? Object.getPrototypeOf(obj) : Object.prototype;

	  if (proto === null) {
	    return true;
	  }

	  var constructor = proto.constructor;

	  return typeof constructor === 'function' && constructor instanceof constructor && fnToString(constructor) === fnToString(Object);
	}

	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports['default'] = combineReducers;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _createStore = __webpack_require__(3);

	var _utilsIsPlainObject = __webpack_require__(4);

	var _utilsIsPlainObject2 = _interopRequireDefault(_utilsIsPlainObject);

	var _utilsMapValues = __webpack_require__(7);

	var _utilsMapValues2 = _interopRequireDefault(_utilsMapValues);

	var _utilsPick = __webpack_require__(8);

	var _utilsPick2 = _interopRequireDefault(_utilsPick);

	/* eslint-disable no-console */

	function getUndefinedStateErrorMessage(key, action) {
	  var actionType = action && action.type;
	  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';

	  return 'Reducer "' + key + '" returned undefined handling ' + actionName + '. ' + 'To ignore an action, you must explicitly return the previous state.';
	}

	function getUnexpectedStateKeyWarningMessage(inputState, outputState, action) {
	  var reducerKeys = Object.keys(outputState);
	  var argumentName = action && action.type === _createStore.ActionTypes.INIT ? 'initialState argument passed to createStore' : 'previous state received by the reducer';

	  if (reducerKeys.length === 0) {
	    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
	  }

	  if (!_utilsIsPlainObject2['default'](inputState)) {
	    return 'The ' + argumentName + ' has unexpected type of "' + ({}).toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
	  }

	  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
	    return reducerKeys.indexOf(key) < 0;
	  });

	  if (unexpectedKeys.length > 0) {
	    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
	  }
	}

	function assertReducerSanity(reducers) {
	  Object.keys(reducers).forEach(function (key) {
	    var reducer = reducers[key];
	    var initialState = reducer(undefined, { type: _createStore.ActionTypes.INIT });

	    if (typeof initialState === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined.');
	    }

	    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
	    if (typeof reducer(undefined, { type: type }) === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + _createStore.ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined.');
	    }
	  });
	}

	/**
	 * Turns an object whose values are different reducer functions, into a single
	 * reducer function. It will call every child reducer, and gather their results
	 * into a single state object, whose keys correspond to the keys of the passed
	 * reducer functions.
	 *
	 * @param {Object} reducers An object whose values correspond to different
	 * reducer functions that need to be combined into one. One handy way to obtain
	 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
	 * undefined for any action. Instead, they should return their initial state
	 * if the state passed to them was undefined, and the current state for any
	 * unrecognized action.
	 *
	 * @returns {Function} A reducer function that invokes every reducer inside the
	 * passed object, and builds a state object with the same shape.
	 */

	function combineReducers(reducers) {
	  var finalReducers = _utilsPick2['default'](reducers, function (val) {
	    return typeof val === 'function';
	  });
	  var sanityError;

	  try {
	    assertReducerSanity(finalReducers);
	  } catch (e) {
	    sanityError = e;
	  }

	  var defaultState = _utilsMapValues2['default'](finalReducers, function () {
	    return undefined;
	  });

	  return function combination(state, action) {
	    if (state === undefined) state = defaultState;

	    if (sanityError) {
	      throw sanityError;
	    }

	    var finalState = _utilsMapValues2['default'](finalReducers, function (reducer, key) {
	      var newState = reducer(state[key], action);
	      if (typeof newState === 'undefined') {
	        var errorMessage = getUndefinedStateErrorMessage(key, action);
	        throw new Error(errorMessage);
	      }
	      return newState;
	    });

	    if (process.env.NODE_ENV !== 'production') {
	      var warningMessage = getUnexpectedStateKeyWarningMessage(state, finalState, action);
	      if (warningMessage) {
	        console.error(warningMessage);
	      }
	    }

	    return finalState;
	  };
	}

	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 6 */
/***/ function(module, exports) {

	// shim for using process in browser

	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 7 */
/***/ function(module, exports) {

	/**
	 * Applies a function to every key-value pair inside an object.
	 *
	 * @param {Object} obj The source object.
	 * @param {Function} fn The mapper function that receives the value and the key.
	 * @returns {Object} A new object that contains the mapped values for the keys.
	 */
	"use strict";

	exports.__esModule = true;
	exports["default"] = mapValues;

	function mapValues(obj, fn) {
	  return Object.keys(obj).reduce(function (result, key) {
	    result[key] = fn(obj[key], key);
	    return result;
	  }, {});
	}

	module.exports = exports["default"];

/***/ },
/* 8 */
/***/ function(module, exports) {

	/**
	 * Picks key-value pairs from an object where values satisfy a predicate.
	 *
	 * @param {Object} obj The object to pick from.
	 * @param {Function} fn The predicate the values must satisfy to be copied.
	 * @returns {Object} The object with the values that satisfied the predicate.
	 */
	"use strict";

	exports.__esModule = true;
	exports["default"] = pick;

	function pick(obj, fn) {
	  return Object.keys(obj).reduce(function (result, key) {
	    if (fn(obj[key])) {
	      result[key] = obj[key];
	    }
	    return result;
	  }, {});
	}

	module.exports = exports["default"];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = bindActionCreators;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _utilsMapValues = __webpack_require__(7);

	var _utilsMapValues2 = _interopRequireDefault(_utilsMapValues);

	function bindActionCreator(actionCreator, dispatch) {
	  return function () {
	    return dispatch(actionCreator.apply(undefined, arguments));
	  };
	}

	/**
	 * Turns an object whose values are action creators, into an object with the
	 * same keys, but with every function wrapped into a `dispatch` call so they
	 * may be invoked directly. This is just a convenience method, as you can call
	 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
	 *
	 * For convenience, you can also pass a single function as the first argument,
	 * and get a function in return.
	 *
	 * @param {Function|Object} actionCreators An object whose values are action
	 * creator functions. One handy way to obtain it is to use ES6 `import * as`
	 * syntax. You may also pass a single function.
	 *
	 * @param {Function} dispatch The `dispatch` function available on your Redux
	 * store.
	 *
	 * @returns {Function|Object} The object mimicking the original object, but with
	 * every action creator wrapped into the `dispatch` call. If you passed a
	 * function as `actionCreators`, the return value will also be a single
	 * function.
	 */

	function bindActionCreators(actionCreators, dispatch) {
	  if (typeof actionCreators === 'function') {
	    return bindActionCreator(actionCreators, dispatch);
	  }

	  if (typeof actionCreators !== 'object' || actionCreators === null || actionCreators === undefined) {
	    // eslint-disable-line no-eq-null
	    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
	  }

	  return _utilsMapValues2['default'](actionCreators, function (actionCreator) {
	    return bindActionCreator(actionCreator, dispatch);
	  });
	}

	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports['default'] = applyMiddleware;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _compose = __webpack_require__(11);

	var _compose2 = _interopRequireDefault(_compose);

	/**
	 * Creates a store enhancer that applies middleware to the dispatch method
	 * of the Redux store. This is handy for a variety of tasks, such as expressing
	 * asynchronous actions in a concise manner, or logging every action payload.
	 *
	 * See `redux-thunk` package as an example of the Redux middleware.
	 *
	 * Because middleware is potentially asynchronous, this should be the first
	 * store enhancer in the composition chain.
	 *
	 * Note that each middleware will be given the `dispatch` and `getState` functions
	 * as named arguments.
	 *
	 * @param {...Function} middlewares The middleware chain to be applied.
	 * @returns {Function} A store enhancer applying the middleware.
	 */

	function applyMiddleware() {
	  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
	    middlewares[_key] = arguments[_key];
	  }

	  return function (next) {
	    return function (reducer, initialState) {
	      var store = next(reducer, initialState);
	      var _dispatch = store.dispatch;
	      var chain = [];

	      var middlewareAPI = {
	        getState: store.getState,
	        dispatch: function dispatch(action) {
	          return _dispatch(action);
	        }
	      };
	      chain = middlewares.map(function (middleware) {
	        return middleware(middlewareAPI);
	      });
	      _dispatch = _compose2['default'].apply(undefined, chain)(store.dispatch);

	      return _extends({}, store, {
	        dispatch: _dispatch
	      });
	    };
	  };
	}

	module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports) {

	/**
	 * Composes single-argument functions from right to left.
	 *
	 * @param {...Function} funcs The functions to compose.
	 * @returns {Function} A function obtained by composing functions from right to
	 * left. For example, compose(f, g, h) is identical to arg => f(g(h(arg))).
	 */
	"use strict";

	exports.__esModule = true;
	exports["default"] = compose;

	function compose() {
	  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }

	  return function (arg) {
	    return funcs.reduceRight(function (composed, f) {
	      return f(composed);
	    }, arg);
	  };
	}

	module.exports = exports["default"];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _componentsCreateAll = __webpack_require__(13);

	var _componentsCreateAll2 = _interopRequireDefault(_componentsCreateAll);

	var _createAll = _componentsCreateAll2['default'](_react2['default']);

	var Provider = _createAll.Provider;
	var connect = _createAll.connect;
	exports.Provider = Provider;
	exports.connect = connect;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = createAll;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _createProvider = __webpack_require__(14);

	var _createProvider2 = _interopRequireDefault(_createProvider);

	var _createConnect = __webpack_require__(16);

	var _createConnect2 = _interopRequireDefault(_createConnect);

	function createAll(React) {
	  var Provider = _createProvider2['default'](React);
	  var connect = _createConnect2['default'](React);

	  return { Provider: Provider, connect: connect };
	}

	module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = createProvider;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _utilsCreateStoreShape = __webpack_require__(15);

	var _utilsCreateStoreShape2 = _interopRequireDefault(_utilsCreateStoreShape);

	function isUsingOwnerContext(React) {
	  var version = React.version;

	  if (typeof version !== 'string') {
	    return true;
	  }

	  var sections = version.split('.');
	  var major = parseInt(sections[0], 10);
	  var minor = parseInt(sections[1], 10);

	  return major === 0 && minor === 13;
	}

	function createProvider(React) {
	  var Component = React.Component;
	  var PropTypes = React.PropTypes;
	  var Children = React.Children;

	  var storeShape = _utilsCreateStoreShape2['default'](PropTypes);
	  var requireFunctionChild = isUsingOwnerContext(React);

	  var didWarnAboutChild = false;
	  function warnAboutFunctionChild() {
	    if (didWarnAboutChild || requireFunctionChild) {
	      return;
	    }

	    didWarnAboutChild = true;
	    console.error( // eslint-disable-line no-console
	    'With React 0.14 and later versions, you no longer need to ' + 'wrap <Provider> child into a function.');
	  }
	  function warnAboutElementChild() {
	    if (didWarnAboutChild || !requireFunctionChild) {
	      return;
	    }

	    didWarnAboutChild = true;
	    console.error( // eslint-disable-line no-console
	    'With React 0.13, you need to ' + 'wrap <Provider> child into a function. ' + 'This restriction will be removed with React 0.14.');
	  }

	  var didWarnAboutReceivingStore = false;
	  function warnAboutReceivingStore() {
	    if (didWarnAboutReceivingStore) {
	      return;
	    }

	    didWarnAboutReceivingStore = true;
	    console.error( // eslint-disable-line no-console
	    '<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/rackt/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
	  }

	  var Provider = (function (_Component) {
	    _inherits(Provider, _Component);

	    Provider.prototype.getChildContext = function getChildContext() {
	      return { store: this.store };
	    };

	    function Provider(props, context) {
	      _classCallCheck(this, Provider);

	      _Component.call(this, props, context);
	      this.store = props.store;
	    }

	    Provider.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	      var store = this.store;
	      var nextStore = nextProps.store;

	      if (store !== nextStore) {
	        warnAboutReceivingStore();
	      }
	    };

	    Provider.prototype.render = function render() {
	      var children = this.props.children;

	      if (typeof children === 'function') {
	        warnAboutFunctionChild();
	        children = children();
	      } else {
	        warnAboutElementChild();
	      }

	      return Children.only(children);
	    };

	    return Provider;
	  })(Component);

	  Provider.childContextTypes = {
	    store: storeShape.isRequired
	  };
	  Provider.propTypes = {
	    store: storeShape.isRequired,
	    children: (requireFunctionChild ? PropTypes.func : PropTypes.element).isRequired
	  };

	  return Provider;
	}

	module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = createStoreShape;

	function createStoreShape(PropTypes) {
	  return PropTypes.shape({
	    subscribe: PropTypes.func.isRequired,
	    dispatch: PropTypes.func.isRequired,
	    getState: PropTypes.func.isRequired
	  });
	}

	module.exports = exports["default"];

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports['default'] = createConnect;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _utilsCreateStoreShape = __webpack_require__(15);

	var _utilsCreateStoreShape2 = _interopRequireDefault(_utilsCreateStoreShape);

	var _utilsShallowEqual = __webpack_require__(17);

	var _utilsShallowEqual2 = _interopRequireDefault(_utilsShallowEqual);

	var _utilsIsPlainObject = __webpack_require__(18);

	var _utilsIsPlainObject2 = _interopRequireDefault(_utilsIsPlainObject);

	var _utilsWrapActionCreators = __webpack_require__(19);

	var _utilsWrapActionCreators2 = _interopRequireDefault(_utilsWrapActionCreators);

	var _hoistNonReactStatics = __webpack_require__(20);

	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

	var _invariant = __webpack_require__(21);

	var _invariant2 = _interopRequireDefault(_invariant);

	var defaultMapStateToProps = function defaultMapStateToProps() {
	  return {};
	};
	var defaultMapDispatchToProps = function defaultMapDispatchToProps(dispatch) {
	  return { dispatch: dispatch };
	};
	var defaultMergeProps = function defaultMergeProps(stateProps, dispatchProps, parentProps) {
	  return _extends({}, parentProps, stateProps, dispatchProps);
	};

	function getDisplayName(Component) {
	  return Component.displayName || Component.name || 'Component';
	}

	// Helps track hot reloading.
	var nextVersion = 0;

	function createConnect(React) {
	  var Component = React.Component;
	  var PropTypes = React.PropTypes;

	  var storeShape = _utilsCreateStoreShape2['default'](PropTypes);

	  return function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
	    var options = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

	    var shouldSubscribe = Boolean(mapStateToProps);
	    var finalMapStateToProps = mapStateToProps || defaultMapStateToProps;
	    var finalMapDispatchToProps = _utilsIsPlainObject2['default'](mapDispatchToProps) ? _utilsWrapActionCreators2['default'](mapDispatchToProps) : mapDispatchToProps || defaultMapDispatchToProps;
	    var finalMergeProps = mergeProps || defaultMergeProps;
	    var shouldUpdateStateProps = finalMapStateToProps.length > 1;
	    var shouldUpdateDispatchProps = finalMapDispatchToProps.length > 1;
	    var _options$pure = options.pure;
	    var pure = _options$pure === undefined ? true : _options$pure;

	    // Helps track hot reloading.
	    var version = nextVersion++;

	    function computeStateProps(store, props) {
	      var state = store.getState();
	      var stateProps = shouldUpdateStateProps ? finalMapStateToProps(state, props) : finalMapStateToProps(state);

	      _invariant2['default'](_utilsIsPlainObject2['default'](stateProps), '`mapStateToProps` must return an object. Instead received %s.', stateProps);
	      return stateProps;
	    }

	    function computeDispatchProps(store, props) {
	      var dispatch = store.dispatch;

	      var dispatchProps = shouldUpdateDispatchProps ? finalMapDispatchToProps(dispatch, props) : finalMapDispatchToProps(dispatch);

	      _invariant2['default'](_utilsIsPlainObject2['default'](dispatchProps), '`mapDispatchToProps` must return an object. Instead received %s.', dispatchProps);
	      return dispatchProps;
	    }

	    function _computeNextState(stateProps, dispatchProps, parentProps) {
	      var mergedProps = finalMergeProps(stateProps, dispatchProps, parentProps);
	      _invariant2['default'](_utilsIsPlainObject2['default'](mergedProps), '`mergeProps` must return an object. Instead received %s.', mergedProps);
	      return mergedProps;
	    }

	    return function wrapWithConnect(WrappedComponent) {
	      var Connect = (function (_Component) {
	        _inherits(Connect, _Component);

	        Connect.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
	          if (!pure) {
	            this.updateStateProps(nextProps);
	            this.updateDispatchProps(nextProps);
	            this.updateState(nextProps);
	            return true;
	          }

	          var storeChanged = nextState.storeState !== this.state.storeState;
	          var propsChanged = !_utilsShallowEqual2['default'](nextProps, this.props);
	          var mapStateProducedChange = false;
	          var dispatchPropsChanged = false;

	          if (storeChanged || propsChanged && shouldUpdateStateProps) {
	            mapStateProducedChange = this.updateStateProps(nextProps);
	          }

	          if (propsChanged && shouldUpdateDispatchProps) {
	            dispatchPropsChanged = this.updateDispatchProps(nextProps);
	          }

	          if (propsChanged || mapStateProducedChange || dispatchPropsChanged) {
	            this.updateState(nextProps);
	            return true;
	          }

	          return false;
	        };

	        function Connect(props, context) {
	          _classCallCheck(this, Connect);

	          _Component.call(this, props, context);
	          this.version = version;
	          this.store = props.store || context.store;

	          _invariant2['default'](this.store, 'Could not find "store" in either the context or ' + ('props of "' + this.constructor.displayName + '". ') + 'Either wrap the root component in a <Provider>, ' + ('or explicitly pass "store" as a prop to "' + this.constructor.displayName + '".'));

	          this.stateProps = computeStateProps(this.store, props);
	          this.dispatchProps = computeDispatchProps(this.store, props);
	          this.state = { storeState: null };
	          this.updateState();
	        }

	        Connect.prototype.computeNextState = function computeNextState() {
	          var props = arguments.length <= 0 || arguments[0] === undefined ? this.props : arguments[0];

	          return _computeNextState(this.stateProps, this.dispatchProps, props);
	        };

	        Connect.prototype.updateStateProps = function updateStateProps() {
	          var props = arguments.length <= 0 || arguments[0] === undefined ? this.props : arguments[0];

	          var nextStateProps = computeStateProps(this.store, props);
	          if (_utilsShallowEqual2['default'](nextStateProps, this.stateProps)) {
	            return false;
	          }

	          this.stateProps = nextStateProps;
	          return true;
	        };

	        Connect.prototype.updateDispatchProps = function updateDispatchProps() {
	          var props = arguments.length <= 0 || arguments[0] === undefined ? this.props : arguments[0];

	          var nextDispatchProps = computeDispatchProps(this.store, props);
	          if (_utilsShallowEqual2['default'](nextDispatchProps, this.dispatchProps)) {
	            return false;
	          }

	          this.dispatchProps = nextDispatchProps;
	          return true;
	        };

	        Connect.prototype.updateState = function updateState() {
	          var props = arguments.length <= 0 || arguments[0] === undefined ? this.props : arguments[0];

	          this.nextState = this.computeNextState(props);
	        };

	        Connect.prototype.isSubscribed = function isSubscribed() {
	          return typeof this.unsubscribe === 'function';
	        };

	        Connect.prototype.trySubscribe = function trySubscribe() {
	          if (shouldSubscribe && !this.unsubscribe) {
	            this.unsubscribe = this.store.subscribe(this.handleChange.bind(this));
	            this.handleChange();
	          }
	        };

	        Connect.prototype.tryUnsubscribe = function tryUnsubscribe() {
	          if (this.unsubscribe) {
	            this.unsubscribe();
	            this.unsubscribe = null;
	          }
	        };

	        Connect.prototype.componentDidMount = function componentDidMount() {
	          this.trySubscribe();
	        };

	        Connect.prototype.componentWillUnmount = function componentWillUnmount() {
	          this.tryUnsubscribe();
	        };

	        Connect.prototype.handleChange = function handleChange() {
	          if (!this.unsubscribe) {
	            return;
	          }

	          this.setState({
	            storeState: this.store.getState()
	          });
	        };

	        Connect.prototype.getWrappedInstance = function getWrappedInstance() {
	          return this.refs.wrappedInstance;
	        };

	        Connect.prototype.render = function render() {
	          return React.createElement(WrappedComponent, _extends({ ref: 'wrappedInstance'
	          }, this.nextState));
	        };

	        return Connect;
	      })(Component);

	      Connect.displayName = 'Connect(' + getDisplayName(WrappedComponent) + ')';
	      Connect.WrappedComponent = WrappedComponent;
	      Connect.contextTypes = {
	        store: storeShape
	      };
	      Connect.propTypes = {
	        store: storeShape
	      };

	      if (process.env.NODE_ENV !== 'production') {
	        Connect.prototype.componentWillUpdate = function componentWillUpdate() {
	          if (this.version === version) {
	            return;
	          }

	          // We are hot reloading!
	          this.version = version;

	          // Update the state and bindings.
	          this.trySubscribe();
	          this.updateStateProps();
	          this.updateDispatchProps();
	          this.updateState();
	        };
	      }

	      return _hoistNonReactStatics2['default'](Connect, WrappedComponent);
	    };
	  };
	}

	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 17 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = shallowEqual;

	function shallowEqual(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }

	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);

	  if (keysA.length !== keysB.length) {
	    return false;
	  }

	  // Test for A's keys different from B.
	  var hasOwn = Object.prototype.hasOwnProperty;
	  for (var i = 0; i < keysA.length; i++) {
	    if (!hasOwn.call(objB, keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
	      return false;
	    }
	  }

	  return true;
	}

	module.exports = exports["default"];

/***/ },
/* 18 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = isPlainObject;
	var fnToString = function fnToString(fn) {
	  return Function.prototype.toString.call(fn);
	};

	/**
	 * @param {any} obj The object to inspect.
	 * @returns {boolean} True if the argument appears to be a plain object.
	 */

	function isPlainObject(obj) {
	  if (!obj || typeof obj !== 'object') {
	    return false;
	  }

	  var proto = typeof obj.constructor === 'function' ? Object.getPrototypeOf(obj) : Object.prototype;

	  if (proto === null) {
	    return true;
	  }

	  var constructor = proto.constructor;

	  return typeof constructor === 'function' && constructor instanceof constructor && fnToString(constructor) === fnToString(Object);
	}

	module.exports = exports['default'];

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = wrapActionCreators;

	var _redux = __webpack_require__(2);

	function wrapActionCreators(actionCreators) {
	  return function (dispatch) {
	    return _redux.bindActionCreators(actionCreators, dispatch);
	  };
	}

	module.exports = exports['default'];

/***/ },
/* 20 */
/***/ function(module, exports) {

	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
	'use strict';

	var REACT_STATICS = {
	    childContextTypes: true,
	    contextTypes: true,
	    defaultProps: true,
	    displayName: true,
	    getDefaultProps: true,
	    mixins: true,
	    propTypes: true,
	    type: true
	};

	var KNOWN_STATICS = {
	    name: true,
	    length: true,
	    prototype: true,
	    caller: true,
	    arguments: true,
	    arity: true
	};

	module.exports = function hoistNonReactStatics(targetComponent, sourceComponent) {
	    var keys = Object.getOwnPropertyNames(sourceComponent);
	    for (var i=0; i<keys.length; ++i) {
	        if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]]) {
	            targetComponent[keys[i]] = sourceComponent[keys[i]];
	        }
	    }

	    return targetComponent;
	};


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule invariant
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var invariant = function(condition, format, a, b, c, d, e, f) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        'Invariant Violation: ' +
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};

	module.exports = invariant;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _redux = __webpack_require__(2);

	var _reactRedux = __webpack_require__(12);

	var _componentsAnnotater = __webpack_require__(23);

	var _componentsAnnotater2 = _interopRequireDefault(_componentsAnnotater);

	var _componentsRecipemenu = __webpack_require__(29);

	var _componentsRecipemenu2 = _interopRequireDefault(_componentsRecipemenu);

	var _actions = __webpack_require__(30);

	var RecipeActions = _interopRequireWildcard(_actions);

	var App = _react2["default"].createClass({
	  displayName: "App",

	  propTypes: {
	    recipe: _react2["default"].PropTypes.object.isRequired,
	    savedRecipes: _react2["default"].PropTypes.array.isRequired,
	    dispatch: _react2["default"].PropTypes.func.isRequired
	  },
	  render: function render() {
	    var _props = this.props;
	    var recipe = _props.recipe;
	    var savedRecipes = _props.savedRecipes;
	    var dispatch = _props.dispatch;

	    var actions = (0, _redux.bindActionCreators)(RecipeActions, dispatch);
	    return _react2["default"].createElement(
	      "div",
	      null,
	      _react2["default"].createElement(
	        "header",
	        null,
	        _react2["default"].createElement(
	          "h1",
	          null,
	          "Annotated Meals"
	        ),
	        _react2["default"].createElement(
	          "p",
	          null,
	          "Quickly write down the ingredients and instructions for a recipe. When you are done you can print the recipe and a simple version showing only the name, link, and list of ingredients and instructions will be printed. For a quick test, try pasting this link ",
	          _react2["default"].createElement(
	            "strong",
	            null,
	            "https://www.youtube.com/watch?v=bjmYkPkjnVo"
	          ),
	          " into the Url input below."
	        )
	      ),
	      _react2["default"].createElement(_componentsRecipemenu2["default"], { actions: actions,
	        savedRecipes: savedRecipes }),
	      _react2["default"].createElement(_componentsAnnotater2["default"], _extends({ actions: actions
	      }, recipe)),
	      this.props.children
	    );
	  }
	});

	function mapStateToProps(state) {
	  return {
	    recipe: state.recipe,
	    savedRecipes: state.savedRecipes
	  };
	}

	exports["default"] = (0, _reactRedux.connect)(mapStateToProps)(App);
	module.exports = exports["default"];

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _liveeditor = __webpack_require__(24);

	var _liveeditor2 = _interopRequireDefault(_liveeditor);

	var _recipe = __webpack_require__(25);

	var _recipe2 = _interopRequireDefault(_recipe);

	var _video = __webpack_require__(28);

	var _video2 = _interopRequireDefault(_video);

	exports["default"] = _react2["default"].createClass({
	  displayName: "annotater",

	  render: function render() {
	    return _react2["default"].createElement(
	      "div",
	      { className: "annotater" },
	      _react2["default"].createElement(
	        "div",
	        { className: "edit-view" },
	        _react2["default"].createElement(_video2["default"], { ytID: this.props.ytID }),
	        _react2["default"].createElement(_liveeditor2["default"], _extends({ actions: this.props.actions,
	          submit: this.submit
	        }, this.props))
	      ),
	      _react2["default"].createElement(
	        "div",
	        { className: "print-view" },
	        _react2["default"].createElement(_recipe2["default"], this.props)
	      )
	    );
	  }
	});
	module.exports = exports["default"];

/***/ },
/* 24 */
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
	  displayName: "liveeditor",

	  getDefaultProps: function getDefaultProps() {
	    return {
	      name: "",
	      url: "",
	      ytID: "",
	      ingredients: [],
	      instructions: []
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      name: "",
	      url: "",
	      ingredients: [],
	      instructions: []
	    };
	  },
	  submit: function submit(name, value) {
	    switch (name) {
	      case "name":
	        this.props.actions.setName(value);
	        break;
	      case "url":
	        this.props.actions.setVideoID(value);
	        break;
	      case "ingredients":
	        value = value.split("\n").filter(function (line) {
	          return line !== "";
	        });
	        this.props.actions.setIngredients(value);
	        break;
	      case "instructions":
	        value = value.split("\n").filter(function (line) {
	          return line !== "";
	        });
	        this.props.actions.setInstructions(value);
	        break;
	    }
	    this.setState(_defineProperty({}, name, value));
	  },
	  save: function save(event) {
	    event.preventDefault();
	    this.props.actions.saveRecipe({
	      name: this.props.name,
	      url: this.props.url,
	      ytID: this.props.ytID,
	      ingredients: this.props.ingredients,
	      instructions: this.props.instructions
	    });
	  },
	  render: function render() {
	    var _this = this;

	    return _react2["default"].createElement(
	      "div",
	      { className: "live-editor" },
	      _react2["default"].createElement(
	        "p",
	        null,
	        _react2["default"].createElement(
	          "button",
	          { onClick: this.save },
	          "Save"
	        ),
	        _react2["default"].createElement(
	          "button",
	          { onClick: function () {
	              return _this.props.actions.resetRecipe();
	            } },
	          "Reset"
	        )
	      ),
	      _react2["default"].createElement(UserInput, { name: "name",
	        submit: this.submit,
	        value: this.props.name }),
	      _react2["default"].createElement(UserInput, { name: "url",
	        submit: this.submit,
	        value: this.props.url }),
	      _react2["default"].createElement(UserTextarea, { name: "ingredients",
	        submit: this.submit,
	        value: this.props.ingredients.join("\n") }),
	      _react2["default"].createElement(UserTextarea, { name: "instructions",
	        submit: this.submit,
	        value: this.props.instructions.join("\n") })
	    );
	  }
	});

	var UserInput = _react2["default"].createClass({
	  displayName: "UserInput",

	  getInitialState: function getInitialState() {
	    return {
	      value: this.props.value || ""
	    };
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    this.setState({
	      value: nextProps.value
	    });
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
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    this.setState({
	      value: nextProps.value
	    });
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
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _ingredients = __webpack_require__(26);

	var _ingredients2 = _interopRequireDefault(_ingredients);

	var _instructions = __webpack_require__(27);

	var _instructions2 = _interopRequireDefault(_instructions);

	exports["default"] = _react2["default"].createClass({
	  displayName: "recipe",

	  propTypes: {
	    name: _react2["default"].PropTypes.string.isRequired,
	    ytID: _react2["default"].PropTypes.string.isRequired,
	    ingredients: _react2["default"].PropTypes.array.isRequired,
	    instructions: _react2["default"].PropTypes.array.isRequired
	  },
	  getDefaultProps: function getDefaultProps() {
	    return {
	      name: "",
	      ytID: "",
	      ingredients: [],
	      instructions: []
	    };
	  },
	  render: function render() {
	    var ingredients = this.props.ingredients;
	    var instructions = this.props.instructions;
	    var url = this.props.ytID !== "" ? "https://youtu.be/" + this.props.ytID : null;
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
	        url
	      ),
	      _react2["default"].createElement(_ingredients2["default"], { ingredients: ingredients }),
	      _react2["default"].createElement(_instructions2["default"], { instructions: instructions })
	    );
	  }
	});
	module.exports = exports["default"];

/***/ },
/* 26 */
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
/* 27 */
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

/***/ },
/* 28 */
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
	    ytID: _react2["default"].PropTypes.string.isRequired
	  },
	  shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
	    return nextProps.ytID !== this.props.ytID;
	  },
	  render: function render() {
	    var url = "https://www.youtube.com/embed/" + this.props.ytID;
	    var iframe = this.props.ytID === "" ? null : _react2["default"].createElement("iframe", { width: "560", height: "315", src: url, frameBorder: "0" });
	    return _react2["default"].createElement(
	      "div",
	      { className: "yt" },
	      iframe
	    );
	  }
	});
	module.exports = exports["default"];

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var AddARecipe = _react2["default"].createClass({
	  displayName: "AddARecipe",

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
	  handleSubmit: function handleSubmit(event) {
	    if (event.which === 13) {
	      this.props.onSubmit(event.target.value);
	    }
	  },
	  render: function render() {
	    return _react2["default"].createElement(
	      "div",
	      null,
	      _react2["default"].createElement(
	        "p",
	        null,
	        "Add A Recipe"
	      ),
	      _react2["default"].createElement("input", { type: "text",
	        onChange: this.handleChange,
	        onKeyDown: this.handleSubmit })
	    );
	  }
	});

	var Thumbnail = _react2["default"].createClass({
	  displayName: "Thumbnail",

	  shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
	    return nextProps.ytID !== this.props.ytID || nextProps.name !== this.props.name || nextProps.index !== this.props.index;
	  },
	  handleDelete: function handleDelete(event) {
	    event.stopPropagation();
	    this.props.actions.deleteRecipe(this.props.index);
	  },
	  handleClick: function handleClick(event) {
	    this.props.actions.loadRecipe(this.props.index);
	  },
	  render: function render() {
	    var _props = this.props;
	    var ytID = _props.ytID;
	    var name = _props.name;
	    var index = _props.index;
	    var _props$actions = this.props.actions;
	    var loadRecipe = _props$actions.loadRecipe;
	    var deleteRecipe = _props$actions.deleteRecipe;

	    var src = "https://i.ytimg.com/vi/" + this.props.ytID + "/mqdefault.jpg";
	    var thumb = this.props.ytID === "" ? _react2["default"].createElement(
	      "div",
	      { className: "empty-thumb" },
	      "?"
	    ) : _react2["default"].createElement("img", { src: src });
	    return _react2["default"].createElement(
	      "li",
	      { className: "thumbnail", onClick: this.handleClick },
	      _react2["default"].createElement(
	        "div",
	        null,
	        thumb
	      ),
	      _react2["default"].createElement(
	        "div",
	        { className: "thumb-info" },
	        name
	      ),
	      _react2["default"].createElement(
	        "div",
	        { className: "thumb-controls" },
	        _react2["default"].createElement(
	          "button",
	          { title: "delete recipe",
	            onClick: this.handleDelete },
	          String.fromCharCode(215)
	        )
	      )
	    );
	  }
	});

	exports["default"] = _react2["default"].createClass({
	  displayName: "recipemenu",

	  propTypes: {
	    savedRecipes: _react2["default"].PropTypes.array.isRequired
	  },
	  render: function render() {
	    var _this = this;

	    var recipes = this.props.savedRecipes.map(function (r, i) {
	      return _react2["default"].createElement(Thumbnail, _extends({ key: i,
	        index: i,
	        actions: _this.props.actions
	      }, r));
	    }, this);
	    // not including this yet
	    //<AddARecipe onSubmit={this.props.actions.makeRecipe} />
	    return _react2["default"].createElement(
	      "div",
	      { className: "recipe-menu" },
	      "Saved Recipes:",
	      _react2["default"].createElement(
	        "ul",
	        { className: "saved-recipes" },
	        recipes
	      )
	    );
	  }
	});
	module.exports = exports["default"];

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.setName = setName;
	exports.setVideoID = setVideoID;
	exports.setIngredients = setIngredients;
	exports.setInstructions = setInstructions;
	exports.resetRecipe = resetRecipe;
	exports.saveRecipe = saveRecipe;
	exports.loadRecipe = loadRecipe;
	exports.deleteRecipe = deleteRecipe;
	exports.makeRecipe = makeRecipe;

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

	var _constantsActionTypes = __webpack_require__(31);

	var types = _interopRequireWildcard(_constantsActionTypes);

	var _helpers = __webpack_require__(32);

	function setName(name) {
	  return {
	    type: types.SET_NAME,
	    name: name
	  };
	}

	function setVideoID(url) {
	  return {
	    type: types.SET_URL,
	    url: url,
	    ytID: (0, _helpers.VideoID)(url)
	  };
	}

	function setIngredients(ingredients) {
	  return {
	    type: types.SET_INGREDIENTS,
	    ingredients: ingredients
	  };
	}

	function setInstructions(instructions) {
	  return {
	    type: types.SET_INSTRUCTIONS,
	    instructions: instructions
	  };
	}

	function resetRecipe() {
	  return {
	    type: types.RESET_RECIPE
	  };
	}

	function saveRecipe(recipe) {
	  return {
	    type: types.SAVE_RECIPE,
	    recipe: recipe
	  };
	}

	function loadRecipe(index) {
	  return {
	    type: types.LOAD_RECIPE,
	    index: index
	  };
	}

	function deleteRecipe(index) {
	  return {
	    type: types.DELETE_RECIPE,
	    index: index
	  };
	}

	function makeRecipe(url) {
	  return {
	    type: types.MAKE_RECIPE,
	    url: url
	  };
	}

/***/ },
/* 31 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var SET_NAME = "SET_NAME";
	exports.SET_NAME = SET_NAME;
	var SET_URL = "SET_URL";
	exports.SET_URL = SET_URL;
	var SET_INGREDIENTS = "SET_INGREDIENTS";
	exports.SET_INGREDIENTS = SET_INGREDIENTS;
	var SET_INSTRUCTIONS = "SET_INSTRUCTIONS";
	exports.SET_INSTRUCTIONS = SET_INSTRUCTIONS;
	var RESET_RECIPE = "RESET_RECIPE";
	exports.RESET_RECIPE = RESET_RECIPE;
	var SAVE_RECIPE = "SAVE_RECIPE";
	exports.SAVE_RECIPE = SAVE_RECIPE;
	var LOAD_RECIPE = "LOAD_RECIPE";
	exports.LOAD_RECIPE = LOAD_RECIPE;
	var DELETE_RECIPE = "DELETE_RECIPE";
	exports.DELETE_RECIPE = DELETE_RECIPE;
	var MAKE_RECIPE = "MAKE_RECIPE";
	exports.MAKE_RECIPE = MAKE_RECIPE;

/***/ },
/* 32 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SetupStorage = SetupStorage;
	exports.VideoID = VideoID;

	function SetupStorage() {
	  var storedRecipes = localStorage.getItem("recipes");
	  if (storedRecipes === null) {
	    storedRecipes = "[]";
	    localStorage.setItem("recipes", "[]");
	  }
	  return {
	    recipe: {
	      name: "",
	      ytID: "",
	      url: "",
	      ingredients: [],
	      instructions: []
	    },
	    savedRecipes: JSON.parse(storedRecipes)
	  };
	}

	function VideoID(url) {
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

	  return id;
	}

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

	var _constantsActionTypes = __webpack_require__(31);

	var types = _interopRequireWildcard(_constantsActionTypes);

	var _redux = __webpack_require__(2);

	var initialState = {
	  recipe: {
	    name: "",
	    ytID: "",
	    url: "",
	    ingredients: [],
	    instructions: []
	  },
	  savedRecipes: []
	};

	function recipe(state, action) {
	  if (state === undefined) state = {
	    name: "",
	    ytID: "",
	    url: "",
	    ingredients: [],
	    instructions: []
	  };

	  switch (action.type) {
	    case types.SET_NAME:
	      return Object.assign({}, state, {
	        name: action.name
	      });
	    case types.SET_URL:
	      return Object.assign({}, state, {
	        url: action.url,
	        ytID: action.ytID
	      });
	    case types.SET_INGREDIENTS:
	      return Object.assign({}, state, {
	        ingredients: action.ingredients
	      });
	    case types.SET_INSTRUCTIONS:
	      return Object.assign({}, state, {
	        instructions: action.instructions
	      });
	    case types.LOAD_RECIPE:
	      return Object.assign({}, state, action.recipe);
	    case types.RESET_RECIPE:
	      return Object.assign({}, state, {
	        name: "",
	        url: "",
	        ytID: "",
	        ingredients: [],
	        instructions: []
	      });
	    default:
	      return state;
	  }
	}

	function savedRecipes(state, action) {
	  if (state === undefined) state = [];

	  switch (action.type) {
	    case types.SAVE_RECIPE:
	      // the middleware will take the action.recipe and either append it to the array
	      // if it doesn't already exist, or replace the existing version (based on ytID)
	      return action.recipes;
	    case types.DELETE_RECIPE:
	      return action.recipes;
	    default:
	      return state;
	  }
	}

	var recipeApp = (0, _redux.combineReducers)({
	  recipe: recipe,
	  savedRecipes: savedRecipes
	});

	exports["default"] = recipeApp;
	module.exports = exports["default"];

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

	var _constantsActionTypes = __webpack_require__(31);

	var ActionTypes = _interopRequireWildcard(_constantsActionTypes);

	function saveRecipes(recipes) {
	  localStorage.setItem("recipes", JSON.stringify(recipes));
	}

	function recipeIndex(ytID, recipes) {
	  var index = -1;
	  for (var i = 0; i < recipes.length; i++) {
	    if (recipes[i].ytID === ytID) {
	      index = i;
	      break;
	    }
	  }
	  return index;
	}

	/*
	 * add the recipe to localStorage using the id of the youtube video. If there is already
	 * a stored recipe with the same youtube video id, replace the existing one with the new one
	 */
	var StorageAPI = function StorageAPI(store) {
	  return function (next) {
	    return function (action) {
	      switch (action.type) {
	        case ActionTypes.SAVE_RECIPE:
	          if (action.recipe.ytID !== "") {
	            var storedRecipes = store.getState().savedRecipes.slice();
	            var index = recipeIndex(action.recipe.ytID, storedRecipes);
	            if (index !== -1) {
	              storedRecipes[index] = action.recipe;
	            } else {
	              storedRecipes.push(action.recipe);
	            }
	            action.recipes = storedRecipes;
	            saveRecipes(storedRecipes);
	          }
	          break;
	        case ActionTypes.DELETE_RECIPE:
	          var savedRecipes = store.getState().savedRecipes.slice();
	          savedRecipes.splice(action.index, 1);
	          action.recipes = savedRecipes;
	          saveRecipes(savedRecipes);
	          break;
	      }
	      return next(action);
	    };
	  };
	};

	exports.StorageAPI = StorageAPI;
	var RecipeLoader = function RecipeLoader(store) {
	  return function (next) {
	    return function (action) {
	      if (action.type === ActionTypes.LOAD_RECIPE) {
	        var state = store.getState();
	        var recipe = state.savedRecipes[action.index];
	        if (recipe) {
	          action.recipe = recipe;
	        }
	      }
	      return next(action);
	    };
	  };
	};
	exports.RecipeLoader = RecipeLoader;

/***/ }
/******/ ]);