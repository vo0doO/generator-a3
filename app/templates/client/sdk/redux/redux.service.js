(function(Redux) {
    'use strict';

    angular
        .module('ngRedux')
        .service('reduxUtil', reduxUtil);

    /* @ngInject */
    function reduxUtil($ngRedux, $injector) {
        this.mappingActionToScope = mappingActionToScope;
        this.registerActionHandler = registerActionHandler;

        function mappingActionToScope(mapStateScope, action, that) {
            return $ngRedux.util($injector).connect(mapStateScope, action)(that);
        }

        function registerActionHandler(actionHandlers) {
            var reducers = Redux.combineReducers(actionHandlers);
            return _createStore(reducers);
        }

        function _createStore(reducers) {
            return $ngRedux.createStoreWith(
                reducers,
                [_thunkMiddleware],
                [] // dev-tools
            );
        }

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

})(window.Redux);
