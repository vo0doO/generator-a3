(function (Redux) {
    'use strict';

    angular
        .module('<%= scriptAppName %>.action-manager', [])
        .run(run);

    function run(countReducer, reduxUtil) {
        var stateReducer = Redux.combineReducers(
            {
                counter: countReducer
            }
        );

        reduxUtil.createStore(stateReducer);
    }
})(window.Redux);
