(function () {
    'use strict';

    angular
        .module('<%= scriptAppName %>.action-manager')
        .factory('countHandler', countHandler);

    /* @ngInject */
    function countHandler(ActionType) {
        return function handler(state, action) {
            if (!state) {
                state = 0;
            }

            switch (action.type) {
            case ActionType.COUNTER_INCREMENT:
                return state + 1;
            case ActionType.COUNTER_DECREMENT:
                return state - 1;
            default:
                return state;
            }
        };
    }

})();
