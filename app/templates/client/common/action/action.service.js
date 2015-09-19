(function () {
    'use strict';

    angular
        .module('a3.common.action')
        .factory('ActionType', ActionType);

    /* @ngInject */
    function ActionType() {
        // action type
        return {
            COUNTER_INCREMENT: 'COUNTER_INCREMENT',
            COUNTER_DECREMENT: 'COUNTER_DECREMENT'
        };
    }

})();
