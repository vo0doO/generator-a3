(function () {
    'use strict';

    angular
        .module('ngRedux')
        .service('reduxManager', reduxManager);

    /* @ngInject */
    function reduxManager($ngRedux, $injector) {
        this.getStore = getStore;
        this.connect = connect;
        this.registerStateHandler = registerStateHandler;
        var _store = undefined;

        function getStore() {
            if(!_store) {
                throw new SDKException('You must set store object, you take it that you call registerStateHandler();');
            }

            return _store;
        }

        function connect(action, mapStateScope, scope, that) {
            var unsubscribe = $ngRedux.util().connect(mapStateScope, action)(that);
            if (scope) {
                scope.$on('destroy', unsubscribe);
            }
            return unsubscribe;
        }

        function registerStateHandler(actionHandlers) {
            var reducers = Redux.combineReducers(actionHandlers);

            _store = _createStore(reducers);
            console.log('This is a redux redux store: ', _store);

            return _store;
        }

        function _createStore(reducers) {
            // not use middlewares, storeEnhancers
            // var middlewares = undefined;, storeEnhancers = undefined;
            return $ngRedux.createStoreWith(
                reducers, [_thunkMiddleware], [],
                $injector
            );
        }

        // This is thunk middleware. you can use returning function about action type
        // see: example/counter.action.js
        function _thunkMiddleware(_ref) {
            var dispatch = _ref.dispatch;
            var getState = _ref.getState;

            return function (next) {
                return function (action) {
                    return typeof action === 'function' ? action(dispatch, getState) : next(action);
                };
            };
        }
    }

})();
