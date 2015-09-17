(function () {
    'use strict';

    angular
        .module('<%= scriptAppName %>.action', [])
        .run(run);

    function run(countHandler, reduxUtil) {
        // Developer must add reducers.
        var actionHandlers = {
            counter: countHandler
        };

        reduxUtil.registerActionHandler(actionHandlers);
    }
})();
