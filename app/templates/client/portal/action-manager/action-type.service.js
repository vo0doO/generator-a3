(function () {
    'use strict';

    angular
        .module('<%= scriptAppName %>.action-manager')
        .factory('ActionType', ActionType);

    /* @ngInject */
    function ActionType() {
        // action type
        return {
            INCREMENT_COUNTER: 'INCREMENT_COUNTER',
            DECREMENT_COUNTER: 'DECREMENT_COUNTER'
        };
    }

})();
