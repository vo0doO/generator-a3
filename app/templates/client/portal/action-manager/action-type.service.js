(function () {
    'use strict';

    angular
        .module('<%= scriptAppName %>.action-manager')
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
