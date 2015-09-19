(function () {
    'use strict';

    angular
        .module('a3.common.action', [])
        .run(run);

    function run(countHandler, reduxUtil) {
        // Developer must add reducers.
        var actionHandlers = {
            counter: countHandler
        };

        reduxUtil.registerActionHandler(actionHandlers);
    }
})();
