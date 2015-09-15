(function webpackUniversalModuleDefinition(root, factory) {
    if(typeof exports === 'object' && typeof module === 'object')
        module.exports = factory(require("Redux"), require("lodash"));
    else if(typeof define === 'function' && define.amd)
        define(["Redux", "lodash"], factory);
    else if(typeof exports === 'object')
        exports["a3Redux"] = factory(require("Redux"), require("lodash"));
    else
        root["a3Redux"] = factory(root["Redux"], root["lodash"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_8__) {
return /******/ (function(modules) { // webpackBootstrap
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

    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var _componentsNgRedux = __webpack_require__(1);

    var _componentsNgRedux2 = _interopRequireDefault(_componentsNgRedux);

    exports['default'] = angular.module('ngRedux', []).service('$ngRedux', _componentsNgRedux2['default']).name;
    module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });

    var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

    exports['default'] = ngRedux;

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

    var _connector = __webpack_require__(2);

    var _connector2 = _interopRequireDefault(_connector);

    var _invariant = __webpack_require__(6);

    var _invariant2 = _interopRequireDefault(_invariant);

    var _redux = __webpack_require__(5);

    var _digestMiddleware = __webpack_require__(9);

    var _digestMiddleware2 = _interopRequireDefault(_digestMiddleware);

    var _lodash = __webpack_require__(8);

    var _lodash2 = _interopRequireDefault(_lodash);

    function ngRedux() {
      var _reducer = undefined;
      var _middlewares = undefined;
      var _storeEnhancers = undefined;

      this.createStoreWith = function (reducer, middlewares, storeEnhancers) {
        (0, _invariant2['default'])(_lodash2['default'].isFunction(reducer), 'The reducer parameter passed to createStoreWith must be a Function. Instead received %s.', typeof reducer);

        (0, _invariant2['default'])(!storeEnhancers || _lodash2['default'].isArray(storeEnhancers), 'The storeEnhancers parameter passed to createStoreWith must be an Array. Instead received %s.', typeof storeEnhancers);

        _reducer = reducer;
        _storeEnhancers = storeEnhancers;
        _middlewares = middlewares || [];
      };

      this.util = function ($injector) {
        var store = undefined,
            resolvedMiddleware = [];

        _middlewares.forEach(function (middleware) {
          if (typeof middleware === 'string') {
            resolvedMiddleware.push($injector.get(middleware));
          } else {
            resolvedMiddleware.push(middleware);
          }
        });

        var finalCreateStore = _storeEnhancers ? _redux.compose.apply(undefined, _toConsumableArray(_storeEnhancers))(_redux.createStore) : _redux.createStore;

        //digestMiddleware needs to be the last one.
        resolvedMiddleware.push((0, _digestMiddleware2['default'])($injector.get('$rootScope')));

        store = _redux.applyMiddleware.apply(undefined, resolvedMiddleware)(finalCreateStore)(_reducer);

        return _extends({}, store, {
          connect: (0, _connector2['default'])(store)
        });
      };
    }

    module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    exports['default'] = Connector;

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var _utilsShallowEqual = __webpack_require__(3);

    var _utilsShallowEqual2 = _interopRequireDefault(_utilsShallowEqual);

    var _utilsWrapActionCreators = __webpack_require__(4);

    var _utilsWrapActionCreators2 = _interopRequireDefault(_utilsWrapActionCreators);

    var _invariant = __webpack_require__(6);

    var _invariant2 = _interopRequireDefault(_invariant);

    var _lodash = __webpack_require__(8);

    var _lodash2 = _interopRequireDefault(_lodash);

    var defaultMapStateToTarget = function defaultMapStateToTarget() {
      return {};
    };
    var defaultMapDispatchToTarget = function defaultMapDispatchToTarget(dispatch) {
      return { dispatch: dispatch };
    };

    function Connector(store) {
      return function (mapStateToTarget, mapDispatchToTarget) {

        var finalMapStateToTarget = mapStateToTarget || defaultMapStateToTarget;

        var finalMapDispatchToTarget = _lodash2['default'].isPlainObject(mapDispatchToTarget) ? (0, _utilsWrapActionCreators2['default'])(mapDispatchToTarget) : mapDispatchToTarget || defaultMapDispatchToTarget;

        (0, _invariant2['default'])(_lodash2['default'].isFunction(finalMapStateToTarget), 'mapStateToTarget must be a Function. Instead received $s.', finalMapStateToTarget);

        (0, _invariant2['default'])(_lodash2['default'].isPlainObject(finalMapDispatchToTarget) || _lodash2['default'].isFunction(finalMapDispatchToTarget), 'mapDispatchToTarget must be a plain Object or a Function. Instead received $s.', finalMapDispatchToTarget);

        var slice = getStateSlice(store.getState(), finalMapStateToTarget);

        var boundActionCreators = finalMapDispatchToTarget(store.dispatch);

        return function (target) {

          (0, _invariant2['default'])(_lodash2['default'].isFunction(target) || _lodash2['default'].isObject(target), 'The target parameter passed to connect must be a Function or a object.');

          //Initial update
          updateTarget(target, slice, boundActionCreators);

          var unsubscribe = store.subscribe(function () {
            var nextSlice = getStateSlice(store.getState(), finalMapStateToTarget);
            if (!(0, _utilsShallowEqual2['default'])(slice, nextSlice)) {
              slice = nextSlice;
              updateTarget(target, slice, boundActionCreators);
            }
          });
          return unsubscribe;
        };
      };
    }

    function updateTarget(target, StateSlice, dispatch) {
      if (_lodash2['default'].isFunction(target)) {
        target(StateSlice, dispatch);
      } else {
        _lodash2['default'].assign(target, StateSlice, dispatch);
      }
    }

    function getStateSlice(state, mapStateToScope) {
      var slice = mapStateToScope(state);

      (0, _invariant2['default'])(_lodash2['default'].isPlainObject(slice), '`mapStateToScope` must return an object. Instead received %s.', slice);

      return slice;
    }
    module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports) {

    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
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
/* 4 */
/***/ function(module, exports, __webpack_require__) {

    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    exports['default'] = wrapActionCreators;

    var _redux = __webpack_require__(5);

    function wrapActionCreators(actionCreators) {
      return function (dispatch) {
        return (0, _redux.bindActionCreators)(actionCreators, dispatch);
      };
    }

    module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports) {

    module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ },
/* 6 */
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

    module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ },
/* 9 */
/***/ function(module, exports) {

    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = digestMiddleware;

    function digestMiddleware($rootScope) {
      return function (store) {
        return function (next) {
          return function (action) {
            if (!$rootScope.$$phase) {
              $rootScope.$apply(next(action));
            } else {
              next(action);
            }
          };
        };
      };
    }

    module.exports = exports["default"];

/***/ }
/******/ ])
});
;
