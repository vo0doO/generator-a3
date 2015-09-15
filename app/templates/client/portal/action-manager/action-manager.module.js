(function () {
    'use strict';

    angular
        .module('<%= scriptAppName %>.action-manager', [])
        .run(run);

    function run(countHandler, reduxUtil) {
        // Developer must add reducers.
        var actionHandlers = {
            counter: countHandler
        };

        reduxUtil.registerActionHandler(actionHandlers);
    }
})();
