(function () {
    'use strict';

    angular
        .module('<%= scriptAppName %>.action-manager')
        .factory('countAction', countAction);

    /* @ngInject */
    function countAction(ActionType) {
        // action creator
        return {
            increment: increment,
            decrement: decrement,
            incrementIfOdd: incrementIfOdd,
            incrementAsync: incrementAsync
        };

        function increment() {
            return {
                type: ActionType.INCREMENT_COUNTER
            };
        }

        function decrement() {
            return {
                type: ActionType.DECREMENT_COUNTER
            };
        }

        function incrementIfOdd() {
            return function (dispatch, getState) {
                var counter = getState().counter;

                if (counter % 2 === 0) {
                    return;
                }

                dispatch(increment());
            };
        }

        function incrementAsync() {
            return function (dispatch) {
                setTimeout(function () {
                    dispatch(increment());
                }, 1000);
            };
        }
    }

})();
