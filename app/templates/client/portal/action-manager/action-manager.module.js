(function (Redux) {
    'use strict';

    angular
        .module('<%= scriptAppName %>.action-manager', [])
        .run(run);

    function run(countReducer, reduxUtil) {
        // Developer must add reducers.
        var actionHandlers = {
            counter: countHandler
        };

        reduxUtil.registerActionHandler(actionHandlers);
    }
})(window.Redux);
