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

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _redux = __webpack_require__(3);

	var _reactRedux = __webpack_require__(13);

	var _reducers = __webpack_require__(22);

	var _reducers2 = _interopRequireDefault(_reducers);

	var _HackerNews = __webpack_require__(26);

	var _HackerNews2 = _interopRequireDefault(_HackerNews);

	var _pageType = __webpack_require__(38);

	var _pageType2 = _interopRequireDefault(_pageType);

	var _pages = __webpack_require__(39);

	var _chrome = __webpack_require__(34);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var type = (0, _pageType2.default)();
	var page = undefined;
	switch (type) {
	  case "submission":
	    render(type, (0, _pages.storyPage)());
	    break;
	  case "comments":
	    render(type, (0, _pages.commentsPage)());
	    break;
	}

	function render(type, page) {
	  // fontawesome
	  var style = document.createElement("link");
	  style.rel = "stylesheet";
	  style.href = "https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css";
	  document.head.appendChild(style);

	  var holder = document.createElement("div");
	  holder.classList.add("hn-react");
	  document.body.appendChild(holder);

	  (0, _chrome.getStorage)(function (storage) {
	    var initialState = {
	      type: type,
	      page: page,
	      moddedVisible: false,
	      modded: storage
	    };
	    var store = (0, _redux.createStore)(_reducers2.default, initialState);

	    _reactDom2.default.render(_react2.default.createElement(
	      _reactRedux.Provider,
	      { store: store },
	      _react2.default.createElement(_HackerNews2.default, null)
	    ), holder);
	  });
	}

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _createStore = __webpack_require__(4);

	var _createStore2 = _interopRequireDefault(_createStore);

	var _utilsCombineReducers = __webpack_require__(6);

	var _utilsCombineReducers2 = _interopRequireDefault(_utilsCombineReducers);

	var _utilsBindActionCreators = __webpack_require__(10);

	var _utilsBindActionCreators2 = _interopRequireDefault(_utilsBindActionCreators);

	var _utilsApplyMiddleware = __webpack_require__(11);

	var _utilsApplyMiddleware2 = _interopRequireDefault(_utilsApplyMiddleware);

	var _utilsCompose = __webpack_require__(12);

	var _utilsCompose2 = _interopRequireDefault(_utilsCompose);

	exports.createStore = _createStore2['default'];
	exports.combineReducers = _utilsCombineReducers2['default'];
	exports.bindActionCreators = _utilsBindActionCreators2['default'];
	exports.applyMiddleware = _utilsApplyMiddleware2['default'];
	exports.compose = _utilsCompose2['default'];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = createStore;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _utilsIsPlainObject = __webpack_require__(5);

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
	    var isSubscribed = true;

	    return function unsubscribe() {
	      if (!isSubscribed) {
	        return;
	      }

	      isSubscribed = false;
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
/* 5 */
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
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports['default'] = combineReducers;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _createStore = __webpack_require__(4);

	var _utilsIsPlainObject = __webpack_require__(5);

	var _utilsIsPlainObject2 = _interopRequireDefault(_utilsIsPlainObject);

	var _utilsMapValues = __webpack_require__(8);

	var _utilsMapValues2 = _interopRequireDefault(_utilsMapValues);

	var _utilsPick = __webpack_require__(9);

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

	    var hasChanged = false;
	    var finalState = _utilsMapValues2['default'](finalReducers, function (reducer, key) {
	      var previousStateForKey = state[key];
	      var nextStateForKey = reducer(previousStateForKey, action);
	      if (typeof nextStateForKey === 'undefined') {
	        var errorMessage = getUndefinedStateErrorMessage(key, action);
	        throw new Error(errorMessage);
	      }
	      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
	      return nextStateForKey;
	    });

	    if (process.env.NODE_ENV !== 'production') {
	      var warningMessage = getUnexpectedStateKeyWarningMessage(state, finalState, action);
	      if (warningMessage) {
	        console.error(warningMessage);
	      }
	    }

	    return hasChanged ? finalState : state;
	  };
	}

	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ },
/* 7 */
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
/* 8 */
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
/* 9 */
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
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = bindActionCreators;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _utilsMapValues = __webpack_require__(8);

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
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports['default'] = applyMiddleware;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _compose = __webpack_require__(12);

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
/* 12 */
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
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }

	var _componentsProvider = __webpack_require__(14);

	exports.Provider = _interopRequire(_componentsProvider);

	var _componentsConnect = __webpack_require__(16);

	exports.connect = _interopRequire(_componentsConnect);

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _utilsStoreShape = __webpack_require__(15);

	var _utilsStoreShape2 = _interopRequireDefault(_utilsStoreShape);

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

	    return _react.Children.only(children);
	  };

	  return Provider;
	})(_react.Component);

	exports['default'] = Provider;

	Provider.propTypes = {
	  store: _utilsStoreShape2['default'].isRequired,
	  children: _react.PropTypes.element.isRequired
	};
	Provider.childContextTypes = {
	  store: _utilsStoreShape2['default'].isRequired
	};
	module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(1);

	exports['default'] = _react.PropTypes.shape({
	  subscribe: _react.PropTypes.func.isRequired,
	  dispatch: _react.PropTypes.func.isRequired,
	  getState: _react.PropTypes.func.isRequired
	});
	module.exports = exports['default'];

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports['default'] = connect;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _utilsStoreShape = __webpack_require__(15);

	var _utilsStoreShape2 = _interopRequireDefault(_utilsStoreShape);

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

	function getDisplayName(WrappedComponent) {
	  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
	}

	// Helps track hot reloading.
	var nextVersion = 0;

	function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
	  var options = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

	  var shouldSubscribe = Boolean(mapStateToProps);
	  var finalMapStateToProps = mapStateToProps || defaultMapStateToProps;
	  var finalMapDispatchToProps = _utilsIsPlainObject2['default'](mapDispatchToProps) ? _utilsWrapActionCreators2['default'](mapDispatchToProps) : mapDispatchToProps || defaultMapDispatchToProps;
	  var finalMergeProps = mergeProps || defaultMergeProps;
	  var shouldUpdateStateProps = finalMapStateToProps.length > 1;
	  var shouldUpdateDispatchProps = finalMapDispatchToProps.length > 1;
	  var _options$pure = options.pure;
	  var pure = _options$pure === undefined ? true : _options$pure;
	  var _options$withRef = options.withRef;
	  var withRef = _options$withRef === undefined ? false : _options$withRef;

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
	        _invariant2['default'](withRef, 'To access the wrapped instance, you need to specify ' + '{ withRef: true } as the fourth argument of the connect() call.');

	        return this.refs.wrappedInstance;
	      };

	      Connect.prototype.render = function render() {
	        var ref = withRef ? 'wrappedInstance' : null;
	        return _react2['default'].createElement(WrappedComponent, _extends({}, this.nextState, { ref: ref }));
	      };

	      return Connect;
	    })(_react.Component);

	    Connect.displayName = 'Connect(' + getDisplayName(WrappedComponent) + ')';
	    Connect.WrappedComponent = WrappedComponent;
	    Connect.contextTypes = {
	      store: _utilsStoreShape2['default']
	    };
	    Connect.propTypes = {
	      store: _utilsStoreShape2['default']
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
	}

	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

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

	var _redux = __webpack_require__(3);

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
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};

	module.exports = invariant;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ActionTypes = __webpack_require__(23);

	var types = _interopRequireWildcard(_ActionTypes);

	var _modded = __webpack_require__(24);

	var _modded2 = _interopRequireDefault(_modded);

	var _moddedVisible = __webpack_require__(25);

	var _moddedVisible2 = _interopRequireDefault(_moddedVisible);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function reducer(state, action) {
	  return Object.assign({}, state, {
	    modded: (0, _modded2.default)(state.modded, action),
	    moddedVisible: (0, _moddedVisible2.default)(state.moddedVisible, action)
	  });
	}

	exports.default = reducer;

/***/ },
/* 23 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var SAVE_STORY = exports.SAVE_STORY = "SAVE_STORY";
	var UNSAVE_STORY = exports.UNSAVE_STORY = "UNSAVE_STORY";
	var HIDE_STORY = exports.HIDE_STORY = "HIDE_STORY";
	var UNHIDE_STORY = exports.UNHIDE_STORY = "UNHIDE_STORY";
	var BAN_DOMAIN = exports.BAN_DOMAIN = "BAN_DOMAIN";
	var UNBAN_DOMAIN = exports.UNBAN_DOMAIN = "UNBAN_DOMAIN";
	var SHOW_SAVED = exports.SHOW_SAVED = "SHOW_SAVED";
	var HIDE_SAVED = exports.HIDE_SAVED = "HIDE_SAVED";

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case types.SAVE_STORY:
	      var saved = state.saved;
	      saved[action.id] = {
	        url: action.url,
	        title: action.title
	      };
	      return Object.assign({}, state, {
	        saved: saved
	      });
	    case types.UNSAVE_STORY:
	      var saved = state.saved;
	      delete saved[action.id];
	      return Object.assign({}, state, {
	        saved: saved
	      });
	    case types.HIDE_STORY:
	      var hidden = state.hidden;
	      hidden[action.id] = {
	        url: action.url,
	        title: action.title,
	        when: new Date().getTime()
	      };
	      return Object.assign({}, state, {
	        hidden: hidden
	      });
	    case types.UNHIDE_STORY:
	      var hidden = state.hidden;
	      delete hidden[action.id];
	      return Object.assign({}, state, {
	        hidden: hidden
	      });
	    case types.BAN_DOMAIN:
	      var domains = state.domains;
	      domains[action.domain] = true;
	      return Object.assign({}, state, {
	        domains: domains
	      });
	    case types.UNBAN_DOMAIN:
	      var domains = state.domains;
	      delete domains[action.domain];
	      return Object.assign({}, state, {
	        domains: domains
	      });
	    default:
	      return state;
	  }
	};

	var _ActionTypes = __webpack_require__(23);

	var types = _interopRequireWildcard(_ActionTypes);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case types.SHOW_SAVED:
	      return true;
	    case types.HIDE_SAVED:
	      return false;
	    default:
	      return state;
	  }
	};

	var _ActionTypes = __webpack_require__(23);

	var types = _interopRequireWildcard(_ActionTypes);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _redux = __webpack_require__(3);

	var _reactRedux = __webpack_require__(13);

	var _actions = __webpack_require__(27);

	var Actions = _interopRequireWildcard(_actions);

	var _Header = __webpack_require__(28);

	var _Header2 = _interopRequireDefault(_Header);

	var _StoryPage = __webpack_require__(30);

	var _StoryPage2 = _interopRequireDefault(_StoryPage);

	var _CommentsPage = __webpack_require__(35);

	var _CommentsPage2 = _interopRequireDefault(_CommentsPage);

	var _Saved = __webpack_require__(37);

	var _Saved2 = _interopRequireDefault(_Saved);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var HackerNews = _react2.default.createClass({
	  displayName: "HackerNews",

	  render: function render() {
	    var _props = this.props;
	    var page = _props.page;
	    var type = _props.type;
	    var modded = _props.modded;
	    var moddedVisible = _props.moddedVisible;
	    var dispatch = _props.dispatch;

	    var loggedIn = page.user.name !== undefined;
	    var actions = (0, _redux.bindActionCreators)(Actions, dispatch);
	    var content = null;
	    switch (type) {
	      case "submission":
	        content = _react2.default.createElement(_StoryPage2.default, _extends({ loggedIn: loggedIn,
	          modded: modded,
	          saveStory: actions.saveStory,
	          unsaveStory: actions.unsaveStory,
	          hideStory: actions.hideStory,
	          banDomain: actions.banDomain
	        }, page));
	        break;
	      case "comments":
	        content = _react2.default.createElement(_CommentsPage2.default, _extends({ loggedIn: loggedIn,
	          modded: modded,
	          saveStory: actions.saveStory,
	          unsaveStory: actions.unsaveStory,
	          banDomain: actions.banDomain
	        }, page));
	    }
	    return _react2.default.createElement(
	      "div",
	      { className: "hacker-news" },
	      _react2.default.createElement(_Header2.default, { user: page.user,
	        show: actions.showSaved,
	        hide: actions.hideSaved,
	        moddedVisible: moddedVisible }),
	      _react2.default.createElement(
	        "div",
	        null,
	        _react2.default.createElement(_Saved2.default, { moddedVisible: moddedVisible,
	          hide: actions.hideSaved,
	          unsave: actions.unsaveStory,
	          unhide: actions.unhideStory,
	          unban: actions.unbanDomain,
	          modded: modded }),
	        content
	      )
	    );
	  },
	  componentDidMount: function componentDidMount() {
	    // hide the regular content
	    if (this.props.type === "submission" || this.props.type === "comments") {
	      document.querySelector("center").style.display = "none";
	    }
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    document.querySelector("center").style.display = "block";
	  }
	});

	function mapStateToProps(state) {
	  return {
	    page: state.page,
	    type: state.type,
	    moddedVisible: state.moddedVisible,
	    modded: state.modded
	  };
	}

	exports.default = (0, _reactRedux.connect)(mapStateToProps)(HackerNews);

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.hideSaved = exports.showSaved = exports.unbanDomain = exports.banDomain = exports.unhideStory = exports.hideStory = exports.unsaveStory = exports.saveStory = undefined;

	var _ActionTypes = __webpack_require__(23);

	var ActionTypes = _interopRequireWildcard(_ActionTypes);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	var saveStory = exports.saveStory = function saveStory(id, url, title) {
	  return {
	    type: ActionTypes.SAVE_STORY,
	    id: id,
	    url: url,
	    title: title
	  };
	};

	var unsaveStory = exports.unsaveStory = function unsaveStory(id) {
	  return {
	    type: ActionTypes.UNSAVE_STORY,
	    id: id
	  };
	};

	var hideStory = exports.hideStory = function hideStory(id, url, title) {
	  return {
	    type: ActionTypes.HIDE_STORY,
	    id: id,
	    url: url,
	    title: title
	  };
	};

	var unhideStory = exports.unhideStory = function unhideStory(id) {
	  return {
	    type: ActionTypes.UNHIDE_STORY,
	    id: id
	  };
	};

	var banDomain = exports.banDomain = function banDomain(domain) {
	  return {
	    type: ActionTypes.BAN_DOMAIN,
	    domain: domain
	  };
	};

	var unbanDomain = exports.unbanDomain = function unbanDomain(domain) {
	  return {
	    type: ActionTypes.UNBAN_DOMAIN,
	    domain: domain
	  };
	};

	/*
	 * show and hide the saved stories, hidden stories, and hidden domains
	 */
	var showSaved = exports.showSaved = function showSaved() {
	  return {
	    type: ActionTypes.SHOW_SAVED
	  };
	};

	var hideSaved = exports.hideSaved = function hideSaved() {
	  return {
	    type: ActionTypes.HIDE_SAVED
	  };
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _User = __webpack_require__(29);

	var _User2 = _interopRequireDefault(_User);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	  displayName: "Header",

	  render: function render() {
	    var _props = this.props;
	    var user = _props.user;
	    var show = _props.show;
	    var hide = _props.hide;
	    var moddedVisible = _props.moddedVisible;

	    return _react2.default.createElement(
	      "header",
	      null,
	      _react2.default.createElement(
	        "nav",
	        null,
	        _react2.default.createElement(
	          "li",
	          { className: "home" },
	          _react2.default.createElement(
	            "a",
	            { href: "/" },
	            "Hacker News"
	          )
	        ),
	        _react2.default.createElement(
	          "li",
	          null,
	          _react2.default.createElement(
	            "form",
	            { method: "get", action: "//hn.algolia.com" },
	            _react2.default.createElement("input", { type: "text", placeholder: "Search", name: "q" })
	          )
	        )
	      ),
	      _react2.default.createElement(_User2.default, _extends({ show: show,
	        hide: hide,
	        moddedVisible: moddedVisible
	      }, user)),
	      _react2.default.createElement(
	        "nav",
	        { className: "general" },
	        _react2.default.createElement(
	          "li",
	          null,
	          _react2.default.createElement(
	            "a",
	            { href: "/newest" },
	            "New"
	          )
	        ),
	        _react2.default.createElement(
	          "li",
	          null,
	          _react2.default.createElement(
	            "a",
	            { href: "/newcomments" },
	            "Comments"
	          )
	        ),
	        _react2.default.createElement(
	          "li",
	          null,
	          _react2.default.createElement(
	            "a",
	            { href: "/show" },
	            "Show"
	          )
	        ),
	        _react2.default.createElement(
	          "li",
	          null,
	          _react2.default.createElement(
	            "a",
	            { href: "/ask" },
	            "Ask"
	          )
	        ),
	        _react2.default.createElement(
	          "li",
	          null,
	          _react2.default.createElement(
	            "a",
	            { href: "/jobs" },
	            "Jobs"
	          )
	        )
	      ),
	      _react2.default.createElement(
	        "nav",
	        null,
	        _react2.default.createElement(
	          "li",
	          null,
	          _react2.default.createElement(
	            "a",
	            { href: "/newsguidelines.html" },
	            "Guidelines"
	          )
	        ),
	        _react2.default.createElement(
	          "li",
	          null,
	          _react2.default.createElement(
	            "a",
	            { href: "/newsfaq.html" },
	            "FAQ"
	          )
	        ),
	        _react2.default.createElement(
	          "li",
	          null,
	          _react2.default.createElement(
	            "a",
	            { href: "mailto:hn@ycombinator.com" },
	            "Support"
	          )
	        ),
	        _react2.default.createElement(
	          "li",
	          null,
	          _react2.default.createElement(
	            "a",
	            { href: "https://github.com/HackerNews/API" },
	            "API"
	          )
	        ),
	        _react2.default.createElement(
	          "li",
	          null,
	          _react2.default.createElement(
	            "a",
	            { href: "/security.html" },
	            "Security"
	          )
	        ),
	        _react2.default.createElement(
	          "li",
	          null,
	          _react2.default.createElement(
	            "a",
	            { href: "/lists" },
	            "Lists"
	          )
	        ),
	        _react2.default.createElement(
	          "li",
	          null,
	          _react2.default.createElement(
	            "a",
	            { href: "/bookmarklet.html" },
	            "Bookmarklet"
	          )
	        ),
	        _react2.default.createElement(
	          "li",
	          null,
	          _react2.default.createElement(
	            "a",
	            { href: "/dmca.html" },
	            "DMCA"
	          )
	        ),
	        _react2.default.createElement(
	          "li",
	          null,
	          _react2.default.createElement(
	            "a",
	            { href: "/apply" },
	            "Apply to YC"
	          )
	        ),
	        _react2.default.createElement(
	          "li",
	          null,
	          _react2.default.createElement(
	            "a",
	            { href: "mailto:hn@ycombinator.com" },
	            "Contact"
	          )
	        )
	      )
	    );
	  }
	});

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	  displayName: "User",

	  toggleModded: function toggleModded(event) {
	    event.preventDefault();
	    var _props = this.props;
	    var moddedVisible = _props.moddedVisible;
	    var show = _props.show;
	    var hide = _props.hide;

	    if (moddedVisible) {
	      hide();
	    } else {
	      show();
	    }
	  },
	  _loggedOut: function _loggedOut() {
	    var location = window.location;
	    var loginHref = "/login?goto=" + location.pathname + location.search;
	    return _react2.default.createElement(
	      "nav",
	      { className: "user logged-out" },
	      _react2.default.createElement(
	        "li",
	        null,
	        _react2.default.createElement(
	          "form",
	          { method: "post", action: "login" },
	          _react2.default.createElement(
	            "p",
	            null,
	            _react2.default.createElement(
	              "a",
	              { href: loginHref },
	              "Login"
	            )
	          ),
	          _react2.default.createElement("input", { type: "hidden", name: "goto", value: "/" }),
	          _react2.default.createElement(
	            "p",
	            null,
	            _react2.default.createElement("input", { type: "text", name: "acct", size: "20",
	              placeholder: "username",
	              autoCorrect: "off",
	              autoCapitalize: "off" })
	          ),
	          _react2.default.createElement(
	            "p",
	            null,
	            _react2.default.createElement("input", { type: "password", name: "pw", size: "20",
	              placeholder: "password" })
	          ),
	          _react2.default.createElement(
	            "p",
	            null,
	            _react2.default.createElement(
	              "button",
	              null,
	              "Login"
	            )
	          )
	        ),
	        _react2.default.createElement(
	          "form",
	          { method: "post", action: "login" },
	          _react2.default.createElement(
	            "p",
	            null,
	            _react2.default.createElement(
	              "a",
	              { href: loginHref },
	              "Create account"
	            )
	          ),
	          _react2.default.createElement("input", { type: "hidden", name: "goto", value: "/" }),
	          _react2.default.createElement("input", { type: "hidden", name: "creating", value: "t" }),
	          _react2.default.createElement(
	            "p",
	            null,
	            _react2.default.createElement("input", { type: "text", name: "acct", size: "20",
	              placeholder: "username",
	              autoCorrect: "off",
	              autoCapitalize: "off" })
	          ),
	          _react2.default.createElement(
	            "p",
	            null,
	            _react2.default.createElement("input", { type: "password", name: "pw", size: "20",
	              placeholder: "password" })
	          ),
	          _react2.default.createElement(
	            "p",
	            null,
	            _react2.default.createElement(
	              "button",
	              null,
	              "Create Account"
	            )
	          )
	        )
	      ),
	      _react2.default.createElement(
	        "li",
	        null,
	        _react2.default.createElement(
	          "a",
	          { href: "/forgot?id=" },
	          "Forgot Password?"
	        )
	      )
	    );
	  },
	  _loggedIn: function _loggedIn() {
	    var _props2 = this.props;
	    var name = _props2.name;
	    var url = _props2.url;
	    var points = _props2.points;

	    return _react2.default.createElement(
	      "nav",
	      { className: "user logged-in" },
	      _react2.default.createElement(
	        "li",
	        null,
	        _react2.default.createElement(
	          "a",
	          { href: "/user?id=" + name },
	          name
	        ),
	        " (",
	        points,
	        ")"
	      ),
	      _react2.default.createElement(
	        "li",
	        null,
	        _react2.default.createElement(
	          "a",
	          { href: "/submit" },
	          "Submit"
	        )
	      ),
	      _react2.default.createElement(
	        "li",
	        null,
	        _react2.default.createElement(
	          "a",
	          { href: "/threads?id=" + name },
	          "Threads"
	        )
	      ),
	      _react2.default.createElement(
	        "li",
	        null,
	        _react2.default.createElement(
	          "a",
	          { href: "#", onClick: this.toggleModded },
	          "Modded Stories"
	        )
	      ),
	      _react2.default.createElement(
	        "li",
	        null,
	        _react2.default.createElement(
	          "a",
	          { href: "/logout?goto=" + location.pathname + location.search },
	          "Logout"
	        )
	      )
	    );
	  },
	  render: function render() {
	    return this.props.name === undefined ? this._loggedOut() : this._loggedIn();
	  }
	});

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _SubStory = __webpack_require__(31);

	var _SubStory2 = _interopRequireDefault(_SubStory);

	var _chrome = __webpack_require__(34);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	  displayName: "StoryPage",

	  toggleSave: function toggleSave(id, url, title) {
	    var saved = this.props.modded.saved;
	    if (saved[id]) {
	      delete saved[id];
	      (0, _chrome.unsaveStory)(id);
	      this.props.unsaveStory(id);
	    } else {
	      saved[id] = url;
	      (0, _chrome.saveStory)(id, url, title);
	      this.props.saveStory(id, url, title);
	    }
	  },
	  hideStory: function hideStory(id, url, title) {
	    (0, _chrome.hideStory)(id, url, title);
	    this.props.hideStory(id, url, title);
	  },
	  banDomain: function banDomain(domain) {
	    (0, _chrome.banDomain)(domain);
	    this.props.banDomain(domain);
	  },
	  render: function render() {
	    var _this = this;

	    var _props = this.props;
	    var stories = _props.stories;
	    var loggedIn = _props.loggedIn;
	    var modded = _props.modded;
	    var saved = modded.saved;
	    var hidden = modded.hidden;
	    var domains = modded.domains;

	    var submissions = stories.map(function (s, i) {
	      if (hidden[s.id] || domains[s.domain]) {
	        return null;
	      }
	      return s.type === "sub" ? _react2.default.createElement(_SubStory2.default, _extends({ key: i,
	        saved: saved[s.id] !== undefined,
	        toggleSave: _this.toggleSave,
	        hideStory: _this.hideStory,
	        banDomain: _this.banDomain,
	        loggedIn: loggedIn
	      }, s)) : _react2.default.createElement(JobStory, _extends({ key: i,
	        saved: saved[s.id] === true
	      }, s));
	    });
	    return _react2.default.createElement(
	      "div",
	      { className: "story-page" },
	      submissions
	    );
	  }
	});

	var JobStory = _react2.default.createClass({
	  displayName: "JobStory",

	  render: function render() {
	    var _props2 = this.props;
	    var url = _props2.url;
	    var title = _props2.title;

	    return _react2.default.createElement(
	      "div",
	      { className: "story job" },
	      _react2.default.createElement(
	        "div",
	        { className: "voting" },
	        "(job)"
	      ),
	      _react2.default.createElement(
	        "div",
	        { className: "info" },
	        _react2.default.createElement(
	          "a",
	          { href: url, target: "_blank" },
	          title
	        )
	      )
	    );
	  }
	});

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Vote = __webpack_require__(32);

	var _Vote2 = _interopRequireDefault(_Vote);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SubStory = _react2.default.createClass({
	  displayName: "SubStory",

	  getInitialState: function getInitialState() {
	    return {
	      canVote: this.props.loggedIn || false
	    };
	  },
	  /*
	   * once a submission has been voted on, it cannot be changed
	   */
	  voted: function voted() {
	    this.setState({
	      canVote: false
	    });
	  },
	  saveStory: function saveStory() {
	    this.props.toggleSave(this.props.id, this.props.url, this.props.title);
	  },
	  hideStory: function hideStory() {
	    this.props.hideStory(this.props.id, this.props.url, this.props.title);
	  },
	  banDomain: function banDomain() {
	    this.props.banDomain(this.props.domain);
	  },
	  render: function render() {
	    var _props = this.props;
	    var url = _props.url;
	    var title = _props.title;
	    var id = _props.id;
	    var points = _props.points;
	    var comments = _props.comments;
	    var user = _props.user;
	    var votes = _props.votes;
	    var when = _props.when;
	    var domain = _props.domain;
	    var self = _props.self;
	    var saved = _props.saved;
	    var canVote = this.state.canVote;

	    var upVote = canVote && votes.up !== undefined ? _react2.default.createElement(_Vote2.default, { id: id, type: "up", url: votes.up, voted: this.voted }) : _react2.default.createElement("div", { className: "filler" });
	    var downVote = canVote && votes.down !== undefined ? _react2.default.createElement(_Vote2.default, { id: id, type: "down", url: votes.down, voted: this.voted }) : _react2.default.createElement("div", { className: "filler" });
	    var more = domain !== "" ? _react2.default.createElement(
	      "a",
	      { className: "more", href: "/from?site=" + domain },
	      domain
	    ) : null;
	    var selfText = self !== undefined ? _react2.default.createElement("div", { dangerouslySetInnerHTML: self }) : null;

	    return _react2.default.createElement(
	      "div",
	      { className: "story sub" },
	      _react2.default.createElement(
	        "div",
	        { className: "voting" },
	        upVote,
	        _react2.default.createElement(
	          "div",
	          { className: "points" },
	          points
	        ),
	        downVote
	      ),
	      _react2.default.createElement(
	        "div",
	        { className: "info" },
	        _react2.default.createElement(
	          "div",
	          null,
	          _react2.default.createElement(
	            "a",
	            { href: url, target: "_blank" },
	            title
	          ),
	          more
	        ),
	        _react2.default.createElement(
	          "div",
	          { className: "byline" },
	          _react2.default.createElement(
	            "a",
	            { href: comments.url, target: "_blank" },
	            comments.count,
	            " comments"
	          ),
	          " ",
	          "submitted by ",
	          _react2.default.createElement(
	            "a",
	            { href: user.url, target: "_blank" },
	            user.name
	          ),
	          " ",
	          when
	        ),
	        selfText
	      ),
	      _react2.default.createElement(
	        "div",
	        { className: "story-controls" },
	        _react2.default.createElement("i", { className: saved ? "fa fa-star" : "fa fa-star-o",
	          title: saved ? "unsave story" : "save story",
	          onClick: this.saveStory }),
	        _react2.default.createElement("i", { className: "fa fa-times",
	          title: "hide story",
	          onClick: this.hideStory }),
	        _react2.default.createElement("i", { className: "fa fa-ban",
	          title: "ban domain",
	          onClick: this.banDomain })
	      )
	    );
	  }
	});

	exports.default = SubStory;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _vote = __webpack_require__(33);

	var _vote2 = _interopRequireDefault(_vote);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	  displayName: "Vote",

	  voteHandler: function voteHandler(event) {
	    event.preventDefault();
	    (0, _vote2.default)(this.props.url);
	    this.props.voted();
	  },
	  render: function render() {
	    var _props = this.props;
	    var id = _props.id;
	    var type = _props.type;

	    var code = 9632;
	    if (type === "up") {
	      code = 9650;
	    } else if (type === "down") {
	      code = 9660;
	    }
	    return _react2.default.createElement(
	      "div",
	      { className: "vote",
	        onClick: this.voteHandler },
	      String.fromCharCode(code)
	    );
	  }
	});

/***/ },
/* 33 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/*
	 * vote
	 * ----
	 *
	 * the way that voting on hacker news works is that the href of the vote link
	 * that was clicked is set as the src of a new Image, thus "pinging" the server
	 * with the voting information encoded in the src. The auth query parameter
	 * is unique for each voting url, so this has can't be generated just by knowing
	 * the story's id
	 */

	exports.default = function (url) {
	  var pinger = new Image();
	  pinger.src = url;
	};

/***/ },
/* 34 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var getStorage = exports.getStorage = function getStorage(callback) {
	  chrome.storage.local.get(null, function (storage) {
	    callback(storage);
	  });
	};

	/*
	 * stories
	 */
	var saveStory = exports.saveStory = function saveStory(id, url, title) {
	  chrome.storage.local.get("saved", function (storage) {
	    var saved = storage.saved;
	    saved[id] = {
	      url: url,
	      title: title
	    };
	    chrome.storage.local.set({ "saved": saved });
	  });
	};

	var unsaveStory = exports.unsaveStory = function unsaveStory(id) {
	  chrome.storage.local.get("saved", function (storage) {
	    var saved = storage.saved;
	    delete saved[id];
	    chrome.storage.local.set({ "saved": saved });
	  });
	};

	var getSaved = exports.getSaved = function getSaved(callback) {
	  chrome.storage.local.get("saved", function (storage) {
	    callback(storage.saved);
	  });
	};

	/*
	 * domains
	 */
	var banDomain = exports.banDomain = function banDomain(domain) {
	  chrome.storage.local.get("domains", function (storage) {
	    var domains = storage.domains;
	    domains[domain] = true;
	    chrome.storage.local.set({ "domains": domains });
	  });
	};

	var unbanDomain = exports.unbanDomain = function unbanDomain(domain) {
	  chrome.storage.local.get("domains", function (storage) {
	    var domains = storage.domains;
	    delete domains[domain];
	    chrome.storage.local.set({ "domains": domains });
	  });
	};

	var getDomains = exports.getDomains = function getDomains(callback) {
	  chrome.storage.local.get("domains", function (storage) {
	    callback(storage.domains);
	  });
	};

	/*
	 * hidden
	 */
	var hideStory = exports.hideStory = function hideStory(id, url, title) {
	  chrome.storage.local.get("hidden", function (storage) {
	    var hidden = storage.hidden;
	    hidden[id] = {
	      url: url,
	      title: title,
	      when: new Date().getTime()
	    };
	    chrome.storage.local.set({ "hidden": hidden });
	  });
	};

	var unhideStory = exports.unhideStory = function unhideStory(id) {
	  chrome.storage.local.get("hidden", function (storage) {
	    var hidden = storage.hidden;
	    delete hidden[id];
	    chrome.storage.local.set({ "hidden": hidden });
	  });
	};

	var getHidden = exports.getHidden = function getHidden(callback) {
	  chrome.storage.local.get("hidden", function (storage) {
	    callback(storage.hidden);
	  });
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _SubStory = __webpack_require__(31);

	var _SubStory2 = _interopRequireDefault(_SubStory);

	var _Comment = __webpack_require__(36);

	var _Comment2 = _interopRequireDefault(_Comment);

	var _chrome = __webpack_require__(34);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	  displayName: "CommentsPage",

	  replyElement: function replyElement(form) {
	    return _react2.default.createElement(
	      "form",
	      { method: "post", action: form.action },
	      _react2.default.createElement("input", { type: "hidden", name: "parent", value: form.parent }),
	      _react2.default.createElement("input", { type: "hidden", name: "goto", value: form.goto }),
	      _react2.default.createElement("input", { type: "hidden", name: "hmac", value: form.hmac }),
	      _react2.default.createElement("textarea", { name: "text", rows: "6", cols: "60" }),
	      _react2.default.createElement(
	        "button",
	        null,
	        "Add Comment"
	      )
	    );
	  },
	  toggleSave: function toggleSave(id, url, title) {
	    var saved = this.props.modded.saved;
	    if (saved[id]) {
	      delete saved[id];
	      (0, _chrome.unsaveStory)(id);
	      this.props.unsaveStory(id);
	    } else {
	      saved[id] = url;
	      (0, _chrome.saveStory)(id, url, title);
	      this.props.saveStory(id, url, title);
	    }
	  },
	  hideStory: function hideStory(id, url, title) {
	    (0, _chrome.hideStory)(id, url, title);
	    this.props.hideStory(id, url, title);
	  },
	  banDomain: function banDomain(domain) {
	    (0, _chrome.banDomain)(domain);
	    this.props.banDomain(domain);
	  },
	  render: function render() {
	    var _props = this.props;
	    var type = _props.type;
	    var comments = _props.comments;
	    var replyForm = _props.replyForm;
	    var user = _props.user;
	    var loggedIn = _props.loggedIn;
	    var modded = _props.modded;
	    var saved = modded.saved;
	    var hidden = modded.hidden;
	    var domains = modded.domains;

	    var commElements = comments.map(function (c, i) {
	      return _react2.default.createElement(_Comment2.default, _extends({ key: i,
	        loggedIn: loggedIn
	      }, c));
	    });

	    var header = null;
	    switch (type) {
	      case "single":
	        header = _react2.default.createElement(_Comment2.default, _extends({ loggedIn: loggedIn
	        }, this.props.comment));
	        break;
	      case "all":
	        header = _react2.default.createElement(_SubStory2.default, _extends({ loggedIn: loggedIn,
	          saved: saved[this.props.story.id] !== undefined,
	          toggleSave: this.toggleSave,
	          hideStory: this.hideStory,
	          banDomain: this.banDomain
	        }, this.props.story));
	        break;
	    }

	    return _react2.default.createElement(
	      "div",
	      null,
	      _react2.default.createElement(
	        "div",
	        { className: "comments-main" },
	        header,
	        this.replyElement(replyForm)
	      ),
	      _react2.default.createElement(
	        "div",
	        { className: "comments" },
	        commElements
	      )
	    );
	  }
	});

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Vote = __webpack_require__(32);

	var _Vote2 = _interopRequireDefault(_Vote);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Comment = _react2.default.createClass({
	  displayName: "Comment",

	  getInitialState: function getInitialState() {
	    return {
	      canVote: this.props.loggedIn || false,
	      visible: true
	    };
	  },
	  voted: function voted() {
	    this.setState({
	      canVote: false
	    });
	  },
	  toggle: function toggle(event) {
	    event.preventDefault();
	    this.setState({
	      visible: !this.state.visible
	    });
	  },
	  render: function render() {
	    var _props = this.props;
	    var user = _props.user;
	    var votes = _props.votes;
	    var when = _props.when;
	    var message = _props.message;
	    var parent = _props.parent;
	    var children = _props.children;
	    var direct = _props.direct;
	    var reply = _props.reply;
	    var type = _props.type;
	    var id = _props.id;
	    var loggedIn = _props.loggedIn;
	    var canVote = this.state.canVote;

	    var childrenElements = children.map(function (c, i) {
	      return _react2.default.createElement(Comment, _extends({ key: i, loggedIn: loggedIn }, c));
	    });
	    if (type === "missing") {
	      return _react2.default.createElement(
	        "div",
	        { className: "comment" },
	        _react2.default.createElement(
	          "div",
	          null,
	          _react2.default.createElement(
	            "div",
	            { className: "message" },
	            _react2.default.createElement(
	              "p",
	              null,
	              "[comment no longer exists]"
	            )
	          ),
	          _react2.default.createElement(
	            "div",
	            { className: "children" },
	            childrenElements
	          )
	        )
	      );
	    }

	    var upVote = canVote && votes.up !== undefined ? _react2.default.createElement(_Vote2.default, { id: id, type: "up", url: votes.up, voted: this.voted }) : _react2.default.createElement("div", { className: "filler" });
	    var downVote = canVote && votes.down !== undefined ? _react2.default.createElement(_Vote2.default, { id: id, type: "down", url: votes.down, voted: this.voted }) : _react2.default.createElement("div", { className: "filler" });

	    var hidden = this.state.visible ? "" : "hidden";
	    var visText = this.state.visible ? "hide" : "show";

	    var userElement = _react2.default.createElement(
	      "a",
	      { href: user.url },
	      user.name
	    );
	    var directElement = _react2.default.createElement(
	      "a",
	      { href: "/item?id=" + id },
	      "direct"
	    );
	    var replyElement = _react2.default.createElement(
	      "a",
	      { href: reply },
	      "reply"
	    );
	    var parentElement = parent !== "" ? _react2.default.createElement(
	      "a",
	      { href: parent },
	      "parent"
	    ) : null;
	    return _react2.default.createElement(
	      "div",
	      { className: "comment" },
	      _react2.default.createElement(
	        "div",
	        { className: "votes" },
	        upVote,
	        downVote
	      ),
	      _react2.default.createElement(
	        "div",
	        null,
	        _react2.default.createElement(
	          "div",
	          { className: "user" },
	          userElement,
	          " ",
	          when,
	          " ",
	          directElement,
	          " ",
	          replyElement,
	          " ",
	          parentElement,
	          " ",
	          _react2.default.createElement(
	            "button",
	            { onClick: this.toggle },
	            visText
	          )
	        ),
	        _react2.default.createElement(
	          "div",
	          { className: hidden },
	          _react2.default.createElement("div", { className: "message", dangerouslySetInnerHTML: message }),
	          _react2.default.createElement(
	            "div",
	            { className: "children" },
	            childrenElements
	          )
	        )
	      )
	    );
	  }
	});

	exports.default = Comment;

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _chrome = __webpack_require__(34);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	  displayName: "Saved",

	  hideSaved: function hideSaved(event) {
	    event.preventDefault();
	    this.props.hide();
	  },
	  render: function render() {
	    var _this = this;

	    if (!this.props.moddedVisible) {
	      return null;
	    }
	    var _props$modded = this.props.modded;
	    var domains = _props$modded.domains;
	    var hidden = _props$modded.hidden;
	    var saved = _props$modded.saved;

	    var savedStories = Object.keys(saved).map(function (id, index) {
	      return _react2.default.createElement(SavedStory, _extends({ key: index,
	        id: id,
	        unsave: _this.props.unsave
	      }, saved[id]));
	    });

	    var hiddenStories = Object.keys(hidden).map(function (id, index) {
	      return _react2.default.createElement(HiddenStory, _extends({ key: index,
	        id: id,
	        unhide: _this.props.unhide
	      }, hidden[id]));
	    });

	    var bannedDomains = Object.keys(domains).map(function (id, index) {
	      return _react2.default.createElement(BannedDomain, { key: index,
	        domain: id,
	        unban: _this.props.unban });
	    });

	    return _react2.default.createElement(
	      "div",
	      { className: "saved-stories" },
	      _react2.default.createElement(
	        "section",
	        null,
	        _react2.default.createElement(
	          "h2",
	          null,
	          "Saved Stories"
	        ),
	        _react2.default.createElement(
	          "ul",
	          null,
	          savedStories
	        )
	      ),
	      _react2.default.createElement(
	        "section",
	        null,
	        _react2.default.createElement(
	          "h2",
	          null,
	          "Hidden Stories"
	        ),
	        _react2.default.createElement(
	          "p",
	          null,
	          "Hidden stories are removed after 48 hours since by then the story will be off the main page."
	        ),
	        _react2.default.createElement(
	          "ul",
	          null,
	          hiddenStories
	        )
	      ),
	      _react2.default.createElement(
	        "section",
	        null,
	        _react2.default.createElement(
	          "h2",
	          null,
	          "Banned Domains"
	        ),
	        _react2.default.createElement(
	          "p",
	          null,
	          "Stories from these domains won't be shown."
	        ),
	        _react2.default.createElement(
	          "ul",
	          null,
	          bannedDomains
	        )
	      ),
	      _react2.default.createElement(
	        "button",
	        { onClick: this.hideSaved },
	        "Hide"
	      )
	    );
	    /*
	    not yet implemented
	    */
	  }
	});

	var SavedStory = _react2.default.createClass({
	  displayName: "SavedStory",

	  unsaveStory: function unsaveStory(event) {
	    event.preventDefault();
	    (0, _chrome.unsaveStory)(this.props.id);
	    this.props.unsave(this.props.id);
	  },
	  render: function render() {
	    var _props = this.props;
	    var id = _props.id;
	    var url = _props.url;
	    var title = _props.title;

	    return _react2.default.createElement(
	      "li",
	      { className: "story" },
	      _react2.default.createElement("i", { className: "fa fa-star",
	        title: "unsave story",
	        onClick: this.unsaveStory }),
	      _react2.default.createElement(
	        "a",
	        { href: url },
	        title
	      ),
	      " ",
	      _react2.default.createElement(
	        "a",
	        { className: "comments", href: "https://news.ycombinator.com/item?id=" + id },
	        "comments"
	      )
	    );
	  }
	});

	var HiddenStory = _react2.default.createClass({
	  displayName: "HiddenStory",

	  unhideStory: function unhideStory(event) {
	    event.preventDefault();
	    (0, _chrome.unhideStory)(this.props.id);
	    this.props.unhide(this.props.id);
	  },
	  render: function render() {
	    var _props2 = this.props;
	    var id = _props2.id;
	    var url = _props2.url;
	    var title = _props2.title;

	    return _react2.default.createElement(
	      "li",
	      { className: "story" },
	      _react2.default.createElement("i", { className: "fa fa-times",
	        title: "unhide story",
	        onClick: this.unhideStory }),
	      _react2.default.createElement(
	        "a",
	        { href: url },
	        title
	      ),
	      " ",
	      _react2.default.createElement(
	        "a",
	        { className: "comments", href: "https://news.ycombinator.com/item?id=" + id },
	        "comments"
	      )
	    );
	  }
	});

	var BannedDomain = _react2.default.createClass({
	  displayName: "BannedDomain",

	  unbanDomain: function unbanDomain(event) {
	    event.preventDefault();
	    (0, _chrome.unbanDomain)(this.props.domain);
	    this.props.unban(this.props.domain);
	  },
	  render: function render() {
	    var domain = this.props.domain;

	    return _react2.default.createElement(
	      "li",
	      { className: "domain" },
	      _react2.default.createElement("i", { className: "fa fa-times",
	        title: "unban domain",
	        onClick: this.unbanDomain }),
	      " ",
	      domain
	    );
	  }
	});

/***/ },
/* 38 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  var location = window.location;
	  switch (location.pathname) {
	    case "/":
	    case "/news":
	    case "/jobs":
	    case "/ask":
	    case "/show":
	    case "/newest":
	    case "/from":
	      return "submission";
	    case "/item":
	      return "comments";
	    /*
	    case "/reply":
	      return "reply";
	    */
	    default:
	      return "no-op";
	  }
	};

	; /*
	   * return a string representing the type of page
	   *
	   * types:
	   * submission - a page filled with submissions
	   * comments - a page filled with comments
	   * no-op - a page where nothing should be done?
	   */

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _storyPage = __webpack_require__(40);

	Object.defineProperty(exports, "storyPage", {
	  enumerable: true,
	  get: function get() {
	    return _storyPage.default;
	  }
	});

	var _commentsPage = __webpack_require__(47);

	Object.defineProperty(exports, "commentsPage", {
	  enumerable: true,
	  get: function get() {
	    return _commentsPage.default;
	  }
	});

	var _replyPage = __webpack_require__(51);

	Object.defineProperty(exports, "replyPage", {
	  enumerable: true,
	  get: function get() {
	    return _replyPage.default;
	  }
	});

	var _noopPage = __webpack_require__(53);

	Object.defineProperty(exports, "noopPage", {
	  enumerable: true,
	  get: function get() {
	    return _noopPage.default;
	  }
	});

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _user = __webpack_require__(41);

	var _user2 = _interopRequireDefault(_user);

	var _stories = __webpack_require__(42);

	var _stories2 = _interopRequireDefault(_stories);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  return Object.assign({}, (0, _user2.default)(), (0, _stories2.default)());
	};

/***/ },
/* 41 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var user = function user() {
	  var pagetops = document.querySelectorAll(".pagetop");
	  if (!pagetops[1]) {
	    return {};
	  }
	  var holder = pagetops[1];
	  var links = holder.querySelectorAll("a");
	  if (links.length === 2) {
	    var userLink = links[0];
	    var pointsText = userLink.nextSibling.textContent.trim();
	    var pointsRegex = /\((.+)\)/;
	    var matches = pointsRegex.exec(pointsText);
	    // I don't actually know how points are displayed for 1000+, so just keep
	    // it as a string
	    var points = matches[1] !== undefined ? matches[1] : "0";
	    return {
	      user: {
	        name: userLink.textContent,
	        url: userLink.href,
	        points: points
	      }
	    };
	  } else {
	    return {
	      user: {}
	    };
	  }
	};

	exports.default = user;

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _story = __webpack_require__(43);

	var _story2 = _interopRequireDefault(_story);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*
	 * stories
	 * -------
	 *
	 * return an array of stories in the page
	 */
	var stories = function stories() {
	  return {
	    stories: Array.from(document.querySelectorAll("tr.athing")).map(function (thing) {
	      return (0, _story2.default)(thing);
	    })
	  };
	};

	exports.default = stories;

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _headline = __webpack_require__(44);

	var _headline2 = _interopRequireDefault(_headline);

	var _byline = __webpack_require__(46);

	var _byline2 = _interopRequireDefault(_byline);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var story = function story(element) {
	  return Object.assign({}, (0, _headline2.default)(element), (0, _byline2.default)(element.nextElementSibling));
	};

	exports.default = story;

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _votes = __webpack_require__(45);

	var _votes2 = _interopRequireDefault(_votes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*
	 * data from the headline of a submission
	 */
	var headlineData = function headlineData(headline) {
	  var tds = headline.querySelectorAll("td");
	  if (tds.length !== 3) {
	    console.error("unexpected tds for headline", headline, tds);
	    return {};
	  }
	  return Object.assign({}, (0, _votes2.default)(tds[1]), submissionData(tds[2]));
	};

	var submissionData = function submissionData(element) {
	  var sub = element.querySelector("a");
	  var domain = element.querySelector(".sitebit a");
	  // use the hostname of the link when there is no sitebit. For self-posts,
	  // this will set the domain to news.ycombinator.com, which doesn't actually
	  // show anything on the /from?site=news.ycombinator.com page
	  var domainText = domain === null ? sub.hostname : domain.textContent;
	  return {
	    title: sub.textContent,
	    url: sub.href,
	    domain: domainText
	  };
	};

	exports.default = headlineData;

/***/ },
/* 45 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var votingData = function votingData(element) {
	  return {
	    votes: Array.from(element.querySelectorAll("a")).reduce(function (obj, link) {
	      obj[link.id.split("_")[0]] = link.href;
	      return obj;
	    }, {})
	  };
	};

	exports.default = votingData;

/***/ },
/* 46 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/*
	 * data from the byline of a submission
	 */
	var bylineData = function bylineData(byline) {
	  var subtext = byline.querySelector(".subtext");
	  var score = subtext.querySelector(".score");
	  if (score === null) {
	    // a job post
	    return {
	      type: "job",
	      when: subtext.textContent.trim()
	    };
	  }

	  var links = subtext.querySelectorAll("a");
	  // the comments is the last link
	  var last = links[links.length - 1];
	  return Object.assign({}, { type: "sub" }, pointsData(score), userData(links[0]), whenData(links[1]), commentsData(last));
	};

	var pointsData = function pointsData(element) {
	  return {
	    points: parseInt(element.textContent.split(" ")[0], 10)
	  };
	};

	var userData = function userData(element) {
	  return {
	    user: {
	      name: element.textContent,
	      url: element.href
	    }
	  };
	};

	var whenData = function whenData(element) {
	  return {
	    when: element.textContent.trim()
	  };
	};

	/*
	 * this is broken on comments pages where the comments is actually links[4]
	 * but has not yet been fixed
	 */
	var commentsData = function commentsData(element) {
	  var text = element.textContent;
	  var commentCount = text === "discuss" ? 0 : parseInt(text.split(" ")[0], 10);
	  return {
	    id: element.href.split("=")[1],
	    comments: {
	      count: commentCount,
	      url: element.href
	    }
	  };
	};

	exports.default = bylineData;

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _user = __webpack_require__(41);

	var _user2 = _interopRequireDefault(_user);

	var _comments = __webpack_require__(48);

	var _comments2 = _interopRequireDefault(_comments);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  return Object.assign({}, (0, _user2.default)(), (0, _comments2.default)());
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _story = __webpack_require__(43);

	var _story2 = _interopRequireDefault(_story);

	var _comment = __webpack_require__(49);

	var _comment2 = _interopRequireDefault(_comment);

	var _commentForm = __webpack_require__(50);

	var _commentForm2 = _interopRequireDefault(_commentForm);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*
	 * comments
	 * --------
	 *
	 * There are two kinds of comments pages.
	 * 1.) all comments - this is headed by a submission and lists all of the
	 *     comments for a submission in a comment tree
	 * 2.) single comments - this is headed by a comment and list all of the child
	 *     comments in a comment tree
	 */
	var comments = function comments() {
	  var headline = document.querySelector(".athing");
	  var commentTree = document.querySelector(".comment-tree");
	  return Object.assign({}, header(headline), commentData(commentTree), replyForm(document.querySelector("form[method=post]")));
	};

	var header = function header(element) {
	  if (element.querySelector(".title") !== null) {
	    var storyData = (0, _story2.default)(element);
	    var parentElement = element.parentElement;
	    if (storyData.url.startsWith("https://news.ycombinator.com/item?id=") && parentElement.childElementCount === 6) {
	      // this is a self-post, so we want to get the post's text
	      var selfHolder = parentElement.children[3];
	      storyData.self = {
	        __html: selfHolder.innerHTML
	      };
	    }
	    return {
	      type: "all",
	      story: storyData
	    };
	  } else {
	    return {
	      type: "single",
	      comment: (0, _comment2.default)(element)
	    };
	  }
	};

	var replyForm = function replyForm(form) {
	  return {
	    replyForm: form !== null ? (0, _commentForm2.default)(form) : null
	  };
	};

	var commentData = function commentData(tree) {
	  if (tree === null) {
	    return {
	      comments: []
	    };
	  }
	  return {
	    comments: buildTree(Array.from(tree.querySelectorAll(".athing")).map(function (element) {
	      return (0, _comment2.default)(element);
	    }))
	  };
	};

	/*
	 * return an array of comments. Comments are nested based on their level, with the
	 * returned array consisting of root (level=0) comments, and any nested comments
	 * exisiting in the children array of their parent
	 */
	var buildTree = function buildTree(comments) {
	  var commentTree = [];
	  var levels = {};
	  comments.forEach(function (c) {
	    var level = c.level;
	    // set the comment at current level to current comment

	    levels[level] = c;
	    // special case for root (level=0) comments
	    if (level === 0) {
	      commentTree.push(c);
	    } else {
	      var parent = levels[level - 1];
	      if (parent === undefined) {
	        console.error("missing parent", level - 1, comments, levels);
	      }
	      parent.children.push(c);
	    }
	  });
	  return commentTree;
	};

	exports.default = comments;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _votes = __webpack_require__(45);

	var _votes2 = _interopRequireDefault(_votes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*
	 * comment
	 * -------
	 *
	 * return the data that represents a comment. There are two types of comments, regular
	 * ones, and missing comments. Missing comments contain no data.
	 */
	var comment = function comment(element) {
	  // comments aren't actually nested, instead they are indented with an image to
	  // show how they should be nested
	  var indentationHolder = element.querySelector(".ind");
	  var indentation = indentationHolder.querySelector("img");
	  var level = indentation === null ? 0 : parseInt(indentation.width, 10) / 40;
	  var commentHolder = element.querySelector(".comment > span");
	  // missing comment
	  if (commentHolder === null) {
	    return {
	      level: level,
	      type: "missing",
	      children: []
	    };
	  }
	  // instead of trying to break the comment down, just remove the reply
	  // link and return the html
	  var commClone = commentHolder.cloneNode(true);
	  var cloneReply = commClone.querySelector(".reply");
	  if (cloneReply !== null) {
	    commClone.removeChild(cloneReply);
	  }
	  var message = {
	    __html: commClone.innerHTML
	  };
	  var replyLink = element.querySelector(".reply a");
	  var reply = replyLink !== null ? replyLink.href : "";
	  return Object.assign({}, {
	    level: level,
	    type: "normal",
	    message: message,
	    reply: reply,
	    children: []
	  }, (0, _votes2.default)(element.querySelector(".votelinks")), headline(element.querySelector("td.default div")));
	};

	var headline = function headline(element) {
	  var links = element.querySelectorAll("a");
	  var parentHolder = element.querySelector(".par a");
	  var parent = parentHolder !== null ? parentHolder.href : "";
	  return {
	    user: {
	      name: links[0].textContent,
	      url: links[0].href
	    },
	    direct: links[1].href,
	    when: links[1].textContent,
	    id: links[1].href.split("=")[1],
	    parent: parent
	  };
	};

	exports.default = comment;

/***/ },
/* 50 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var commentForm = function commentForm(form) {
	  var parent = form.querySelector("input[name=parent]");
	  // goto gets highlighted using syntax highlighter, so using togo intead
	  var togo = form.querySelector("input[name=goto]");
	  var hmac = form.querySelector("input[name=hmac]");
	  return {
	    method: "post",
	    action: "comment",
	    parent: parent.value,
	    goto: togo.value,
	    hmac: hmac.value
	  };
	};

	exports.default = commentForm;

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _user = __webpack_require__(41);

	var _user2 = _interopRequireDefault(_user);

	var _reply = __webpack_require__(52);

	var _reply2 = _interopRequireDefault(_reply);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  return Object.assign({}, (0, _user2.default)(), (0, _reply2.default)());
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _comment = __webpack_require__(49);

	var _comment2 = _interopRequireDefault(_comment);

	var _commentForm = __webpack_require__(50);

	var _commentForm2 = _interopRequireDefault(_commentForm);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var reply = function reply() {
	  return {
	    comment: (0, _comment2.default)(document.querySelector(".athing")),
	    replyForm: (0, _commentForm2.default)(document.querySelector("form[method=post]"))
	  };
	};

	exports.default = reply;

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _user = __webpack_require__(41);

	var _user2 = _interopRequireDefault(_user);

	var _stories = __webpack_require__(42);

	var _stories2 = _interopRequireDefault(_stories);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  return Object.assign({}, (0, _user2.default)());
	};

/***/ }
/******/ ]);