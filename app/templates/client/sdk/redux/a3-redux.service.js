(function() {
    'use strict';

    angular
        .module('ngRedux')
        .service('reduxUtil', reduxUtil);

    /* @ngInject */
    function reduxUtil($ngRedux, $injector) {
        this.connect = connect;
        this.createStore = createStore;

        function connect(mapStateScope, action, that) {
            return $ngRedux.util($injector).connect(mapStateScope, action)(that);
        }

        function createStore(reducers) {
            $ngRedux.createStoreWith(
                reducers,
                [_thunkMiddleware],
                [] // dev-tools
            );
        }

        // Converstion Middleware for Redux
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
